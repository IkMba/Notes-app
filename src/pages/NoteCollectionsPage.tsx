import NotesCollection from "../components/NoteCollection";
import NoteForm from "../components/NoteForm";

import { useMedia } from "../hooks/useMedia";

export default function NoteCollectionsPage() {
  const { isLargeScreen } = useMedia();
  // const notes = useSelector(getNotes);

  if (isLargeScreen)
    return (
      <div className="flex justify-between min-h-screen ">
        <NotesCollection />
        <NoteForm />
      </div>
    );
  return <NotesCollection />;
}
