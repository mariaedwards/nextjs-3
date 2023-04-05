import PostHeader from './PostHeader';
import classes from './PostContent.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting started with next js',
  content: '## nextjs is awesome',
  image: 'getting-started-nextjs.png',
  date: '2023-02-01',
};
export default function PostContent({ post }) {
  const { image, title, content, date, slug } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
