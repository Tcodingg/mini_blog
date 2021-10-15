import { getPost } from "../redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import camaro_2021 from "../camaro_2021.jpg";
import { IoMdThumbsUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Post from "./Post";
import "./Post.css";
import moment from "moment";
const Posts = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPost());
   }, []);

   const state = useSelector((state) => state.reducer);
   console.log(state);
   return (
      <div className="posts">
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />

         {/* {!state ? (
            "loading"
         ) : (
            <div>
               {state.map((posts) => {
                  return (
                     <div>
                        <h1>{posts.title}</h1>
                        <img width="200px" src={posts.image} alt="loading..." />
                        <p></p>
                        <div>{moment(posts.createdAt).fromNow()}</div>
                     </div>
                  );
               })}
            </div>
         )} */}
      </div>
   );
};

export default Posts;
