import axios from "axios";

export class FunService {
  public async evaluateWebSite(inputText: string): Promise<any> {
    const response = await axios.get('http://yoda-api.appspot.com/api/v1/yodish',{
      params: {text: inputText}
    })

    return response.data;
  }
}
