import React, { useState } from 'react';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import LogIn from '../LogInPage/LogIn';
import SignUp from '../SignUpPage/SignUp';
// import bgImage from "../../../public/background.jpg"; // Import your background image
// import bgImage from "../../../public/auth.jpg"; // Import your background image
// import bgImage from "../../../public/authentication.jpg"; // Import your background image
import bgImage from "../../../public/haha.jpg"; // Import your background image

const SignUpAndLogInPage = () => {
    const [selected, setSelected] = useState("login");

    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                height: "100vh",
                width: "100%",
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat"

            }}
            className="flex flex-col justify-center items-center w-full h-screen"
        >
            <Card className="max-w-full w-[360px] backdrop-blur-sm bg-white/30">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="login" title="Login">
                            <LogIn setSelected={setSelected} />
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                            <SignUp setSelected={setSelected} />
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
};

export default SignUpAndLogInPage;
