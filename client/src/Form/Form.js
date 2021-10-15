import { useState } from "react";
import axios from "axios";
import "./Form.css";
import "../index.css";
import FileBase64 from "react-file-base64";
import { createPost } from "../redux/action";
import { useDispatch } from "react-redux";
const Form = () => {
   const [postData, setPostData] = useState({
      title: "",
      note: "",
      tags: [],
      image: "",
   });
   const dispatch = useDispatch();
   function handleChange(e) {
      const { name, value } = e.target;
      setPostData({ ...postData, [name]: value });
   }

   function handleAdd() {
      dispatch(createPost(postData));
      console.log(postData);

      setPostData({
         title: "",
         note: "",
         tags: [],
         image: "",
      });
   }

   return (
      <div>
         <div className="form-container ">
            <h5 className="title">share your blog</h5>

            <div className="form">
               <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Title"
               />
               {/* <input type="text" name="creator" onChange={handleChange} /> */}

               <FileBase64
                  type="file"
                  background="red"
                  multiple={false}
                  onDone={({ base64 }) =>
                     setPostData({ ...postData, image: base64 })
                  }
               />

               <textarea
                  type="text"
                  name="note"
                  onChange={handleChange}
                  placeholder="Note..."
               />

               {/* <input type="text" name="tags" onChange={handleChange} /> */}

               <button onClick={handleAdd}>Post</button>
            </div>
         </div>
      </div>
   );
};

export default Form;
