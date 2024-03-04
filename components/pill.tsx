const Pill = ({ text }: { text: string }) => {
  return (
    <div
      className="bg-gradient-to-r shrink-0 from-brand to-yellow-500 w-fit mx-auto p-[2px] rounded-full shadow-md shadow-brand/20 mb-16"
      data-aos="fade-up"
    >
      <div className="bg-white dark:bg-[#030712] rounded-full px-4 py-[3px]">
        <p className="whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
};

export default Pill;
