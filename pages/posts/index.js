import AllPosts from '@/components/posts/AllPosts';
import { getAllPosts } from '@/lib/posts-util';
import Head from 'next/head';

export default function PostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
