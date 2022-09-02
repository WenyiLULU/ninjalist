import Head from "next/head";

export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(ninja => {
        return {params : {id : ninja.id.toString()}}
    })
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const data = await res.json();

    return {
        props: {ninja: data}
    }
}

const NinjaDetail = ({ninja}) => {
    return ( 
        <>
        <Head>
            <title>Ninja Detail | {ninja.name}</title>
        </Head>
        <div>
            <h1>{ninja.name} Detail Page</h1>
            <p><strong>website :</strong> {ninja.website}</p>
            <p><strong>E-Mail :</strong> {ninja.email}</p>
            <p><strong>City :</strong> {ninja.address.city}</p>
        </div>
        </>
        
     );
}
 
export default NinjaDetail;