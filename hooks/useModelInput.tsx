import { fetchToBlob } from "@/helper/integration";
import { Size } from "@/helper/model-input";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function useModelInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [rescaledSize, setRescaledSize] = useState<Size | null>(null);
  const [uploading, setUploading] = useState(false);

  const clearImage = () => { setImageUrl(null); setRescaledSize(null) };

  const submitImage = async () => {
    if (!imageUrl) throw new Error("No image to upload.");

    const blob = await fetchToBlob(imageUrl);

    const formData = new FormData();
    formData.append("image", blob);

    const response = await axios.post("https://your-server-url/upload", formData)

    toast.success(response.data.message);
  };

  return {
    imageUrl,
    setImageUrl,
    clearImage,
    uploading,
    submitImage,
    rescaledSize,
    setRescaledSize
  };
}
