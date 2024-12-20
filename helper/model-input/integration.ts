import axios from "axios";

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

export const callServer = async (imageUrl: string) => {
  const file = await getImageFile(imageUrl);

  const formData = new FormData();
  formData.append("file", file);

  const backendUrl = getBackendUrl();
  const response = await axios.post(`${backendUrl}/predict`, formData)

  return response.data;
}
