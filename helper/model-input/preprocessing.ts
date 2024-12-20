import { IMAGE_RESOLUTION } from "@/constant/model-input";

export interface Size {
  width: number;
  height: number;
}

const getImageSize = (imageUrl: string): Promise<Size> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
    }
    img.onerror = (e) => {
      reject(e);
    }
  });
}

const getSizeInScreen = (deviceSize: Size, DPR: number) => {
  const width = deviceSize.width * DPR;
  const height = deviceSize.height * DPR;

  return {
    width,
    height,
  };
}

export const cleanImage = async (e: React.ChangeEvent<HTMLInputElement>, targetHeight: number, DPR: number) => {

  if (!e.target.files || !e.target.files[0]) throw new Error("No image selected;");
  const file = e.target.files[0];

  validateImageSize(file, targetHeight, DPR);
  validateImageExtension(file);

  return file;
}

const validateImageExtension = (file: File) => {
  if (!file.type.includes("image")) {
    throw new Error("The file is not an image.");
  }
}

const validateImageSize = async (file: File, targetHeight: number, DPR: number) => {
  const imageUrl = getImageUrl(file);
  const rescaledSize = await getRescaledSize(imageUrl, targetHeight, DPR);

  const isTooSmall = rescaledSize.size.width < IMAGE_RESOLUTION.desktop.width.min;
  const isTooLarge = rescaledSize.size.width > IMAGE_RESOLUTION.desktop.width.max;

  if (isTooSmall) {
    throw new Error("The image is too small.");
  } else if (isTooLarge) {
    throw new Error("The image is too large.");
  }
}


export const getImageUrl = (file: File) => {
  return URL.createObjectURL(file);
}

export const getRescaledSize = async (imageUrl: string, targetHeight: number, DPR: number) => {
  const deviceSize = await getImageSize(imageUrl)

  const { width, height } = getSizeInScreen(deviceSize, DPR);
  const ratio = targetHeight / height

  return {
    size: {
      width: width * ratio,
      height: height * ratio
    }, ratio
  };
}

