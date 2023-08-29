import Avatar from "./Avatar";

const Sizes = () => {
  return (
    <>
      {/* Small */}
      <div>
        <h1 className="text-lg">Small</h1>
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <Avatar size="small" src="/1.png" />
          <Avatar size="small" src="/2.png" />
          <Avatar size="small" name="Brian" />
          <Avatar size="small" />
          <Avatar size="small" src="/5.png" />
          <Avatar size="small" name="Tom Brown" />
        </div>
      </div>

      {/* Medium */}
      <div className="mt-6">
        <h1 className="text-lg">Medium/Default</h1>
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <Avatar size="medium" src="/1.png" />
          <Avatar size="medium" src="/2.png" />
          <Avatar size="medium" name="Brian" />
          <Avatar />
          <Avatar src="/5.png" />
          <Avatar name="Tom Brown" />
        </div>
      </div>

      {/* Large */}
      <div className="mt-6">
        <h1 className="text-lg">Large</h1>
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <Avatar size="large" src="/1.png" />
          <Avatar size="large" src="/2.png" />
          <Avatar size="large" name="Brian" />
          <Avatar size="large" />
          <Avatar size="large" src="/5.png" />
          <Avatar size="large" name="Tom Brown" />
        </div>
      </div>
    </>
  );
};

export default Sizes;
