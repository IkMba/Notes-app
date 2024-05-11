import { useSelector } from "react-redux";
import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";
import { useMedia } from "../hooks/useMedia";
import { getUser } from "../store/noteSlice";
import Welcome from "../components/Welcome";

export default function Home() {
  const { isLargeScreen } = useMedia();
  const user = useSelector(getUser);
  // const notes = useSelector(getNotes);
  if (!user) return <Welcome />;

  if (user && isLargeScreen)
    return (
      <div className="flex justify-between min-h-[80vh]">
        <NotesList />
        <NoteForm />
      </div>
    );
  return <NotesList />;
}
