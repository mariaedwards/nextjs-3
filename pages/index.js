import Hero from '../components/homepage/Hero';
import FeaturedPosts from '../components/homepage/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';
export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>MB Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPosts();
  return {
    props: {
      posts,
    },
  };
}
