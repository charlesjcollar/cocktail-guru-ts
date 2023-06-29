import { useContext, useState } from 'react';
import { UserDataContext } from './context';
import { ChildrenProps } from '../../types/ReactTypes';
import { Navigate } from 'react-router-dom';

const UserData = ({ children }: ChildrenProps) => {
  const userData = useContext(UserDataContext);
  const [needsLogin, setNeedsLogin] = useState(false);
  return needsLogin ? (
    <Navigate to="/login" />
  ) : children;
}

export default UserData;