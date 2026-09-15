import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { updateDocumentMeta } from './seo';
import './styles.css';

const path = window.location.pathname;
updateDocumentMeta(path);
const root = document.getElementById('root')!;
if (root.querySelector('main')) hydrateRoot(root, <App path={path} />);
else createRoot(root).render(<App path={path} />);
