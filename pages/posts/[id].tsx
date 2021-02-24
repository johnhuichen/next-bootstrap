import { GetStaticProps } from "next";

import Header from "components/shared/Header";
import { getPaths, getPostContent } from "lib/Posts";

import styles from "./[id].module.css";

interface Props {
  postContent: string;
}

const Post: React.FC<Props> = ({ postContent }: Props) => {
  return (
    <>
      <Header />
      <div
        className={styles.postContainer}
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPath = async () => {
  const paths = getPaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postContent = await getPostContent(params?.id as string);
  const props = { postContent };
  return { props };
};

export default Post;
