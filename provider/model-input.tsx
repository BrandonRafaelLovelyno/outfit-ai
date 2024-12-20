"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Result } from "@/components/section/demo/model-input/image-viewer/result";
import { callServer } from "@/helper/model-input/integration";
import { Size } from "@/helper/model-input/preprocessing";

interface Context {
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
  clearImage: () => void;
  uploading: boolean;
  setUploading: (uploading: boolean) => void;
  processImage: () => Promise<void>;
  rescaledSize: Size | null;
  setRescaledSize: (size: Size | null) => void;
  ratio: number | undefined;
  setRatio: (ratio: number | undefined) => void;
  results: Result[] | undefined;
  setResults: (results: Result[] | undefined) => void;
}

const ModelInputContext = createContext<Context | undefined>(undefined);

export const ModelInputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [ratio, setRatio] = useState<number | undefined>(undefined);
  const [rescaledSize, setRescaledSize] = useState<Size | null>(null);
  const [results, setResults] = useState<Result[] | undefined>(undefined);
  const [uploading, setUploading] = useState(false);

  const clearImage = () => {
    setImageUrl(null);
    setRescaledSize(null);
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

export const useModelInput = (): Context => {
  const context = useContext(ModelInputContext);
  if (!context) {
    throw new Error("useModelInput must be used within a ModelInputProvider");
  }
  return context;
};
