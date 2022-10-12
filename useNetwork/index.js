const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went onlne" : "we are offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{online ? "OnLine" : "Offline"}</h1>
    </div>
  );
};
