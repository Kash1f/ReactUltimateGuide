import Home from "./pages/Home";



    const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/trad",
            element: <FetchOld />,
          },
          {
            path: "/rq",
            element: <FetchRQ />,
          },
          {
            path: "/rq/:id",
            element: <FetchIndv />,
          },
          {
            path: "/infinite",
            element: <InfiniteScroll />,
          },
        ],
      },
    ]);
    
    const App = () => {
      const queryClient = new QueryClient();
    
      return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      );
    };
    
    export default App;
