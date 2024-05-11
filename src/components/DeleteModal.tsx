import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/noteSlice";
import { createPortal } from "react-dom";

export default function DeleteModal({ id, setDeleteModal }) {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteItem(id));
    setDeleteModal(false);
  };

  return createPortal(
    <div className="fixed top-0 left-0 h-screen w-full backdrop-blur-sm bg-backdrop z-10 transiton-all transition-500 ">
      <div className=" p-6 mt-2 bg-white mx-auto w-fit z-100 rounded-lg">
        <h3 className="font-bold">
          Are you sure you want to delete this note?
        </h3>
        <div className=" flex justify-between font-sm mt-4">
          <Link to="/">
            <Button
              className="text-sm"
              type="reset"
              onClick={() => setDeleteModal(false)}
            >
              Cancel
            </Button>
          </Link>
          <Button className="text-sm" onClick={deleteHandler}>
            Delete
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
