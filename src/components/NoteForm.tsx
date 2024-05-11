import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { noteType } from "../constants/types";
import { addItem } from "../store/noteSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function NoteForm() {
  const { register, handleSubmit } = useForm<noteType>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const notes = useSelector(getNotes);
  const id = Math.floor(Math.random() * 1000) + 1;
  const month = new Date().toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });
  const year = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
  });
  const date = month + "," + year;
  const time = new Date().toLocaleTimeString("default", {
    hour: "numeric",
    minute: "numeric",
  });

  const onSubmit = (data, e): SubmitHandler<noteType> => {
    e.preventDefault();
    const tags = data.tags.split(",");
    const tagss = tags.map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1)
    );
    const note = {
      ...data,
      id: data.title + id,
      tags: tagss,
      date: date,
      time: time,
    };
    dispatch(addItem(note));
    navigate("/");
    return data;
  };

  return (
    <div className="flex-1 bg-white px-6 py-4 mx-4 h-full">
      <h1 className="font-bold text-2xl ">Create new note</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="title" className="font-semibold text-lg">
            Title
          </label>
          <input
            type="text"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="tags" className="font-semibold text-lg ">
            Tags
          </label>
          <input type="text" {...register("tags")} className="capitalize" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="body" className="font-semibold text-lg">
            Body
          </label>
          <textarea
            rows={12}
            {...register("body", {
              required: "This field is required",
            })}
          />
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
