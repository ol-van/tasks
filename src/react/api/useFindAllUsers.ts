import { useEffect, useState } from "react";

export function useFindAllUsers() {
  const [state, setState] = useState<{ data: User[]; isLoading: boolean }>({
    data: [],
    isLoading: true
  })

  useEffect(() => {
    const fetch = async () => {
      const users = await findAllUsers();
      setState({data: users, isLoading: false})
    }

    fetch()
  }, []);

  return {
    ...state
  }
}


function findAllUsers(): Promise<User[]> {
  return new Promise((res) => {
    setTimeout(() => res(users), 200)
  })
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
}

const users: User[] = [
  {
    id: '1',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    position: 'Frontend Developer'
  },
  {
    id: '2',
    firstName: 'Konstantin',
    lastName: 'Kovalev',
    position: 'DevOps'
  },
  {
    id: '3',
    firstName: 'Nikolay',
    lastName: 'Kalinin',
    position: 'Java Developer'
  },
  {
    id: '4',
    firstName: 'Sergey',
    lastName: 'Alexeev',
    position: 'Go Developer'
  }
]
