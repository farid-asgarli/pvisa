import axios from "axios";
import { AuthTokens } from "../globals";

export async function DownloadFile(content: Indefinable<File | string>) {
  if (content) {
    let url: string;
    const link = document.createElement("a");
    if (typeof content === "string") {
      const response = await axios({
        url: content,
        method: "GET",
        responseType: "blob",
        headers: {
          Authorization: AuthTokens.COMBINATIONSTOKEN!,
          website: "pickvisa",
        },
      });

      url = window.URL.createObjectURL(new Blob([response.data]));
      const splittedContent = content.split(".");
      link.setAttribute(
        "download",
        splittedContent[splittedContent.length - 1]
      );
    } else {
      url = window.URL.createObjectURL(content);
      link.setAttribute("download", content.name);
    }

    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
