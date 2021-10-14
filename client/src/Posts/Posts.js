import { getPost } from "../redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
const Posts = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPost());
   }, []);

   const state = useSelector((state) => state.reducer);
   console.log(state);
   return (
      <div>
         {!state ? (
            "loading"
         ) : (
            <div>
               {state.map((posts) => {
                  return (
                     <div>
                        <h1>{posts.title}</h1>
                        <img width="200px" src={posts.image} alt="loading..." />
                        <div>{moment(posts.createdAt).fromNow()}</div>
                     </div>
                  );
               })}
            </div>
         )}
      </div>
   );
};

export default Posts;
