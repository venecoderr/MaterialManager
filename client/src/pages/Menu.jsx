import React from "react";
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <>
            <div className="content-center">
                <p className="text-red-500 text-center">TCE's Material Manager</p>
                <Link to ="/order">
                    <button className="w-full">
                        Order Material
                    </button>
                </Link>
                <Link to ="/history">
                    <button className="w-full">
                        Order History
                    </button>
                </Link>
                <Link to ="/list">
                    <button className="w-full">
                        Material Catalog
                    </button>
                </Link>
            </div>
        </>
    )
}