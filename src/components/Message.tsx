type MessageProps = {
  // Le ? indique que cette propriété est optionnelle
  // seul le texte est obligatoire
  // et les autres propriétés sont optionnelles
  firstName?: string;
  lastName?: string;
  email?: string; // Optional property
  phone?: string; // Optional property
  texte: string; // Required property
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
        {props.texte ? `, votre texte est ici:  ${props.texte}` : ''}
      </p>
    </div>
  );
}
export default Message;
