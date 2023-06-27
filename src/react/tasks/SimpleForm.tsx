import type { ChangeEvent, FC, FormEvent, } from 'react';
import { useState } from "react";

interface User {
  firstName: string;
}

interface Props {
  value: User
  onSubmit?: (e: User) => void
  onReject?: () => void;
}

const noop = () => {
};

const SimpleForm: FC<Props> = ({value, onSubmit = noop, onReject = noop}) => {
  const [formData, setFormData] = useState<User>(value)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name
        <input type={'text'} name={'firstName'} value={formData.firstName} onChange={handleChange}/>
      </label>
      <div>
        <button type={'submit'}>Submit</button>
        <button type={'button'} onClick={onReject}>Cancel</button>
      </div>
    </form>
  )
}

export default SimpleForm;
