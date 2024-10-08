import Navbar from "./Navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1 className="text-center text-2xl my-5">NextJS Application</h1>
      <p className="text-center">
        I am a web developer and learning web development on base of awesome
        framework NextJS. This framework is of JavaScript.{" "}
      </p>
      <p className="text-center text-red-900 my-6 text-2xl">
        Click on links in above navigation bar
      </p>
    </div>
  );
}
