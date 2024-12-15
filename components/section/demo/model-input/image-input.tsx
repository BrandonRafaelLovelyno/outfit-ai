import { twMerge } from "tailwind-merge";
import { FaImage } from "react-icons/fa";
import useImageInput from "@/hooks/useImageInput";
import { Size } from "@/helper/model-input";

interface Props {
  setImageUrl: (image: string) => void
  setRescaledSize: (size: Size) => void
}

export default function ImageInput({ setImageUrl, setRescaledSize }: Props) {
  const { triggerIsDrag, clickInput, handleFileChange, inputRef, isDrag } = useImageInput({ setImageUrl, setRescaledSize })


  return <div className={twMerge("w-full h-full", "flex flex-col justify-center items-center gap-y-6",
    "bg-[#6EACDA] bg-opacity-10", "border-2 border-secondary", "rounded-xl", "cursor-pointer")}
    onDragEnter={triggerIsDrag} onDragLeave={triggerIsDrag} onDragOver={triggerIsDrag}
    onClick={clickInput}>

    <input type="file" className="hidden" ref={inputRef} onChange={handleFileChange} />

    <FaImage size={100} />
    <div className={twMerge("flex flex-col gap-y-1 items-center")} >
      <p className={twMerge("font-bold text-lg")}>Drop your image here</p>
      <p className={twMerge("text-sm font-medium")}>or click to browse</p>
    </div>

  </div>
}



