import Message from "../components/Message";

type MessageProps = {
  id: string;
  texte: string;
};

type Props = {
  messages: MessageProps[];
};

function Messages(props: Props) {
  const Messages = props.messages;
  return Messages.map((message) => <Message texte={message.texte} />);
}

export default Messages;
