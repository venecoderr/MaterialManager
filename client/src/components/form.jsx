import { useState } from "react";
import LogInForm from './ui/forms/logInForm';
import ProductForm from "./ui/forms/productForm";

export default function Form({formType, product = null}) {
    return (
        <>
            <section className="container mx-auto p-1 flex flex-col items-center w-min">
                {formType === 'login' && <LogInForm />}
                {/* {formType === 'product' && <ProductForm product={product}/>} */}
            </section>
        </>
    );
}
