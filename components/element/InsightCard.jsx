'use client';

const InsightCard = ({ imgUrl, title, subtitle, key }) => (
  <div className="flex flex-col lg:flex-row justify-between items-center my-[45px] h-[620px] lg:h-full">
    <img
      src={imgUrl}
      alt={imgUrl + key}
      className="w-[270px] h-[250px] object-cover rounded-[32px]"
    />
    <div className="w-full max-w-[650px]  text-white text-center lg:text-left">
      <h4 className="text-[42px] leading-[50px]">{title}</h4>
      <p className="text-[20px] leading-[40px] text-gray-500 mt-[14px]">
        {subtitle}
      </p>
    </div>
    <a
      className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] border-2 border-[#F1F5F8] rounded-[40px] xl:rounded-[50px] relative cursor-pointer"
      href="/"
    >
      <img
        src="/arrow.svg"
        alt="arrow"
        className="w-[30px] h-[30px] absolute top-[22px] left-[22px] xl:top-[33px] xl:left-[32px] "
      />
    </a>
  </div>
);

export default InsightCard;
