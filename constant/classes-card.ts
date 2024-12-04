import { ClothClass } from "./bounding-box";

interface ClassCardColor {
  icon: string;
  background: string;
}
export const CLASS_CARD_COLOR: { [key in ClothClass]: ClassCardColor } = {
  "Short Sleeve Top": {
    icon: "#6EACDA",
    background: "rgba(3, 52, 110, 0.3)",
  },
  "Long Sleeve Top": {
    icon: "#6EACDA",
    background: "rgba(3, 52, 110, 0.3)",
  },
  "Short Sleeve Outwear": {
    icon: "#629584",
    background: "rgba(56, 116, 120, 0.3)",
  },
  "Long Sleeve Outwear": {
    icon: "#629584",
    background: "rgba(56, 116, 120, 0.3)",
  },
  Vest: {
    icon: "#F2F4F7",
    background: "rgba(242, 244, 247, 0.3)",
  },
  Sling: {
    icon: "#F2F4F7",
    background: "rgba(242, 244, 247, 0.3)",
  },
  "Sling Dress": {
    icon: "#FFB38E",
    background: "rgba(255, 179, 142, 0.3)",
  },
  "Vest Dress": {
    icon: "#FFB38E",
    background: "rgba(255, 179, 142, 0.3)",
  },
  "Long Sleeve Dress": {
    icon: "#FFB38E",
    background: "rgba(255, 179, 142, 0.3)",
  },
  "Short Sleeve Dress": {
    icon: "#FFB38E",
    background: "rgba(255, 179, 142, 0.3)",
  },
  Trouser: {
    icon: "#EBD3F8",
    background: "rgba(122, 28, 172, 0.3)",
  },
  Shorts: {
    icon: "#EBD3F8",
    background: "rgba(122, 28, 172, 0.3)",
  },
  Skirt: {
    icon: "#EBD3F8",
    background: "rgba(122, 28, 172, 0.3)",
  },
};

