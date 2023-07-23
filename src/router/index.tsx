import { createBrowserRouter } from 'react-router-dom';
import Main from './main/index.tsx';
import Login from './login/index.tsx';

export const router = createBrowserRouter([...Login, ...Main]);
