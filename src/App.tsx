import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import NewNotePage from "./pages/NewNotePage";
import NotesListPage from "./pages/NotesListPage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import NoteCollectionsPage from "./pages/NoteCollectionsPage";
import NoteEditPage from "./pages/NoteEditPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewNotePage />,
      },
      {
        path: "/notes",
        element: <NotesListPage />,
      },
      {
        path: "/:tags",
        element: <NoteCollectionsPage />,
      },
      {
        path: "/notes/:id",
        element: <NoteDetailsPage />,
      },
      {
        path: "/edit/:id",
        element: <NoteEditPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
