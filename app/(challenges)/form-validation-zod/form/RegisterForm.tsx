'use client';
import { useState } from "react";
import { checkValidation } from "../validation/checkValidation";
import { registerFormSchema } from "../validation/register-form.validation";

type User = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type ValidationErrors = {
    [key: string]: string;
}

export default function RegisterForm() {

    const [formData, setFormData] = useState<User>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValidationErrors(prev => ({
            ...prev,
            [e.target.name]: '',
        }))

        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const checkResult = checkValidation<User>(registerFormSchema, formData);
        
        if (!checkResult.success) {
            setValidationErrors({...checkResult.errors});
        } else {
            setValidationErrors({});
        }
    }
    
    return(
        <div className="flex flex-col justify-center items-center">
            <form className="border w-[500px] flex flex-col gap-2 p-2 justify-center items-center rounded" onSubmit={submitHandler}>
            <h2>Register Form</h2>
                <div className="input-group flex flex-col w-full">
                    <div className="flex flex-col w-full">
                    <label className="mb-2" htmlFor="username">Username:</label>
                    <input className="bg-white text-black p-2 rounded" type="text" id="username" name="username" value={formData.username} onChange={changeHandler} />
                    </div>
                    {validationErrors.username && <span className="error text-red-500 pt-1">{validationErrors.username}</span>}
                </div>
                <div className="input-group flex flex-col w-full">
                    <label className="mb-2" htmlFor="email">Email:</label>
                    <input className="bg-white text-black p-2 rounded" type="email" id="email" name="email" value={formData.email} onChange={changeHandler} />
                    {validationErrors.email && <span className="error text-red-500 pt-1">{validationErrors.email}</span>}
                </div>
                <div className="input-group flex flex-col w-full">
                    <label className="mb-2" htmlFor="password">Password:</label>
                    <input className="bg-white text-black p-2 rounded" type="password" id="password" name="password" value={formData.password} onChange={changeHandler} />
                    {validationErrors.password && <span className="error text-red-500 pt-1">{validationErrors.password}</span>}
                </div>
                <div className="input-group flex flex-col w-full">
                    <label className="mb-2" htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="bg-white text-black p-2 rounded" type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} />
                    {validationErrors.confirmPassword && <span className="error text-red-500 pt-1">{validationErrors.confirmPassword}</span>}
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 cursor-pointer">Register</button>
            </form>
        </div>
    )
}