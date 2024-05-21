/* eslint-disable react/prop-types */
const PortfolioCard = ({ setModal, newPortfolioItems }) => {
  return (
    <>
      {newPortfolioItems.map((item, index) => {
        const { img, name, uses } = item;
        return (
          <div
            key={index}
            onClick={() => setModal(name)}
            className="shadow-xl bg-white dark:bg-darkHover p-3 rounded-xl  scale-hover cursor-pointer max-h-[248px]"
          >
            <div className="for-hover" href="#">
              <img
                className="w-full h-auto rounded-lg transition-all duration-300 "
                src={img}
                width="344"
                height="224.52"
                alt="portfolio"
              />
              <div className="hover-item">
                <h1 className="text-2xl font-bold mb-2">{name}</h1>
                <p className="text-lg "> {uses} </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PortfolioCard;
