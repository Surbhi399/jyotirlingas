import {createRoot} from "react-dom/client"
import App from "./App.jsx";
import './index.css'; // ✅ This is required



const root = createRoot(document.getElementById("root"))
root.render(<App />)