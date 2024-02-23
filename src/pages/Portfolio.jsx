import { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/appContext";
//import portfolio items object/array
import { portfolioItems } from "../utils/constants";

const Portfolio = () => {
  const { setparams } = useGlobalContext();
  // const { portfolio } = useParams();
  const [modal, setModal] = useState(null);
  //useState for the dropDown button value for filter the projects
  // const [dropDownvalue, setDropDownValue] = useState("all");
  //useState for the store filtered portfolio item
  const [newPortfolioItems, setNewPortfolioItems] = useState(portfolioItems);

  const filterItems = category => {
    console.log(category);
    if (category === "all") {
      setNewPortfolioItems(portfolioItems);
    } else {
      const newItems = portfolioItems.filter(
        item => item.category === category
      );
      setNewPortfolioItems(newItems);
    }
  };

  useEffect(() => {
    setparams("portfolio");
  }, [setparams]);

  useEffect(() => {
    console.log(newPortfolioItems);
  }, [newPortfolioItems]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [modal]);

  // console.log(params);

  return (
    <>
      {/* drop-down-component */}
      <DropDown filterItems={filterItems} />
      {/* <!-- row --> */}
      {/* <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl mb-4">All latest projects!✨</h1>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-8 md:gap-8 md:flex-row">
        {newPortfolioItems.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setModal(item.name)}
              className="shadow-xl bg-white dark:bg-darkHover p-3 rounded-xl  scale-hover cursor-pointer"
            >
              <div className="for-hover" href="#">
                <img
                  className="w-full rounded-lg transition-all duration-300"
                  src={item.img}
                  width="344"
                  height="224.52"
                  alt="portfolio"
                />
                <div className="hover-item">
                  <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
                  <p className="text-lg "> {item.uses} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <!-- row-end --> */}
      {modal ? <Modal modal={modal} setModal={setModal} /> : null}
    </>
  );
};
export default Portfolio;
