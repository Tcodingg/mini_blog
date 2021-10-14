import axios from "axios";
import * as actions from "./actionTypes";
import { url } from "../api";

export const getPost = () => async (dispatch) => {
   try {
      const { data } = await axios.get("http://localhost:5000/posts");
      dispatch({
         type: actions.GET_POST,
         payload: data,
      });
      //console.log(data);
   } catch (err) {
      console.log(err);
   }
};

export const createPost = (post) => async (dispatch) => {
   try {
      await axios.post(url, { post });
      dispatch({
         type: actions.CREATE_POST,
         payload: post,
      });

      console.log(post);
   } catch (err) {
      console.log(err);
   }
};
