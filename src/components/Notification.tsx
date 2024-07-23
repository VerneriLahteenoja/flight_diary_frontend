import { NotificationProps } from "../types"
import CSS from "csstype";


const Notification = (props: NotificationProps) => {
  const msgStyle: CSS.Properties = {
    color: "rgba(255, 0, 0 , 1)"
  };

  return <div style={msgStyle}>
    {props.message}
  </div>
};

export default Notification;