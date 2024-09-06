import React from "react";
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <>
            <div className="h-5/6 mt-8 bg-tce">
                <p className="sub text-center mt-8">TCE Material Manager</p>
                <p className="sub-2 text-center">Welcome, User</p>
                <section className="flex flex-col md:flex-row md:justify-center items-center m-8">
                    <Link to ="/order" className=" rounded-full p-2 bg-zinc-600 text-white hover-tce m-3">
                        Order Material
                    </Link>
                    <Link to ="/history" className=" rounded-full p-2 bg-zinc-600 text-white hover-tce m-3">
                        Order History
                    </Link>
                    <Link to ="/list" className=" rounded-full p-2 bg-zinc-600 text-white hover-tce m-3">
                        Material Catalog
                    </Link>
                </section>
            </div>
        </>
    )
}