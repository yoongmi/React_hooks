const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <div>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)} key={section.tab}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
};
