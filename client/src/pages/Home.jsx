import React from "react";
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <>
            <div className="mx-auto my-auto p-4 flex flex-col items-center border-4 rounded-3xl border-tce bg-black">
                <h1 className="title text-tce text-center">MATERIAL MANAGER</h1>
                <Link to ="/login" className="rounded-lg bg-zinc-600 text-white w-1/4 flex justify-center hover-tce">
                        LOG IN
                </Link>
            </div>
        </>
    )
}