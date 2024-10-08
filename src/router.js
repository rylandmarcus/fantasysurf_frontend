import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { adminEventLoad, adminEventsLoad, adminLoad, adminSurferLoad, adminSurfersLoad, ctEventsLoad, ctRankingsLoad, draftroomLoad, joinLeagueLoad, leagueLoad, myLeaguesLoad, teamLoad, userLoad } from "./loader"
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
import Newleague from "./pages/Newleague"
import Joinleague from "./pages/Joinleague"
import League from "./pages/League"
import Team from "./pages/Team"
import Draftroom from "./pages/Draftroom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="/leagues" element={<Leagues></Leagues>} loader={myLeaguesLoad}></Route>
            <Route path="/leagues/:id" element={<League></League>} loader={leagueLoad}></Route>
            <Route path="/leagues/:id/team/:teamid" element={<Team></Team>} loader={teamLoad}></Route>
            <Route path="/leagues/:id/draftroom" element={<Draftroom></Draftroom>} loader={draftroomLoad}></Route>
            <Route path="/newleague" element={<Newleague></Newleague>}></Route>
            <Route path="/joinleague" element={<Joinleague></Joinleague>} loader={joinLeagueLoad}></Route>
            <Route path="/ctevents" element={<Ctevents></Ctevents>} loader={ctEventsLoad}></Route>
            <Route path="/ctrankings" element={<Ctrankings></Ctrankings>} loader={ctRankingsLoad}></Route>
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