import { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import Modal from "../components/Modal";
import PortfolioCard from "../components/PortfolioCard";
import { useGlobalContext } from "../context/appContext";
import { portfolioItems } from "../utils/constants";

const Portfolio = () => {
  const { setparams } = useGlobalContext();

  const [modal, setModal] = useState(null);

  //useState for the store filtered portfolio item
  const [newPortfolioItems, setNewPortfolioItems] = useState(portfolioItems);

  // portfolioItem catergory filter and then store the item to the newPortfolioItems
  const filterItems = category => {
    if (category === "all") {
      setNewPortfolioItems(portfolioItems);
    } else {
      const newItems = portfolioItems.filter(
        item => item.category === category
      );
      setNewPortfolioItems(newItems);
    }
  };

  //set params for the navBar border in the bottom
  useEffect(() => {
    setparams("portfolio");
  }, [setparams]);

  //for hide the scroll when modal is open
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
      {/* heading */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-base md:text-3xl mb-4">
          Explore my latest projects!✨
        </h1>
      </div>
      {/* drop-down-component */}
      <DropDown filterItems={filterItems} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-8 md:gap-8 md:flex-row">
        {/* PortfolioCard's  */}
        <PortfolioCard
          setModal={setModal}
          newPortfolioItems={newPortfolioItems}
        />
      </div>
      {/* modal and open by depending on the modal state */}
      {modal ? <Modal modal={modal} setModal={setModal} /> : null}
    </>
  );
};
export default Portfolio;
