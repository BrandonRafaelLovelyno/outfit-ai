import { getInformation } from "@/helper/input-information";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

export default function useDemoInformation() {
  const [information, setInformation] = useState<{ title: string, description: string, Icon: IconType, textColor: string, backgroundColor: string }[]>([]);

  const updateInformation = async () => {
    const information = await getInformation();
    setInformation(information);
  }

  useEffect(() => {
    updateInformation();
  }, [])

  return {
    information
  }
}
