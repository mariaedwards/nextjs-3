import PostContent from '@/components/post/PostContent';
import { getPostData } from '@/lib/posts-util';
import Head from 'next/head';
export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export function getStaticProps({ params }) {
  const slug = params.slug;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
  };
}
