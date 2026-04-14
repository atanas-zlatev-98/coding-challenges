import RegisterForm from "./form/RegisterForm";

export default function FormValidationZod() {
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-bold text-2xl">Form Validation with Zod</h1>
            <RegisterForm/>
        </div>
    )
}