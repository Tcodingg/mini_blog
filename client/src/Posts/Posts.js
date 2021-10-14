import { getPost } from "../redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Posts = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPost());
   }, [dispatch]);

   const state = useSelector((state) => state.reducer);
   console.log(state);
   return <div></div>;
};

export default Posts;
