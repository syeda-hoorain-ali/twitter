import { useSearchParams } from "react-router-dom"
import AddPosts from "./components/AddPosts"
import Comments from "./components/Comments"
import Navbar from "./components/Navbar"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"
import { usePosts } from "./store/usePosts"

const App = () => {

	const { posts } = usePosts();
	const [params] = useSearchParams();
	const filter = params.get('filter'); // "for-you" | "following"

	let filteredPosts = posts.filter(post => post.filter == 'for-you');

	if (filter) {
		filteredPosts = posts.filter(post => post.filter == filter);
	}

	return (<>
		<div className="bg-black text-white min-h-screen relative">
			<div className="flex md:container mx-auto ">
				<Sidebar />

				<main className="border-[1px] border-x-gray-600 border-y-black w-full">
					<Navbar />
					<AddPosts />

					<div className="posts">
						{filteredPosts.map((post, index) => (
							<Post key={index}
								message={post.message}
								name={post.name}
								logo={post.logo}
								username={post.username}
								img={post.img}
								myPost={post.myPost}
								poll={post.poll}
								gif={post.gif} />
						))}
					</div>
				</main>

				<Comments />
			</div>
		</div>
	</>)
}

export default App