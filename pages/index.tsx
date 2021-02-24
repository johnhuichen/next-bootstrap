import { GetStaticProps } from "next";
import Link from "next/link";

import Header from "components/shared/Header";
import { getAllPosts } from "lib/Home";

import styles from "./index.module.css";

interface Props {
  posts: string[];
}

const Home: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.postContainer}>
        {posts.map(post => (
          <Link href={`/posts/${post}`} key={`post-${post}`}>
            <a href={`/posts/${post}`} className={styles.postLink}>
              {post}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  const props = { posts };
  return { props };
};

export default Home;
