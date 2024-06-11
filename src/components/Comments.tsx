const Comments = () => {
  const follow = ['MrBeast', 'Vercel', 'Venom'];
  const trends = [
    { trend: 'Sports', hashtag: 'PakvsInd', posts: '9,286' },
    { trend: 'Politics', hashtag: 'ImranKhan', posts: '527K' },
    { trend: 'Politics', hashtag: 'InternetShutdown', posts: '8,279' },
    { trend: 'Entertainment', hashtag: 'MichaelMosley', posts: '9.43K' },
    { trend: 'Sports', hashtag: 'TenHag', posts: '20.4K' },
    { trend: 'Politics', hashtag: 'Hamas', posts: '1.02M' },
  ]


  return (<>
    <div className="w-[60%] sticky top-0 hidden md:block py-3 px-4 h-screen overflow-x-auto">
      <div className=" flex flex-col items-center gap-3 h-max ">

        {/* //* Search */}
        <div className="search w-full">
          <input type="text" className="w-full rounded-full bg-[#202327] text-white px-5 py-2" placeholder="Search" />
        </div>

        {/* //* Subscribe  */}
        <div className="subscribe w-full p-3 pr-6 flex flex-col gap-3 border-[1px] border-gray-700 rounded-2xl">
          <h4 className="text-xl font-bold">Subscribe to Premium</h4>
          <p className="text-gray-300">Subscribe to unlock new features and if eligible, receive a share of ads revenue</p>
          <button className="btn-primary w-fit px-6 py-2 text-sm">
            Subscribe
          </button>
        </div>

        {/* //* Who to follow */}
        <div className="who-to-follow w-full space-y-1 border-[1px] border-gray-700 rounded-2xl">
          <h4 className="text-xl font-bold m-3">Who To Follow</h4>

          {follow.map(account => (
            <div key={account} className="item p-3 items-center flex justify-between hover:bg-[#080808] cursor-pointer">

              <div className="flex gap-3">
                <img className="w-12 rounded-full" src={`./assets/logos/${account.toLowerCase()}.jpg`} alt="" />

                <div className="content">
                  <div>{account}</div>
                  <div className="text-gray-500">@{account}</div>
                </div>
              </div>

              <div className="follow">
                <button className="bg-white text-black px-4 py-1.5 rounded-full font-bold">Follow</button>
              </div>
            </div>
          ))}

          <div className="text-blue-600 p-3 cursor-pointer hover:underline my-5">Show More</div>
        </div>

        {/* //* Trends */}
        <div className="trends w-full space-y-1 border-[1px] border-gray-700 rounded-2xl">
          <h4 className="text-xl font-bold m-3">Trends fo you</h4>

          {trends.map((trend, index) => (
            <div key={index} className="item p-3 flex justify-between hover:bg-[#080808] cursor-pointer">

              <div className="content">
                <div className="text-gray-500 text-sm">{trend.trend}</div>
                <div className="font-bold">#{trend.hashtag}</div>
                <div className="text-gray-500 text-sm">{trend.posts} posts</div>
              </div>

              <div className="option p-1 mr-2 h-fit cursor-pointer hover:bg-[#0A171F] rounded-full">
                <img src="./svg/post/dots.svg" width={20} className="invert" alt="" />
              </div>
            </div>
          ))}

          <div className="text-blue-600 p-3 cursor-pointer hover:underline my-5">Show More</div>
        </div>

        {/* //* Terms */}
        <div className="terms  w-full m-3 text-xs text-gray-500 px-3 py-5 space-y-1">
          <span className="hover:underline cursor-pointer mr-2">Terms of Service</span>
          <span className="hover:underline cursor-pointer mr-2">Privacy Policy</span>
          <span className="hover:underline cursor-pointer mr-2">Cookie Policy</span>
          <span className="hover:underline cursor-pointer mr-2">Accessibility</span>
          <span className="hover:underline cursor-pointer mr-2">Ads info</span>
          <span className="hover:underline cursor-pointer mr-2">More</span>
          <span className="hover:underline cursor-pointer mr-2">0 2024 X Crop</span>
        </div>
      </div>
    </div>
  </>)
}

export default Comments