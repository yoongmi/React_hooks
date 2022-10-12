const App = () => {
  const triggerNotif = useNotification("Can i steal your love", {
    body: "i love kimchi",
  });
  return (
    <div>
      <h1>hello</h1>
      <button onClick={triggerNotif}>button</button>
    </div>
  );
};
