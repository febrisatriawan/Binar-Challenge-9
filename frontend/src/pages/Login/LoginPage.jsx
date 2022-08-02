import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseAuth from "../../config/firebaseAuth";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  const onLoginClick = () => {
    const { email, password } = credentials;
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Swal.fire("Success", `${user.email} Berhasil login`, "success");

        if (userCredential) {
          navigate("/");
        }
        // ...
      })
      .catch((error) => {
        console.error(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire("Error", `${errorMessage}`, "error");

        // ..
      });
  };

  const onGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        Swal.fire("Success", `${user.email} Berhasil ditambahkan`, "success");

        if (token && user) {
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onValueChange = (event, label) => {
    const value = event.target.value;
    setCredentials((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };
  return (
    <div style={{ backgroundColor: "#252525" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col" style={{ marginTop: 61, marginLeft: 72 }}>
            <Link to={"/"}>
              <h3
                style={{
                  color: "#FBBC05",
                  fontWeight: "bold",
                  fontSize: "36px",
                }}
              >
                Traditional Game
              </h3>
            </Link>
            <div
              className="mx-auto"
              style={{
                width: 420,
                height: 579,
                padding: 40,
                paddingTop: 111,
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <p
                  style={{
                    fontSize: 24,
                    color: "#FFFFFF",
                    fontWeight: 400,
                  }}
                >
                  Login
                </p>
                <Link to={"/register"}>
                  <p style={{ fontSize: 16, color: "#FBBC05" }}>Register</p>
                </Link>
              </div>
              <div>
                <input
                  className="w-100"
                  style={{
                    height: " 48px",
                    margin: "16px 0px",
                    padding: "0px 16px 0px 14px",
                    borderRadius: "4px",
                    border: "1px solid #D0D0D0",
                    fontSize: "14px",
                    color: "#8A8A8A",
                  }}
                  type="email"
                  placeholder="Masukkan Email"
                  onChange={(event) => onValueChange(event, "email")}
                />
                <input
                  className="w-100"
                  style={{
                    height: " 48px",
                    margin: "16px 0px",
                    padding: "0px 16px 0px 14px",
                    borderRadius: "4px",
                    border: "1px solid #D0D0D0",
                    fontSize: "14px",
                    color: "#8A8A8A",
                  }}
                  type="password"
                  placeholder="Kata Sandi"
                  onChange={(event) => onValueChange(event, "password")}
                />
                <button
                  className="w-100"
                  style={{
                    marginTop: "36px",
                    height: "46px",
                    background: "#F2C94C",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    border: "none",
                  }}
                  onClick={onLoginClick}
                >
                  LOGIN
                </button>
              </div>
              <p
                style={{
                  marginTop: "33px",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                Lupa kata sandi?
                <a style={{ fontWeight: "700", color: "#F2C94C" }} href="">
                   Klik disini
                </a>
              </p>
              <div
                className="d-flex justify-content-between"
                style={{ marginTop: "34px" }}
              >
                <hr
                  style={{
                    display: "block",
                    height: "1px",
                    border: "0",
                    borderTop: "1px solid #D0D0D0",
                    width: "100px",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#D0D0D0",
                    marginTop: "3px",
                  }}
                >
                  atau masuk dengan
                </p>
                <hr
                  style={{
                    display: "block",
                    height: "1px",
                    border: "0",
                    borderTop: "1px solid #D0D0D0",
                    width: "100px",
                  }}
                />
              </div>
              <div style={{ marginTop: "36px" }}>
                <button
                  className="w-100"
                  style={{
                    height: "46px",
                    background: "transparent",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    border: "1px solid #D0D0D0",
                  }}
                >
                  <div
                    onClick={onGoogleLogin}
                    className="d-flex mx-auto justify-content-center"
                  >
                    <img
                      style={{ paddingRight: "16px" }}
                      src="../../../assets/img-google.svg"
                      alt=""
                    />
                    Google
                  </div>
                </button>
                <button
                  className="w-100"
                  style={{
                    marginTop: "16px",
                    height: "46px",
                    background: "transparent",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    border: "1px solid #D0D0D0",
                  }}
                >
                  <div className="d-flex mx-auto justify-content-center">
                    <img
                      style={{ paddingRight: "16px" }}
                      src="../../../assets/img-fb.svg"
                      alt=""
                    />
                    Facebook
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col" style={{ margin: "24px" }}>
            <img src="../../../assets/img-login.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
