import { useState } from "react";
import Input from "../components/customInput/Input";
import Button from "../components/Button";

const SignIn = () => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserName("");
        setPassword("");

    }
    return ( 
        <div className="w-10/12 mx-auto py-8 flex justify-center items-center">
            <div className="h-[22rem] w-11/12 lg:w-1/2 shadow-inner shadow-[#1e293b] flex flex-col items-center gap-8 py-8">
                <h2 className="text-center text-white font-lobster font-bold text-2xl">
                    Sign In
                </h2>
                <form 
                onSubmit={handleSubmit}
                className=" w-8/12 md:w-1/2 flex flex-col items-center gap-4"
                >
                    <Input type="text" span="User Name" value={userName} setValue={setUserName}/>
                    <Input type="password" span="Password" value={password} setValue={setPassword}/>
                    <div className="w-full md:w-4/5">
                        <Button text={"Sign In"} />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignIn;