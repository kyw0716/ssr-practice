import { hydrateRoot } from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');

hydrateRoot(rootNode, <App />);
