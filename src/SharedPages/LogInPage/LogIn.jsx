import React, { useContext } from "react";
// import "./LogIn.css";
import { Button, Divider, Input, Link } from "@nextui-org/react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import GoogleIcon from "../../Components/Icons/GoogleIcon";
// import { MailIcon } from '../../Components/Icons/MailIcon';
// import { LockIcon } from '../../Components/Icons/LockIcon';

const LogIn = ({ setSelected }) => {
    const { logIn } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();



    const onSubmit = (data) => {
        console.log(data);
        logIn(data?.email, data?.password)

        // reset()
    };
    return (
        //         <div className="relative min-h-screen flex ">
        //             <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        //                 <div
        //                     className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
        //                     style={{
        //                         backgroundImage:
        //                             'url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80)',
        //                     }}
        //                 >
        //                     <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0"></div>
        //                     <div className="absolute triangle  min-h-screen right-0 w-16"></div>
        //                     <a
        //                         href="https://codepen.io/uidesignhub"
        //                         target="_blank"
        //                         title="codepen aji"
        //                         className="flex absolute top-5 text-center text-gray-100 focus:outline-none"
        //                     >
        //                         <img
        //                             src="/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
        //                             alt="aji"
        //                             className="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"
        //                         />
        //                         <p className="text-xl ml-3">
        //                             aji<strong>mon</strong>
        //                         </p>
        //                     </a>
        //                     {/* <img
        //                         src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
        //                         className="h-96 absolute right-5 mr-5"
        //                         alt="Background Image"
        //                     /> */}
        //                     <img
        //                         src="https://img.freepik.com/free-photo/close-up-child-enjoying-didactic-game_23-2149316900.jpg?w=360&t=st=1696595244~exp=1696595844~hmac=c7c523b5bbf4ca186a9bdfc3016446ddd2685f53469592d799b68b906b0db3f0"
        //                         className="h-96 absolute right-5 mr-5"
        //                         alt="Background Image"
        //                     />
        //                     <div className="w-full  max-w-md z-10">
        //                         <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
        //                             Reference site about Lorem Ipsum..
        //                         </div>
        //                         <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
        //                             What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
        //                             printing and typesetting industry Lorem Ipsum has been the
        //                             industry's standard dummy text ever since the 1500s when an
        //                             unknown printer took a galley of type and scrambled it to make a
        //                             type specimen book it has?
        //                         </div>
        //                     </div>
        //                     <ul className="circles">
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                         <li></li>
        //                     </ul>
        //                 </div>
        //                 <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        //                     <div className="max-w-md w-full space-y-8">
        //                         <div className="text-center">
        //                             <h2 className="mt-6 text-3xl font-bold text-gray-900">
        //                                 Welcome Back!
        //                             </h2>
        //                             <p className="mt-2 text-sm text-gray-500">
        //                                 Please sign in to your account
        //                             </p>
        //                         </div>
        //                         <div className="flex flex-row justify-center items-center space-x-3">
        //                             <a
        //                                 href="https://www.behance.net/ajeeshmon"
        //                                 target="_blank"
        //                                 className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg   bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
        //                             >
        //                                 <img className="w-4 h-4 object-cover mx-auto w-8 h-8 rounded-full w-10 h-10" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTUuOTk3IDMuOTg1aDIuMTkxdjMzLjgxNmMtLjM3OC0uMDUyLTEuNjc4LS4xNjktMy4xOTItLjE2OS0zLjE1OSAwLTUuMzIzIDEuOTg3LTUuMzIzIDUuNjM5djMuMzYxaC0zLjQ4NnY0LjI2NmgzLjQ4NnYxMC43MzRoNC4yNzR2LTEwLjczM2gzLjM0NWwuNTMxLTQuMjY2aC0zLjg3N3YtMi45MzljLjAwMS0xLjIzMzMuMzMzLTIuMDc3IDIuMDUxLTIuMDc3eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI

        // gc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" alt="aji" />
        //                                 <p className="text-xl ml-3">aji<strong>mon</strong></p>
        //                             </a>
        //                             <a
        //                                 href="https://twitter.com/ajeemon?lang=en"
        //                                 target="_blank"
        //                                 className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
        //                             >
        //                                 <img className="w-4 h-4" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9sYXlvdXQuc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyLjE4MTc1ODgsIDAsIDAgLTEyLjE4MTc1ODcsIDUxMiA1MTIpIj4gPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0ibm9uZSIgc3R5bGU9ImZpbGw6cmVkOyIgLz4gPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNhKSIgLz4gPC9zdmc+" alt="Twitter" />
        //                             </a>
        //                             <a
        //                                 href="https://in.linkedin.com/in/ajeeshmon"
        //                                 target="_blank"
        //                                 className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300"
        //                             >
        //                                 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyLjk5NCAyNHYtLjAwMmguMDA2di04LjgwMmMwLTQuMzA2LS45MjctNy42MjMtNS45NjEtNy42MjMtMi40MiAwLTQuMDQ0IDEuMzI4LTQuNzA3IDIuNTg3LTYuMzg2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
        //                                     className="w-4 h-4"
        //                                 />
        //                             </a>
        //                         </div>
        //                         <div className="flex items-center justify-center space-x-2">
        //                             <span className="h-px w-16 bg-gray-200"></span>
        //                             <span className="text-gray-300 font-normal">
        //                                 or continue with
        //                             </span>
        //                             <span className="h-px w-16 bg-gray-200"></span>
        //                         </div>
        //                         <form className="mt-8 space-y-6" action="#" method="POST">
        //                             <input type="hidden" name="remember" value="true" />
        //                             <div className="relative">
        //                                 <div className="absolute right-3 mt-4">
        //                                     <svg
        //                                         xmlns="http://www.w3.org/2000/svg"
        //                                         className="h-

        // 6 w-6 text-gray-600"
        //                                         fill="none"
        //                                         viewBox="0 0 24 24"
        //                                         stroke="currentColor"
        //                                     >
        //                                         <path
        //                                             strokeLinecap="round"
        //                                             strokeLinejoin="round"
        //                                             strokeWidth="2"
        //                                             d="M9 5l7 7-7 7"
        //                                         />
        //                                     </svg>
        //                                 </div>
        //                                 <label className="block text-sm font-medium text-gray-700">
        //                                     Email address
        //                                 </label>
        //                                 <input
        //                                     className="w-full px-4 py-2 mt-1 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        //                                     type="email"
        //                                     name="email"
        //                                     id="email"
        //                                     autoComplete="email"
        //                                     required
        //                                 />
        //                             </div>
        //                             <div className="relative">
        //                                 <div className="absolute right-3 mt-4">
        //                                     <svg
        //                                         xmlns="http://www.w3.org/2000/svg"
        //                                         className="h-6 w-6 text-gray-600"
        //                                         fill="none"
        //                                         viewBox="0 0 24 24"
        //                                         stroke="currentColor"
        //                                     >
        //                                         <path
        //                                             strokeLinecap="round"
        //                                             strokeLinejoin="round"
        //                                             strokeWidth="2"
        //                                             d="M9 5l7 7-7 7"
        //                                         />
        //                                     </svg>
        //                                 </div>
        //                                 <label className="block mt-4 text-sm font-medium text-gray-700">
        //                                     Password
        //                                 </label>
        //                                 <input
        //                                     className="w-full px-4 py-2 mt-1 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        //                                     type="password"
        //                                     name="password"
        //                                     id="password"
        //                                     autoComplete="current-password"
        //                                     required
        //                                 />
        //                             </div>
        //                             <div className="flex items-center justify-between">
        //                                 <div className="flex items-center">
        //                                     <input
        //                                         type="checkbox"
        //                                         id="remember_me"
        //                                         name="remember_me"
        //                                         className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        //                                     />
        //                                     <label
        //                                         htmlFor="remember_me"
        //                                         className="block ml-2 text-sm text-gray-900"
        //                                     >
        //                                         Remember me
        //                                     </label>
        //                                 </div>
        //                                 <div className="text-sm">
        //                                     <a
        //                                         href="#"
        //                                         className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                                     >
        //                                         Forgot your password?
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <button
        //                                     type="submit"
        //                                     className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        //                                 >
        //                                     Sign in
        //                                 </button>
        //                             </div>
        //                         </form>
        //                         <p className="mt-2 text-sm text-gray-600">
        //                             Don't have an account?{" "}
        //                             <a
        //                                 href="#"
        //                                 className="font-medium text-blue-600 hover:underline"
        //                             >
        //                                 Create an account
        //                             </a>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        // <Modal
        //     isOpen={isOpen}
        //     onOpenChange={onOpenChange}
        //     placement="top-center"
        //     backdrop="blur"
        //     motionProps={{
        //         variants: {
        //             enter: {
        //                 y: 0,
        //                 opacity: 1,
        //                 transition: {
        //                     duration: 0.3,
        //                     ease: "easeOut",
        //                 },
        //             },
        //             exit: {
        //                 y: -20,
        //                 opacity: 0,
        //                 transition: {
        //                     duration: 0.2,
        //                     ease: "easeIn",
        //                 },
        //             },
        //         }
        //     }}
        // >
        //     <ModalContent>
        //         {(onClose) => (
        //             <>
        //                 <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
        //                 <ModalBody>
        //                     <Input
        //                         autoFocus
        //                         endContent={
        //                             <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        //                         }
        //                         label="Email"
        //                         placeholder="Enter your email"
        //                         variant="bordered"
        //                     />
        //                     <Input
        //                         endContent={
        //                             <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        //                         }
        //                         label="Password"
        //                         placeholder="Enter your password"
        //                         type="password"
        //                         variant="bordered"
        //                     />
        //                     <div className="flex py-2 px-1 justify-between">
        //                         <Checkbox
        //                             classNames={{
        //                                 label: "text-small",
        //                             }}
        //                         >
        //                             Remember me
        //                         </Checkbox>
        //                         <Link color="primary" href="#" size="sm">
        //                             Forgot password?
        //                         </Link>
        //                     </div>
        //                 </ModalBody>
        //                 <ModalFooter>
        //                     <Button color="danger" variant="flat" onPress={onClose}>
        //                         Close
        //                     </Button>
        //                     <Button color="primary" onPress={onClose}>
        //                         Sign in
        //                     </Button>
        //                 </ModalFooter>
        //             </>
        //         )}
        //     </ModalContent>
        // </Modal>
        <div className="h-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" {...register('email', { required: true })} />
                <Input
                    isRequired
                    {...register('password', { required: true })}
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                />
                <p className="text-center cursor-pointer text-small">
                    Need to create an account?{" "}
                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                        Sign up
                    </Link>
                </p>
                <div className="flex gap-2 justify-end">
                    <Button type="submit" fullWidth color="primary">
                        Login
                    </Button>
                </div>
                <Divider orientation="horizontal" />
            </form>
            <GoogleIcon />
        </div>
    );
};

export default LogIn;

