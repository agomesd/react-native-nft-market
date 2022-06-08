import assets from "../assets";
import styles from "../styles/Global";

export interface FeatureCardProps {
  iconUrl: string;
  iconText: string;
  linkUrl: string;
}

export const FeatureCard = ({
  iconUrl,
  iconText,
  linkUrl,
}: FeatureCardProps) => {
  return (
    <div
      className={styles.featureCard}
      onClick={() => window.open(linkUrl, "_blank")}
    >
      <img src={iconUrl} alt="Icon" className={styles.featureImg} />
      <p className={styles.featureText}>{iconText}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology,
            React-Native.
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard
            iconUrl={assets.react}
            iconText="React Native"
            linkUrl="https://reactnative.dev/"
          />
          <FeatureCard
            iconUrl={assets.typescript}
            iconText="Typescript"
            linkUrl="https://www.typescriptlang.org/"
          />
          <FeatureCard
            iconUrl={assets.tailwind}
            iconText="TailwindCSS"
            linkUrl="https://tailwindcss.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
