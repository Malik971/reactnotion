type MessageProps = {
  firstName: string;
  lastName: string;
  email?: string; // Optional property
  phone?: string; // Optional property
  address?: string; // Optional property
};

function Message(props : MessageProps) {
  return (
    <div
      className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <p>
        Bonjour {props.firstName} {props.lastName}
        {props?.email && <span>{props.email}</span>} 
        {props.phone ? `, votre téléphone est ${props.phone}` : ''}
        {props.address ? `, votre adresse est ${props.address}` : ''}
      </p>
    </div>
  );
}
export default Message;
