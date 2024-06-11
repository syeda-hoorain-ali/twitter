import { usePosts } from "../store/usePosts";

type Props = {
  deletePanel: boolean;
  setDeletePanel: (v: boolean) => void;
  id: string;
}

const DeletePanel = (props: Props) => {

  const { deletePost } = usePosts()

  const handleClick = () => {
    deletePost(props.id);
    props.setDeletePanel(false);
  }

  return (<>
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
      <div className="max-w-96 w-[90%] rounded-lg bg-black glow flex flex-col items-center gap-4 py-5 px-5">
        <h4 className="text-3xl font-bold">Delete</h4>

        <div className="w-full flex justify-center gap-4 py-3">
          <button onClick={() => props.setDeletePanel(false)}
            className="py-2 px-9 bg-gray-600 hover:bg-gray-500 rounded-full">
            Cancel
          </button>

          <button onClick={handleClick}
            className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  </>)
}

export default DeletePanel