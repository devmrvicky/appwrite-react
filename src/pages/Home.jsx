import { useSelector } from "react-redux";

const Home = () => {
  const { status, userData } = useSelector((store) => store.auth);

  return (
    <div>
      {status && userData ? (
        <div className="p-4">
          <h1 className="text-3xl font-semibold">Welcome, {userData.name}</h1>
        </div>
      ) : (
        <div>Please login first</div>
      )}
    </div>
  );
};

export default Home;
