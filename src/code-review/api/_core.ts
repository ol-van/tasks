import { BACKEND_URL } from "./constants"

const BASE_AUTH_TOKEN = "YmxhLWJsYQ=="

const makeApiRequest = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: Object,
) => {
  const tokenString = localStorage.getItem("Token:") || sessionStorage.getItem("Token:") || ""
  const token = tokenString && JSON.parse(tokenString).token

  return fetch(`${BACKEND_URL}/${url}`, {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(token
        ? {"X-Authentication-Token": token}
        : {Authorization: `Basic ${BASE_AUTH_TOKEN}`}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
}

const handleBadRequest = (response: Response) => {
  if (response?.status === 401) {
    if (localStorage.getItem("Token:")) {
      localStorage.removeItem("Token:")
    }
    if (sessionStorage.getItem("Token:")) {
      sessionStorage.removeItem("Token:")
    }
  }
}

export { handleBadRequest, makeApiRequest }
