import { SideBar } from "../../components/SideBar/SideBar.component"
import "./Dashboard.styles.scss"
import { Outlet } from "react-router"

export const Dashboard = () => {
    return(
        <div className="dashboard-layout">
            <SideBar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}