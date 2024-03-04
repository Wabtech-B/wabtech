import Image from "next/image";

const NoResults = ({ title }: { title: string }) => {
  return (
    <div className="flex-center-center">
      <div className="text-center border border-border mt-2 p-2 rounded-lg w-full">
        <div className="relative w-40 h-40 mx-auto dark:opacity-60">
          <Image
            src="/no-results.png"
            alt="No results"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-xl font-bold text-muted-foreground">No {title}</h1>
      </div>
    </div>
  );
};

export default NoResults;
