import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage"

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={LandingPage}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default Router