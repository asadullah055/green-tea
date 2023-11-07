const Team = () => {
  return (
    <div>
      <div className="max-w-6xl text mx-auto my-0">
        <h1 className="text-center text-4xl py-6 font-semibold">
          Team Members
        </h1>
        <div className="flex gap-5">
          <div className="border shadow-lg">
            <img src="../../../src/assets/img/team_11.png" alt="" />
            <div className="text-center py-3">
              <h2 className="font-bold p-2 text-custom">Tony Willamson</h2>
              <h5 className="font-semibold uppercase">Founder</h5>
            </div>
          </div>
          <div className="border shadow-lg">
            <img src="../../../src/assets/img/team_31.png" alt="" />
            <div className="text-center py-3">
              <h2 className="font-bold p-2 text-custom">Jony Smith</h2>
              <h5 className="font-semibold uppercase">ceo</h5>
            </div>
          </div>
          <div className="border shadow-lg">
            <img src="../../../src/assets/img/team_41.png" alt="" />
            <div className="text-center py-3">
              <h2 className="font-bold p-2 text-custom">JInglo Jelian</h2>
              <h5 className="font-semibold uppercase">Desiner</h5>
            </div>
          </div>
          <div className="border shadow-lg">
            <img src="../../../src/assets/img/team_21.png" alt="" />
            <div className="text-center py-3">
              <h2 className="font-bold p-2 text-custom">William Hanah</h2>
              <h5 className="font-semibold uppercase">Advisor</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
