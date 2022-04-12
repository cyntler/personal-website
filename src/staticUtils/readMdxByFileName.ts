import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const readMdxByFileName = async (
  directoryPath: string,
  filename: string,
) => {
  const markdownContent = readFileSync(
    join(directoryPath, `${filename}.mdx`),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownContent);
  const source = await serialize(content);

  return {
    frontMatter,
    source,
  };
};
