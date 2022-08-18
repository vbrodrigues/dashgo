import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SignIn } from "./pages/SignIn";
import { CreateUser } from "./pages/Users/CreateUser";
import { UserList } from "./pages/Users/UserList";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/users" element={<UserList />} />
      <Route path="/users/create" element={<CreateUser />} />
    </Routes>
  );
}
