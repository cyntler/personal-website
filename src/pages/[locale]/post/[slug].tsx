import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  withLocalesStaticPaths,
  withLocalesStaticProps,
} from 'next-locales/server';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useTranslation } from 'next-locales';

import { Seo } from '~/components/Seo';
import { Layout } from '~/components/Layout';
import { POSTS_MDX_DIR } from '~/constants';
import { readMdxByFileName } from '~/staticUtils/readMdxByFileName';
import { getDirectoryFileNames } from '~/staticUtils/getDirectoryFileNames';
import { arrayToStaticPaths } from '~/staticUtils/arrayToStaticPaths';

interface PostViewPageProps {
  slug: string;
  source: MDXRemoteSerializeResult;
  frontMatter: any;
}

const PostViewPage: NextPage<PostViewPageProps> = ({
  source,
  frontMatter: { title },
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={title} />
      <Layout>
        <h1>
          {title} {t('homepage.title')}
        </h1>
        <MDXRemote {...source} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = withLocalesStaticProps(
  async ({ params }) => {
    const slug = params?.slug?.toString() ?? '';
    const mdxData = await readMdxByFileName(POSTS_MDX_DIR, slug);

    return {
      props: {
        slug,
        ...mdxData,
      },
    };
  },
);

export const getStaticPaths: GetStaticPaths = withLocalesStaticPaths(() => ({
  paths: arrayToStaticPaths(getDirectoryFileNames(POSTS_MDX_DIR), '/post'),
  fallback: false,
}));

export default PostViewPage;
