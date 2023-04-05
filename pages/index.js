import Hero from '../components/homepage/Hero';
import FeaturedPosts from '../components/homepage/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage({ posts }) {
  return (
    <>
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
