import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Title } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Title>Hello World</Title>
      <Button>Click Me</Button>
    </div>
  );
};

export default Home;
