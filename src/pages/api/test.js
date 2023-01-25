import axios from "axios";

export default async function handler(req, res) {
    // console.log(req.headers.cookie)
  return res.send({ message: "test message" });

}
