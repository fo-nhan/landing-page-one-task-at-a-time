import Image from "next/image";
import Page from "../app/@views/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>One Task at a Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </>
  );
}
