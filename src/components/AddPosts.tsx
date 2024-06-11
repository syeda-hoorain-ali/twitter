import { ChangeEvent, useState } from 'react'
import { usePosts } from '../store/usePosts';
import EmojiPicker from 'emoji-picker-react';
import PollCreator from './Poll';
import GifPicker from 'gif-picker-react';

const AddPosts = () => {

  const { addNewPost } = usePosts();
  const [message, setMessage] = useState('');
  const [openEmoji, setOpenEmoji] = useState(false);
  const [openGif, setOpenGif] = useState(false)
  const [hideReplyOptions, setHideReplyOptions] = useState(true)
  const [reply, setReply] = useState({ option: 'Everyone', svg: 'globe' });
  const [image, setImage] = useState<File | undefined>();
  const [gif, setGif] = useState<string | undefined>(); 
  const [poll, setPoll] = useState<string[] | undefined>();

  const apiKey = import.meta.env.VITE_TENOR_API_KEY || '';

  enum Theme {
    DARK = "dark",
    LIGHT = "light",
    AUTO = "auto"
  }

  const user = {
    name: 'Syeda Hoorain Ali',
    username: 'syeda-hoorain-ali',
    logo: './assets/my-logo.jpeg',
  }

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const addPost = () => {
    const newPost = {
      name: user.name,
      username: user.username,
      logo: user.logo,
      message: message,
      filter: 'for-you',
      createdAt: new Date(),
      img: image,
      poll: poll,
      myPost: true,
      gif: gif
    }
    console.log(newPost);


    addNewPost(newPost);
    setMessage('')
    setImage(undefined);
    setPoll(undefined);
  }

  const getImage = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    if (files !== null && files.length > 0) {
      const file = files[0];
      setImage(file);
    }
  };

  return (<>

    <div>
      <div className="what-is-happening flex gap-1 my-3">
        <div className="img ml-3 w-14">
          <img className=" w-11 rounded-full" src={user.logo} alt="" />
        </div>

        <div className="w-full relative">
          <textarea value={message} onChange={handleInput}
            placeholder={poll ? 'Write a question?' : "What is happening?!"}
            className="w-full h-fit my-2 text-xl bg-black outline-none text-white resize-none">
          </textarea>

          {/* //* Media */}

          <div>
            {image &&
              <div className='relative flex w-full justify-center pr-5'>
                <img src={URL.createObjectURL(image as Blob)} alt="" />
                <button onClick={() => setImage(undefined)}
                  className='absolute top-2 right-7 bg-[#0f1419bf] hover:bg-[#272c30bf] w-9 h-9 rounded-full flex justify-center items-center'>
                  <img src="./svg/cross.svg" width={20} alt="" />
                </button>
              </div>
            }

            {openGif &&
              <div className='mr-5 relative rounded-xl overflow-hidden'>
                <GifPicker tenorApiKey={apiKey} theme={Theme.DARK} width='100%'
                  onGifClick={(gif) => {
                    setGif(gif.url)
                    setOpenGif(false)
                  }} />
              </div>
            }

            {gif &&
              <div className='relative flex w-full justify-center pr-5'>
                <img src={gif} alt="" width='100%' />
                <button onClick={() => setGif(undefined)}
                  className='absolute top-2 right-7 bg-[#0f1419bf] hover:bg-[#272c30bf] w-9 h-9 rounded-full flex justify-center items-center'>
                  <img src="./svg/cross.svg" width={20} alt="" />
                </button>
              </div>
            }

            {poll &&
              <div className='mr-5 relative rounded-xl overflow-hidden'>
                <PollCreator options={poll} changeOption={(options) => setPoll(options)} />
                <button className='w-full h-16 absolute bottom-0 text-red-500 hover:bg-[#190305]' onClick={() => setPoll(undefined)}>
                  Remove Poll
                </button>
              </div>
            }
          </div>

          <div className="inline-flex items-center gap-1 w-fll mt-2 px-2 cursor-pointer rounded-full hover:bg-[#031018]" onClick={() => setHideReplyOptions(!hideReplyOptions)}>
            <img className="w-4" src={`./svg/post-options/${reply.svg}.svg`} alt="" />
            <span className="text-[#1D9BF0]">{reply.option} can reply</span>
          </div>

          {/* //* Reply options */}
          <div onMouseLeave={() => setTimeout(() => setHideReplyOptions(true), 400)}
            className={`${hideReplyOptions && 'hidden'} h-80 w-80 px-3 py-2 rounded-xl glow after:content-[] bg-black absolute top-22 -left-16 z-50`}>
            <h3 className='font-bold'>Who can reply?</h3>
            <p className='text-gray-500'>
              Choose who can reply one this post.
              Anyone mentioned can always reply.
            </p>

            <div className="options py-3 flex flex-col gap-1">
              <div onClick={() => { setReply({ option: 'Everyone', svg: 'globe' }); setHideReplyOptions(true) }}
                className="option flex gap-2 items-center p-1.5 hover:bg-[#1d9bf011] cursor-pointer">
                <img className='bg-[#1d9bf0] rounded-full p-2.5' width={40} src="./svg/reply-options/globe.svg" alt="" />
                <span className='font-bold'>Everyone</span>
              </div>

              <div onClick={() => { setReply({ option: 'Accounts you follow', svg: 'user' }); setHideReplyOptions(true) }}
                className="option flex gap-2 items-center p-1.5 hover:bg-[#1d9bf011] cursor-pointer">
                <img className='bg-[#1d9bf0] rounded-full p-2.5' width={40} src="./svg/reply-options/user.svg" alt="" />
                <span className='font-bold'>Accounts you follow</span>
              </div>

              <div onClick={() => { setReply({ option: 'Verified accounts', svg: 'verified' }); setHideReplyOptions(true) }}
                className="option flex gap-2 items-center p-1.5 hover:bg-[#1d9bf011] cursor-pointer">
                <img className='bg-[#1d9bf0] rounded-full p-2.5' width={40} src="./svg/reply-options/verified.svg" alt="" />
                <span className='font-bold'>Verified accounts</span>
              </div>

              <div onClick={() => { setReply({ option: 'Only accounts you mention', svg: '@' }); setHideReplyOptions(true) }}
                className="option flex gap-2 items-center p-1.5 hover:bg-[#1d9bf011] cursor-pointer">
                <img className='bg-[#1d9bf0] rounded-full p-2.5' width={40} src="./svg/reply-options/@.svg" alt="" />
                <span className='font-bold'>Only accounts you mention</span>
              </div>

            </div>
          </div>

          <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>

          <div className="flex justify-between relative">

            {/* //* media icons */}
            <div className="icons flex items-center relative">

              <button disabled={gif || poll ? true : false} className='post-icons'>
                <img src="./svg/post/image.svg" alt="" />
                <input type="file" id="picture" name="picture" onChange={(e) => { getImage(e) }} />
              </button>

              <button disabled={image || poll ? true : false} className='post-icons' onClick={() => setOpenGif(!openGif)}>
                <img src="./svg/post/gif.svg" alt="" />
              </button>

              <button disabled={image || gif ? true : false} className='post-icons hidden md:block' onClick={() => setPoll(['', ''])}>
                <img src="./svg/post/poll.svg" alt="" />
              </button>

              <button className='post-icons relative w-9 h-9' onMouseLeave={() => setTimeout(() => setOpenEmoji(false), 200)}>
                <img src="./svg/post/smiley-face.svg" alt="" onClick={() => setOpenEmoji(!openEmoji)} />
                <EmojiPicker open={openEmoji} theme={Theme.DARK} className='fixed top-0 left-0 z-40' onEmojiClick={(e) => { setMessage(message + e.emoji) }} />
              </button>

              <button disabled className='post-icons hidden md:block'>
                <img src="./svg/post/date.svg" alt="" />
              </button>

              <button disabled className='post-icons'>
                <img src="./svg/post/location.svg" alt="" />
              </button>
            </div>

            {/* //* Post Button */}
            <div className="postBtn">
              <button onClick={addPost} disabled={message.length < 1 && !image && !gif}
                className="btn-primary px-6 mx-5 text-sm py-2 disabled:opacity-80 disabled:cursor-default">
                Post
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  </>)
}

export default AddPosts