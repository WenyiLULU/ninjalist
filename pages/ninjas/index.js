import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {ninjas : data}
    };
}

const Ninjas = ({ninjas}) => {
    return ( 
        <>
        <Head>
            <title>Ninjas List</title>
        </Head>
        <div>
            <h1>
                Here are all Ninjas
            </h1>
            {ninjas.map((ninja) => (
                <Link href={'/ninjas/'+ninja.id} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
        
     );
}
 
export default Ninjas;