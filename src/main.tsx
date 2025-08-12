import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Buffer } from 'buffer';

// Polyfill Buffer for the browser
(window as any).Buffer = Buffer;

createRoot(document.getElementById("root")!).render(<App />);
