import Cookies from "cookies";

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })

  const cookies = new Cookies(req, res);

  const cookie = cookies.get("Authorization");

  // console.log(cookie);

  return res.status(200).json({ name: "John Doe" });
}
