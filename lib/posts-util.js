import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export function getPostData(fileId) {
  const postSlug = fileId.replace(/\.md$/, '');
  const postContent = fs.readFileSync(
    path.join(postsDirectory, `${postSlug}.md`),
    'utf8'
  );
  const { data, content } = matter(postContent);

  return { ...data, content, slug: postSlug };
}

export function getAllPosts() {
  const postFileNames = fs.readdirSync(postsDirectory);
  const allPosts = postFileNames.map((fileName) => getPostData(fileName));

  const sortedPosts = allPosts.sort((a, b) => new Date(a) - new Date(b));
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
