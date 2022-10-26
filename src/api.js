import axios from "axios";

export const test = async () => {
  const result = await axios.get("/board/1");
  return result;
};
