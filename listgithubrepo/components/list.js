import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { fetchRepository } from "../redux/features/repos/reposSlice";

export default function List() {
    const dispatch = useDispatch();
    const {search, repos, isLoading} = useSelector((state) => state.repos);

    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString("en-US", options);
    }

    const formatTime = (string) => {
        return new Date(string).toLocaleTimeString("it-IT");
    }

    const [table, setTable] = useState({
        page: 1,
        per_page: 10,
        direction: "asc",
    })

    const handlePrev = () => {
        setTable((current) => ({...current, page: current.page - 1}));
    }

    const handleNext = () => {
        setTable((current) => ({...current, page: current.page + 1}))
    }

    useEffect(() => {
        dispatch(fetchRepository({
            search,
            ...table
        }))
    }, [search, table, dispatch])

    useEffect(() => {
        setTable((current) => ({...current, page: 1}));
    }, [search])

    return(
        <div className="p-2">
            {repos.length === 0 ? (
                <h4>Data not found</h4>
            ) : isLoading ? (
                <h4>Loading...</h4>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Language</th>
                            <th scope="col">Visibility</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((e, i) => (
                            <tr key={i}>
                                <th scope="row">{((table.page - 1) * table.per_page) + (i + 1)}</th>
                                <td><Link href={e.html_url} passHref><u>{e.name}</u></Link></td>
                                <td>{e.language || "-"}</td>
                                <td>{e.visibility}</td>
                                <td>{e.description || "No description"}</td>
                                <td>{formatTime(e.created_at)} {formatDate(e.created_at)}</td>
                                <td>{formatTime(e.updated_at)} {formatDate(e.updated_at)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="d-flex flex-row gap-3 align-items-center">
                <button className="btn btn-primary" onClick={handlePrev} disabled={table.page <= 1}>Prev</button>
                <p>{table.page}</p>
                <button className="btn btn-primary" onClick={handleNext} disabled={repos.length === 0 || repos.length !== table.per_page}>Next</button>
            </div>
        </div>
    )
}