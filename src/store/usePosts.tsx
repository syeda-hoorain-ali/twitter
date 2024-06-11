import { ReactNode, createContext, useContext, useState } from "react";
import { allPosts } from "./allPosts";

export type PostsProviderProps = {
    children: ReactNode;
}

export type Post = {
    id?: string;
    username: string;
    name: string;
    logo: string;
    filter: string;
    createdAt: Date;
    myPost: boolean;
    message?: string;
    img?: File | string;
    poll?: string[];
    gif?: string;
}

export type PostsContext = {
    posts: Post[];
    addNewPost: (post: Post) => void;
}

export const postsContext = createContext<PostsContext | null>(null)

export const PostsProvider = ({ children }: PostsProviderProps) => {

    const [posts, setPosts] = useState<Post[]>(allPosts)

    const addNewPost = (post: Post) => {
        setPosts([post, ...posts])
    }

    return <postsContext.Provider value={{ posts, addNewPost }}>
        {children}
    </postsContext.Provider>
}


export const usePosts = () => {
    const postConsumer = useContext(postsContext)
    if (!postConsumer) {
        throw new Error("usePosts used outside of provider");
    }
    return postConsumer;
}