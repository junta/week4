import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type UserData = {
  name: string;
  age: number;
  address: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().positive().integer().required(),
    address: yup.string().required(),
  })
  .required();

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UserData> = (data) => {
    console.log("user input data:", { data });
    reset();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>User Form</title>
        <meta
          name="description"
          content="A simple Next.js/Hardhat privacy application with Semaphore."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>User form</h1>
        <p className={styles.description}>
          A simple form with name, age and address
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              helperText={errors.name?.message}
              {...register("name")}
            />
          </p>
          <p>
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              helperText={errors.age?.message}
              {...register("age")}
            />
          </p>
          <p>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              helperText={errors.address?.message}
              {...register("address")}
            />
          </p>
          <p>
            <Button variant="contained" type="submit">
              submit
            </Button>
          </p>
        </form>
      </main>
    </div>
  );
}
