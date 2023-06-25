import { resolve } from "path";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";

const CONTENT_DIR_SLUG = "src/_content";

const resolveContentTypePath = (type) =>
  resolve(process.cwd(), CONTENT_DIR_SLUG, type);

const resolveContentItemPath = (type, slug) =>
  resolve(process.cwd(), CONTENT_DIR_SLUG, type, slug);

export function getAllContentSlugsByType(type) {
  const contentTypePath = resolveContentTypePath(type);
  const contentFileNames = readdirSync(contentTypePath);

  return contentFileNames.map((fileName) => fileName.split(".")[0]);
}

export function getAllContentByType(type) {
  const contentTypePath = resolveContentTypePath(type);
  const contentFileNames = readdirSync(contentTypePath);
  return contentFileNames.map((slug) => {
    const contentFilePath = resolveContentItemPath(type, slug);
    const fileContent = readFileSync(contentFilePath, "utf-8");

    const { data, content } = matter(fileContent);

    return { slug, frontmatter: data, content };
  });
}
