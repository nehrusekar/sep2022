      
import React from "react";
import{useForm} from "react-hook-form";
import * as yup  from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import './Register.css'

const schema=yup.object().shape({
    // FirstName:yup.string().required('please enter your First Name'),
    Name:yup.string().required('please enter your Name'), 
    email:yup.string().required('please enter your  valid email').required('enter email'),
    password:yup.string().required('please enter your password'),
    phoneNumber:yup.string().required('enter 10 digit your mobile number'),
})
function Register(){
    const {register,handleSubmit,formState:{errors,isValid,isDirty}}=useForm({
        resolver:yupResolver(schema),
        mode:'onChange'
    });
    return(
        <div className="header">
            <h1>Register Now</h1>
            <div id="forms">
                <form onSubmit={handleSubmit((data)=>{
                    console.log(data)
                 })}>
                    {/* <input {...register('FirstName')} type="text"  placeholder="First Name"></input>
                    <p>{errors.FirstName?.message}</p> */}
                    <input {...register('Name')}type="text"  placeholder="Name"></input>
                    <p>{errors.Name?.message}</p>
                    <input {...register('email')}type="email"  placeholder="Email"></input>
                    <p>{errors.email?.message}</p>
                    <input {...register('password')} type="password"  placeholder="password"></input>
                    <p>{errors.password?.message}</p>
                    <input {...register('phoneNumber')}type="number"  placeholder="phone number"></input>
                    <p>{errors.phoneNumber?.message}</p>
                    <button type="submit" disabled={ isDirty && !isValid } id="submit">submit</button>
                </form>
 
            </div>

        </div>
    )
}
export default Register