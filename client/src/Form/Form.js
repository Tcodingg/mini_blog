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
      // axios.post("http://localhost:5000/posts", {
      //    postData,
      // });
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
         <div className="form-container section">
            <div className="form">
               <input type="text" name="title" onChange={handleChange} />
               <textarea type="text" name="note" onChange={handleChange} />
               <input type="text" name="tags" onChange={handleChange} />

               <div>
                  <FileBase64
                     type="file"
                     multiple={false}
                     onDone={({ base64 }) =>
                        setPostData({ ...postData, image: base64 })
                     }
                  />
               </div>
               <button onClick={handleAdd}>ADD</button>
            </div>
         </div>
      </div>
   );
};

export default Form;
