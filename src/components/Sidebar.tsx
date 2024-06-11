import { useState } from "react"

const Sidebar = () => {

  const [showOptions, setShowOptions] = useState(true)

  const icons = [
    "Home",
    "Explore",
    "Notifications",
    "Messages",
    "Lists",
    // "Bookmarks",
    // "Communities",
    "Premium",
    "Profile",
    "More",
  ]

  return (<>
    <div className="sidebar w-16 md:w-[40%]  bg-black">
      <div className="sidebar sticky top-0 flex md:items-start flex-col">

        <div className="logo self-start p-2 md:p-3 mx-2 mt-2 md:mx-6 hover:bg-[#181818] cursor-pointer rounded-full">
          <img className="w-8 invert m-auto" src="./assets/logo.svg" alt="X" />
        </div>

        <ul className="flex flex-col items-center md:items-start text-xl space-y-2 md:px-3 w-full">

          {icons.map((icon, index) => (
            <li className="sidebar-icons" key={index}>
              <img className="invert w-6" src={`./svg/sidebar/${icon.toLowerCase()}.svg`} alt="" />
              <span className="hidden md:block font-bold">{icon}</span>
            </li>
          ))}

          {/* //* Post Button */}
          <li>
            <div className="btn-primary button w-full text-center  my-4">
              <button className="hidden md:block px-20 py-3 text-xl">Post</button>
              <button className="md:hidden px-2 py-2">
                <img className="invert w-7" src="./svg/sidebar/post.svg" alt="" />
              </button>
            </div>
          </li>

        </ul>



        <div onClick={() => setShowOptions(!showOptions)} className="user-profile md:w-64 flex justify-between md:px-2 md:mr-6 hover:bg-[#181818] cursor-pointer rounded-full">
          <div className="flex justify-center items-center gap-5 p-1.5">
            <div className="image">
              <img className="w-12 md:w-10 rounded-full" src="./assets/my-logo.jpeg" alt="" />
            </div>

            <div className="content hidden md:block">
              <div>Syeda Hoorain Ali</div>
              <div className="text-gray-500">@syedahoorainali</div>
            </div>
          </div>

          <div className="dots hidden md:flex">
            <img className="invert w-5" src="./svg/sidebar/dots.svg" alt="" />
          </div>
        </div>

        <div className={`${showOptions && 'hidden'} absolute w-72 h-32 bg-black bottom-16 right-0 rounded-3xl glow`}>
          <ul className="font-bold h-full p-5 flex flex-col gap-5 justify-center">
            <li>Add an existing account</li>
            <li>Logout @syeda-hoorain-ali</li>
          </ul>
        </div>

      </div>
    </div>
  </>)
}

export default Sidebar