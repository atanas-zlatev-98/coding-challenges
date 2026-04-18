import Link from "next/link";
import RegisterForm from "./form/RegisterForm";

export default function FormValidationZod() {
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-bold text-2xl">Form Validation with Zod</h1>
            <RegisterForm/>

            <div className="mt-5">
                <Link href="https://github.com/atanas-zlatev-98/coding-challenges/tree/master/app/(challenges)/form-validation-zod" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
            </div>
        </div>
    )
}