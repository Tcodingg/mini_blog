import camaro_2021 from "../camaro_2021.jpg";
import { IoMdThumbsUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { countLikes, deletePosts } from "../redux/action";
import { useDispatch } from "react-redux";
import "./Post.css";

const Post = ({ title, note, id, image }) => {
   const [likes, setLikes] = useState(0);
   const dispatch = useDispatch();

   const countLike = (post_id) => {
      setLikes(likes + 1);
      dispatch(countLikes(likes, post_id));
   };

   // delete post

   return (
      <div key={id} className="posts-container">
         <h5>{title}</h5>
         <img src={image} alt="" />
         <p>{note}</p>
         <div className="icons-container">
            <div className="thumbup-counter icons">
               <IoMdThumbsUp
                  onClick={() => countLike(id)}
                  className="thumb-up "
               />
               <p style={{ fontSize: "10px" }}>{likes}</p>
            </div>
            <MdDelete
               className="delete icons"
               onClick={() => dispatch(deletePosts(id))}
            />
         </div>
      </div>
   );
};

export default Post;
