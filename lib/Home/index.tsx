import fs from "fs";

const getAllPosts = (): string[] => {
  const MD_DIRECTORY = "./md";
  return fs
    .readdirSync(MD_DIRECTORY)
    .map(fileName => fileName.replace(/\.md$/, ""));
};

export { getAllPosts };
