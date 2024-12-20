import { FaImage } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import axios from "axios";
import { getBackendUrl } from "./model-input/integration";

const INFORMATION = {
  inputRecommendation: "Ensure the cloth is positioned centrally in the photos and stands out with a contrasting color against the background for optimal model input",
  serverAvailability: "Based on the env variable, the server is available at: ",
  serverNotAvailable: "Based on the env variable, the server is not available at: "
}

export const checkServerAvailability = async (backendUrl: string) => {
  try {
    let isAvailable = false;

    const response = await axios.get(backendUrl);

    if (response.status === 200) {
      isAvailable = true;
    }

    return isAvailable;
  } catch (error) {
    return false;
  }
}

export const getInformation = async () => {
  let serverAvailability = false;

  const backendUrl = getBackendUrl()
  serverAvailability = await checkServerAvailability(backendUrl);

  return [
    { title: "Input Recommendation", description: INFORMATION.inputRecommendation, Icon: FaImage, textColor: "#F2F4F7", backgroundColor: "rgba(242, 244, 247, 0.3)" },
    { title: "Server Availability", description: serverAvailability ? `${INFORMATION.serverAvailability}${backendUrl}` : `${INFORMATION.serverNotAvailable}${backendUrl}`, Icon: CiServer, textColor: serverAvailability ? "#E2F1E7" : "#FFB38E", backgroundColor: serverAvailability ? "rgba(98, 149, 132, 0.3)" : "rgba(255, 179, 142, 0.3)" }
  ]
}
