import Link from "next/link";
import styles from "./goToTop.module.scss";

function GoToTop() {
    return (
        <div className={styles.box}>
            <div className={styles.btn} onClick={() => {
                window.scrollTo(0, 0);
            }}>Back</div>
        </div>
    );
}

export default GoToTop;
