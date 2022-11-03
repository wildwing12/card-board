import axios from "axios";

export const test = async () => {
  const result = await axios.get("/board/1");
  return result;
};

export const editData = async (param) => {
  const result = await axios.get(`/board/${param.id}`);
  return result;
};

export const edit = async (param) => {
  const result = await axios.put(`/board/${param.id}`, param);
  return result;
};

export const preview = async () => {
  const result = await axios.get("/board/preview");
  return result;
};
