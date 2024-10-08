import Navbar from "../Navbar/page";
export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="bg-cyan-500 my-5">
        <h1 className="text-center text-2xl my-5">Profile Page Data</h1>
        <p className="text-center text-red-900">User profile</p>
      </div>
    </div>
  );
}
