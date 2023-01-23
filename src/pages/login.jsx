import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useQuery, gql, useMutation } from "@apollo/client";
import axios from "axios";

// const LOGIN = gql`
//   mutation signin {
//     login(input: { identifier: "admin@admin.com", password: "admin123" }) {
//       jwt
//     }
//   }
// `;

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

//   const [doLogIn, { data, loading, error }] = useMutation(LOGIN);

//  console.log('%c [qq]: data ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', data, '\n\n');

    const handleSignIn = async () => {
      // const data = await axios.post("http://localhost:1337/api/login", {
      //   identifier: login,
      //   password: password,
      // });

      // console.log("User profile: ", data.user);
      // console.log("User token: ", data.jwt);
      axios
        .post("http://localhost:3000/api/login", {
          identifier: login,
          password: password,
        })
        .then((response) => {
          console.log("User profile: ", response.data.user);
          console.log("User token: ", response.data.jwt);
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        @
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(e) => setLogin(e.target.value)}
      ></input>
      <span className="input-group-text" id="basic-addon1">
        @
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Password"
        aria-label="Password"
        aria-describedby="basic-addon1"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <Button variant="info" onClick={handleSignIn}>
        Login
      </Button>
    </div>
  );
}
