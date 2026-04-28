"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, User, Building, FileQuestion, PlusCircle,
  Check, ChevronDown, ChevronUp, Clock, ShieldCheck, Send,
} from 'lucide-react';
import styles from '../../assets/style/scss/components/referral/ReferralForm.module.scss';

interface ReferralFormProps {
  hideCloseButton?: boolean;
}

function CollapsePanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ReferralForm({ hideCloseButton = false }: ReferralFormProps) {

  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [ndisNumber, setNdisNumber] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [homeAddress, setHomeAddress] = useState('');

  const [referrerName, setReferrerName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');
  const [roles, setRoles] = useState<string[]>([]);

  const [primaryReason, setPrimaryReason] = useState('');
  const [reasons, setReasons] = useState<string[]>([]);
  const [concerns, setConcerns] = useState<string[]>([]);
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('Routine (Normal Waitlist)');
  const [contactMethod, setContactMethod] = useState('Email');

  const [additionalNotes, setAdditionalNotes] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [collapsed, setCollapsed] = useState({ p: false, r: false, c: false, o: false });
  const toggle = (key: keyof typeof collapsed) =>
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const participantDone = fullName.trim() !== '' && dob.trim() !== '';
  const referrerDone    = referrerName.trim() !== '' && emailValid;
  const clinicalDone    = reasons.length > 0;
  const optionalDone    = additionalNotes.trim() !== '';
  const prevP = useRef(false);
  const prevR = useRef(false);
  const prevC = useRef(false);
  const prevO = useRef(false);

  useEffect(() => {
    if (participantDone && !prevP.current) {
      const id = setTimeout(() => setCollapsed(c => ({ ...c, p: true })), 0);
      prevP.current = participantDone;
      return () => clearTimeout(id);
    }
    prevP.current = participantDone;
  }, [participantDone]);

  useEffect(() => {
    if (referrerDone && !prevR.current) {
      const id = setTimeout(() => setCollapsed(c => ({ ...c, r: true })), 0);
      prevR.current = referrerDone;
      return () => clearTimeout(id);
    }
    prevR.current = referrerDone;
  }, [referrerDone]);

  useEffect(() => {
    if (clinicalDone && !prevC.current) {
      const id = setTimeout(() => setCollapsed(c => ({ ...c, c: true })), 0);
      prevC.current = clinicalDone;
      return () => clearTimeout(id);
    }
    prevC.current = clinicalDone;
  }, [clinicalDone]);

  useEffect(() => {
    if (optionalDone && !prevO.current) {
      const id = setTimeout(() => setCollapsed(c => ({ ...c, o: true })), 0);
      prevO.current = optionalDone;
      return () => clearTimeout(id);
    }
    prevO.current = optionalDone;
  }, [optionalDone]);
  const toggleRole    = (v: string) => setRoles(p    => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);
  const toggleReason  = (v: string) => setReasons(p  => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);
  const toggleConcern = (v: string) => setConcerns(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);
  const toggleOutcome = (v: string) => setOutcomes(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);

  return (
    <div className={styles.formContainer}>
      {!hideCloseButton && (
        <Link href="/" className={styles.closeButton}>
          <X size={24} />
        </Link>
      )}

      <div className={styles.headerSection}>
        <h2 className={styles.title}>Submit a Referral.</h2>
        <p className={styles.subtitle}>
          Please complete the form below. Our clinical team will review your request and contact you within 1–2 business days to discuss next steps.
        </p>
      </div>

      <div className={styles.sectionGroup}>
        <button
          type="button"
          className={`${styles.sectionHeader} ${participantDone ? styles.sectionHeaderDone : ''}`}
          onClick={() => toggle('p')}
        >
          <div className={`${styles.iconBox} ${participantDone ? styles.iconBoxDone : ''}`}>
            {participantDone ? <Check size={18} /> : <User size={18} />}
          </div>
          <h3 className={styles.sectionTitle}>Participant Information</h3>
          {participantDone && collapsed.p && (
            <span className={styles.sectionSummary}>{[fullName, dob].filter(Boolean).join(' · ')}</span>
          )}
          <span className={styles.sectionToggleIcon}>
            {collapsed.p ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </span>
        </button>

        <CollapsePanel open={!collapsed.p}>
          <div className={styles.sectionBody}>
            <div className={styles.grid2Col}>
              <div className={styles.inputGroup}>
                <label>Full Name *</label>
                <input type="text" className={styles.inputField} placeholder="Your name" value={fullName} onChange={e => setFullName(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Date of birth *</label>
                <input type="date" title="Date of birth" className={styles.inputField} value={dob} onChange={e => setDob(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>NDIS Number</label>
                <input type="text" className={styles.inputField} placeholder="430 000 000" value={ndisNumber} onChange={e => setNdisNumber(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Contact phone</label>
                <input type="tel" className={styles.inputField} placeholder="+61 2 3456 789" value={contactPhone} onChange={e => setContactPhone(e.target.value)} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Home Address</label>
              <input type="text" className={styles.inputField} placeholder="123 Precision St, Medical Precinct" value={homeAddress} onChange={e => setHomeAddress(e.target.value)} />
            </div>
          </div>
        </CollapsePanel>
      </div>

      <hr className={styles.formDivider} />

      <div className={styles.sectionGroup}>
        <button
          type="button"
          className={`${styles.sectionHeader} ${referrerDone ? styles.sectionHeaderDone : ''}`}
          onClick={() => toggle('r')}
        >
          <div className={`${styles.iconBox} ${referrerDone ? styles.iconBoxDone : ''}`}>
            {referrerDone ? <Check size={18} /> : <Building size={18} />}
          </div>
          <h3 className={styles.sectionTitle}>Referrer Information</h3>
          {referrerDone && collapsed.r && (
            <span className={styles.sectionSummary}>{[referrerName, email].filter(Boolean).join(' · ')}</span>
          )}
          <span className={styles.sectionToggleIcon}>
            {collapsed.r ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </span>
        </button>

        <CollapsePanel open={!collapsed.r}>
          <div className={styles.sectionBody}>
            <div className={styles.grid2Col}>
              <div className={styles.inputGroup}>
                <label>Referrer Name *</label>
                <input type="text" className={styles.inputField} placeholder="Your name" value={referrerName} onChange={e => setReferrerName(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Organisation</label>
                <input type="text" className={styles.inputField} placeholder="Agency or Clinic Name" value={organisation} onChange={e => setOrganisation(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Email address *</label>
                <input type="email" className={styles.inputField} placeholder="name@organisation.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label>Contact phone</label>
                <input type="tel" className={styles.inputField} placeholder="+61 2 3456 789" value={referrerPhone} onChange={e => setReferrerPhone(e.target.value)} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Role</label>
              <div className={styles.checkboxGrid}>
                {['Support Coordinator', 'Family / Carer', 'Self-referral', 'Allied Health Professional', 'Other'].map(role => (
                  <div key={role} className={`${styles.checkboxItem} ${roles.includes(role) ? styles.active : ''}`} onClick={() => toggleRole(role)}>
                    <div className={`${styles.checkIconBox} ${roles.includes(role) ? styles.checked : ''}`}>
                      {roles.includes(role) && <Check size={14} strokeWidth={3} />}
                    </div>
                    <span className={styles.checkLabel}>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CollapsePanel>
      </div>

      <hr className={styles.formDivider} />

      <div className={styles.sectionGroup}>
        <button
          type="button"
          className={`${styles.sectionHeader} ${clinicalDone ? styles.sectionHeaderDone : ''}`}
          onClick={() => toggle('c')}
        >
          <div className={`${styles.iconBox} ${clinicalDone ? styles.iconBoxDone : ''}`}>
            {clinicalDone ? <Check size={18} /> : <FileQuestion size={18} />}
          </div>
          <h3 className={styles.sectionTitle}>Guided Clinical Questions</h3>
          {clinicalDone && collapsed.c && (
            <span className={styles.sectionSummary}>{reasons.length} reason{reasons.length > 1 ? 's' : ''} selected</span>
          )}
          <span className={styles.sectionToggleIcon}>
            {collapsed.c ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </span>
        </button>

        <CollapsePanel open={!collapsed.c}>
          <div className={styles.sectionBody}>
            <div className={styles.inputGroup}>
              <label>Primary reason for referral</label>
              <textarea className={styles.inputField} placeholder="Briefly describe the clinical goals..." value={primaryReason} onChange={e => setPrimaryReason(e.target.value)} />
            </div>
            <div className={styles.inputGroup}>
              <label>What is the main reason for this referral? *</label>
              <div className={styles.checkboxGrid}>
                {['Change in functional capacity', 'Request for increased supports', 'Initial assessment', 'Plan review', 'Other'].map(reason => (
                  <div key={reason} className={`${styles.checkboxItem} ${reasons.includes(reason) ? styles.active : ''}`} onClick={() => toggleReason(reason)}>
                    <div className={`${styles.checkIconBox} ${reasons.includes(reason) ? styles.checked : ''}`}>
                      {reasons.includes(reason) && <Check size={14} strokeWidth={3} />}
                    </div>
                    <span className={styles.checkLabel}>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Key areas of concern?</label>
              <div className={styles.tagsContainer}>
                {['Mobility', 'Self-care', 'Psychosocial', 'Cognition', 'Community access', 'Cognitive functioning', 'Daily living skills', 'Other'].map(concern => (
                  <button key={concern} className={`${styles.tagItem} ${concerns.includes(concern) ? styles.active : ''}`} onClick={() => toggleConcern(concern)} type="button">
                    {concern}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>What outcome are you hoping to achieve?</label>
              <div className={styles.checkboxGrid}>
                {['Clear understanding of needs', 'Evidence for funding for increased supports', 'Therapy recommendations', 'Improved independence', 'Other'].map(outcome => (
                  <div key={outcome} className={`${styles.checkboxItem} ${outcomes.includes(outcome) ? styles.active : ''}`} onClick={() => toggleOutcome(outcome)}>
                    <div className={`${styles.checkIconBox} ${outcomes.includes(outcome) ? styles.checked : ''}`}>
                      {outcomes.includes(outcome) && <Check size={14} strokeWidth={3} />}
                    </div>
                    <span className={styles.checkLabel}>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.grid2Col}>
              <div className={styles.inputGroup}>
                <label>Urgency level</label>
                <div className={styles.selectWrapper}>
                  <select name="urgencyLevel" title="Urgency Level" className={styles.inputField} value={urgency} onChange={e => setUrgency(e.target.value)}>
                    <option>Routine (Normal Waitlist)</option>
                    <option>Urgent (Priority Waitlist)</option>
                  </select>
                  <ChevronDown size={16} className={styles.selectIcon} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Preferred contact method</label>
                <div className={styles.selectWrapper}>
                  <select name="contactMethod" title="Contact Method" className={styles.inputField} value={contactMethod} onChange={e => setContactMethod(e.target.value)}>
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                  <ChevronDown size={16} className={styles.selectIcon} />
                </div>
              </div>
            </div>
          </div>
        </CollapsePanel>
      </div>

      <hr className={styles.formDivider} />

      <div className={styles.sectionGroup}>
        <button
          type="button"
          className={`${styles.sectionHeader} ${optionalDone ? styles.sectionHeaderDone : ''}`}
          onClick={() => toggle('o')}
        >
          <div className={`${styles.iconBox} ${optionalDone ? styles.iconBoxDone : ''}`}>
            {optionalDone ? <Check size={18} /> : <PlusCircle size={18} />}
          </div>
          <h3 className={styles.sectionTitle}>Optional Clinical Context</h3>
          {optionalDone && collapsed.o && (
            <span className={styles.sectionSummary}>Notes added</span>
          )}
          <span className={styles.sectionToggleIcon}>
            {collapsed.o ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </span>
        </button>

        <CollapsePanel open={!collapsed.o}>
          <div className={styles.sectionBody}>
            <div className={styles.inputGroup}>
              <label>Additional notes or reports</label>
              <textarea className={styles.inputField} placeholder="Provide any other information that might help our team prepare..." value={additionalNotes} onChange={e => setAdditionalNotes(e.target.value)} />
            </div>
          </div>
        </CollapsePanel>
      </div>

      <div className={styles.privacyConsent} onClick={() => setPrivacyConsent(!privacyConsent)}>
        <div className={`${styles.checkIconBox} ${privacyConsent ? styles.checked : ''}`}>
          {privacyConsent && <Check size={14} strokeWidth={3} />}
        </div>
        <div className={styles.privacyText}>
          <h4>Privacy Consent</h4>
          <p>I confirm that the participant (or their legal representative) has provided informed consent for this referral to be made and for their health information to be processed by OT Precision in accordance with our Privacy Policy.</p>
        </div>
      </div>

      <div className={styles.submitAction}>
        <button type="submit" className={styles.submitBtn}>
          <span className={styles.submitLabel}>Make a Referral</span>
          <span className={styles.submitIconWrapper} aria-hidden="true">
            <Send size={16} className={styles.submitIcon} />
          </span>
        </button>
        <div className={styles.submitHint}>
          <Clock size={14} />
          <span>Clinical review response within 1–2 business days.</span>
        </div>
      </div>

      <div className={styles.footerCards}>
        <div className={`${styles.footerCard} ${styles.greenCard}`}>
          <div className={styles.iconBox}>
            <ShieldCheck size={16} />
          </div>
          <div className={styles.cardContent}>
            <h5>HIPAA &amp; Privacy Compliant</h5>
            <p>End-to-end encryption for all clinical data. We adhere<br/>to the highest Australian health record standards.</p>
          </div>
        </div>
        <div className={`${styles.footerCard} ${styles.grayCard}`}>
          <div className={styles.cardContent}>
            <h5>OT Precision</h5>
            <p>Professional medical<br/>referral portal</p>
          </div>
        </div>
        <div className={`${styles.footerCard} ${styles.blueCard}`}>
          <span className={styles.blueSub}>Average Triage time</span>
          <h5 className={styles.blueTitle}>18 Hours</h5>
        </div>
      </div>

    </div>
  );
}
