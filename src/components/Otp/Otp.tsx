import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import "./Otp.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type props = {
  phoneValue: any;
  setPhoneValue: any;
};
export default function Otp({ phoneValue, setPhoneValue }: props) {
  const [state, setState] = useState<any>({ otp: "" });
  const navigate = useNavigate();

  const handleChange = (otp: any) => setState({ otp });

  const postOtpDetails = async () => {
    try {
      await axios
        .post("http://139.59.47.49:4004/api/account/verify/otp", {
          mobile_number: phoneValue,
          otp: state.otp,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/phoneverified");
          setPhoneValue("");
        });
    } catch (e) {
      console.log("error");
      toast("🦄 Invalid OTP", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-center text-center">
          <div
            className="col-md-8"
            style={{ top: "94px", position: "relative" }}
          >
            <div className="card border rounded-3 shadow">
              <div className="card-header">
                <div className="card-img my-3">
                  <Link to="/signupwithphone">
                    {" "}
                    <i
                      className="bi bi-arrow-left-circle text-warning"
                      style={{
                        position: "absolute",
                        left: "30px",
                        fontSize: "26px",
                      }}
                    ></i>
                  </Link>

                  <img src={logo} alt="" />
                </div>
                <div className="confirm-number-heading h3 my-4">
                  Confirm your number
                </div>
                <div className="confirm-number h3 my-3">
                  <p> Enter the code just sent to:</p>
                  <p className="text-primary">{phoneValue}</p>
                </div>
                <div className="otp-field my-3 d-flex justify-content-evenly">
                  <OtpInput
                    value={state.otp}
                    className="otp-input bg-white mx-2 text-lg focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg  block w-full appearance-none leading-normal"
                    onChange={handleChange}
                    numInputs={4}
                    separator={<span></span>}
                  />
                </div>
                <div className="mess-not-get h6">
                  <span className="text-secondary"> Didn't get a text? </span>
                  <span className="text-decoration-underline">Send Again</span>
                </div>
                <div className="continue-btn">
                  <button
                    className="btn btn-danger w-100"
                    onClick={postOtpDetails}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
