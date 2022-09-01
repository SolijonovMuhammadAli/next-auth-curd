import React from "react";
import { useGetPostsQuery, useCreatePostMutation } from "../../src/api/posts";
import PostItem from "../../src/components/PostItem";
import { PostFace } from "../../src/model/postModel";
import useAuth from "../../src/hooks/useAuth";
import Head from "next/head";

const Posts = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery(100);
  const [createPost, {}] = useCreatePostMutation();
  const { logOut } = useAuth();

  const handleCreatePost = () => {
    const title = prompt();
    if (title) {
      createPost({ title, body: title } as PostFace);
    }
  };

  if (isError) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container posts_container">
      <Head>
        <title>Posts</title>
      </Head>
      <div className="buttons">
        <button className="btn btn-primary" onClick={handleCreatePost}>
          Add Post
        </button>
        <button className="btn btn-success" onClick={() => logOut()}>
          Log Out
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Posts</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
