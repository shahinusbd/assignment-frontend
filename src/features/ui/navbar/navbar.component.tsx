import { IoMdContact } from "react-icons/io";

export const Navbar = () => {
  const emailData = localStorage.getItem("email");
  return (
    <div className="mb-4">
      <div className="shadow-lg w-full pb-2">
        <div className="m-6">
          <span className="shadow-lg rounded-lg min-w-[218px] max-w-[400px] flex items-center gap-2 bg-[#F9F9F9] p-2">
            <IoMdContact className="h-[38px] w-[38px] text-[#545454]" />
            <p className="p-2 text-[#545454]">{emailData}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
