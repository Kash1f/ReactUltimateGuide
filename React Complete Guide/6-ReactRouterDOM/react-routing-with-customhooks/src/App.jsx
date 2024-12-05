import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import RecipeList from "./pages/recipes/RecipeList";
import CommentsList from "./pages/comments/CommentsList";
import RecipeDetails from "./pages/recipe-details/RecipeDetails";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>React Routing with Custom Hooks</h1>
      <div>
      <Link to="/recipe-list">Go to Recipes via Link</Link>
      </div>
      <button onClick={() => navigate("/recipe-list")}>
        Navigate to Recipe List Page
      </button>
      <button onClick={() => navigate("/comments-list")}>
        Navigate to Comments List Page
      </button>

      <Routes>
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentsList />} />
        <Route path="/recipe-list/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
