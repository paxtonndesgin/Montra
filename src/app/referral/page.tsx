"use client";

import { useState } from 'react';
import ReferralForm from '../../components/referral/ReferralForm';
import styles from '../../assets/style/scss/components/referral/ReferralForm.module.scss';
import ScrollAnimator from '@/components/animation/ScrollAnimator';

const SIDEBAR_SERVICES = [
  "Functional Capacity Assessments",
  "Ongoing Occupational Therapy",
  "Assistive Technology Assessments",
  "Home Modifications",
  "Paediatric Occupational Therapy",
  "Aged Care Occupational Therapy",
];

export default function ReferralPage() {
  const [selectedService, setSelectedService] = useState(SIDEBAR_SERVICES[0]);

  return (
    <main className={styles.referralPage}>
      <div className={styles.referralLayout}>
        <aside className={styles.sidebar}>
          {SIDEBAR_SERVICES.map(service => (
            <button
              key={service}
              type="button"
              className={`${styles.sidebarBtn} ${selectedService === service ? styles.sidebarBtnActive : ''}`}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </button>
          ))}
        </aside>

        <div className={styles.formColumn}>
          <ScrollAnimator>
            <ReferralForm hideCloseButton selectedServiceName={selectedService} />
          </ScrollAnimator>
        </div>
      </div>
    </main>
  );
}