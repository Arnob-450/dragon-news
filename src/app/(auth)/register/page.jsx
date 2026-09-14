"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const RegisterPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = async (data) => {
        console.log(data);
        const { name, email, password, photoUrl } = data;


        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photoUrl,
            callbackURL: "/"
        });

        console.log(res, error);
        if (error) {
            alert(error.message);
        }
        else {
            alert(res.message);
        }
    }


    return (
        <div className='container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-2xl mb-3 '>Register your account</h2>
                <form action="" onSubmit={handleSubmit(handleRegisterFunc)} className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type your name"
                            {...register('name', { required: "Name is required" })} />

                        {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your Photo URL"
                            {...register('photoUrl', { required: "Photo URL is required" })} />

                        {errors.photoUrl && <span className='text-red-500 text-sm'>{errors.photoUrl.message}</span>}

                    </fieldset>
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
                            type={isShowPassword ? "text" : "password"}
                            className="input"
                            placeholder="Type your password"
                            {...register('password', { required: "Password is required" })} />
                        <span className='absolute right-2 top-5' onClick={() => setIsShowPassword(!isShowPassword)}> {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash />}</span>
                        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}

                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white ">Register</button>
                </form>

                <p className='mt-6 text-sm'>Already have an account? <Link href="/login" className="text-red-500 hover:underline">Login here</Link></p>

            </div>

        </div>
    );
}


export default RegisterPage;