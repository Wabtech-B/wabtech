/* eslint-disable @next/next/no-img-element */
import NoResults from "@/components/no-results";
import Pill from "@/components/pill";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import BuiltWith from "../../_components/template-details/built-with";
import Changelog from "../../_components/template-details/changelog";
import RelatedTemplates from "../../_components/template-details/related-templates";
import Screenshots from "../../_components/template-details/screenshots";
import Techstack from "../../_components/template-details/techstack";
import PreviewModal from "../../_components/templates/preview-modal";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const template: Template = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/${slug}`
  ).then((res) => res.json());

  return {
    title: template.name,
  };
}

const getTemplate = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
};

const getRelatedTemplates = async (category: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates?page=1&limit=8&category=${category}`,
    { cache: "no-store" }
  );
  return res.json();
};

const TemplateDetails = async ({ params }: { params: { slug: string } }) => {
  const template: Template = await getTemplate(params.slug);
  const { templates }: { templates: Template[] } = await getRelatedTemplates(
    template.category.name
  );
  const relatedTemplates = templates.filter(
    (template) => template.slug !== params.slug
  );
  return (
    <>
      <section className="pt-16">
        <div className="relative">
          <img
            src={`/images/preview2.png`}
            alt={template.name}
            className="h-auto w-full"
          />
        </div>
      </section>
      <section>
        <div className=" mt-6 absolute right-2 top-14 p-2 bg-background rounded-xl border hidden md:flex-align-center">
          <PreviewModal url={`https://istudy-main.vercel.app`} />
          <Button asChild className="ml-4">
            <Link href="/buy">
              <span>
                <Download className="w-4 h-4" />
              </span>
              <span className="ml-2">Download</span>
            </Link>
          </Button>
        </div>
      </section>
      <div className="relative">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-30" />
        <section className="mt-14 max-w-7xl mx-auto px-3">
          <div>
            <h1
              className="text-2xl md:text-4xl font-semibold text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {template.name}
            </h1>
            <p
              className="mt-2 text-lg text-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {template.description || "No description"}
            </p>
            <div
              className="p-4 border rounded-xl w-fit mx-auto shadow-sm mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="mt-4 text-3xl md:text-6xl font-bold text-brand">
                {template.price ? `$${template.price}` : <span>Free</span>}
              </h1>
            </div>
            <div className="flex-center-center mt-6">
              <PreviewModal url={`https://istudy-main.vercel.app`} />
              <Button asChild className="ml-4">
                <Link href="/buy">
                  <span>
                    <Download className="w-4 h-4" />
                  </span>
                  <span className="ml-2">Download</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="mt-14 max-w-7xl mx-auto px-3">
          <BuiltWith languages={template.languages} />
        </section>
        <section className="mt-20 max-w-7xl mx-auto px-3">
          <Pill text="Screenshots" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Screenshots
          </h1>
          <Screenshots screenshots={template.screenshots} />
        </section>
        <section className="mt-20 max-w-7xl mx-auto px-3">
          <Pill text="Techstacks" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Techstacks
          </h1>
          <Techstack techstacks={template.techstacks} />
        </section>
        <section className="mt-20 max-w-7xl mx-auto px-3">
          <Pill text="Changelog" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Changelog
          </h1>
          <Changelog changelogs={template.changelogs} />
        </section>
        <section className="mt-28">
          <div className="max-w-7xl mx-auto px-3">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Related Templates
            </h1>
            {relatedTemplates.length < 1 && (
              <NoResults title="Related Templates" />
            )}
            <div className="mt-6">
              <RelatedTemplates templates={relatedTemplates} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TemplateDetails;
