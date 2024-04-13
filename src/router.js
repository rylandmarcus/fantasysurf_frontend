import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { adminEventLoad, adminEventsLoad, adminLoad, adminSurferLoad, adminSurfersLoad, ctEventsLoad, userLoad } from "./loader"
import Admin from "./pages/Admin"
import Surfers from "./adminpages/Surfers"
import Events from "./adminpages/Events"
import Newevent from "./adminpages/Newevent"
import Event from "./adminpages/Event"
import Surferedit from "./adminpages/Surferedit"
import Home from "./pages/Home"
import Leagues from "./pages/Leagues"
import Ctevents from "./pages/Ctevents"
import Ctrankings from "./pages/Ctrankings"
import Pastleagues from "./pages/Pastleagues"
import Settings from "./pages/Settings"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="/leagues" element={<Leagues></Leagues>}></Route>
            <Route path="/ctevents" element={<Ctevents></Ctevents>} loader={ctEventsLoad}></Route>
            <Route path="/ctrankings" element={<Ctrankings></Ctrankings>}></Route>
            <Route path="/pastleagues" element={<Pastleagues></Pastleagues>}></Route>
            <Route path="/settings" element={<Settings></Settings>}></Route>
            <Route path="admin" element={<Admin></Admin>} loader={adminLoad}></Route>
            <Route path="admin/surfers" element={<Surfers></Surfers>} loader={adminSurfersLoad}></Route>
            <Route path="admin/surfers/:id" element={<Surferedit></Surferedit>} loader={adminSurferLoad}></Route>
            <Route path="admin/events" element={<Events></Events>} loader={adminEventsLoad}></Route>
            <Route path="admin/newevent" element={<Newevent></Newevent>} loader={adminSurfersLoad}></Route>
            <Route path="admin/events/:id" element={<Event></Event>} loader={adminEventLoad}></Route>
            <Route path="*" element={<Home></Home>}></Route>
        </Route>
    )
)

export default router