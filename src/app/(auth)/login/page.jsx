"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [isShowPassword, setIsShowPassword]= useState(false);

    const handleLoginFunc = async(data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/"
        });
        console.log(res, error);

        if(error) {
            alert(error.message);
        }
        else {
            alert("login Successful");
        }

    }
    console.log(errors);
    return (
        <div className='container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-2xl mb-3 '>Login your account</h2>
                <form action="" onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Type your email"
                            {...register('email', { required: "Email is required" })} />

                        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type={isShowPassword?"text":"password"}
                            className="input"
                            placeholder="Type your password"
                            {...register('password', { required: "Password is required" })} />
                         <span className='absolute right-2 top-5' onClick={()=>setIsShowPassword(!isShowPassword)}> {isShowPassword?<FaEye></FaEye>:<FaEyeSlash />}</span>
                        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}

                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white ">Login</button>
                </form>

                <p className='mt-6 text-sm'>Do not have an account? <Link href="/register" className="text-red-500 hover:underline">Register here</Link></p>

            </div>

        </div>
    );
};

export default LoginPage;