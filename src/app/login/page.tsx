"use client";

import { useState } from 'react';
import Link from 'next/link'
export default function LoginPage(){

    const[textField,setTextField] = useState("");
    function handleClick(){

    }
    throw new Error('Not today!')
    return(
        <div className="text-center">
            <h1 className="p-4">Hello Login</h1>
            <label htmlFor="text">Enter Anything:</label>
            <input type="text" onChange={(e)=> setTextField(e.target.value)} value={textField}  />
            <button onClick={handleClick}>Submit</button>
            <br />
            <Link href="/">Home</Link>
        </div>
    );
}