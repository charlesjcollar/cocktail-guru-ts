import { createContext } from 'react';
import { UserDataInterface } from './types';

export const UserDataContext = createContext(undefined as unknown as UserDataInterface);