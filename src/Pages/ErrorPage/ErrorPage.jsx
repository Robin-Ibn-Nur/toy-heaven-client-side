import { Link, useRouteError } from "react-router-dom";
import errorBg from "../../assets/images/Error.jpg"
import { Button } from "@nextui-org/button";
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div
            id="error-page"
            className={`flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${errorBg})` }}
        >
            <h1 className="text-5xl text-white font-bold">Oops!</h1>
            <p className="text-2xl text-white">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg text-white italic">{error.statusText || error.message}</p>
            <Link to="/"
                className="mt-4 outline hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            >
                Go Back Home
            </Link>
        </div>

    );
};

export default ErrorPage;