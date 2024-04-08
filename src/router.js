import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Logintest from "./pages/Logintest"
import Homepagetest from "./pages/Homepagetest"
import { adminEventsLoad, adminLoad, adminSurfersLoad, userLoad } from "./loader"
import Pageone from "./pages/Pageone"
import Pagetwo from "./pages/Pagetwo"
import Admin from "./pages/Admin"
import Surfers from "./adminpages/Surfers"
import Events from "./adminpages/Events"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Logintest></Logintest>}></Route>
            <Route path="/home" element={<Homepagetest></Homepagetest>} loader={userLoad}></Route>
            <Route path="pageone" element={<Pageone></Pageone>} loader={userLoad}></Route>
            <Route path="pagetwo" element={<Pagetwo></Pagetwo>} loader={userLoad}></Route>
            <Route path="admin" element={<Admin></Admin>} loader={adminLoad}></Route>
            <Route path="admin/surfers" element={<Surfers></Surfers>} loader={adminSurfersLoad}></Route>
            <Route path="admin/events" element={<Events></Events>} loader={adminEventsLoad}></Route>
        </Route>
    )
)

export default router