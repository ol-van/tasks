import type { FC } from 'react';
import { useFindAllUsers, User } from "./api/useFindAllUsers.ts";

const UserPage: FC = ({}) => {
  const {data, isLoading} = useFindAllUsers();

  return (
    <>
      <div className={'h-full space-y-2.5 p-5'}>
        {isLoading && <div>Loading...</div>}
        {data?.map(it => <UserCard key={it.id} value={it}/>)}
      </div>
    </>
  )
}

export default UserPage;


function UserCard({
                    value,
                    onClick = () => {
                    }
                  }: { value: User, onClick?: (e: User) => void }) {
  return <a className={'flex bg-white p-5 rounded-lg shadow-lg cursor-pointer'}
            onClick={() => onClick(value)}>
    <div className={'flex flex-col gap-2.5'}>
      <div>
        <span className={'text-slate-900'}>{value.firstName} {value.lastName}</span>
      </div>
      <div>
        <span className={'font-medium'}>Position: {value.position}</span>
      </div>
    </div>
  </a>
}
