const SaleFifty = () => {
  return (
    <div className="bg-gray-200 mt-40">
      <div className="max-w-6xl text mx-auto">
        <div className="flex">
          <div className="mt-[-50px]">
            <img
              className=""
              src="../../../src/assets/img/sel_banr.jpg"
              alt=""
            />
          </div>
          <div className="pt-16 ps-8">
            <h3 className="text-4xl font-medium">
              100 items - Sabujcha for sell in 2023
            </h3>
            <h1 className="text-8xl font-bold text-custom py-3">Sale 50%</h1>
            <div className="flex gap-5 my-10">
              <div className="flex flex-col bg-white w-[90px] py-3 font-medium rounded shadow-xl text-center">
                <span className="text-2xl font-semibold">00</span>{" "}
                <span className="text-sm">Days</span>
              </div>
              <div className="flex flex-col bg-white w-[90px] py-3 font-medium rounded shadow-xl text-center">
                <span className="text-2xl font-semibold">00</span>{" "}
                <span className="text-sm">Days</span>
              </div>
              <div className="flex flex-col bg-white w-[90px] py-3 font-medium rounded shadow-xl text-center">
                <span className="text-2xl font-semibold">00</span>{" "}
                <span className="text-sm">Days</span>
              </div>
              <div className="flex flex-col bg-white w-[90px] py-3 font-medium rounded shadow-xl text-center">
                <span className="text-2xl font-semibold">00</span>{" "}
                <span className="text-sm">Days</span>
              </div>
            </div>
            <button className="text-white bg-custom p-3 rounded-full px-5 mt-3">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleFifty;
