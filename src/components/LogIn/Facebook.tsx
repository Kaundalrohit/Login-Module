import { useEffect } from "react";
import { FB_appId } from "../../config";
export default function Facebook() {
  function getFbUserData() {
    (window as any).FB.login(function (response: any) {
      if (response.authResponse) {
        var access_token = (window as any).FB.getAuthResponse()["accessToken"];
        console.log(access_token);
        console.log("Welcome!  Fetching your information.... ");
        (window as any).FB.api("/me", function (response: any) {
          console.log("Good to see you, " + response.name + ".");
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  }
  function outFbUserData() {
    (window as any).FB.logout(function (res: any) {
      console.log("logOut");
    });
  }
  (window as any).fbAsyncInit = function () {
    (window as any).FB?.init({
      appId: FB_appId,
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
  };

  useEffect(() => {
    (window as any).fbAsyncInit();
  });

  return (
    <div>
      <button onClick={getFbUserData} className="btn btn-warning me-3">
        Login to FB
      </button>
      <button onClick={outFbUserData} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
}
