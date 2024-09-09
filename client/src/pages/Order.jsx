import React from "react";
import Form from '../components/form';
import { Link } from 'react-router-dom';

export default function Order(){
    return(
        <>
            <div className="content-center bg-yellow-500 h-min p-4 rounded m-auto size-fit">
                <Form className="" formType={'order'}/>
            </div>
        </>
    )
}