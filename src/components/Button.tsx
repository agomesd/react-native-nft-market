import styles from "../styles/Global";

export interface ButtonProps {
  assetUrl: string;
  link: string;
}

const Button = ({ assetUrl, link }: ButtonProps) => {
  return (
    <div
      className={`${styles.btnBlack}`}
      onClick={() => window.open(link, "_blank")}
    >
      <img className={styles.btnIcon} src={assetUrl} alt="Expo Icon" />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
