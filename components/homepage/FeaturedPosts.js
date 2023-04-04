import classes from './FeaturedPosts.module.css';
import Grid from '../posts/Grid';

export default function FeaturedPosts() {
  return (
    <section className={classes.latest}>
      <h2 className={classes.title}>Featured Posts</h2>
      <Grid posts={[{ id: 1, title: 'test', body: 'Body' }]} />
    </section>
  );
}
