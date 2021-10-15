import camaro_2021 from "../camaro_2021.jpg";
import { IoMdThumbsUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import "./Post.css";

const Post = () => {
   return (
      <div className="posts-container">
         <h5>camero z1</h5>
         <img src={camaro_2021} alt="" />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            architecto praesentium molestiae corrupti iste dolor. A est labore
            illum error!
         </p>
         <div className="icons-container">
            <div className="thumbup-counter icons">
               <IoMdThumbsUp className="thumb-up " />
               <p>10</p>
            </div>
            <MdDelete className="delete icons" />
         </div>
      </div>
   );
};

export default Post;
