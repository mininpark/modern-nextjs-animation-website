'use client';

const InsightCard = ({ imgUrl, title, subtitle, key }) => (
  <div className="flex row justify-between items-center my-[45px]">
    <img
      src={imgUrl}
      alt={imgUrl + key}
      className="w-[270px] h-[250px] object-cover rounded-[32px]"
    />
    <div className="w-[650px]  text-white">
      <h4 className="text-[42px] leading-[50px]">{title}</h4>
      <p className="text-[20px] leading-[40px] text-gray-500 mt-[14px]">
        {subtitle}
      </p>
    </div>
    <div className="w-[100px] h-[100px] border-2 border-[#F1F5F8] rounded-[50px] ml-[80px] relative">
      <img
        src="/arrow.svg"
        alt="arrow"
        className="w-[30px] h-[30px] absolute top-[30px] left-[33px]"
      />
    </div>
  </div>
);

export default InsightCard;
