import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';
import Google from '../../Assets/Images/google.png';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signinError;

    if (user || userGoogle) {
        navigate(from, { replace: true });
    }

    if (loading || loadingGoogle) {
        return <Loading></Loading>
    }

    if (error || errorGoogle) {
        signinError = <p className='text-red-600'>{error?.message || errorGoogle.message} </p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div>
            <section className='flex justify-center items-center bg-gray-100'>
                <div className="container px-10 my-5 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="block bg-white shadow-lg rounded-lg w-96">
                            <div className="p-6 mx-6 flex flex-col justify-center">
                                <div className="text-center">
                                    <img
                                        className="mx-auto w-40"
                                        src={Logo}
                                        alt="logo"
                                    />
                                    <h4 className="text-xl font-semibold mb-2 pb-3 border-b-2 uppercase text-red-700">Music Store</h4>
                                    <p className="mb-4">Please login to your account</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Your email"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid Email'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="Your password"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 characters or longer'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        </label>
                                    </div>
                                    <input className='btn w-full max-w-xs text-white bg-rose-700' type="submit" value="Login" />
                                    {signinError}
                                </form>
                                <p className='text-center pt-2'>or <Link className="text-red-600" to="/login">Forgot password?</Link></p>
                                <p className='py-2'>Don't have an account? <Link className='text-green-600 font-semibold' to="/register">Register here</Link></p>
                                <div className="divider">OR</div>
                                <button onClick={() => signInWithGoogle()}
                                    className="btn btn-outline hover:bg-black hover:text-white"
                                ><img className="w-4 h-4 mr-2" src={Google} alt="" />Continue with Google</button>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    );
};

export default Login;