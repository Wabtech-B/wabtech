import { formatDate } from "@/lib/utils";
import React from "react";

const ChangelogCard = ({ version, createdAt, changes }: Changelog) => {
  return (
    <div className="p-4 border border-border rounded-xl my-3 w-max bg-background">
      <div className="flex-align-center">
        <h1 className="text-xl font-semibold">{version}</h1>
        <div className="w-1 h-1 rounded-full bg-gray-700 ml-2"></div>
        <p className="ml-2 text-sm">Released on {formatDate(createdAt)}</p>
      </div>
      <ul className="mt-3 list-disc ml-4">
        {changes.map((change) => (
          <li key={change} className="my-2">
            {change}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangelogCard;
