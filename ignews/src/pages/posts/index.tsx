import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Como renomear vários arquivos de uma vez usando o terminal</strong>
            <p>Suponha que seu projeto tenha uma base de código com 150 arquivos JavaScript e você precisar migrar para TypeScript alterando as extensões dos arquivos. 🤔</p>
          </a>
        </div>
      </main>
    </>
  )
} 

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100
  })
  console.log(response)
  return {
    props: {
      
    }
  }
}