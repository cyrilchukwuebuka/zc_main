import React from "react"
import AdminSettings from "./index"
import AccountProfileTab from "./components/AccountProfileTabs"
import styles from "./styles/aboutWorkspace.module.css"
import { FiAlertOctagon } from "react-icons/fi"

const AccountProfile = () => {
  return (
    <AdminSettings>
      <div className={styles.workSpaceContainer}>
        <div className={styles.contentWrapper}>
          <h5 className={styles.contentHeading}>
            {" "}
            <FiAlertOctagon className={styles.icon} /> Account and profile
          </h5>
          <AccountProfileTab />
        </div>
      </div>
    </AdminSettings>
  )
}

export default AccountProfile
