import { hydrateRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const rootNode = document.getElementById('root');

hydrateRoot(rootNode, <RouterProvider router={router} />);
