import styles from "./page.module.css";

import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SavingsIcon from "@mui/icons-material/Savings";
import PaidIcon from "@mui/icons-material/Paid";
import AdjustIcon from "@mui/icons-material/Adjust";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

export default function Home() {
  return (
    <section className={styles.screen}>
      <header className={styles.header}>
        <div className={styles.bars}>
          <MenuIcon />
        </div>
        <div className={styles.title}>
          <h4 className={styles.titleName}>Accounts</h4>
        </div>
        <div className={styles.add}>
          <AddIcon />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.box}>
          <AccountBalanceWalletIcon fontSize="large" className={styles.icon} />
          <p className={styles.iconHeading}>MyAccounts</p>
        </div>
        <div className={styles.box}>
          <SavingsIcon fontSize="large" className={styles.icon} />
          <p className={styles.iconHeading}>MySavings</p>
        </div>
        <div className={styles.box}>
          <AdjustIcon fontSize="large" className={styles.icon} />
          <p className={styles.iconHeading}>MyGoals</p>
        </div>
        <div className={styles.box}>
          <PaidIcon fontSize="large" className={styles.icon} />
          <p className={styles.iconHeading}>MyDebts</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <ShowChartOutlinedIcon fontSize="medium" />
        <FolderCopyOutlinedIcon
          fontSize="medium"
          className={styles.footerIcon}
        />
        <button className={styles.addIcon}>
          <AddIcon fontSize="large" />
        </button>
        <CalculateOutlinedIcon fontSize="medium" />
        <SignalCellularAltSharpIcon fontSize="medium" />
      </footer>
    </section>
  );
}
