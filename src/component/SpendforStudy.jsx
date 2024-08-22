import Alink from "./Alink";

const SpendforStudy = ({
  title,
  sub1,
  sub2,
  sub3,
  sub4,
  price,
  background,
}) => {

  
  return (
    <div className="lg:w-[380px] md:w-[300px] sm:w-[220px] h-[540px] block mt-[12px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div
        className={`h-[100px] border  border-gray-300 text-[24px] flex items-center font-raleway justify-center text-white ${background}`}
      >
        {title}
      </div>
      <div className="h-[55px] border border-gray-300 flex items-center font-raleway justify-center text-[15px] ">
        {sub1}
      </div>
      <div className="h-[55px] border border-gray-300 flex items-center font-raleway justify-center text-[15px]">
        {sub2}
      </div>
      <div className="h-[55px] border border-gray-300 flex items-center font-raleway justify-center text-[15px]">
        {sub3}
      </div>
      <div className="h-[55px] border border-gray-300 flex items-center font-raleway justify-center text-[15px]">
        {sub4}
      </div>
      <div className="block   h-[120px] border border-gray-300 pt-[30px]">
        <div className="flex items-center justify-center text-[24px] font-raleway font-bold ">
          {price}
        </div>
        <div>
          <p className="font-raleway text-[15px] items-center justify-center flex">
            per month
          </p>
        </div>
      </div>
      <div className=" h-[100px] border border-gray-300 flex justify-center items-center bg-gray-300">
        <div className="h-[50px] w-[100px] ">
          <Alink text={"submit"} className={"bg-blue-500 text-white"} />
        </div>
      </div>
    </div>
  );
};

export default SpendforStudy;
