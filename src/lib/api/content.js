import { resolve } from "path";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";

const CONTENT_FILENAME_EXTENSION = "mdx";
const CONTENT_DIR_SLUG = "src/_content";
const CONTENT_DEFAULT_ENCODING = "utf-8";

const resolveContentPath = (...type) =>
  resolve(process.cwd(), CONTENT_DIR_SLUG, ...type);

export const stripExtension = (fileName = "") => fileName.split(".")[0];

export async function getSingleContent(slug) {
  const fileName = `${slug}.${CONTENT_FILENAME_EXTENSION}`;
  const filePath = resolveContentPath(fileName);
  const fileContent = readFileSync(filePath, CONTENT_DEFAULT_ENCODING);

  const { data: frontmatter, content: rawContent } = matter(fileContent);
  const content = await serialize(rawContent);

  return { slug, frontmatter, content };
}

export function getAllContentByType(type, { recursive = false } = {}) {
  const contentTypePath = resolveContentPath(type);
  const contentFileNames = readdirSync(contentTypePath, { recursive });

  return contentFileNames
    .filter((fileName) => fileName.endsWith(CONTENT_FILENAME_EXTENSION))
    .map((fileName) => {
      const contentFilePath = resolveContentPath(type, fileName);
      const fileContent = readFileSync(
        contentFilePath,
        CONTENT_DEFAULT_ENCODING
      );

      const slug = resolve("/", type, stripExtension(fileName));
      const { data: frontmatter, content } = matter(fileContent);

      return { slug, frontmatter, content };
    });
}
