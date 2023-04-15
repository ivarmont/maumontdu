import axios from "axios";
export interface WebEnviromentResponse {
  url: string;
  green: boolean;
  bytes: number;
  cleanerThan: number;
  statistics: object;
  timestamp: number;
}

export class EnvironmentService {
  public async evaluateWebSite(
    websiteUrl: string
  ): Promise<WebEnviromentResponse> {
    const response = await axios.get("https://api.websitecarbon.com/site", {
      withCredentials: false,
      params: { url: websiteUrl },
    });

    return response.data;
  }
}
