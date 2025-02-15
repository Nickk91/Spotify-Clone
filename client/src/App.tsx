import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import AuthCallbackPage from "./pages/AuthCallbackPage/AuthCallbackPage.tsx";
import { axiosInstance } from "./lib/axios.ts";

function App() {
  const getSomeData = async () => {
    const res = await axiosInstance.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
