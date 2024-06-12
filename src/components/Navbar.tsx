import { Link, useSearchParams } from "react-router-dom"

const Navbar = () => {

  const [params] = useSearchParams()
  const filter = params.get('filter');

  return (<>
    <div>
      <div className="top flex items-center p-3 sticky top-0 backdrop-blur-3xl opacity-80">

        <div className="for-you w-1/2 flex justify-center text-gray-400">
          <Link className={`${(filter == null || filter == 'for-you') && 'active-link'} relative`} to='?filter=for-you'>For you</Link>
        </div>

        <div className="following w-1/2 flex justify-center text-gray-400">
          <Link className={`${filter == 'following' && 'active-link'} relative`} to='?filter=following'>Following</Link>
        </div>

        <div className="settings mx-2">
          <img className="w-5 invert h-5" src="./svg/setting.svg" alt="" />
        </div>

      </div>
    </div>
  </>)
}

export default Navbar