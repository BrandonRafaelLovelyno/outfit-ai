import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const fetchToBlob = async (imageUrl: string) => {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch the image.");
  }

  const blob = await response.blob();

  return blob;
}

export const getErrorMessage = (err: any) => {
  let message;

  if (err instanceof AxiosError && err.response?.data.message) {
    message = err.response.data.message
  } else {
    message = err.message;
  }

  return message;
}

const handleError = (err: any) => {
  console.error(err);

  const message = getErrorMessage(err);

  toast.error(message);
}

export const tryToExecute = async (func: () => Promise<void>, setUploading: (uploading: boolean) => void) => {
  try {
    setUploading(true);
    await func();
  } catch (err) {
    handleError(err);
  } finally {
    setUploading(false);
  }
}
