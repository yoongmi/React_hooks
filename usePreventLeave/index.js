const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <h1>Hi</h1>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};
