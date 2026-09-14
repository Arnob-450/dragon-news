'use client';
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSidebar = () => {

    const handelGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data, 'google data');
    }
    const handelGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        console.log(data, 'gitHub data');
    }
    return (
        <div>
            <h2 className='font bold text-lg mb-4'>Login With</h2>
            <div className="flex flex-col gap-2">
                <button className='btn border-blue-500 text-blue-500' onClick={() => handelGoogleSignin()}>
                    <FaGoogle />Login with Google
                </button>


                <button className='btn' onClick={() => handelGithubSignin()}>
                    <FaGithub />Login with Github
                </button>
            </div>


        </div>
    );
};

export default RightSidebar;