const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loding"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};
