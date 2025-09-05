"use client"
import React from 'react';
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={"flex flex-row gap-5 pt-10 items-center"}>
            <div className={"flex flex-col items-start"}>
                <Image src={"/images/trackon_logo.png"} alt={"image"} width={200} height={200}/>
            </div>
            <div className={"text-2xl font-bold text-center items-center"}>
                <p> Rate Calculator</p>
            </div>

        </div>
    );
};

export default Navbar;