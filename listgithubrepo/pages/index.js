import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";
import List from '../components/list';
import Input from '../components/input';
import { useDispatch, useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const router = useRouter();

  const handleSearch = () => {
    dispatch()
  }

  return (
    <>
      <Head>
        <title>Github Repository</title>
        <meta name="description" content="List of github user repository" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
      <main className={styles.main}>
        <h1>LIST OF GITHUB USER REPOSITORIES</h1>
        <h4>Search: "{search}"</h4>
        <div className="d-flex flex-row align-items-center gap-2">
          <p>Search: {search}</p>
          <Input type="text" className="form-control" placeholder="Search"  />
        </div>
        <List />
      </main>
    </>
  )
}
