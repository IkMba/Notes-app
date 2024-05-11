import NoteEditForm from "../components/NoteEditForm";
import NotesList from "../components/NotesList";
import { useMedia } from "../hooks/useMedia";

export default function NoteEditPage() {
  const { isLargeScreen } = useMedia();
  // const notes = useSelector(getNotes);

  if (isLargeScreen)
    return (
      <div className="flex justify-between min-h-screen ">
        <NotesList />
        <NoteEditForm />
      </div>
    );
  return <NoteEditForm />;
}
