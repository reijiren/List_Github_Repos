import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function List() {
    const router = useRouter();

    const [result, setResult] = useState([]);

    useEffect(() => {
        if(s){
            axios.get(`https://api.github.com/users/${s}/repos`)
            .then((res) => {
                console.log(res);
                // setResult(res);
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }, [s])

    return(
        <div className="">
            
        </div>
    )
}