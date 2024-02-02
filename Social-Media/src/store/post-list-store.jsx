import { createContext, useReducer } from "react"

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const addPost = () => {

}
const deletePost = () => {

}

const PostListProvider = ({ children }) => {
    const [postList, ditpatchPostList] = useReducer(
        postListReducer,
        DFAULAT_POST_LIST
    );
    return <PostList.Provider value={
        { postList, addPost, deletePost, }
    }>{children}
    </PostList.Provider>
}

const DFAULAT_POST_LIST = [{
    id: "1",
    title: "Going to Pune",
    body: "Hi friends I am going to Pune,Hope I get a Job...",
    reactions: 1,
    userId: "user-1",
    tags: ["Pune", "GetAJob", "Fucked"]
}, {
    id: "2",
    title: "Pass Ho Gaya Bhai",
    body: "4 Sal ki Gand Masti ke bad bhi Pass Hone ka Ghamnd Hai...",
    reactions: 6,
    userId: "user-2",
    tags: ["Pass", "BTECH", "UltraFucked"]
}]

export default PostListProvider;