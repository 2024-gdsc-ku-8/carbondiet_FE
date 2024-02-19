import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Submit from "./pages/Submit";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/chat", element: <Chat /> },
  { path: "/submit", element: <Submit /> },
]);

function App() {
  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
