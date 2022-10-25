import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Blog from "./Components/Blog/Blog";
import Body from './Components/Body/Body';
import Courses from './Components/Courses/Courses';
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Faq from "./Components/Faq/Faq";
import Home from "./Components/Home/Home";
import Main from "./Components/Home/Leyout/Main";
import Login from "./Components/Login/Login";
import SingleCoures from "./Components/singleCourse/SingleCoures";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Body></Body>,
        },
        {
          path:'home',
          element:<Home></Home>
        },
        {
          path: 'courses',
          element: <Courses></Courses>,
        },
        {
          path:"/courses/:id",
          element:<SingleCoures></SingleCoures>
        },
        {
          path: 'faq',
          element: <Faq></Faq>,
        },
        {
          path: 'blog',
          element:<Blog></Blog>,
        },
        {
          path: 'login',
          element:<Login></Login>,
        }

      ]
    }
  ])
  return (
    <div className="">
    <RouterProvider router={router}></RouterProvider>
  
  </div>
  );
}

export default App;
