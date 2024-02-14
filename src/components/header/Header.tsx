import { FaBars } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import YTLOGO from "../../assets/images/img/YTLOGO1.png";
import { CgProfile } from "react-icons/cg";

const Header: React.FC = () => {
  return (
    <>
      <div className="fixed flex justify-between bg-[#141617] h-[70px] p-[10px] px-[30px] w-full ">
        <div className="flex items-center gap-[30px]">
          <FaBars className="text-white text-[1rem] cursor-pointer" />
          <img src={YTLOGO} alt="" className="w-[110px] cursor-pointer" />
          <span className="text-[1.2rem] font-bold text-white uppercase">Cloned By: Jerico U. Niño</span>
        </div>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search"
            className="w-[500px] text-white border-[1px] border-[#636363] active:border-[#3ba0ff] focus:border-[#3ba0ff] py-[8px] px-[20px] rounded-full bg-transparent"
          />
        </div>
        <div className="w-[150px] flex items-center gap-[20px]">
          <SlOptionsVertical className="cursor-pointer hover:text-white duration-300" />
          <div className="flex justify-center items-center border-[1px] border-[#585858] rounded-full py-[5px] px-[10px] gap-[5px] text-[1rem] font-[500] text-[#3ba0ff] hover:bg-[#73b4f07e] hover:border-[#73b4f07e] duration-500 cursor-pointer ">
            <CgProfile />
            Sign in
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
