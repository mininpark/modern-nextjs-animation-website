const Features = ({ icon, title, text, flexStyle, index }) => {
  console.log(text);
  return (
    <div className={`${flexStyle} text-white items-center mt-[30px]`}>
      <div className="w-[70px] min-w-[70px] h-[70px] mr-[30px] backdrop-blur-xl bg-[#323f5d] rounded-[24px] justify-center flex items-center">
        {icon === true ? (
          <img src={icon} alt={icon + index} />
        ) : (
          <div>{index + 1}</div>
        )}
      </div>
      {title && <h5>{title}</h5>}
      <p className="w-[300px]">{text}</p>
    </div>
  );
};

export default Features;
