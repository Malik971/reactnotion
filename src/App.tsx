import Messages from "./pages/Messages";

const MESSAGE = [
  {
    "id": "6844a802be81beefb1e455ab",
    "texte": "proident consectetur sit quis excepteur reprehenderit tempor pariatur eu ullamco ex consequat reprehenderit incididunt sit sint duis Lorem Lorem mollit eiusmod magna enim officia pariatur esse non est id veniam"
  },
  {
    "id": "6844a802851e9529a75c6631",
    "texte": "cupidatat incididunt ex elit voluptate enim consectetur ad proident fugiat aliqua nostrud labore aliqua exercitation incididunt exercitation adipisicing occaecat ex amet fugiat dolore et cillum eiusmod officia in consequat minim"
  },
  {
    "id": "6844a802c36be5aa2edb16fe",
    "texte": "magna culpa sunt ipsum voluptate voluptate culpa nostrud laboris deserunt et anim aliqua commodo commodo id consequat proident excepteur voluptate mollit anim cupidatat adipisicing cillum ad eiusmod duis officia ut"
  },
  {
    "id": "6844a802e115bf9b0744b6e5",
    "texte": "nostrud amet culpa pariatur id sit ullamco sit ad consectetur velit ex fugiat magna ipsum id enim ex anim sunt laborum mollit qui officia minim eu aliquip cillum mollit ut"
  },
  {
    "id": "6844a8026eef1427634e7901",
    "texte": "dolore exercitation proident cillum cillum esse officia non veniam dolor reprehenderit ad minim amet esse nostrud qui voluptate ad tempor cillum veniam eiusmod sint culpa sunt dolor incididunt ullamco ullamco"
  }
]


function App() {
  return (
    <>
      <Messages messages={MESSAGE} />
    </>
  );
}

export default App;
