
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import { Layout } from "./styles";

export default function Main() {
  return (
    <Layout>
      <Sidebar />
      
      <div>
        <Outlet />
      </div>

    </Layout>
  )
}
