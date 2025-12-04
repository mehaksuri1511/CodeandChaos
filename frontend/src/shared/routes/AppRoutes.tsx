import { Routes, Route } from "react-router-dom";
import Home from "../component/home";
import Register from "@/modules/admin/pages/register";
import Login from "@/modules/admin/pages/login";
import DashboardSelector from "../component/dashboardSelector";
import PlayerRegister from "@/modules/user/pages/pregister";
import PlayerLogin from "@/modules/user/pages/plogin";
import PlayerDashboard from "@/modules/user/pages/player-dashboard";
import AdminDashboard from "@/modules/admin/pages/admin-dashboard";
import MatchMaking from "@/modules/matches/matchmaking";
import VsScreen from "@/modules/matches/VsScreen";
import Battle from "@/modules/matches/battle";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pregister" element={<PlayerRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plogin" element={<PlayerLogin />} />
      <Route path="/ds" element={<DashboardSelector />} />
      <Route path="/pd" element={<PlayerDashboard />} />
      <Route path="/ad" element={<AdminDashboard />} />
      <Route path="/mm" element={<MatchMaking />} />
      <Route path="/vs" element={<VsScreen/>} />
      <Route path="/battle/:roomID" element={<Battle />} />
    </Routes>
  );
};

export default AppRoutes;