import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";
import { useMedia } from "../hooks/useMedia";

function NewNotePage() {
  const { isLargeScreen } = useMedia();

  if (isLargeScreen)
    return (
      <div className="flex justify-between min-h-screen">
        <NotesList />
        <NoteForm />
      </div>
    );

  return <NoteForm />;
}

export default NewNotePage;
