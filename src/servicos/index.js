import axios from "axios";

export const api = axios.create({
    baseURL: "http://4.172.207.208:5028"
})