import React from "react";
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <>
            <div className="content-center justify-center">
                <p className="text-red-500">TCE's Material Manager</p>
                <Link to ="/login">
                    <button className="">
                        LOG IN
                    </button>
                </Link>
            </div>
        </>
    )
}