import { DragEvent, useRef, useState } from "react";

interface Props {
  setImageUrl: (image: string) => void
}

export default function useImageInput({ setImageUrl }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDrag, setIsDrag] = useState(false);

  const clickInput = () => {
    inputRef.current?.click();
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
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
