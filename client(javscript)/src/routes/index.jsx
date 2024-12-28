import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import AuthPage from "../FireBase/AuthPage";
import NotFoundPage from "../pages/Errors/NotFoundPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthPage />} />
        {/* <Route path="userProfile" element={<ProfilePage />} /> */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export { router };
