import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Logintest from "./pages/Logintest"
import Homepagetest from "./pages/Homepagetest"
import { userLoad } from "./loader"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Logintest></Logintest>}></Route>
            <Route path="/home" element={<Homepagetest></Homepagetest>} loader={userLoad}></Route>
        </Route>
    )
)

export default router