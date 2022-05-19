import $api from "../http/index";

export async function signin(login, password) {
   return $api.post("/login", {login, password})
}

export async function signup(login, password) {
   return $api.post("/signup", {login, password})
}