import { GiNotebook } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import { getNotesByTags, getTags } from "../store/noteSlice";
import { useParams } from "react-router";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function NotesCollection() {
  const { tags } = useParams();
  const tag = tags && tags.charAt(0).toUpperCase() + tags.slice(1);
  const notes = useSelector(getNotesByTags(tag));
  const collections = useSelector(getTags);

  const [showCollection, setShowCollection] = useState(false);

  if (notes.length === 0)
    return (
      <div className="flex-1 bg-white px-6 py-4 mx-4 pt-8 h-full ">
        <h1 className="text-xl pb-8 ">
          No notes in {tags} colection.Please add notes to this collection or go
          back to home.
        </h1>
        <Link to="/">
          <Button type="reset">Go to home</Button>
        </Link>
      </div>
    );

  return (
    <div className="flex-1 bg-white px-6 py-4 mx-4 h-full min-h-[90vh]">
      <div className="flex  items-center font-bold mb-2 rounded-lg">
        <GiNotebook />
        <h3 className="capitalize">{tags}</h3>
      </div>
      <div className="flex justify-between items-center text-sm mb-4">
        <h4 className="text-blue">{notes.length} notes</h4>
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
                  className={`flex flex-col capitalize py-2 font-semibold ${
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
      {notes.map((item) => (
        <div className="mt-4" key={item.id}>
          <NoteCard note={item} />
        </div>
      ))}
    </div>
  );
}
