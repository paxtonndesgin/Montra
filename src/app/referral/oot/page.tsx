import OOTReferralForm from '../../../components/referral/OOTReferralForm';
import styles from '../../../assets/style/scss/components/referral/ReferralForm.module.scss';
import ScrollAnimator from '@/components/animation/ScrollAnimator';

export default function OOTReferralPage() {
  return (
    <main className={styles.referralPage}>
      <ScrollAnimator>
        <OOTReferralForm />
      </ScrollAnimator>
    </main>
  );
}
