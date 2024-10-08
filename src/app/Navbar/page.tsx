export default function Navbar() {
  return (
    <div>
      <div className="bg-black text-white">
        <a className="px-2 hover:bg-green-800" href="/">
          Home
        </a>
        <a className="px-2 hover:bg-green-800" href="/Login">
          Login Page
        </a>
        <a className="px-2 hover:bg-green-800" href="/Register">
          Register Page
        </a>
        <a className="px-2 hover:bg-green-800" href="/Profile">
          Profile Page
        </a>
      </div>
    </div>
  );
}
