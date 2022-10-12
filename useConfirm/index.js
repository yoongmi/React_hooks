const App = () => {
  const deleteWorld = () => console.log("deleting the word...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("are you sure", deleteWorld, abort);
  return (
    <div>
      <h1>Hi</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
