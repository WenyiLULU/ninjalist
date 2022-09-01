import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    },[])
    return ( 
        <div className="not-found">
            <h1>Ooooops... </h1>
            <h1>This page is not exist ...</h1>
            <p>Go Back to <Link href='/'><a>HOMEPAGE</a></Link></p>
            
        </div>
     );
}
 
export default NotFound
