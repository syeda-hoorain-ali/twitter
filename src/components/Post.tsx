import { useState } from "react";
import { Post } from "../store/usePosts";

type Props = Omit<Post, 'filter' | 'createdAt'>;

const NewPost = (props: Props) => {
  const [hideOptions, setHideOptions] = useState(true);

  const randomNumber = (max: number = 20) => {
    return (Math.random() * (max - 1) + 1).toFixed(2)
  }
  let totalVotes = 0;


  return (<>
    <div>
      <div className="post flex border-t-gray-600 border-t-[1px] relative">
        <div className="image m-4 w-14">
          <img className=" w-14 rounded-full" src={props.logo} alt="" />
        </div>

        <div className="content my-3 w-full">
          <div className="flex justify-between items-center w-full bg-rd-500">
            <span>
              <span className="font-bold hover:underline cursor-pointer">{props.name}</span>
              <span className="text-gray-500"> @{props.username} · Just now</span>
            </span>

            <span onClick={() => setHideOptions(!hideOptions)}>
              <img src="./svg/post/dots.svg" width={23} className="invert mx-5 p-0.5 cursor-pointer hover:bg-gray-200 rounded-full" alt="" />
            </span>
          </div>
          <div>{props.message}</div>

          {props.img &&
            <div className="post-img m-2 ml-0">
              {typeof props.img == 'string' ?
                <img className="rounded-lg" src={props.img} alt="" /> :
                <img className="rounded-lg" src={URL.createObjectURL(props.img as Blob)} alt="" />
              }
            </div>
          }

          {props.poll &&
            <div>
              <ul className="flex flex-col gap-3 my-4">
                {props.poll.map((option, index) => {
                  let vote = randomNumber(100).split('.')[0];
                  totalVotes += Number(vote);
                  console.log(vote);

                  return (
                    <li key={index} className='rounded-md mr-16 overflow-hidden px-2 flex justify-between relative'>
                      <div style={{ width: `${vote}%` }} className={`absolute top-0 left-0 h-full bg-gray-700`}></div>
                      <span className="z-50">{option}</span>
                      <span className="z-50">{vote}%</span>
                    </li>
                  )
                })}
              </ul>
              <p className="text-gray-400">{totalVotes} votes • 23 hours left</p>
            </div>
          }

          {props.gif &&
            <div className="post-gif m-2 ml-0">
              <img className="rounded-lg" src={props.gif} alt="" />
            </div>
          }

          <div className="icons flex justify-between mr-4 my-2 text-gray-600">
            <div className="icon flex items-center justify-center hover:text-blue-500  cursor-pointer">
              <span className="hover:bg-blue-500 hover:bg-opacity-20 rounded-full p-1">
                <img src="./svg/post/comments.svg" width={20} className="invert-[60%]" alt="" />
              </span>
              <span>{randomNumber(15)}K</span>
            </div>

            <div className="icon flex items-center justify-center hover:text-green-500 cursor-pointer">
              <span className=" hover:bg-green-500 hover:bg-opacity-20 rounded-full p-1">
                <img src="./svg/post/repost.svg" width={20} className="invert-[60%]" alt="" />
              </span>
              <span>{randomNumber(7)}K</span>
            </div>

            <div className="icon flex items-center justify-center hover:text-pink-500  cursor-pointer">
              <span className="hover:bg-pink-500 hover:bg-opacity-20 rounded-full p-1">
                <img src="./svg/post/heart.svg" width={20} className="invert-[60%]" alt="" />
              </span>
              <span>{randomNumber(10)}K</span>
            </div>

            <div className="icon flex items-center justify-center hover:text-blue-500  cursor-pointer">
              <span className="hover:bg-blue-500 hover:bg-opacity-20 rounded-full p-1">
                <img src="./svg/post/bars.svg" width={20} className="invert-[60%]" alt="" />
              </span>
              <span>{randomNumber(25)}K</span>
            </div>

            <div className="icon flex items-center justify-center hover:text-blue-500  cursor-pointer gap-3">
              <img src="./svg/post/bookmark.svg" width={20} className="invert-[60%]" alt="" />
              <img src="./svg/post/share.svg" width={20} className="invert-[60%]" alt="" />
            </div>
          </div>
        </div>

        <div onMouseLeave={() => setTimeout(() => setHideOptions(true), 500)}
          className={`${hideOptions && 'hidden'} options glow absolute w-1/2 bg-black right-0 rounded-lg px-1 py-1 z-50 after:content-[]`}>

          {/* my post options */}
          <ul className={`${props.myPost ? '' : 'hidden'} flex flex-col gap-1 pb-2`}>
            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg text-red-600">
              <img src="./svg/my-post-options/trash.svg" width={17} className="invert-0" alt="" />
              <span>Delete</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/edit.svg" width={17} className="invert" alt="" />
              <span>Edit</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/pin.svg" width={17} className="invert" alt="" />
              <span>Pin to your profile</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/highlight.svg" width={17} className="invert" alt="" />
              <span>Highlight on your profile</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/add-list.svg" width={17} className="invert" alt="" />
              <span>Add/remove @{props.username} from Lists</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/comment.svg" width={17} className="invert" alt="" />
              <span>Change who can reply</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/views-bar.svg" width={17} className="invert" alt="" />
              <span>View post engagements</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/embed.svg" width={17} className="invert" alt="" />
              <span>Embed post</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/my-post-options/views-bar.svg" width={17} className="invert" alt="" />
              <span>View post analytics</span>
            </li>
          </ul>

          {/* other's post options */}
          <ul className={`${props.myPost ? 'hidden' : ''} flex flex-col gap-1 pb-2`}>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/not-interested.svg" width={17} className="invert" alt="" />
              <span>Not interested in Tech personalities</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/sad-face.svg" width={17} className="invert" alt="" />
              <span>Not interested in this post</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/add-person.svg" width={17} className="invert" alt="" />
              <span>Follow @{props.username}</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/star-person.svg" width={17} className="invert" alt="" />
              <span>Subscribe to @{props.username}</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/add-list.svg" width={17} className="invert" alt="" />
              <span>Add/remove @{props.username} from Lists</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/mute.svg" width={17} className="invert" alt="" />
              <span>Mute @{props.username}</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/block.svg" width={17} className="invert" alt="" />
              <span>Block @{props.username}</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/views-bar.svg" width={17} className="invert" alt="" />
              <span>View post engagements</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/embed.svg" width={17} className="invert" alt="" />
              <span>Embed post</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/report.svg" width={17} className="invert" alt="" />
              <span>Report post</span>
            </li>

            <li className="flex gap-2 font-bold cursor-pointer hover:bg-[#031018] px-2 py-1 rounded-lg">
              <img src="./svg/others-post-options/report.svg" width={17} className="invert" alt="" />
              <span>Report EU illegal content</span>
            </li>

          </ul>

        </div>

      </div>
    </div>
  </>)
}

NewPost.propTypes = {}

export default NewPost;