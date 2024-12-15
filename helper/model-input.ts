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

export const getImageUrl = (file: File) => {
  return URL.createObjectURL(file);
}

export const getRescaledSize = async (imageUrl: string, targetHeight: number, DPR: number) => {
  const deviceSize = await getImageSize(imageUrl)

  const { width, height } = getSizeInScreen(deviceSize, DPR);
  const ratio = targetHeight / height

  return {
    width: width * ratio,
    height: height * ratio
  };
}

