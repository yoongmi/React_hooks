const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 9);
  return (
    <div>
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>loram</p>
    </div>
  );
};
