import { CgMenuGridO } from "react-icons/cg";
import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import { getNotes, getTags, searchNotes } from "../store/noteSlice";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { PiNoteLight } from "react-icons/pi";

export default function NotesList() {
  const [query, setQuery] = useState("");
  const notesList = useSelector(getNotes);

  const searchedNotes = useSelector(searchNotes(query));
  const notes = query !== "" ? searchedNotes : notesList;
  const { tags } = useParams();

  const collections = useSelector(getTags);
  const [showCollection, setShowCollection] = useState(false);

  if (notes.length === 0 && query === "")
    return (
      <div className="h-full">
        <h1 className="flex-1 bg-white px-6 py-4 mx-4 ">
          No notes,please add notes.
        </h1>
      </div>
    );

  return (
    <div className="flex-1 bg-white mx-2 px-2 py-2 md:px-6 md:py-4 md:mx-4 h-full min-h-[90vh]">
      <div className="flex justify-between items-center   font-semibold mb-2 rounded-lg">
        <div className="flex gap-1">
          <PiNoteLight className="text-2xl" />
          <h3>All Notes</h3>
        </div>
        <div className="relative">
          <button
            className="text-2xl"
            onClick={() => setShowCollection((show) => !show)}
          >
            <CgMenuGridO />
          </button>
          {showCollection && (
            <div className="absolute -right-4 z-10 bg-white p-4 text-xl md:text-lg shadow-lg">
              {collections.map((item) => (
                <div
                  className={`flex flex-col capitalize py-1 ${
                    item === tags ? "bg-blue py-1 px-2 rounded-md" : ""
                  }`}
                  key={item}
                >
                  <NavLink
                    to={`/${item}`}
                    onClick={() => setShowCollection(false)}
                  >
                    {item}
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center text-md mb-4">
        <h4 className="text-blue">{notes.length} notes</h4>
        <input
          type="text"
          placeholder="Search notes"
          onChange={(e) => setQuery(e.target.value)}
          className="py-0 px-2 md:py-1 rounded-lg text-md md:text-lg border-grey w-48 lg:w-64"
        />
      </div>
      {notes.map((item) => (
        <div className="mt-4" key={item.id}>
          <NoteCard note={item} />
        </div>
      ))}
      {notes.length === 0 && query !== "" && (
        <h1 className="flex-1 bg-white py-4 mx-4 ">
          Note not found,please stry using another keyword.
        </h1>
      )}
    </div>
  );
}
