import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Base from './base'

export default function Home() {
  return (
    <Base>
      index<br/>
      <Link href="/about">About</Link>
    </Base>
  )
}
