// import Categories from "../_components/templates/categories";
import Filters from "../_components/templates/filters";
import ExploreHero from "../_components/templates/hero";
import Sort from "../_components/templates/sort";
import TemplateList from "../_components/templates/template-list";
import TemplatePagination from "../_components/templates/template-pagination";

export const metadata = {
  title: "Templates",
};

type SearchParams = {
  category: string;
  type: string;
  framework: string;
  styling: string;
  page: string;
  search: string;
  sort: string;
};

const getTemplates = async (searchParams: SearchParams) => {
  const queryString = Object.entries(searchParams)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${encodeURIComponent(v)}`).join("&");
      } else {
        return `${key}=${encodeURIComponent(value)}`;
      }
    })
    .join("&");
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/templates?limit=8`;
  const urlWithQuery = queryString ? `${apiUrl}&${queryString}` : apiUrl;

  const res = await fetch(urlWithQuery, { cache: "no-store" });
  return res.json();
};

// const getTemplateCategories = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/templates/categories`,
//     { cache: "no-store" }
//   );
//   return res.json();
// };

type TTemplate = {
  templates: Template[];
  filtersCount: any;
  categoryFilterCounts: any;
  pages: number;
  total: number;
  startSize: number;
  endSize: number;
};

const Explore = async ({ searchParams }: { searchParams: SearchParams }) => {
  const {
    templates,
    pages,
    filtersCount,
    categoryFilterCounts,
    total,
    startSize,
    endSize,
  }: TTemplate = await getTemplates(searchParams);

  // const categories: TemplateCategory[] = await getTemplateCategories();

  return (
    <>
      <ExploreHero />
      <div className="max-w-7xl mx-auto px-3">
        {/* <Categories categories={categories} /> */}
        <div className="flex-center-between mt-6 relative z-10">
          <Filters filtersCount={filtersCount} />
          <Sort />
        </div>
        <TemplateList templates={templates} />
        <TemplatePagination pages={pages} />
      </div>
    </>
  );
};

export default Explore;
