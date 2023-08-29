import Avatar from "../avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

const MaxToShow = () => {
  return (
    <>
      <div className="mt-3">
        <AvatarGroup max={3}>
          <Avatar src="/1.png" />
          <Avatar src="/2.png" />
          <Avatar name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </AvatarGroup>
      </div>

      <div className="mt-6">
        <AvatarGroup max={5}>
          <Avatar src="/1.png" />
          <Avatar src="/2.png" />
          <Avatar name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </AvatarGroup>
      </div>

      <div className="mt-6">
        <AvatarGroup max={6}>
          <Avatar src="/1.png" />
          <Avatar src="/2.png" />
          <Avatar name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </AvatarGroup>
      </div>
    </>
  );
};

export default MaxToShow;
