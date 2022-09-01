import React from "react";
import { useRouter } from "next/router";
import {
  useGetPostItemQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../../src/api/posts";
import Link from "next/link";

const Post = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: post, isLoading, isError } = useGetPostItemQuery(id);
  const [deletePost, {}] = useDeletePostMutation();
  const [updatePost, {}] = useUpdatePostMutation();

  const handleUpdate = () => {
    const title = prompt();
    if (title) {
      updatePost({ ...post, title });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div className="postItem container my-1">
      <Link href="/posts">
        <button className="btn">Go to back</button>
      </Link>
      <div className="card" style={{ width: "18rem", marginTop: "2rem" }}>
        <div className="card-body">
          <h5 className="card-title">ID: {post.id}</h5>
          <p className="card-text">{post.title}</p>
          <p className="card-text">{post.body}</p>
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-primary" onClick={handleUpdate}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => deletePost(post)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
