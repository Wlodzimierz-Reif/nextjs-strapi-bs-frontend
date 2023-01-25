import axios from "axios";

const fetchData = async (url, method) => {
  try {
    const { data } = await axios.post("http://localhost:3000/api/strapiProxy", {
      method,
      url,
    });
    //   console.log("data: ", data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export default fetchData;
