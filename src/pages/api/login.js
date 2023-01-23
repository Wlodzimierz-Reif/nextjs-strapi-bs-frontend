import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await handleSignIn(req.body.identifier, req.body.password);
    //   document.cookie = `${response.data.jwt}; HttpOnly`
      res.send({ message: `jwt: ${response.data.jwt}` });
      // attach http-only cookie with jwt
    } catch (e) {
      console.log(
        "%c [qq]: e ",
        "background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;",
        "\n",
        e,
        "\n\n",
      );
      res.cookie('jwt', response.data.jwt)
      return res.send({ message: "Sent message failed" });
    }
  }
}

const handleSignIn = async (login, password) => {
  const data = await axios.post("http://localhost:1337/api/auth/local", {
    identifier: login,
    password: password,
  });
  return data;
};
