import { useState } from "react";
import { Link } from "react-router-dom";
import RequiredField from "./requiredField.jsx";
import { useQueriesContext } from "../../../utils/QueriesContext.jsx";
import auth from '../../../utils/auth.js'

export default function LoginForm() {

    const { mutations, validateEmail, classNames } = useQueriesContext();

    const [form, setForm] = useState({
        email: { address: '', valid: true },
        password: ''
    });

    const [showRequired, setShowRequired] = useState({
        email: false,
        password: false
    });
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: name === 'email' ? { address: value, valid: validateEmail(value) } : value
        });
        setShowRequired({
            ...showRequired,
            [name]: !value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(form.email.address)) {
            setErrorMessage('Invalid email');
            return;
        } else if (!form.password) {
            setErrorMessage('Password is required');
            return;
        }

        try {
            // Call loginUser mutation function with the form data
            const token = await mutations.logIn({
                variables: {
                    email:form.email.address,
                    password: form.password
                }
            });

            // Reset form state
            setForm({
                email: { address: '', valid: true },
                password: ''
            });
            setShowRequired({
                email: false,
                password: false
            });
            setErrorMessage('');

            auth.login(token.data.login.token)
        } catch (error) {
            console.error('Error occurred during form submission:', error);
            setErrorMessage('An error occurred while processing your request');
        }
    };

    return (
        <>
            <p className="text-center sub">MaterialManager</p>
            <form className="" onSubmit={handleFormSubmit}>
                <section className="">
                    <section className="mx-auto my-3">
                        <label htmlFor="email" className="">
                            Email
                        </label>
                        <section className="">
                            <input
                                value={form.email.address}
                                type="email"
                                name="email"
                                id="email"
                                onMouseLeave={() => setShowRequired({ ...showRequired, email: !form.email.address })}
                                onChange={handleInputChange}
                                className={classNames(!form.email.valid && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {!form.email.valid && <p className='text-red-700'>Invalid email</p>}
                            {showRequired.email && !form.email.address && <RequiredField />}
                        </section>
                    </section>
                    <section className="mx-auto my-3">
                        <label htmlFor="password" className="">
                            Password
                        </label>
                        <section className="">
                            <input
                                value={form.password}
                                type="password"
                                name="password"
                                id="password"
                                onMouseLeave={() => setShowRequired({ ...showRequired, password: !form.password })}
                                onChange={handleInputChange}
                                className={classNames(showRequired.password && !form.password && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {showRequired.password && !form.password && <RequiredField />}
                        </section>
                    </section>
                    <button
                        type="submit"
                        className="rounded-lg bg-zinc-600 text-white w-1/3 flex justify-center hover-tce mx-auto my-3 p-1"
                    >LogIn</button>
                        
                </section>
            </form>
            {errorMessage && (
                <section className="">
                    <p className="error-text">{errorMessage}</p>
                </section>
            )}
        </>
    )
}
