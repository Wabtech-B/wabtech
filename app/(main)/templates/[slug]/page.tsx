/* eslint-disable @next/next/no-img-element */
import NoResults from "@/components/no-results";
import PPButtons from "@/components/paypal-buttons";
import Pill from "@/components/pill";
import { Metadata } from "next";
import BuiltWith from "../../_components/template-details/built-with";
import Changelog from "../../_components/template-details/changelog";
import RelatedTemplates from "../../_components/template-details/related-templates";
import Screenshots from "../../_components/template-details/screenshots";
import Techstack from "../../_components/template-details/techstack";
import Features from "../../_components/templates/features";
import PreviewModal from "../../_components/templates/preview-modal";
import { auth } from "@/auth";
import Link from "next/link";
import Alert from "@/components/alert";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    description: template.description,
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

  const session = await auth();

  return (
    <div>
      <section className="pt-16">
        <div className="relative">
          <img
            src={template.coverImage}
            alt={template.name}
            className="h-auto w-full"
          />
        </div>
      </section>
      <section>
        <div className=" mt-6 absolute right-2 top-14 p-2 bg-background rounded-xl border hidden md:flex-align-center">
          <PreviewModal url={template.previewUrl} />
        </div>
      </section>
      <div className="relative">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-20" />
        <section className="mt-14 max-w-6xl mx-auto px-3">
          <div>
            <h1
              className="text-2xl md:text-4xl font-semibold text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {template.name}
            </h1>
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
              <div>
                <div className="flex-center-center gap-2">
                  <PreviewModal url={template.previewUrl} />
                  {template.docsString && (
                    <Button
                      asChild
                      className="px-4 h-14 shadow-xl shadow-brand/20 rounded-full bg-transparent border border-brand text-brand hover:bg-transparent active:bg-transparent"
                    >
                      <Link
                        href={`/templates/${template.slug}/docs`}
                        className="cursor-pointer"
                      >
                        <span>
                          <FileText className="w-4 h-4" />
                        </span>
                        <span className="ml-2">Documentation</span>
                      </Link>
                    </Button>
                  )}
                </div>
                <div className="mt-8 flex-center-center flex-col">
                  <h1 className="text-2xl font-bold text-center mb-3">
                    Pay With
                  </h1>
                  <Alert title="About Payment" removable>
                    For now we only support Paypal but you can contact us incase
                    you want to pay with another method.
                  </Alert>
                  {!session ? (
                    <Link
                      href="/sign-in"
                      className="text-brand underline text-lg"
                    >
                      Login to proceed with the payment.
                    </Link>
                  ) : (
                    <PPButtons
                      item={{
                        templateId: template.id,
                        name: template.name,
                        price: template.price.toString(),
                        image: template.coverImage,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            {template.content ? (
              <div className="mt-6 post-content !text-left max-w-4xl mx-auto">
                <div dangerouslySetInnerHTML={{ __html: template!.content }} />
              </div>
            ) : (
              "No description"
            )}
          </div>
        </section>
        <section className="mt-14 max-w-6xl mx-auto px-3">
          <BuiltWith languages={template.languages} />
        </section>
        <section className="mt-20 max-w-6xl mx-auto px-3">
          <Pill text="Features" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Features
          </h1>
          <Features features={template.features} />
        </section>
        <section className="mt-20 max-w-6xl mx-auto px-3">
          <Pill text="Screenshots" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Screenshots
          </h1>
          <Screenshots screenshots={template.screenshots} />
        </section>
        <section className="mt-20 max-w-6xl mx-auto px-3">
          <Pill text="Techstacks" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Techstacks
          </h1>
          <Techstack techstacks={template.techstacks} />
        </section>
        <section className="mt-20 max-w-6xl mx-auto px-3">
          <Pill text="Changelog" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Changelog
          </h1>
          <Changelog changelogs={template.changelogs} />
        </section>
        <section className="mt-28">
          <div className="max-w-6xl mx-auto px-3">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Related Templates
            </h1>
            {relatedTemplates.length === 0 && (
              <NoResults title="Related Templates" />
            )}
            {relatedTemplates.length !== 0 && (
              <div className="mt-6">
                <RelatedTemplates templates={relatedTemplates} />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateDetails;
