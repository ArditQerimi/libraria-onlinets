import axios from "axios";

axios.defaults.baseURL = "https://libraria-online.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080";

export const getBooksAPI = async () => axios.get("/");
export const postBooksAPI = async (book: any) => {
  console.log(book);
  return axios.post("/", book);
};
export const deleteBookAPI = async (_id: any) => {
console.log(_id);
return  axios.delete(`/${_id}`);
} 
export const editBookAPI = async (_id: any, newobj: any) => {
console.log(_id);
  return axios.put(`/${_id}`, newobj);
}
