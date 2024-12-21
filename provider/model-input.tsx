"use client"

import React, { useState, ReactNode } from "react";
import { Result } from "@/components/section/demo/model-input/image-viewer/result";
import { callServer } from "@/helper/model-input/integration";
import { Size } from "@/helper/model-input/preprocessing";
import ModelInputContext from "@/context/model-input";

export const ModelInputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [ratio, setRatio] = useState<number | undefined>(undefined);
  const [rescaledSize, setRescaledSize] = useState<Size | null>(null);
  const [results, setResults] = useState<Result[] | undefined>(undefined);
  const [uploading, setUploading] = useState(false);

  const clearImage = () => {
    setImageUrl(null);
    setRescaledSize(null);
    setRatio(undefined);
    setResults(undefined);
  };

  const processImage = async () => {
    if (!imageUrl) throw new Error("No Image to process");

    const results: Result[] = await callServer(imageUrl);
    setResults(results);
  };

  return (
    <ModelInputContext.Provider
      value={{
        imageUrl,
        setImageUrl,
        clearImage,
        uploading,
        setUploading,
        processImage,
        rescaledSize,
        setRescaledSize,
        ratio,
        setRatio,
        results,
        setResults,
      }}
    >
      {children}
    </ModelInputContext.Provider>
  );
};
