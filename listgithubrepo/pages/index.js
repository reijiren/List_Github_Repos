import Head from 'next/head';
import styles from '../styles/Home.module.css';
import List from '../components/list';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from "../redux/features/repos/reposSlice";
import { useState } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.repos);

  const [find, setFind] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(setSearch(find))
  }

  return (
    <>
      <Head>
        <title>Github Repository</title>
        <meta name="description" content="List of github user repository" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
      </Head>
      <main className={styles.main}>
        <h1>LIST OF GITHUB USER REPOSITORIES</h1>
        <h4>Search: "{search}"</h4>
        <form onSubmit={handleSearch}>
          <div className="d-flex flex-row align-items-center gap-2">
            <p>Search:</p>
            <input type="text" className="form-control" placeholder="Search" onChange={(e) => setFind(e.target.value)} />
          </div>
        </form>
        <List />
      </main>
    </>
  )
}
