import styles from "./App.module.scss";
import CustomTooltip from "./customTooltip";
import { placement } from "./types";

function App() {
  const renderTooltip = (texts: string[]) => {
    return texts.map((text) => (
      <CustomTooltip
        placement={text.replace(" ", "-").toLowerCase() as placement}
        message={`This Shows the ${text} position of tooltip.`}
        key={text}
      >
        <div className={styles.tooltipBase}>{text}</div>
      </CustomTooltip>
    ));
  };
  return (
    <>
      <div className={styles.header}>React Custom tooltip</div>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          {renderTooltip(["Top Left", "Top Center", "Top Right"])}
        </div>
        <div className={styles.center}>
          <div className={styles.left}>
            {renderTooltip(["Left Top", "Left Center", "Left Bottom"])}
          </div>
          <div className={styles.right}>
            {renderTooltip(["Right Top", "Right Center", "Right Bottom"])}
          </div>
        </div>
        <div className={styles.bottom}>
          {renderTooltip(["Bottom Left", "Bottom Center", "Bottom Right"])}
        </div>
      </div>
    </>
  );
}

export default App;
