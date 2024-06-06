import { PrettyChatWindow } from "react-chat-engine-pretty";

const WakhtaanPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='2a79a333-e00c-438d-b093-d8726e21e938'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100px'}}
      />
    </div>
  );
};

export default WakhtaanPage;