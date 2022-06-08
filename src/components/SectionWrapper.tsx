import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

export interface SectionWrapperProps {
  banner?: string;
  description: string;
  mockupImg: string;
  reverse?: boolean;
  showBtn?: boolean;
  title: string;
}

const SectionWrapper = ({
  banner,
  description,
  mockupImg,
  reverse,
  showBtn,
  title,
}: SectionWrapperProps) => {
  return (
    <div
      className={`${banner} 
      ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      min-h-screen`}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full minmd:3/4 ${
          reverse ? styles.boxReverseClass : styles.boxClass
        }`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          } ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </p>
          {showBtn ? (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@agomesd/nft-native?serviceType=classic&distribution=expo-go"
            />
          ) : null}
        </div>
        <div className={`${styles.flexCenter} flex-1 p-8 sm:p-0`}>
          <img
            src={mockupImg}
            alt="Mockup"
            className={`${reverse ? "fadeRightMini" : "fadeLeftMini"} ${
              styles.sectionImg
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
