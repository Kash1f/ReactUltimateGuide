import React from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import RecipeList from "./pages/recipes/RecipeList";
import CommentsList from "./pages/comments/CommentsList";
import RecipeDetails from "./pages/recipe-details/RecipeDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/not-found/NotFound";

function CustomRoutes() {

  const element = useRoutes([
    {
      path: "/home",
      element: <Layout/>,
      children : [
    {
        path : "recipe-list",
        element: <RecipeList />,
    },
    { 
        path : "comments-list",
        element: <CommentsList />,

    },
    {
      path : "recipe-list/:id",
      element: <RecipeDetails />,
    }
    ],
  },
  {
    path:"*" ,
    element:<NotFound />
  }
  ]);

  return element;
}

const App = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>React Routing with Custom Hooks</h1>
      <div>
      <Link to="/home/recipe-list">Go to Recipes via Link</Link>
      </div>
      <button onClick={() => navigate("/home/recipe-list")}>
        Navigate to Recipe List Page
      </button>
      <button onClick={() => navigate("/home/comments-list")}>
        Navigate to Comments List Page
      </button>

      {/* <Routes>
        
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <CustomRoutes />
    </div>
  );
};

export default App;
