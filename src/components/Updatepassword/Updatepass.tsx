import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export default function Updatepass() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const navigate = useNavigate();

  const changePass = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .put(
          "http://139.59.47.49:4004/api/account/change/password",
          {
            old_password: oldPass,
            new_password: newPass,
          },
          {
            headers: {
              Authorization: "" + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          alert("PassWord changed Successfully");
          navigate("/Signin");
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div
            className="col-md-8"
            style={{ top: "94px", position: "relative" }}
          >
            <div className="card border rounded-3 shadow">
              <div className="card-header">
                <div className="card-img my-3">
                  <Link to="/">
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
                <div className="card-text my-3 h3">Reset Your Password</div>
                <div className="input-field">
                  <form onSubmit={changePass}>
                    <div className="user-email mb-3">
                      <input
                        type="password"
                        value={oldPass}
                        onChange={(e) => {
                          setOldPass(e.target.value);
                        }}
                        className="form-control"
                        placeholder="Old password"
                      />
                    </div>
                    <div className="user-pass mb-2 position-relative">
                      <input
                        type="password"
                        value={newPass}
                        onChange={(e) => {
                          setNewPass(e.target.value);
                        }}
                        className="form-control"
                        placeholder="New password"
                      />
                    </div>
                    <button className="btn btn-danger w-100" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
