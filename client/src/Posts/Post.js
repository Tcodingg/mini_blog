import camaro_2021 from "../camaro_2021.jpg";
import { IoMdThumbsUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { countLikes, deletePosts } from "../redux/action";
import { useDispatch } from "react-redux";
import { likePost } from "../redux/action";
import "./Post.css";

const Post = ({ title, note, id, image, like }) => {
   const dispatch = useDispatch();

   return (
      <div key={id} className="posts-container">
         <h5>{title}</h5>
         <img src={image} alt="" />
         <p>{note}</p>
         <div className="icons-container">
            <div className="thumbup-counter icons">
               <IoMdThumbsUp
                  onClick={() => dispatch(likePost(id))}
                  className="thumb-up "
               />
               <p style={{ fontSize: "10px" }}>{like}</p>
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
