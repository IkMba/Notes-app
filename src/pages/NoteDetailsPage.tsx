import NoteDetails from "../components/NoteDetails";
import NotesList from "../components/NotesList";
import { useMedia } from "../hooks/useMedia";

export default function NoteDetailsPage() {
  const { isLargeScreen } = useMedia();

  if (isLargeScreen)
    return (
      <div className="flex justify-between min-h-screen ">
        <NotesList />
        <NoteDetails />
      </div>
    );

  return <NoteDetails />;
}
