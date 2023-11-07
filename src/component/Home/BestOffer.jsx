const BestOffer = () => {
  return (
    <div>
      <div className="max-w-6xl text mx-auto my-0">
        <div className="grid grid-cols-2 gap-8">
          <div className="overflow-hidden relative">
            <img
              className="rounded cursor-pointer hover:scale-110 ease-in duration-300"
              src="../../../src/assets/img/b01.png"
              alt=""
            />
            <div className="absolute top-1/2 translate-y-[-50%] left-10">
              <h3 className="font-semibold text-5xl text-custom">-50% Sale</h3>
              <h4 className="text-gray-500 font-semibold p-2 uppercase">
                Winter Vacation
              </h4>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <img
              className=" rounded hover:scale-110 ease-in duration-300"
              src="../../../src/assets/img/b02.png"
              alt=""
            />
            <div className="absolute top-1/2 translate-y-[-50%] left-10">
              <h3 className="font-semibold text-5xl text-custom">-25% Sale</h3>
              <h4 className="text-gray-500 font-semibold p-2 uppercase">
                Summer Vacation
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffer;
