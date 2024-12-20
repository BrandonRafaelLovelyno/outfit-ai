import { twMerge } from "tailwind-merge";
import { FaImage } from "react-icons/fa";
import useImageInput from "@/hooks/useImageInput";
import { tryToExecute } from "@/helper/integration";
import { useModelInput } from "@/hooks/useModelInput";

export default function ImageInput() {
  const { setImageUrl, setRescaledSize, setRatio } = useModelInput();
  const { triggerIsDrag, clickInput, setImageStates, inputRef } = useImageInput({ setImageUrl, setRescaledSize, setRatio });

  const onChange = tryToExecute(setImageStates)

  return <div className={twMerge("w-full h-full", "flex flex-col justify-center items-center gap-y-6",
    "bg-[#6EACDA] bg-opacity-10", "border-2 border-secondary", "rounded-xl", "cursor-pointer")}
    onDragEnter={triggerIsDrag} onDragLeave={triggerIsDrag} onDragOver={triggerIsDrag}
    onClick={clickInput}>

    <input type="file" className="hidden" ref={inputRef} onChange={onChange} />

    <FaImage size={100} />
    <div className={twMerge("flex flex-col gap-y-1 items-center")} >
      <p className={twMerge("font-bold text-lg")}>Drop your image here</p>
      <p className={twMerge("text-sm font-medium")}>or click to browse</p>
    </div>

  </div>
}



