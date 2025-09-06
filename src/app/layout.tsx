import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: "Trackon Rate Calculator",
    description: "Rate Calculation based on user input",
};

export default function RootLayout({children}: {children: React.ReactNode})
{
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
