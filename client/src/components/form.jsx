import { useState } from "react";
import LogInForm from './ui/forms/logInForm';
import ProductForm from "./ui/forms/productForm";

export default function Form({formType, product = null}) {
    return (
        <>
            <section className="container">
                {formType === 'login' && <LogInForm />}
                {/* {formType === 'product' && <ProductForm product={product}/>} */}
            </section>
        </>
    );
}
