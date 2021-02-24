import fs from "fs";
import matter from "gray-matter";
import remark from "remark";
import remarkHtml from "remark-html";

const MD_DIRECTORY = "./md";

interface Path {
  params: {
    id: string;
  };
}

const getPaths = (): Path[] => {
  return fs
    .readdirSync(MD_DIRECTORY)
    .map(fileName => fileName.replace(/\.md$/, ""))
    .map(postName => ({ params: { id: postName } }));
};

const getPostContent = async (id: string): Promise<string> => {
  const filePath = `${MD_DIRECTORY}/${id}.md`;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content);

  return processedContent.toString();
};

export { getPostContent, getPaths };
