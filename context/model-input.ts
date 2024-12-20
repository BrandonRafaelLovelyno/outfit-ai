import { Result } from "@/components/section/demo/model-input/image-viewer/result";
import { Size } from "@/helper/model-input/preprocessing";
import { createContext } from "react";

export interface Context {
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

export default ModelInputContext
