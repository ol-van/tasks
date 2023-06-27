import { API_URLS } from "./constants.ts"
import { ISearchUsersAnswer } from "./types.ts"
import { handleBadRequest, makeApiRequest } from "./_core"

const searchUsers = async (query: string): Promise<ISearchUsersAnswer> => {
  const url = API_URLS.SEARCH_USERS
  const body = {
    parameters: {
      query,
    },
    paging: {
      page: 0,
      pageSize: 1000,
    },
  }

  const response = await makeApiRequest(url, "POST", body)

  if (!response.ok) {
    handleBadRequest(response)
    throw response
  }

  return response.json()
}

const checkUsers = async (logins: string[]): Promise<{ result: boolean }> => {
  const url = API_URLS.CHECK_USERS
  const body = {
    logins,
  }

  const response = await makeApiRequest(url, "POST", body)

  if (!response.ok) {
    handleBadRequest(response)
    throw response
  }

  return response.json()
}

export { searchUsers, checkUsers }
