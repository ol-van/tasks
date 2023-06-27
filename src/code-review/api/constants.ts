let BACKEND_URL = ""
if (typeof window !== "undefined") {
  // @ts-ignore
  BACKEND_URL = window ? window?.env.apiBaseUrl : ""
}

const API_URLS = {
  SEARCH_USERS: "search",
  CHECK_USERS: "check",
}

export { BACKEND_URL, API_URLS }
