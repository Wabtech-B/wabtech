import SearchInput from "./search-input";

const PostBanner = () => {
  return (
    <div className="mt-16 py-20 bg-hero bg-center bg-cover text-center flex-center-center mb-4">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          POSTS
        </h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default PostBanner;
