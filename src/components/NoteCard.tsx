import { Link } from "react-router-dom";
import { noteType } from "../constants/types";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

import DeleteModal from "./DeleteModal";

function NoteCard({ note }: { note: noteType }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const { title, tags, body, id, date, time } = note;
  const details = body.slice(0, 70) + "...";
  // const dispatch = useDispatch();

  const imgSrc = tags.includes("family")
    ? "/family1.jpg"
    : tags.includes("projects")
    ? "/project.jpg"
    : tags.includes("meetings")
    ? "/calendar1.webp"
    : tags.includes("personal")
    ? "/personal.jpg"
    : "/note3.png";

  const bgColor = tags.includes("family")
    ? "bg-[#F5F1EE]"
    : tags.includes("projects")
    ? "bg-bluelight"
    : tags.includes("meetings")
    ? "bg-[#FFCDEF]"
    : tags.includes("personal")
    ? "bg-[#EFCAFE]"
    : "bg-[#AFB3FD]";

  // const notes = useSelector(getNotes);

  return (
    <>
      <Link
        to={`/notes/${id}`}
        className={`${bgColor} flex flex-1 p-2 gap-4 rounded-md cursor-pointer hover:scale-105 active:bg-orange relative group`}
      >
        <div className="">
          <img src={imgSrc} alt="" className="w-20 md:w-24 h-[5.5rem]" />
        </div>
        <div className="flex-1 pr-2">
          <h3 className="font-bold text-mlg capitalize ">{title}</h3>
          <p className="text-sm">{details}</p>
          <div className="flex justify-between text-[.75rem] gap-2 mt-3 items-center text-gray">
            {tags.map(
              (item) =>
                item && (
                  <h5 className="bg-slate py-0.5 px-1 rounded-lg" key={item}>
                    {item}
                  </h5>
                )
            )}
            <div className="flex gap-2">
              <h5>{date}</h5>
              <h5>{time}</h5>
            </div>
          </div>
        </div>
        <div
          className="hidden group-hover:block text-xl text-blue absolute top-2 right-3"
          onClick={(e) => {
            e.preventDefault();
            setDeleteModal(true);
          }}
        >
          <MdDelete />
        </div>
      </Link>

      {deleteModal && <DeleteModal id={id} setDeleteModal={setDeleteModal} />}
    </>
  );
}

export default NoteCard;
