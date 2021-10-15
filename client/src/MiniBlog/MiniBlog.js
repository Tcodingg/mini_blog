import "./MiniBlog.css";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const MiniBlog = () => {
   return (
      <div className="mini-blog">
         <div className="mini-blog-container">
            <Posts />
            <Form />
         </div>
      </div>
   );
};

export default MiniBlog;
