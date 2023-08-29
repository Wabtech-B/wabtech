/* eslint-disable @next/next/no-img-element */
import Avatar from "../avatar/Avatar";
import Badge from "./Badge";

const WithAvatar = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Badge label="Avatar" avatar={<Avatar size="small" />} />
      <Badge label="Raven Kent" avatar={<img src="/1.png" alt="Avatar" />} />
      <Badge label="Jane Doe" avatar={<Avatar size="small" src="/2.png" />} />
      <Badge label="Icon" variant="warning" avatar={<span>🔔</span>} />
    </div>
  );
};

export default WithAvatar;
