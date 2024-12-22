import { IMAGE_RESOLUTION } from "@/constant/model-input";
import { getImageUrl, getRescaledSize, cleanImage } from "@/helper/model-input/preprocessing";
import { DragEvent, useRef, useState } from "react";

interface Props {
  setRescaledSize: (size: { width: number, height: number }) => void
  setRatio: (ratio: number) => void
  setImageUrl: (image: string) => void
}

export default function useImageInput({ setImageUrl, setRescaledSize, setRatio }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDrag, setIsDrag] = useState(false);

  const clickInput = () => {
    inputRef.current?.click();
  }

  const setImageStates = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = await cleanImage(e, IMAGE_RESOLUTION.desktop.height, 1);

    const imageUrl = getImageUrl(file);
    setImageUrl(imageUrl);

    const targetHeight = IMAGE_RESOLUTION.desktop.height
    const rescaledSize = await getRescaledSize(imageUrl, targetHeight, 1);
    setRescaledSize(rescaledSize.size);
    setRatio(rescaledSize.ratio);
  };

  const triggerIsDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter") {
      setIsDrag(true);
    } else {
      setIsDrag(false);
    }
  }


  return { clickInput, setImageStates, triggerIsDrag, inputRef, isDrag }
}
