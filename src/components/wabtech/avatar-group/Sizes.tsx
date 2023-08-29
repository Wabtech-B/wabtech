import Avatar from "../avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

const Sizes = () => {
  return (
    <>
      {/* Small */}
      <div>
        <h1 className="text-lg">Small</h1>
        <div className="mt-3">
          <AvatarGroup size="small">
            <Avatar src="/1.png" />
            <Avatar src="/2.png" />
            <Avatar name="Brian" />
            <Avatar />
            <Avatar src="/5.png" />
            <Avatar name="Tom Brown" />
          </AvatarGroup>
        </div>
      </div>

      {/* Medium */}
      <div className="mt-6">
        <h1 className="text-lg">Medium/Default</h1>
        <div className="mt-3">
          <AvatarGroup>
            <Avatar src="/1.png" />
            <Avatar src="/2.png" />
            <Avatar name="Brian" />
            <Avatar />
            <Avatar src="/5.png" />
            <Avatar name="Tom Brown" />
          </AvatarGroup>
        </div>
      </div>

      {/* Large */}
      <div className="mt-6">
        <h1 className="text-lg">Large</h1>
        <div className="mt-3">
          <AvatarGroup size="large">
            <Avatar src="/1.png" />
            <Avatar src="/2.png" />
            <Avatar name="Brian" />
            <Avatar />
            <Avatar src="/5.png" />
            <Avatar name="Tom Brown" />
          </AvatarGroup>
        </div>
      </div>
    </>
  );
};

export default Sizes;
