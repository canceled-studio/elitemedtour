import {
  getAllContentByType,
  getAllContentSlugsByType,
} from "@/lib/api/content";
import { ContentList } from "@/components/content-list";

export default function Main() {
  return <ContentList />;
}

export const getStaticProps = () => {
  const items = getAllContentByType("main");

  return {
    props: {
      items,
    },
  };
};
