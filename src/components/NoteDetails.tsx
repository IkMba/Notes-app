import { useParams } from "react-router";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getNote } from "../store/noteSlice";
import { Link } from "react-router-dom";

export default function NoteDetails() {
  const { id: paramsId } = useParams();
  const note = useSelector(getNote(paramsId));
  const { title, tags, body, id } = note;
  // const note = notes.find((item) => item.id === +id);

  const imgSrc = tags.includes("Family")
    ? "/family1.jpg"
    : tags.includes("Projects")
    ? "/project.jpg"
    : tags.includes("Meetings")
    ? "/calendar1.webp"
    : tags.includes("Personal")
    ? "/personal.jpg"
    : "/note.webp";

  return (
    <div className="flex-1 px-8 py-8 bg-white rounded-lg mx-6 h-full">
      <div className="flex border-b border-grey justify-between items-center pb-4">
        <div className="flex items-center gap-2">
          <img src={imgSrc} alt="" className="w-20" />
          <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
        </div>
        <Link to={`/edit/${id}`}>
          <Button>Edit</Button>
        </Link>
      </div>

      <div className="mt-4">
        {tags.map((item) => (
          <h5
            key={item}
            className="bg-bluelight py-0.5 px-1  rounded-lg w-fit my-4 text-sm text-purple"
          >
            {item}
          </h5>
        ))}
        <p className="font-medium text-md">{body}</p>
        <div className=" flex justify-end mt-8">
          <Link to="/">
            <Button>Back to notes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
