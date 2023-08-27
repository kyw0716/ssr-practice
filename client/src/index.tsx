import { createRoot } from 'react-dom/client';
import App from './App';

const rootNode = document.createElement('div');
rootNode.id = 'root';
document.body.appendChild(rootNode);

const root = createRoot(rootNode);

root.render(<App />);
