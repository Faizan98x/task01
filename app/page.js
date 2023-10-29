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
        <section className={styles.bars}>
          <MenuIcon />
        </section>
        <section className={styles.title}>
          <h4 className={styles.titleName}>Accounts</h4>
        </section>
        <section className={styles.add}>
          <AddIcon />
        </section>
      </header>

      <main className={styles.main}>
        <section className={styles.box}>
          <AccountBalanceWalletIcon className={styles.icon} />
          <p className={styles.iconHeading}>MyAccounts</p>
        </section>
        <section className={styles.box}>
          <SavingsIcon className={styles.icon} />
          <p className={styles.iconHeading}>MySavings</p>
        </section>
        <section className={styles.box}>
          <AdjustIcon className={styles.icon} />
          <p className={styles.iconHeading}>MyGoals</p>
        </section>
        <section className={styles.box}>
          <PaidIcon className={styles.icon} />
          <p className={styles.iconHeading}>MyDebts</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <ShowChartOutlinedIcon />
        <FolderCopyOutlinedIcon className={styles.footerIcon} />
        <button className={styles.addIcon}>
          <AddIcon />
        </button>
        <CalculateOutlinedIcon />
        <SignalCellularAltSharpIcon />
      </footer>
    </section>
  );
}
