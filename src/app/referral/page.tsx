import React from 'react';
import ReferralForm from '../../components/referral/ReferralForm';
import styles from '../../components/referral/ReferralForm.module.scss';

export default function ReferralPage() {
  return (
    <main className={styles.referralPage}>
      <ReferralForm />
    </main>
  );
}