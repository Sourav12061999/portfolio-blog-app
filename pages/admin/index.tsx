import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@Features";
import { NavLinks } from "@Constants";
import { Table } from "@Features";
import { TableData } from "dummyData";
const Admin: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar links={NavLinks.links} />
      <main>
        <Table data={TableData.data} />
      </main>
    </div>
  );
};

export default Admin;
