import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Logintest from "./pages/Logintest"
import Homepagetest from "./pages/Homepagetest"
import { adminEventLoad, adminEventsLoad, adminLoad, adminSurferLoad, adminSurfersLoad, userLoad } from "./loader"
import Pageone from "./pages/Pageone"
import Pagetwo from "./pages/Pagetwo"
import Admin from "./pages/Admin"
import Surfers from "./adminpages/Surfers"
import Events from "./adminpages/Events"
import Newevent from "./adminpages/Newevent"
import Event from "./adminpages/Event"
import Surferedit from "./adminpages/Surferedit"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Logintest></Logintest>}></Route>
            <Route path="/home" element={<Homepagetest></Homepagetest>} loader={userLoad}></Route>
            <Route path="pageone" element={<Pageone></Pageone>} loader={userLoad}></Route>
            <Route path="pagetwo" element={<Pagetwo></Pagetwo>} loader={userLoad}></Route>
            <Route path="admin" element={<Admin></Admin>} loader={adminLoad}></Route>
            <Route path="admin/surfers" element={<Surfers></Surfers>} loader={adminSurfersLoad}></Route>
            <Route path="admin/surfers/:id" element={<Surferedit></Surferedit>} loader={adminSurferLoad}></Route>
            <Route path="admin/events" element={<Events></Events>} loader={adminEventsLoad}></Route>
            <Route path="admin/newevent" element={<Newevent></Newevent>} loader={adminSurfersLoad}></Route>
            <Route path="admin/events/:id" element={<Event></Event>} loader={adminEventLoad}></Route>
        </Route>
    )
)

export default router