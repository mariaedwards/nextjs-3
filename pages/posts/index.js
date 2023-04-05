import AllPosts from '@/components/posts/AllPosts';
import { getAllPosts } from '@/lib/posts-util';

export default function PostsPage({ posts }) {
  return (
    <>
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
