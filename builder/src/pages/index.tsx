import Head from "next/head";

export default function Home({data}: any) {
  return (
    <>
      <Head>
        <title>{data?.title || "bubucuo"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content="bubucuo lowcode low code" />
      </Head>
      <main>
        <div className="err">
          id 信息有误，请检查之后重新输入，或者微信联系作者
        </div>
      </main>
    </>
  );
}
