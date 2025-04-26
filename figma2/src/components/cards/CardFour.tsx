const CardFour = () => {
  return (
    <div
      className="w-md mt-10 h-[60vh] relative "
      style={{
        backgroundColor: "#84D5D0",
        backgroundImage:
          "linear-gradient(#575357 1px, transparent 1px), linear-gradient(90deg, #565456 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }}
    >
      <div className="z-50 relative">
        <img src="/cardUi/file/01.svg" alt="" className="w-40  translate-y-16 z-50" />
      </div>

      <div className="relative w-fit translate-x-14 translate-y-8 z-30">
        <img src="/cardUi/file/star.svg" alt="" className="w-50" />
        <img
          src="/cardUi/file/flower.svg"
          alt=""
          className="w-10 absolute top-[38%] right-[38%]"
        />
      </div>
      <div className="relative  translate-x-6 z-50 ">
        <img
          src="/cardUi/file/new.svg"
          alt=""
          className="  absolute w-70   z-30"
        />
        <img
          src="/cardUi/file/layer.svg"
          alt=""
          className="  w-70  absolute top-2 translate-x-4 z-20"
        />
        <img
          src="/cardUi/file/layerthree.svg"
          alt=""
          className="  w-70 absolute top-5 translate-x-6"
        />
        <p className=" z-50 absolute  left-12 top-12 text-lg font-bold">
          I was worn at that time
        </p>
      </div>
      <img src="/cardUi/file/y2k.svg" alt=""  className="w-60  absolute right-8 top-20 z-0"/>
      <img src="/cardUi/file/flower2.svg" alt=""  className="w-20  absolute right-4 translate-y-4  z-0"/>
    </div>
  );
};

export default CardFour;
