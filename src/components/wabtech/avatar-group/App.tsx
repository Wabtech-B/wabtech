import Avatar from "../avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

const App = () => {
  return (
    <>
      <AvatarGroup>
        <Avatar src="/1.png" />
        <Avatar src="/2.png" />
        <Avatar name="Brian" />
        <Avatar />
        <Avatar src="/5.png" />
        <Avatar name="Tom Brown" />
      </AvatarGroup>
    </>
  );
};

export default App;
