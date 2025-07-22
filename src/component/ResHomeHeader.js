import { Outlet } from "react-router";
import ResHeader from "./ResHeader";


export default function ResHomeHeader(){

    return(
        <>
            <ResHeader></ResHeader>
            <Outlet></Outlet>
        </>
    )
}