import axios from "axios";
import * as actions from "./actionTypes";
// import { url } from "../api";

const url = "http://localhost:5000/posts";

export const getPost = () => async (dispatch) => {
   try {
      const { data } = await axios.get(url);
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
      const { data } = await axios.post(url, { post });
      dispatch({
         type: actions.CREATE_POST,
         payload: data,
      });

      // console.log(data);
   } catch (err) {
      console.log(err);
   }
};

export const countLikes = (likes, post_id) => (dispatch) => {
   console.log(likes, post_id);
};

export const deletePosts = (post_id) => async (dispatch) => {
   try {
      await axios.delete(`${url}/${post_id}`);
      dispatch({
         type: actions.DELETE_POST,
         payload: post_id,
      });
   } catch (error) {
      console.log(error);
   }
   // console.log(post_id);
};

export const likePost = (id) => async (dispatch) => {
   try {
      const { data } = await axios.patch(`${url}/${id}/likePost`);
      dispatch({
         type: actions.LIKE_POST,
         payload: data,
      });
   } catch (error) {
      console.log(error);
   }
};
