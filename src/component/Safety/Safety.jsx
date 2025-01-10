import img1 from "../../assets/safety/difference1.webp";
import img2 from "../../assets/safety/difference2.webp";
import img3 from "../../assets/safety/difference3.webp";

const Safety = () => {
  return (
    <div className="py-10 bg-black">
      <h1 className="text-[#48B4BB] text-5xl font-bold text-center">
        What Makes The Difference ?
      </h1>
      <h3 className=" text-2xl text-center uppercase mt-5 mb-10 text-white">
        High perfomance and safety
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-40 px-5 gap-10">
        <div className="flex flex-col justify-center items-center ">
          <div className="relative border flex justify-center items-center  rounded-full h-60 w-60 bg-[#7db2b6] hover:bg-[#48B4BB]">
            <img
              className="absolute rounded-full hover:scale-105"
              src={img1}
              alt=""
            />
          </div>
          <h1 className="text-[#48B4BB] text-3xl font-bold text-center mt-5">
            Prevent Bacteria
          </h1>
          <p className="  text-center text-white mt-2">
            Get complete protection while work in office or home or wherever you
            are.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="relative border flex justify-center items-center  rounded-full h-60 w-60 bg-[#7db2b6] hover:bg-[#48B4BB]">
            <img className="absolute rounded-full" src={img2} alt="" />
          </div>
          <h1 className="text-[#48B4BB] text-3xl font-bold text-center mt-5">
            Complete Protection
          </h1>
          <p className="  text-center text-white mt-2">
            Get complete protection while work in office or home or wherever you
            are.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="relative border flex justify-center items-center rounded-full h-60 w-60 bg-[#7db2b6] hover:bg-[#48B4BB] ">
            <img className="absolute rounded-full" src={img3} alt="" />
          </div>
          <h1 className="text-[#48B4BB] text-3xl font-bold text-center mt-5">
            Accuracy
          </h1>
          <p className="  text-center text-white mt-2">
            Get complete protection while work in office or home or wherever you
            are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
