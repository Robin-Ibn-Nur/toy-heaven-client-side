import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, User } from "@nextui-org/react";
import { delay, motion } from 'framer-motion'


const Blogs = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const blogs = [
        {
            name: "RoBiN",
            followers: 1200,
            questions: [

                {
                    question: "How can you increase user engagement on social media?",
                    answer:
                        "Increasing user engagement involves asking questions, running polls, responding to comments, sharing user-generated content, and hosting giveaways or contests."
                }
            ]
        },
        {
            name: "Bob",
            followers: 800,
            questions: [

                {
                    question: "How can parents choose age-appropriate toys for their kids?",
                    answer:
                        "Parents should consider a toy's recommended age, their child's interests, and abilities. They should also prioritize safety and avoid small parts for young children."
                }
            ]
        },
        {
            name: "Charlie",
            followers: 1500,
            questions: [

                {
                    question: "How can parents encourage imaginative play in their children?",
                    answer:
                        "Parents can encourage imaginative play by providing open-ended toys, joining in on playtime, offering prompts, and allowing kids to take the lead in creating stories and scenarios."
                }
            ]
        },
        {
            name: "David",
            followers: 600,
            questions: [
                {
                    question: "How can parents strike a balance between screen time and playtime for their children?",
                    answer:
                        "Parents can set screen time limits, create a schedule that includes both structured play and screen time, and encourage activities that don't involve screens, like sports or reading."
                }
            ]
        }
    ];

    // console.log(blogs[0].name); 
    // console.log(blogs[0].questions[0].question);
    // console.log(blogs[0].questions[0].answer); 
    const variants = {
        visible: (custom) => ({
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    return (
        // <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        //     {blogs.map((item, index) => (
        //         <div
        //             key={index}
        //             className="border border-gray-200 p-4 rounded-lg hover:shadow-lg hover:bg-orange-200 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:text-blue-500 cursor-pointer"
        //         >
        //             <User
        //                 name={item.name}
        //                 description="Product Designer"
        //                 avatarProps={{
        //                     src: "https://avatars.githubusercontent.com/u/30373425?v=4"
        //                 }}
        //             />
        //             {/* <h3 className="text-lg font-semibold text-center ">
        //                 Writer: {item.name}
        //             </h3> */}
        //             <div className="text-sm mt-2 gap-5">
        //                 {item.questions.map((q, qIndex) => (<div key={qIndex}>
        //                     <h5 className="text-2xl font-semibold leading-none text-default-600 mb-2">
        //                         Question: {q.question}</h5>
        //                     <p><b>Answer:</b> {q.answer}</p>
        //                 </div>))}
        //             </div>
        //         </div>
        //     ))}
        // </div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            transformTemplate={({ x, rotate }) => `rotate(${rotate}deg) translateX(${x}px)`}
            className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
            {blogs.map((item, index) => (
                <motion.div


                    key={index}
                    className="border border-gray-200 p-4 rounded-lg hover:shadow-lg hover:bg-orange-200 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:text-blue-500 cursor-pointer"
                >
                    <User
                        name={item.name}
                        description="Product Designer"
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                        }}
                    />
                    <div className="text-sm mt-2 gap-5">
                        {item.questions.map((q, qIndex) => (<div key={qIndex}>
                            <h5 className="text-2xl font-semibold leading-none text-default-600 mb-2">
                                Question: {q.question}</h5>
                            <p><b>Answer:</b> {q.answer}</p>
                        </div>))}
                    </div>
                </motion.div>
            ))}
        </motion.div>

    );
};

export default Blogs;