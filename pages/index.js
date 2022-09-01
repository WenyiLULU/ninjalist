import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      
      <h1 className={styles.title}>HOMEPAGE</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet. Eum Quis dolores ut unde voluptatibus et neque rerum et iusto galisum. Et facilis soluta ea asperiores aperiam vel delectus voluptas eos veritatis soluta. </p>
      <p className={styles.text}>Lorem ipsum dolor sit amet. Eum Quis dolores ut unde voluptatibus et neque rerum et iusto galisum. Et facilis soluta ea asperiores aperiam vel delectus voluptas eos veritatis soluta. </p>
      <Link href="/ninjas">
        <a className={styles.btn}>Ninja List</a>
      </Link>

    </div>
  )
}
