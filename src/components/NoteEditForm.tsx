import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { noteType } from "../constants/types";
import { editItem, getNote } from "../store/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function NoteEditForm() {
  const { id: paramsId } = useParams();
  const { register, handleSubmit } = useForm<noteType>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector(getNote(paramsId));
  const { title, tags, body, id } = note;

  const onSubmit = (data, e): SubmitHandler<noteType> => {
    e.preventDefault();
    const tags = data.tags.split(",");
    const note = { ...data, id, tags: tags };
    dispatch(editItem(note));
    navigate("/");
    return data;
  };

  return (
    <div className="flex-1 bg-white px-6 py-4 mx-2 md:mx-4 min-h-[90vh]">
      <h1 className="font-bold text-2xl ">Create new note</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="title" className="font-semibold text-lg">
            Title
          </label>
          <input type="text" defaultValue={title} {...register("title")} />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="tags" className="font-semibold text-lg">
            Tags
          </label>
          <input type="text" defaultValue={tags} {...register("tags")} />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="body" className="font-semibold text-lg">
            Body
          </label>
          <textarea rows={12} defaultValue={body} {...register("body")} />
        </div>
        <div className=" flex justify-between mt-8">
          <Link to="/">
            <Button type="reset">Cancel</Button>
          </Link>
          <Button>Save</Button>
        </div>
      </form>
    </div>
  );
}
