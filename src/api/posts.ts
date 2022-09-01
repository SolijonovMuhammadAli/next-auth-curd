import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostFace } from "../model/postModel";

const baseUrl = "http://localhost:5000";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Posts"],
  endpoints: builder => ({
    getPosts: builder.query<PostFace[] | undefined, number>({
      query: (limit: number) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Posts"],
    }),
    getPostItem: builder.query({
      query: id => ({
        url: `/posts/${id}`,
      }),
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation<PostFace, PostFace>({
      query: post => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation<PostFace, PostFace>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<PostFace, PostFace>({
      query: post => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostItemQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = apiSlice;
