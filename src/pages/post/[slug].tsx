import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Seo } from '~/components/Seo';
import { Layout } from '~/components/Layout';
import { POSTS_MDX_DIR } from '~/constants';
import { getMdxDataByFileName } from '~/nextUtils/getMdxDataByFileName';
import { getDirectoryFileNames } from '~/nextUtils/getDirectoryFileNames';
import { arrayToStaticPaths } from '~/nextUtils/arrayToStaticPaths';

interface PostViewPageProps {
  slug: string;
  source: MDXRemoteSerializeResult;
  frontMatter: any;
}

export const PostViewPage: NextPage<PostViewPageProps> = ({
  source,
  frontMatter: { title },
}) => (
  <>
    <Seo title={title} />
    <Layout>
      <h1>{title}</h1>
      <MDXRemote {...source} />
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps<PostViewPageProps> = async ({
  params,
}) => {
  const slug = params?.slug?.toString() ?? '';
  const mdxData = await getMdxDataByFileName(POSTS_MDX_DIR, slug);

  return {
    props: {
      slug,
      ...mdxData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: arrayToStaticPaths(getDirectoryFileNames(POSTS_MDX_DIR), '/post'),
  fallback: false,
});

export default PostViewPage;
