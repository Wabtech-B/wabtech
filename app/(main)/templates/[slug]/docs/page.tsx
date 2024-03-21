import GoBack from "@/components/goback";
import HomeBreadcrumbs from "@/components/home-breadcrumbs";
import { Separator } from "@/components/ui/separator";

const getTemplate = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
};

const TemplateDetails = async ({ params }: { params: { slug: string } }) => {
  const template: Template = await getTemplate(params.slug);

  return (
    <div className="pt-20 px-2">
      <div className="max-w-6xl mx-auto px-2 mb-3 flex justify-end">
        <HomeBreadcrumbs separator="/" />
      </div>
      <div className="max-w-6xl mx-auto border-2 rounded-xl p-3">
        <h1 className="text-center text-3xl md:text-4xl font-bold my-4">
          {template.name} <span className="text-brand">Docs</span>
        </h1>
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="docs-outline md:col-span-1">
            <div dangerouslySetInnerHTML={{ __html: template.docsOutline }} />
          </div>
          <div className="docs-content md:col-span-3">
            <div dangerouslySetInnerHTML={{ __html: template.docsString }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
