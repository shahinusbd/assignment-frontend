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
          style={{
            color: "#545454",
            cursor: "pointer",
            fontSize: "24px",
            marginTop: "40px",
            padding: "0",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            position: "relative",
            top: "-2px",
            left: "-20px",
            borderRadius: "50%",
            transition: "transform 0.2s ease-in-out",
            transform: "scale(1)",
          }}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
};
