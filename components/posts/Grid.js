import classes from './Grid.module.css';
import Item from './Item';

export default function Grid({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
        return <Item key={post.slug} post={post} />;
      })}
    </ul>
  );
}
