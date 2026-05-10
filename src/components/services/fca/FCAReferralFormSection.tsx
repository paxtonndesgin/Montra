import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCAReferralFormSection.module.scss';
import ButtonLink from '@/components/ButtonLink';

const FCAReferralFormSection = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.waveDivider}></div>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div>
              <h2 className={styles.title}>Submit a Referral.</h2>
              <p className={styles.subtitle}>Please complete the form below. Our clinical team will review your request and contact you within 1-2 business days to discuss next steps.</p>
            </div>
            <button className={styles.closeBtn}>&times;</button>
          </div>

          <div className={styles.formSectionBox}>
            <h3 className={styles.sectionTitle}>Participant Information</h3>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Date of birth</label>
                <input type="text" placeholder="mm/dd/yy" />
              </div>
              <div className={styles.inputGroup}>
                <label>NDIS Number</label>
                <input type="text" placeholder="430 000 000" />
              </div>
              <div className={styles.inputGroup}>
                <label>Contact phone</label>
                <input type="text" placeholder="+61 2 3456 789" />
              </div>
              <div className={styles.inputGroupFull}>
                <label>Home Address</label>
                <input type="text" placeholder="123 Precision St, Medical Precinct" />
              </div>
            </div>
          </div>

          <div className={styles.formSectionBox}>
            <h3 className={styles.sectionTitle}>Referrer Information</h3>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>Referrer Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Organization</label>
                <input type="text" placeholder="Agency or Clinic Name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email address</label>
                <input type="text" placeholder="name@organisation.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Contact phone</label>
                <input type="text" placeholder="+61 2 3456 789" />
              </div>
            </div>
          </div>
          
          <div className={styles.formSectionBox}>
            <h3 className={styles.sectionTitle}>Guided Clinical Questions</h3>
            <div className={styles.formGrid}>
              <div className={styles.inputGroupFull}>
                <label>Primary reason for referral?</label>
                <textarea placeholder="Briefly describe the clinical goals..." rows={3}></textarea>
              </div>
            </div>
          </div>

          <div className={styles.formSectionBox}>
            <div className={styles.privacyBox}>
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy">
                <strong>Privacy Consent</strong><br/>
                I confirm that the participant (or their legal representative) has provided informed consent for this referral to be made and for their health information to be processed by OT Precision in accordance with their Privacy Policy.
              </label>
            </div>
          </div>

          <div className={styles.formFooter}>
            <ButtonLink href="/submit" className={styles.submitBtn} showArrowOnHover={false}>
              Make a Referral
            </ButtonLink>
            <p className={styles.footerNote}>Clinical review: response within 1-2 business days.</p>
            
            <div className={styles.badges}>
              <div className={styles.badgeGreen}>
                <strong>HIPAA & Privacy Compliant</strong>
                <p>End-to-end encryption for all clinical data. We adhere to the highest Australian health record standards.</p>
              </div>
              <div className={styles.badgeWhite}>
                <strong>OT Precision</strong>
                <p>Professional medical referral portal</p>
              </div>
              <div className={styles.badgeBlue}>
                <span className={styles.badgeTitle}>Average Triage time</span>
                <span className={styles.badgeValue}>18 Hours</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FCAReferralFormSection;
