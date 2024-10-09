export default function Navbar() {
  return (
    <div className="bg-[#2C3532] text-white">
      <div className="bg-[#2C3532] text-white">
        <a className="px-2 hover:bg-[#0F6466]" href="/">
          Home
        </a>
        <a className="px-2 hover:bg-[#0F6466]" href="/Login">
          Login Page
        </a>
        <a className="px-2 hover:bg-[#0F6466]" href="/Register">
          Register Page
        </a>
        <a className="px-2 hover:bg-[#0F6466]" href="/Profile">
          Profile Page
        </a>
      </div>
    </div>
  );
}
