import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import firebaseAuth from "../../config/firebaseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import firebaseDB from "../../config/firebaseDB";

const RegisterPage = () => {
  let navigate = useNavigate();
  const auth = getAuth();

  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const onRegisterClick = async () => {
    const { displayName, email, password } = credentials;
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        addDoc(collection(firebaseDB, "users"), {
          uid: user.uid,
          displayName,
          email,
          password,
          score: 0,
        });
        updateProfile(auth.currentUser, {
          displayName,
        }).then(() => {});
        Swal.fire("Success", `${user.email} Berhasil ditambahkan`, "success");
        navigate("/");

        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        console.error(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("Error!", `${errorMessage}`, "error");

        // ..
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
                  Register
                </p>
                <Link to={"/login"}>
                  <p style={{ fontSize: 16, color: "#FBBC05" }}>Login</p>
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
                  type="text"
                  placeholder="Nama"
                  onChange={(event) => onValueChange(event, "displayName")}
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
                  onClick={onRegisterClick}
                >
                  REGISTER
                </button>
              </div>
              <p
                style={{
                  marginTop: "33px",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              ></p>
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

export default RegisterPage;
