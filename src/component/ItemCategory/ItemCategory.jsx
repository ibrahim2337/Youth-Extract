import img1 from "../../assets/category/BC58-2017-405x330-removebg-preview.png";
import img2 from "../../assets/category/meter.png";
import img3 from "../../assets/category/mask.png";
import img4 from "../../assets/category/chair.png";
import img5 from "../../assets/category/medicien.png";

const ItemCategory = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-20 px-5 py-10">
        <div className="bg-[#FB714C] flex justify-between items-center px-5 py-5 rounded-lg">
          <div className="text-white py-5">
            <p className="uppercase ">40% off</p>
            <h1 className="text-xl font-bold uppercase">
              Monthly Offer for bp
            </h1>
            <button className="uppercase border px-5 py-1.5 rounded-md hover:text-[#FB714C] hover:bg-white mt-5">
              shop now
            </button>
          </div>
          <div>
            <img className="h-52" src={img1} alt="" />
          </div>
        </div>

        <div className="bg-[#079AC6] flex justify-between items-center px-5 py-5 rounded-lg">
          <div className="text-white py-5">
            <p className="uppercase ">50% off</p>
            <h1 className="text-xl font-bold uppercase">Digital Thermometer</h1>
            <button className="uppercase border px-5 py-1.5 rounded-md hover:text-[#079AC6] hover:bg-white mt-5">
              shop now
            </button>
          </div>
          <div>
            <img className="h-52 w-full" src={img2} alt="" />
          </div>
        </div>

        <div className="bg-[#3E4B69] flex justify-between items-center px-5 py-5 rounded-lg">
          <div className="text-white py-5">
            <p className="uppercase ">20% off</p>
            <h1 className="text-xl font-bold uppercase">
              Different Color Mask
            </h1>
            <button className="uppercase border px-5 py-1.5 rounded-md hover:text-[#3E4B69] hover:bg-white mt-5">
              shop now
            </button>
          </div>
          <div>
            <img className="h-52" src={img3} alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-20 px-5 mb-10">
        <div className="bg-[#D9EBFE] flex justify-between items-center px-5 py-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div className="">
            <p className="uppercase text-xl lg:mt-10">50% off</p>
            <h1 className="text-4xl font-bold uppercase mb-12">
              Meddical <br /> chair
            </h1>
            <button className="uppercase border border-black px-10 py-1.5 rounded-md hover:text-[#D9EBFE] hover:bg-black">
              shop now
            </button>
          </div>
          <div>
            <img
              className="lg:h-80 h-52 transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              src={img4}
              alt=""
            />
          </div>
        </div>

        {/* <div className="bg-[#CBFFD9] flex justify-between items-center px-5 py-5 rounded-lg">
            <div className="">
              <p className="uppercase text-xl lg:mt-10">50% off</p>
              <h1 className="text-4xl font-bold uppercase mb-12">
                Meddical <br /> chair
              </h1>
              <button className="uppercase border border-black px-10 py-1.5 rounded-md hover:text-[#CBFFD9] hover:bg-black">
                shop now
              </button>
            </div>
            <div>
              <img className="lg:h-80 h-52" src={img5} alt="" />
            </div>
          </div> */}

        <div className="bg-[#CBFFD9] flex justify-between items-center px-5 py-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div className="">
            <p className="uppercase text-xl lg:mt-10">50% off</p>
            <h1 className="text-4xl font-bold uppercase mb-12">
              All <br />
              Medicine
            </h1>
            <button className="uppercase border border-black px-10 py-1.5 rounded-md transition-all duration-300 hover:text-[#CBFFD9] hover:bg-black hover:scale-105 hover:shadow-md">
              shop now
            </button>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="lg:h-80 h-52 transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              src={img5}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCategory;
