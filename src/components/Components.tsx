import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signupwithphone from "./Signupwithphone/Signupwithphone";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import Otp from "./Otp/Otp";
import { useState } from "react";
import Updatepass from "./Updatepassword/Updatepass";
import Phoneverified from "./Verified/Phoneverified";
import Welcomeuser from "./Verified/Welcomeuser";
import Accountcreated from "./Verified/Accountcreated";
import Resetpass from "./Updatepassword/Resetpass";
// import Otp from "./Otp";

export default function Components() {
  const [phoneValue, setPhoneValue] = useState<any>("");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Signupwithphone"
            element={
              <Signupwithphone
                phoneValue={phoneValue}
                setPhoneValue={setPhoneValue}
              />
            }
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route
            path="/otp"
            element={
              <Otp phoneValue={phoneValue} setPhoneValue={setPhoneValue} />
            }
          />
          <Route path="/updatePass" element={<Updatepass />} />
          <Route path="/resetpass" element={<Resetpass />} />
          <Route path="/phoneverified" element={<Phoneverified />} />
          <Route path="/welcomeuser" element={<Welcomeuser />} />
          <Route path="/accountcreated" element={<Accountcreated />} />
        </Routes>
      </Router>
    </>
  );
}
