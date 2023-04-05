import PostContent from '@/components/post/PostContent';
import { getPostData } from '@/lib/posts-util';

export default function PostPage({ post }) {
  return (
    <>
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
  console.log(post);
  return {
    props: {
      post,
    },
  };
}
