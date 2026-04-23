import React from 'react';
import OOTReferralForm from '../../../components/referral/OOTReferralForm';
import styles from '../../../components/referral/ReferralForm.module.scss';

export default function OOTReferralPage() {
  return (
    <main className={styles.referralPage}>
      <OOTReferralForm />
    </main>
  );
}
