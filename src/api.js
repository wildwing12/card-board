import axios from "axios";

export const test = async () => {
  const result = await axios.get("/board/1");
  return result;
};

export const addCard = async (param) => {
  console.log("param", param)
  const result = await axios.post("/board", param);
  return result;
};