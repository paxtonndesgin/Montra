import React from 'react';
import ReferralForm from '../../components/referral/ReferralForm';
import styles from '../../assets/style/scss/components/referral/ReferralForm.module.scss';

export default function ReferralPage() {
  return (
    <main className={styles.referralPage}>
      <ReferralForm />
    </main>
  );
}