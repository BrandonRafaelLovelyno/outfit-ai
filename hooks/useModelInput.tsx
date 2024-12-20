import { Result } from "@/components/section/demo/model-input/image-viewer/result";
import { callServer } from "@/helper/model-input/integration";
import { Size } from "@/helper/model-input/preprocessing";
import { useState } from "react";

export default function useModelInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [ratio, setRatio] = useState<number | undefined>(undefined);
  const [rescaledSize, setRescaledSize] = useState<Size | null>(null);
  const [results, setResults] = useState<Result[] | undefined>(undefined);

  const [uploading, setUploading] = useState(false);

  const clearImage = () => { setImageUrl(null); setRescaledSize(null) };

  const processImage = async () => {
    if (!imageUrl) throw new Error("No Image to process");

    const results: Result[] = await callServer(imageUrl);
    setResults(results);
  };

  return {
    imageUrl,
    setImageUrl,
    clearImage,
    uploading,
    processImage,
    rescaledSize,
    setRescaledSize,
    ratio,
    setRatio,
    results,
    setResults
  };
}
