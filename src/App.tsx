import { useContext } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { AuthContext } from "./auth/context";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import LogOut from "./views/LogOut";
import Posts from "./views/Posts";
import Todos from "./views/Todos";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <header className="h-12 shadow-md flex items-center">
        <h1 className="text-xl font-semibold mx-8">Business App</h1>
        <nav className="flex grow items-center justify-between text-gray-500">
          <div className="flex items-center gap-4 leading-12">
            <NavLink className={({ isActive }) => isActive ? 'text-gray-900' : ''} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-gray-900' : ''} to="/todos">Todos</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-gray-900' : ''} to="/posts">Posts</NavLink>
          </div>
          <div className="flex items-center mr-8">
            {user.isAnonymous ?
              <NavLink className={({ isActive }) => isActive ? 'text-gray-900' : ''} to="/login">Log In</NavLink>
              :
              <NavLink className={({ isActive }) => isActive ? 'text-gray-900' : ''} to="/logout">Hallo {user.name}, Log Out</NavLink>

            }
          </div>
        </nav>
      </header>
      <main className="mt-8 container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
