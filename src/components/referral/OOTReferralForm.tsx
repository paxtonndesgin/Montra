"use client";

import React, { useState } from 'react';
import { 
  X, User, Building, FileQuestion, PlusCircle, 
  Check, ChevronDown, Clock, ShieldCheck, Send 
} from 'lucide-react';
import baseStyles from '../../assets/style/scss/components/referral/ReferralForm.module.scss';
import styles from '../../assets/style/scss/components/referral/OOTReferralForm.module.scss';
import RouteLoadingLink from '@/components/RouteLoadingLink';

interface OOTReferralFormProps {
  hideCloseButton?: boolean;
}

const OOT_REASONS = [
  'Ongoing therapy support',
  'Skill development',
  'Functional decline',
  'Transition support',
  'Other',
];

const OOT_AREAS_OF_FOCUS = [
  'Daily living skills',
  'Routine and structure',
  'Community participation',
  'Cognitive support',
  'Psychosocial support',
  'Independence building',
  'Other',
];

const OOT_OUTCOMES = [
  'Improved routine',
  'Skill development',
  'Reduced support needs',
  'Increased independence',
  'Greater community participation',
  'Other',
];

export default function OOTReferralForm({ hideCloseButton = false }: OOTReferralFormProps) {
  const [roles, setRoles] = useState<string[]>(['Support Coordinator', 'Allied Health Professional']);
  const [reasons, setReasons] = useState<string[]>([]);
  const [areasOfFocus, setAreasOfFocus] = useState<string[]>(['Routine and structure']);
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const toggleRole = (role: string) => {
    setRoles(prev => prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]);
  };

  const toggleReason = (reason: string) => {
    setReasons(prev => prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason]);
  };

  const toggleAreaOfFocus = (area: string) => {
    setAreasOfFocus(prev => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]);
  };

  const toggleOutcome = (outcome: string) => {
    setOutcomes(prev => prev.includes(outcome) ? prev.filter(o => o !== outcome) : [...prev, outcome]);
  };

  return (
    <div className={baseStyles.formContainer}>
      {/* Close Button */}
      {!hideCloseButton && (
        <RouteLoadingLink href="/" className={baseStyles.closeButton}>
          <X size={24} />
        </RouteLoadingLink>
      )}

      {/* Header */}
      <div className={baseStyles.headerSection}>
        <h2 className={baseStyles.title}>Submit a Referral.</h2>
        <p className={baseStyles.subtitle}>
          Please complete the form below. Our clinical team will review your request and contact you within 1-2 business days to discuss next steps.
        </p>
      </div>

      {/* 1. Participant Information */}
      <div className={baseStyles.sectionGroup}>
        <div className={baseStyles.sectionHeader}>
          <div className={baseStyles.iconBox}>
            <User size={18} />
          </div>
          <h3 className={baseStyles.sectionTitle}>Participant Information</h3>
        </div>
        
        <div className={baseStyles.grid2Col}>
          <div className={baseStyles.inputGroup}>
            <label>Full Name</label>
            <input type="text" className={baseStyles.inputField} placeholder="Your name" />
          </div>
          <div className={baseStyles.inputGroup}>
            <label>Date of birth</label>
            <input type="text" className={baseStyles.inputField} placeholder="mm/dd/yy" />
          </div>
          <div className={baseStyles.inputGroup}>
            <label>NDIS Number</label>
            <input type="text" className={baseStyles.inputField} placeholder="430 000 000" />
          </div>
          <div className={baseStyles.inputGroup}>
            <label>Contact phone</label>
            <input type="text" className={baseStyles.inputField} placeholder="+61 2 3456 789" />
          </div>
        </div>
        
        <div className={baseStyles.grid1Col}>
          <div className={baseStyles.inputGroup}>
            <label>Home Address</label>
            <input type="text" className={baseStyles.inputField} placeholder="123 Precision St, Medical Precinct" />
          </div>
        </div>
      </div>

      <hr className={baseStyles.formDivider} />

      {/* 2. Referrer Information */}
      <div className={baseStyles.sectionGroup}>
        <div className={baseStyles.sectionHeader}>
          <div className={baseStyles.iconBox}>
            <Building size={18} />
          </div>
          <h3 className={baseStyles.sectionTitle}>Referrer Information</h3>
        </div>
        
        <div className={baseStyles.grid2Col}>
          <div className={baseStyles.inputGroup}>
            <label>Referrer Name</label>
            <input type="text" className={baseStyles.inputField} placeholder="Your name" />
          </div>
          <div className={baseStyles.inputGroup}>
            <label>Organisation</label>
            <input type="text" className={baseStyles.inputField} placeholder="Agency or Clinic Name" />
          </div>
          <div className={baseStyles.inputGroup}>
            <label>Email adrdess</label>
            <input type="email" className={baseStyles.inputField} placeholder="name@organisation.com" />
          </div>
          <div className={baseStyles.inputGroup}>
            <label>Contact phone</label>
            <input type="text" className={baseStyles.inputField} placeholder="+61 2 3456 789" />
          </div>
        </div>
        
        <div className={baseStyles.inputGroup}>
          <label>Role</label>
          <div className={baseStyles.checkboxGrid}>
            {['Support Coordinator', 'Family / Carer', 'Self-referral', 'Allied Health Professional', 'Other'].map(role => (
              <div key={role} className={`${baseStyles.checkboxItem} ${roles.includes(role) ? baseStyles.active : ''}`} onClick={() => toggleRole(role)}>
                <div className={`${baseStyles.checkIconBox} ${roles.includes(role) ? baseStyles.checked : ''}`}>
                  {roles.includes(role) && <Check size={14} strokeWidth={3} />}
                </div>
                <span className={baseStyles.checkLabel}>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className={baseStyles.formDivider} />

      {/* 3. Guided Clinical Questions */}
      <div className={`${baseStyles.sectionGroup} ${styles.clinicalSection}`}>
        <div className={baseStyles.sectionHeader}>
          <div className={baseStyles.iconBox}>
            <FileQuestion size={18} />
          </div>
          <h3 className={baseStyles.sectionTitle}>Guided Clinical Questions</h3>
        </div>
        
        <div className={baseStyles.inputGroup}>
          <label>Primary reason for referral ?</label>
          <textarea className={baseStyles.inputField} placeholder="Briefly describe the clinical goals..."></textarea>
        </div>
        
        <div className={baseStyles.inputGroup}>
          <label>What is the main reason for this referral?</label>
          <div className={baseStyles.checkboxGrid}>
            {OOT_REASONS.map(reason => (
              <div key={reason} className={`${baseStyles.checkboxItem} ${reasons.includes(reason) ? baseStyles.active : ''}`} onClick={() => toggleReason(reason)}>
                <div className={`${baseStyles.checkIconBox} ${reasons.includes(reason) ? baseStyles.checked : ''}`}>
                  {reasons.includes(reason) && <Check size={14} strokeWidth={3} />}
                </div>
                <span className={baseStyles.checkLabel}>{reason}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={baseStyles.inputGroup}>
          <label>What are the key areas of focus?</label>
          <div className={baseStyles.tagsContainer}>
            {OOT_AREAS_OF_FOCUS.map(area => (
              <button 
                key={area} 
                className={`${baseStyles.tagItem} ${areasOfFocus.includes(area) ? baseStyles.active : ''}`}
                onClick={() => toggleAreaOfFocus(area)}
                type="button"
              >
                {area}
              </button>
            ))}
          </div>
        </div>
        
        <div className={baseStyles.inputGroup}>
          <label>What outcome are you hoping to achieve?</label>
          <div className={baseStyles.checkboxGrid}>
            {OOT_OUTCOMES.map(outcome => (
              <div key={outcome} className={`${baseStyles.checkboxItem} ${outcomes.includes(outcome) ? baseStyles.active : ''}`} onClick={() => toggleOutcome(outcome)}>
                <div className={`${baseStyles.checkIconBox} ${outcomes.includes(outcome) ? baseStyles.checked : ''}`}>
                  {outcomes.includes(outcome) && <Check size={14} strokeWidth={3} />}
                </div>
                <span className={baseStyles.checkLabel}>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.urgencyRow}>
          <div className={baseStyles.inputGroup}>
            <label>Urgency level</label>
            <div className={baseStyles.selectWrapper}>
              <select className={baseStyles.inputField} title="Urgency level">
                <option>Routine (Normal Waitlist)</option>
                <option>Urgent (Priority Waitlist)</option>
              </select>
              <ChevronDown size={16} className={baseStyles.selectIcon} />
            </div>
          </div>
          <div className={baseStyles.inputGroup}>
            <label>Preferrerd contact method</label>
            <div className={baseStyles.selectWrapper}>
              <select className={baseStyles.inputField} title="Preferred contact method">
                <option>Email</option>
                <option>Phone</option>
              </select>
              <ChevronDown size={16} className={baseStyles.selectIcon} />
            </div>
          </div>
        </div>
      </div>

      <hr className={baseStyles.formDivider} />

      {/* 4. Optional Clinical Context */}
      <div className={baseStyles.sectionGroup}>
        <div className={baseStyles.sectionHeader}>
          <div className={baseStyles.iconBox}>
            <PlusCircle size={18} />
          </div>
          <h3 className={baseStyles.sectionTitle}>Optional Clinical Context</h3>
        </div>
        
        <div className={baseStyles.inputGroup}>
          <label>Additional notes or reports</label>
          <textarea className={baseStyles.inputField} placeholder="Provide any other information that might help our team prepare..."></textarea>
        </div>
      </div>

      {/* 5. Privacy Consent */}
      <div className={baseStyles.privacyConsent} onClick={() => setPrivacyConsent(!privacyConsent)}>
        <div className={`${baseStyles.checkIconBox} ${privacyConsent ? baseStyles.checked : ''}`}>
          {privacyConsent && <Check size={14} strokeWidth={3} />}
        </div>
        <div className={baseStyles.privacyText}>
          <h4>Privacy Consent</h4>
          <p>I confirm that the participant (or their legal representative) has provided informed consent for this referral to be made and for their health information to be processed by OT Precision in accordance with our Privacy Policy.</p>
        </div>
      </div>

      {/* 6. Submit Button */}
      <div className={baseStyles.submitAction}>
        <button className={baseStyles.submitBtn}>
          Make a Referral <Send size={16} />
        </button>
        <div className={baseStyles.submitHint}>
          <Clock size={14} />
          <span>Clinical review response within 1-2 business days.</span>
        </div>
      </div>

      {/* 7. Bottom Banner/Cards */}
      <div className={baseStyles.footerCards}>
        <div className={`${baseStyles.footerCard} ${baseStyles.greenCard}`}>
          <div className={baseStyles.iconBox}>
            <ShieldCheck size={16} />
          </div>
          <div className={baseStyles.cardContent}>
            <h5>HIPAA & Privacy Compliant</h5>
            <p>End-to-end encryption for all clinical data. We adhere<br/>to the highest Australian health record standards.</p>
          </div>
        </div>
        
        <div className={`${baseStyles.footerCard} ${baseStyles.grayCard}`}>
          <div className={baseStyles.cardContent}>
            <h5>OT Precision</h5>
            <p>Professional medical<br/>referral portal</p>
          </div>
        </div>
        
        <div className={`${baseStyles.footerCard} ${baseStyles.blueCard}`}>
          <span className={baseStyles.blueSub}>Average Triage time</span>
          <h5 className={baseStyles.blueTitle}>18 Hours</h5>
        </div>
      </div>
      
    </div>
  );
}