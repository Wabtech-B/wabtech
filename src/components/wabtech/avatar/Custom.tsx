import Avatar from "./Avatar";

const Custom = () => {
  return (
    <>
      <div className="mt-3 flex items-center gap-3 flex-wrap">
        <Avatar name="Raven Kent" size="medium" className="bg-blue-500" />
        <Avatar name="Wabweni Brian" size="large" className="bg-red-500" />
      </div>
    </>
  );
};

export default Custom;
