const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div>
      <h1>hello</h1>
      <div ref={element}>
        <img
          width="300"
          src="https://g-grafolio.pstatic.net/20221006_74/1665046240215NoAYz_PNG/0D34E94E-F58C-4FD1-9FAE-8DEDC7BD039F.png"
        />
        <button onClick={exitFull}>exit</button>
      </div>
      <button onClick={triggerFull}>button</button>
    </div>
  );
};
