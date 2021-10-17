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
   }, [dispatch]);

   const state = useSelector((state) => state.reducer);
   // console.log(state);
   return (
      <div className="">
         {!state ? (
            "loading"
         ) : (
            <div className="posts">
               {state.map((posts) => {
                  return (
                     <div>
                        <Post
                           title={posts.title}
                           note={posts.note}
                           image={posts.image}
                           id={posts._id}
                           like={posts.likeCount}
                        />
                     </div>
                  );
               })}
            </div>
         )}
      </div>
   );
};

export default Posts;
