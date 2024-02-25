import "./App.css";
import SignUp from "./pages/SignUp";
import Dietary from "./pages/Dietary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Submit from "./pages/Submit";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/chat", element: <Chat /> },
  { path: "/submit", element: <Submit /> },
  { path: "/dietary", element: <Dietary /> },
]);

function App() {
  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
