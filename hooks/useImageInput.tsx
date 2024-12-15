import { IMAGE_RESOLUTION } from "@/constant/model-input";
import { getImageUrl, getRescaledSize } from "@/helper/model-input";
import { DragEvent, useRef, useState } from "react";

interface Props {
  setRescaledSize: (size: { width: number, height: number }) => void
  setImageUrl: (image: string) => void
}

export default function useImageInput({ setImageUrl, setRescaledSize }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDrag, setIsDrag] = useState(false);

  const clickInput = () => {
    inputRef.current?.click();
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];

    const imageUrl = getImageUrl(file);
    setImageUrl(imageUrl);

    const targetHeight = IMAGE_RESOLUTION.desktop.height
    const rescaledSize = await getRescaledSize(imageUrl, targetHeight, 1);
    console.log("rescaledSize", rescaledSize);
    setRescaledSize(rescaledSize);
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


  return { clickInput, handleFileChange, triggerIsDrag, inputRef, isDrag }
}
