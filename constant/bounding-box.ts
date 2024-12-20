export const CLOTH_CLASSES: ClothClass[] = ["Short Sleeve Top", "Long Sleeve Top", "Short Sleeve Outwear", "Long Sleeve Outwear", "Vest", "Sling", "Shorts", "Trouser", "Skirt", "Short Sleeve Dress", "Long Sleeve Dress", "Vest Dress", "Sling Dress",]
export type ClothClass =
  | "Short Sleeve Top"
  | "Long Sleeve Top"
  | "Short Sleeve Outwear"
  | "Long Sleeve Outwear"
  | "Vest"
  | "Sling"
  | "Sling Dress"
  | "Vest Dress"
  | "Long Sleeve Dress"
  | "Short Sleeve Dress"
  | "Trouser"
  | "Shorts"
  | "Skirt";

interface BoundingBoxBackground {
  headingBg: string;
  mainBg: string;
  border: string;
}

export const BOUNDING_BOX_COLOR: { [key in ClothClass]: BoundingBoxBackground } = {
  "Short Sleeve Top": {
    headingBg: "#03346E",
    mainBg: "rgba(110, 172, 218, 0.3)",
    border: "#03346E",
  },
  "Long Sleeve Top": {
    headingBg: "#03346E",
    mainBg: "rgba(110, 172, 218, 0.3)",
    border: "#03346E",
  },
  "Short Sleeve Outwear": {
    headingBg: "#387478",
    mainBg: "rgba(98, 149, 132, 0.3)",
    border: "#387478"
  },
  "Long Sleeve Outwear": {
    headingBg: "#387478",
    mainBg: "rgba(98, 149, 132, 0.3)",
    border: "#387478"
  },
  Vest: {
    headingBg: "rgba(242, 244, 247, 0.2)",
    mainBg: "rgba(242, 244, 247, 0.4)",
    border: "#F2F4F7"
  },
  Sling: {
    headingBg: "rgba(242, 244, 247, 0.2)",
    mainBg: "rgba(242, 244, 247, 0.4)",
    border: "#F2F4F7"
  },
  "Sling Dress": {
    headingBg: "#FFB26F",
    mainBg: "rgba(255, 179, 142, 0.3)",
    border: "#FFB26F"
  },
  "Vest Dress": {
    headingBg: "#FFB26F",
    mainBg: "rgba(255, 179, 142, 0.3)",
    border: "#FFB26F"
  },
  "Long Sleeve Dress": {
    headingBg: "#FFB26F",
    mainBg: "rgba(255, 179, 142, 0.3)",
    border: "#FFB26F"
  },
  "Short Sleeve Dress": {
    headingBg: "#FFB26F",
    mainBg: "rgba(255, 179, 142, 0.3)",
    border: "#FFB26F"
  },
  Trouser: {
    headingBg: "#7A1CAC",
    mainBg: "rgba(173, 73, 225, 0.3)",
    border: "#7A1CAC"
  },
  Shorts: {
    headingBg: "#7A1CAC",
    mainBg: "rgba(173, 73, 225, 0.3)",
    border: "#7A1CAC"
  },
  Skirt: {
    headingBg: "#7A1CAC",
    mainBg: "rgba(173, 73, 225, 0.3)",
    border: "#7A1CAC"
  },
};
