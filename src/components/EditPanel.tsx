import { useState } from "react";
import { usePosts } from "../store/usePosts";

type Props = {
  editPanel: boolean;
  setEditPanel: (v: boolean) => void;
  id: string;
  message?: string;
}

const EditPanel = (props: Props) => {

  const [message, setMessage] = useState(props.message || '')
  const { updatePost } = usePosts()

  const handleClick = () => {
    updatePost(props.id, message);
    props.setEditPanel(false);
  }

  return (<>
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
      <div className="max-w-[30rem] w-[90%] h-72 rounded-lg bg-black glow flex flex-col items-center gap-4 py-3 px-5">
        <h4 className="text-3xl font-bold">Edit</h4>

        <textarea onChange={(e) => setMessage(e.target.value)} value={message}
          className="w-full h-full bg-black border border-white resize-none p-2">
        </textarea>

        <div className="w-full flex justify-end gap-4">
          <button onClick={() => props.setEditPanel(false)}
            className="py-2 px-8 bg-gray-600 hover:bg-gray-500 rounded-full">
            Cancel
          </button>

          <button onClick={handleClick}
            className="btn-primary py-2 px-10">
            Post
          </button>
        </div>
      </div>
    </div>
  </>)
}

export default EditPanel