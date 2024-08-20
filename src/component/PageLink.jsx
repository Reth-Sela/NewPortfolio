import Link from "./Link";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center justify-center gap-2 p-4  rounded-lg shadow-lg">
        <Link
          text={"<<"}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
        />
        <Link
          text={"1"}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition duration-300"
        />
        <Link
          text={"2"}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition duration-300"
        />
        <Link
          text={"3"}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition duration-300"
        />
        <Link
          text={"4"}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition duration-300"
        />
        <Link
          text={">>"}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Pagination;
