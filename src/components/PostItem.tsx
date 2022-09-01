import React from "react";
import { useRouter } from "next/router";
import { useDeletePostMutation, useUpdatePostMutation } from "../api/posts";
import { PostFace } from "../model/postModel";

const PostItem = ({ post }: { post: PostFace }) => {
  const [deletePost, {}] = useDeletePostMutation();
  const [updatePost, {}] = useUpdatePostMutation();
  const router = useRouter();
  const handleUpdate = () => {
    const title = prompt();
    if (title) {
      updatePost({ ...post, title });
    }
  };
  return (
    <tr>
      <td>{post.id}</td>
      <td onClick={() => router.push(`/posts/${post.id}`)}>{post.title}</td>
      <td className="action">
        <button className="btn btn-primary" onClick={handleUpdate}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => deletePost(post)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PostItem;
