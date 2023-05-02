import Carousel from "../../components/Carousel/Carousel";

const Github = () => {
  const tab = [
    "./src/assets/img/portfolio_sophieBruel.png",
    "./src/assets/img/portfolio_sophieBruel2.png",
  ];
  return (
    <section>
      <Carousel arrayImg={tab} />
    </section>
  );
};

export default Github;
