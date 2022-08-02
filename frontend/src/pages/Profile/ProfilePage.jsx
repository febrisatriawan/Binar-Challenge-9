import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthContext from "../../context/AuthContext";

import {
    reauthenticateWithCredential,
    EmailAuthProvider,
    getAuth,
    updateProfile,
    updateEmail
} from "firebase/auth";
import firebaseDB from "../../config/firebaseDB";
import {
    where,
    getDocs,
    query,
    collection,
} from "firebase/firestore";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

    const auth = getAuth();
    const authenticatedUser = useContext(AuthContext);

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
    });

    const [uid, setUid] = useState("");
    const [scoreFromDoc, setScoreFromDoc] = useState(0);

    const q = authenticatedUser ?
    query(
        collection(firebaseDB, "users"),
        where("uid", "==", authenticatedUser.uid)
    ) : null;

    async function getScore() {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data().score);
            setUid(doc.id);
            setScoreFromDoc(doc.data().score);
        });
    }
    useEffect(getScore, [authenticatedUser])

    const { displayName, email, password } = credentials;

    function handleSubmit(event) {
        event.preventDefault()

        const creds = EmailAuthProvider.credential(
            auth.currentUser.email,
            password
        )

        reauthenticateWithCredential(
            auth.currentUser,
            creds
        ).then((val) => {
            console.log("berasil re-authenticate: ", val)
            updateProfile(authenticatedUser, {
                displayName: displayName
            }).then(() => {
                console.log("berhasil 1")
            }).catch((error) => {
                console.log("errror 2", error)
                Swal.fire("Error", `Gagal memperbarui nama`, "error");
            });

            updateEmail(auth.currentUser, email).then(() => {
                console.log("berhasil 2");
                Swal.fire("Success", `Data user berhasil diperbarui`, "success");
            }).catch((error) => {
                console.log("error 2", error)
                Swal.fire("Error", `Gagal memperbarui email`, "error");
            });
        }).catch((e) => {
            console.log("error re-authenticate:", e)
            Swal.fire("Autentikasi gagal", `Password salah`, "error");
        })

        console.log(authenticatedUser);
    }
    function toggleEdit(event) {
        event.preventDefault()

        var editButton = document.getElementsByClassName("edit1")[0]
        var cancelButton = document.getElementsByClassName("edit2")[0]

        if (editButton) {
            editButton.innerHTML = "Cancel";
            editButton.classList.remove('edit1')
            editButton.classList.add('edit2')
        } else {
            cancelButton.innerHTML = "Edit";
            cancelButton.classList.remove('edit2')
            cancelButton.classList.add('edit1')
        }

        var inputs = document.getElementsByClassName("edittable");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].toggleAttribute("disabled");
        }

        var submit = document.getElementById("submit")
        submit.toggleAttribute("hidden")
    }

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
                        <Form onSubmit={handleSubmit}>
                            <Button className="edit1" onClick={toggleEdit} style={{ "border": "none" }}>
                                Edit
                            </Button>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white">Nama</Form.Label>
                                <Form.Control className="edittable" defaultValue={authenticatedUser && authenticatedUser.displayName} onChange={(event) => onValueChange(event, "displayName")} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white">Email</Form.Label>
                                <Form.Control className="edittable" defaultValue={authenticatedUser && authenticatedUser.email} onChange={(event) => onValueChange(event, "email")} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control type="password" placeholder="Insert password" className="edittable" onChange={(event) => onValueChange(event, "password")} disabled />
                            </Form.Group>
                            <Button id="submit" variant="primary" type="submit" style={{ "background": "#00B4FF" }} hidden>
                                Submit
                            </Button>
                        </Form>

                        <br />
                        <h1 className="text-white">SCORE: {scoreFromDoc}</h1>
                    </div>
                    <div className="col" style={{ margin: "24px" }}>
                        <img src="../../../assets/img-login.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
