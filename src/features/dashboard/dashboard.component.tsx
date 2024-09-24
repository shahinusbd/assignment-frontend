import { Card } from "primereact/card";
import { IoMdContact } from "react-icons/io";

export const DashBoard = () => {
  return (
    <div className="">
      <div>
        <Card className="h-[91px] p-0">
          <span className="shadow-lg min-w-[218px] max-w-[400px]">
            <p>
              <strong className="flex">
                {" "}
                <IoMdContact className="h-[38px] w-[38px]" />
                <p className="p-2">shahinsheikh885@gmail.com</p>
              </strong>
            </p>
          </span>
        </Card>
      </div>
      <div className=""></div>
    </div>
  );
};
