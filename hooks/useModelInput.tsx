import { fetchToBlob } from "@/helper/integration";
import { callServer } from "@/helper/model-input/integration";
import { Size } from "@/helper/model-input/preprocessing";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function useModelInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [rescaledSize, setRescaledSize] = useState<Size | null>(null);
  const [uploading, setUploading] = useState(false);

  const clearImage = () => { setImageUrl(null); setRescaledSize(null) };

  const processImage = async () => {
    if (!imageUrl) throw new Error("No Image to process");

    const data = await callServer(imageUrl!);
    console.log(data);
  };

  return {
    imageUrl,
    setImageUrl,
    clearImage,
    uploading,
    processImage,
    rescaledSize,
    setRescaledSize
  };
}
