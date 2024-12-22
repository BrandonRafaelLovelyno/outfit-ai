import { ClothClass } from "@/constant/bounding-box";
import { CLASS_CARD_COLOR } from "@/constant/classes-card";
import { Si1001Tracklists } from "react-icons/si";

const getImageFileName = (clothClass: ClothClass) => {
  const fileName = clothClass.replace(/ /g, "-").toLowerCase();
  return fileName;
}

const getCNs = (clothClass: ClothClass) => {
  const bgColor = CLASS_CARD_COLOR[clothClass].background
  const iconColor = CLASS_CARD_COLOR[clothClass].icon

  return {
    bgColor,
    iconColor
  }
}

const convertConfidence = (confidence: number | undefined) => {
  if (!confidence) return undefined

  const displayedConfidence = `${Math.round(confidence * 100)}%`

  return displayedConfidence
}

export const getCardProps = (clothClass: ClothClass, confidence: number | undefined) => {
  const imageDir = `/classes/${getImageFileName(clothClass)}.svg`;
  const { bgColor, iconColor } = getCNs(clothClass)
  const displayedConfidence = convertConfidence(confidence)

  return {
    imageDir,
    bgColor,
    iconColor,
    displayedConfidence
  }
}
