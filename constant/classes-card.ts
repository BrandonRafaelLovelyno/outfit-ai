import { ClothClass } from "./bounding-box";

interface ClassCardColor {
  icon: string;
  background: string;
}

export const CLASS_CARD_COLOR: { [key in ClothClass]: ClassCardColor } = {
  "Short Sleeve Top": {
    icon: "#6EACDA",
    background: "#03346E",
  },
  "Long Sleeve Top": {
    icon: "#6EACDA",
    background: "#03346E",
  },
  "Short Sleeve Outwear": {
    icon: "#629584",
    background: "#387478",
  },
  "Long Sleeve Outwear": {
    icon: "#629584",
    background: "#387478",
  },
  Vest: {
    icon: "#F2F4F7",
    background: "#F2F4F7",
  },
  Sling: {
    icon: "#F2F4F7",
    background: "#F2F4F7",
  },
  "Sling Dress": {
    icon: "#FFB38E",
    background: "#FFB38E"
  },
  "Vest Dress": {

    icon: "#FFB38E",
    background: "#FFB38E"
  },
  "Long Sleeve Dress": {
    icon: "#FFB38E",
    background: "#FFB38E"
  },
  "Short Sleeve Dress": {

    icon: "#FFB38E",
    background: "#FFB38E"
  },
  Trouser: {
    icon: "#EBD3F8",
    background: "#7A1CAC",
  },
  Shorts: {
    icon: "#EBD3F8",
    background: "#7A1CAC",
  },
  Skirt: {
    icon: "#EBD3F8",
    background: "#7A1CAC",
  },
};
