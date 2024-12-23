import { Result } from "@/components/section/demo/model-input/image-viewer/result";
import axios from "axios";

interface Data {
  boxes: number[][];
  labels: number[];
  scores: number[];
}

const convertBlobToFile = (blob: Blob) => {
  const mimeType = blob.type;
  const extension = mimeType.split("/")[1];
  const fileName = `image.${extension}`;

  const file = new File([blob], fileName, { type: 'application/octet-stream' });

  return file;
}

const fetchBlob = async (imageUrl: string) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  return blob;
}

const getImageFile = async (imageUrl: string) => {
  const blob = await fetchBlob(imageUrl);
  const file = convertBlobToFile(blob);

  return file
}

export const getBackendUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!envUrl) throw new Error("Backend URL is not set in the environment variable.");

  return envUrl
}

const convertToResult = (data: Data): Result[] => {
  const result = data.boxes.map((box, index) => ({
    bbox: box,
    label: data.labels[index],
    confidence: data.scores[index]
  }));

  return result;
}

const callServer = async (formData: FormData) => {
  try {
    const backendUrl = getBackendUrl();
    const response = await axios.post(`${backendUrl}/predict`, formData)

    return response.data
  } catch (err) {
    throw new Error("Failed to contact server")
  }
}

export const submitToServer = async (imageUrl: string): Promise<Result[]> => {
  const file = await getImageFile(imageUrl);

  const formData = new FormData();
  formData.append("file", file);

  const data = await callServer(formData);

  const result = convertToResult(data);

  return result
}

export const cleanResults = (results: Result[]): Result[] => {
  const cleanedResults = results.map(result => ({ ...result, label: result.label - 1 }));

  return cleanedResults
}
