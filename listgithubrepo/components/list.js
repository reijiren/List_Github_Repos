import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepository } from "../redux/features/repos/reposSlice";

export default function List() {
    const dispatch = useDispatch();
    const {search, repos, isLoading} = useSelector((state) => state.repos);

    useEffect(() => {
        dispatch(fetchRepository({
            
        }))
    }, [search])

    return(
        <div className="">
            {repos ? (
                <h4>Data not found</h4>
            ) : isLoading ? (
                <h4>Loading...</h4>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Language</th>
                            <th scope="col">Visibility</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{JSON.stringify(repos)}</th>
                        </tr>
                    </tbody>
                </table>
            )
            }
        </div>
    )
}