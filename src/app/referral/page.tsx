import ReferralForm from '../../components/referral/ReferralForm';
import styles from '../../assets/style/scss/components/referral/ReferralForm.module.scss';
import ScrollAnimator from '@/components/animation/ScrollAnimator';


export default function ReferralPage() {
  return (
    <main className={styles.referralPage}>
      <ScrollAnimator>
        <ReferralForm />
      </ScrollAnimator>
    </main>
  );
}