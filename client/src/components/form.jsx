import { useState } from "react";
import LogInForm from './ui/forms/logInForm';
import OrderForm from './ui/forms/orderForm';
import ProductForm from "./ui/forms/productForm";

export default function Form({formType, product = null}) {
    return (
        <>
            <section className="container mx-auto p-1 flex flex-col items-center w-min">
                {formType === 'login' && <LogInForm />}
                {formType === 'order' && <OrderForm /> }
                {/* {formType === 'product' && <ProductForm product={product}/>} */}
            </section>
        </>
    );
}
