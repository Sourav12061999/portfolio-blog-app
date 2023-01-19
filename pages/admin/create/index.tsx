import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@Features";
import { NavLinks } from "@Constants";
import Editor from "Features/Editor";
const Create: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create New Blog</title>
        <meta name="description" content="This page used to create new blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar links={NavLinks.links} />
      <main>
        <Editor />
      </main>
    </div>
  );
};

export default Create;
