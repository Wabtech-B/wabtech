import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { formatFileSize } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const getUserTemplates = async (userId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/user-templates/${userId}`,
    { cache: "no-store" }
  );
  return res.json();
};

const Templates = async () => {
  const session = await auth();

  const userTemplates: UserTemplate[] = await getUserTemplates(
    session?.user?.id!
  );

  return (
    <div className=" border border-border rounded-lg p-2">
      {userTemplates.length === 0 && (
        <div className="min-h-[75vh] flex-center-center">
          <div>
            <div className="relative w-40 h-40 mx-auto dark:opacity-60">
              <Image
                src="/no-results.png"
                alt="No results"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold opacity-70 text-center">
              You have no templates
            </h1>
            <Button
              asChild
              className="mx-auto w-max block mt-4 flex-center-center"
            >
              <Link href="/templates">Start Browsing</Link>
            </Button>
          </div>
        </div>
      )}

      {userTemplates.length !== 0 && (
        <div className="mt-4">
          {userTemplates.map(({ template }) => (
            <div
              key={template.id}
              className="rounded-xl p-3 border grid grid-cols-1 sm:grid-cols-4 my-2 gap-5 group"
            >
              <div className="relative w-full h-[200px] sm:h-full sm:col-span-1">
                <Image
                  src={template.coverImage}
                  alt={template.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="sm:col-span-3">
                <Link
                  href={`/templates/${template.slug}`}
                  className="md:text-2xl font-semibold group-hover:text-brand hover:underline transition-a"
                >
                  {template.name}
                </Link>
                <h1 className="mt-2 text-2xl md:text-3xl font-bold">
                  {template.price ? `$${template.price}` : "Free"}
                </h1>
                <div className="mt-2">
                  <div className="flex-align-center gap-2">
                    <div className="shrink-0">
                      <Image
                        src={`/zip.svg`}
                        alt="Zip Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <a
                      href={template.templateFile}
                      target="_blank"
                      download={"wabtech"}
                      className="text-brand underline"
                    >
                      Click to download the file:: Size (
                      {formatFileSize(template.templateFileSize)})
                    </a>
                  </div>
                  <div className="mt-3 flex-align-center gap-2">
                    {/* <Button variant={"secondary"}>Generate Invoice</Button> */}
                    <Button variant={"outline"} asChild>
                      <Link href={`/dashboard/templates/${template.id}/review`}>
                        Give a review
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Templates;
