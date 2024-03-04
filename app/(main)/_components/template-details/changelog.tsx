import React from "react";
import ChangelogCard from "./changelog-card";

const Changelog = ({ changelogs }: { changelogs: Changelog[] }) => {
  return (
    <div className="flex-center-center flex-col">
      {changelogs.map((changelog) => (
        <ChangelogCard {...changelog} key={changelog.id} />
      ))}
    </div>
  );
};

export default Changelog;
