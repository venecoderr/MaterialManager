import { useState } from "react";
import { useQueriesContext } from "../../../utils/QueriesContext.jsx"; // Update path if necessary
import RequiredField from "./requiredField.jsx";

export default function OrderForm() {
    const { mutations, queries, validateEmail, classNames } = useQueriesContext();
    const { materialsData, materialsLoading, materialsError } = queries.getMaterials();

    const [form, setForm] = useState({
        jobNumber: '',
        jobName: ''
    });

    const [showRequired, setShowRequired] = useState({
        jobNumber: false,
        jobName: false
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        setShowRequired({
            ...showRequired,
            [name]: !value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!form.jobNumber) {
            setErrorMessage('Job number is required');
            return;
        } else if (!form.jobName) {
            setErrorMessage('Job name is required');
            return;
        }

        // Process form submission (e.g., call a mutation if needed)
        setErrorMessage('');
    };

    return (
        <>
            <p className="text-center sub">MaterialManager</p>
            <form className="" onSubmit={handleFormSubmit}>
                <section className="">
                    <section className="mx-auto my-3">
                        <label htmlFor="jobNumber" className="">
                            Job Number
                        </label>
                        <section className="">
                            <input
                                value={form.jobNumber}
                                type="text"
                                name="jobNumber"
                                id="jobNumber"
                                onMouseLeave={() => setShowRequired({ ...showRequired, jobNumber: !form.jobNumber })}
                                onChange={handleInputChange}
                                className={classNames(showRequired.jobNumber && !form.jobNumber && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {showRequired.jobNumber && !form.jobNumber && <RequiredField />}
                        </section>
                    </section>
                    <section className="mx-auto my-3">
                        <label htmlFor="jobName" className="">
                            Job Name
                        </label>
                        <section className="">
                            <input
                                value={form.jobName}
                                type="text"
                                name="jobName"
                                id="jobName"
                                onMouseLeave={() => setShowRequired({ ...showRequired, jobName: !form.jobName })}
                                onChange={handleInputChange}
                                className={classNames(showRequired.jobName && !form.jobName && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {showRequired.jobName && !form.jobName && <RequiredField />}
                        </section>
                    </section>
                    <button
                        type="submit"
                        className="rounded-lg bg-zinc-600 text-white w-1/3 flex justify-center hover-tce mx-auto my-3 p-1"
                    >Submit</button>
                </section>
            </form>
            {errorMessage && (
                <section className="">
                    <p className="error-text">{errorMessage}</p>
                </section>
            )}
            {!materialsLoading && !materialsError && materialsData && (
                <section className="my-4">
                    <ul>
                        {materialsData.getMaterials.map(material => (
                            <li key={material.id}>{material.partName}</li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}
