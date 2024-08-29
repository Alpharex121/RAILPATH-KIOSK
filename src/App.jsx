import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import KioskLayout from "./components/KioskLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <KioskLayout />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
