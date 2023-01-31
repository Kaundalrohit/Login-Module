import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Google_Client_Id } from "../../config";
export default function GoogleSdk() {
  function handleCredentialResponse(response: any) {
    console.log(response.credential);

    const decodedData = jwt_decode(response.credential);
    console.log(decodedData);
  }
  useEffect(() => {
    (window as any).google?.accounts.id.initialize({
      client_id:
        Google_Client_Id,
      callback: handleCredentialResponse,
    });
    (window as any).google?.accounts.id.renderButton(
      document.getElementById("btnDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <>
      <div className="google-log-in-out">
        <div id="btnDiv" className="text-center"></div>
      </div>
    </>
  );
}
