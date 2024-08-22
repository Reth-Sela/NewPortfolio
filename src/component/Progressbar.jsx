const Progressbar = ({ number, className }) => {
  return (
    <div className=" h-[40px] border border-gray-400 mr-[20px] mt-[20px] rounded-[10px]">
      <div
        className={`${className}  bg-gray-500 h-full rounded-[10px] text-white flex items-center justify-center`}
        style={{ width: number }}
      >
        {number}
      </div>
    </div>
  );
};

export default Progressbar;
