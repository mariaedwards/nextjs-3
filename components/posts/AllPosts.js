import Grid from './Grid';
import classes from './AllPosts.module.css';
export default function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <Grid posts={posts} />
    </section>
  );
}
