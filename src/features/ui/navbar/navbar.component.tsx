import { IoMdContact } from "react-icons/io";
import { MdLogout } from "react-icons/md";
export const Navbar = () => {
  const emailData = localStorage.getItem("email");
  return (
    <div className="mb-3 ">
      <div className="flex justify-between shadow-lg w-full pb-2">
        <div className="m-4 max-w-[90%]">
          <span className="shadow-lg rounded-lg flex items-center gap-2 bg-[#F9F9F9] p-2">
            <IoMdContact className="h-[38px] w-[38px] text-[#545454]" />
            <p className="p-2 text-[#545454]">{emailData}</p>
          </span>
        </div>

        <MdLogout
          className="text-gray-600 cursor-pointer text-2xl mt-10 p-0 bg-transparent border-none outline-none relative -top-0.5 -left-5 rounded-full transition-transform duration-200 ease-in-out transform scale-100"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
};
