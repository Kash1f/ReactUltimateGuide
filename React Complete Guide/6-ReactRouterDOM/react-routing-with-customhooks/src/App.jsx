import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import CommentsList from "./pages/CommentsList";

const App = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>React Routing with Custom Hooks</h1>
      <button onClick={()=>navigate('/recipes')}>
            Navigate to Recipe List Page
      </button>
      <button onClick={()=>navigate('/comments-list')}>
            Navigate to Comments List Page
      </button>

      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentsList />} />
      </Routes>
    </div>
  );
};

export default App;
