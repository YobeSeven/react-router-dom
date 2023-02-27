import { Link, Outlet , NavLink} from "react-router-dom";

export default function Home(){

    return (
        <>
            <h1>Page Home</h1>
            <NavLink to={"/home/news"}>News</NavLink>
            <NavLink to={"/home/forms"}>Forms</NavLink>
            <div>
                <Outlet />
            </div>
        </>    
    )
}