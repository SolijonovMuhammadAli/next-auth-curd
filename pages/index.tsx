import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../src/hooks/useAuth";
import { Inputs } from "../src/model/submitModel";

const Home: NextPage = () => {
  const [login, setLogin] = useState(true);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async ({ email, password }: Inputs) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };
  return (
    <div className="main">
      <Head>
        <title>Login</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{login ? "Sign In" : "Sign Up"}</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <small id="emailHelp" className="form-text text-muted">
              This field is required
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <small id="emailHelp" className="form-text text-muted">
              Your password must cobtainer 4 and 60 characters
            </small>
          )}
        </div>
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            {login ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={() => setLogin(!login)}>
            {!login ? "Sign In" : "Sign Up"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Home;
