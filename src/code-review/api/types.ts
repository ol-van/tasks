interface User {
  id: string;
  name: string
}

export interface ISearchUsersAnswer {
  items: User[]
  paging: {
    morePagesAvailable: boolean
    pageNumber: number
    pageSize: number
    pageTotal: number
  }
}
