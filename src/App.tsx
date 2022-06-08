import assets from "./assets";
import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        banner="banner"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        mockupImg={assets.homeHero}
        showBtn
        title="Your own NFT store. Start selling and growing."
      />

      <SectionWrapper
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
        title="Smart user interface marketplace."
      />
      <Features />
      <SectionWrapper
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into peoples hands."
        mockupImg={assets.feature}
        reverse
        title="Deployment"
      />

      <SectionWrapper
        banner="banner02"
        description="The app contains 2 screens, The first screen lists all the NFTs while the second displays details for a specific NFT"
        mockupImg={assets.mockup}
        title="Creative way to showcase the store."
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          App created from{" "}
          <span className="bold">Javascript Mastery Tutorial</span>
        </p>
      </div>
    </>
  );
};

export default App;
