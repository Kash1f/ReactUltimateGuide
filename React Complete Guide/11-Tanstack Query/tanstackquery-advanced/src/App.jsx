import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { AppLayout } from "./components/Layout/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          // {
          //   path: "/trad",
          //   element: <FetchOld />,
          // },
          // {
          //   path: "/rq",
          //   element: <FetchRQ />,
          // },
          // {
          //   path: "/rq/:id",
          //   element: <FetchIndv />,
          // },
          // {
          //   path: "/infinite",
          //   element: <InfiniteScroll />,
          // },
        ],
      },
    ]);
    
    const App = () => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      );
    };
    
    export default App;
