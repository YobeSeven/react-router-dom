import { Link , Outlet } from "react-router-dom";

export default function About(){
    return (
        <>
            <h1>Page About</h1>

            {/* Il va aller directement dans la page Home */}
            <Link to={"/home/news"}>News</Link>
            <Link to={"/home/forms"}>Forms</Link>
        </>    
    )
}