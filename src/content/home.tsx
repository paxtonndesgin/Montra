import React from 'react';
import { Users, User, Heart, RefreshCcw, Stethoscope } from 'lucide-react';

export const homeContent = {
  banner: {
    title: "Precision Clinical Care",
    statValue: "98%",
    statLabel: "Clinical Accuracy Rate",
  },
  intro: {
    title: (
      <>
        <span style={{ color: '#0059f4' }}>Empowering Independence Through</span>
        <br />
        <span style={{ color: '#0e5d3f' }}>Expert Occupational Therapy</span>
      </>
    ),
    description: "Evidence-based assessments, clear reporting, and practical solutions for NDIS participants, aged care clients, and complex cases.",
  },
  practice: {
    title: {
      subtitle: "A Practice Built on",
      main: (
        <>
          <span>Clinical</span>
          <span style={{ backgroundColor: '#b0ccfc', padding: '4px 16px', borderRadius: '24px', margin: '0 8px' }}>Rigor</span>
          <span>and</span>
          <span style={{ backgroundColor: '#99efcf', padding: '4px 16px', borderRadius: '24px', margin: '0 8px' }}>Trust.</span>
        </>
      )
    },
    cards: [
      {
        image: 'HOME_PRACTICE_1',
        text: "At Montra Therapy, we believe that precision in documentation and assessment is the cornerstone of effective patient outcomes. Our team operates with an editorial level of detail, ensuring every report is a surgical instrument for progress."
      },
      {
        image: 'HOME_PRACTICE_2',
        text: "We bridge the gap between complex clinical data and actionable human-centric goals. By maintaining the highest ethical standards, we empower participants and their support networks through clear, authoritative guidance."
      }
    ]
  },
  services: {
    title: {
      blue: "Comprehensive ",
      green: "Services"
    },
    cards: [
      {
        id: 'fca',
        title: <>Functional Capacity<br/>Assessments</>,
        description: "Comprehensive assessments that explore how a person's disability impacts daily function, participation and support needs.",
        theme: 'themeBlue',
        icon: 'FuncCapIcon'
      },
      {
        id: 'oot',
        title: <>Ongoing Occupational<br/>Therapy</>,
        description: "Individualised therapy focused on practical goals, everyday routines, skill development and participation.",
        theme: 'themeGreen',
        icon: 'OngOccTherapIcon'
      },
      {
        id: 'ata',
        title: <>Assistive Technology<br/>Assessments</>,
        description: "Assessment and recommendations for equipment that can support mobility, self-care, safety and comfort.",
        theme: 'themePink',
        icon: 'AssistTechIcon'
      },
      {
        id: 'hma',
        title: <>Home<br/>Modifications</>,
        description: "Assessment and recommendations for changes to the home environment to improve access, safety and independence.",
        theme: 'themeBlue',
        icon: 'HomeModifiIcon'
      },
      {
        id: 'paediatric',
        title: <>Paediatric<br/>Occupational Therapy</>,
        description: "Child and family-centred support to build everyday skills, emotional regulation, play and participation.",
        theme: 'themeGreen',
        icon: 'PaeOccTherapIcon'
      },
      {
        id: 'aged-care',
        title: <>Aged Care<br/>Occupational Therapy</>,
        description: "Occupational therapy services that support safer daily living, falls prevention and ageing well at home.",
        theme: 'themePink',
        icon: 'AgedCareIcon'
      }
    ]
  },
  whoWeSupport: {
    title: {
      text: "At Brand We ",
      highlight: "Support"
    },
    subtitle: "Providing expert clinical support across the care ecosystem.",
    cards: [
      {
        id: 1,
        lines: ['NDIS', 'Participants'],
        description: 'We support NDIS participants to build functional capacity, increase independence and work towards meaningful personal goals.',
        Icon: Users,
        tiltClass: 'cardTiltOne'
      },
      {
        id: 2,
        lines: ['Older Adults'],
        description: 'We help older adults maintain confidence, safety and participation in daily routines through practical occupational therapy support.',
        Icon: User,
        tiltClass: 'cardTiltTwo'
      },
      {
        id: 3,
        lines: ['Families', '& Carers'],
        description: 'We equip families and carers with strategies, education and recommendations that make everyday support more sustainable.',
        Icon: Heart,
        tiltClass: 'cardTiltThree'
      },
      {
        id: 4,
        lines: ['Support', 'Coordinators'],
        description: 'We work alongside support coordinators with clear documentation and practical clinical recommendations that help plans move forward.',
        Icon: RefreshCcw,
        tiltClass: 'cardTiltFour'
      },
      {
        id: 5,
        lines: ['Medical', 'Professionals'],
        description: 'We collaborate with medical and allied health professionals to provide aligned, evidence-based care around shared goals.',
        Icon: Stethoscope,
        tiltClass: 'cardTiltFive'
      },
    ]
  },
  whyChoose: {
    title: {
      green1: "Why",
      green2: "Choose",
      blue: "Montra"
    },
    quote: {
      text1: "We focus on doing things",
      highlight: "properly,",
      text2: " not quickly."
    },
    features: [
      {
        id: '01',
        title: 'Personalised Care',
        desc: "We take the time to understand each person's goals, environment and support needs so our recommendations are both meaningful and practical.",
      },
      {
        id: '02',
        title: 'Functional Outcomes',
        desc: 'Our focus is on real-life change — supporting people to do more of what matters to them each day.',
      },
      {
        id: '03',
        title: 'Community-Based Support',
        desc: 'We provide services in the settings where life happens, including at home, in the community, at school and via telehealth where appropriate.',
      },
      {
        id: '04',
        title: 'Collaborative Approach',
        desc: 'We work closely with participants, families, support coordinators and other professionals to deliver thoughtful, coordinated care.',
      },
    ]
  },
  ourApproach: {
    sticker: "Our Surgical Approach.",
    steps: [
      {
        title: 'Understand',
        description: 'Detailed intake process to align with participant goals and environmental context.',
      },
      {
        title: 'Assess',
        description: 'Direct clinical observation utilizing validated standardized assessment tools.',
      },
      {
        title: 'Recommend',
        description: 'Synthesizing data into actionable, evidence-based intervention plans.',
      },
      {
        title: 'Document',
        description: 'Precision reporting that serves as an authoritative voice for support funding.',
      },
      {
        title: 'Follow Through',
        description: 'Ensuring implementation success through advocacy and ongoing review.',
      },
    ]
  },
  cta: {
    title: "Make a Referral or Enquiry",
    subtitle: "Take the first step toward better outcomes with evidence-based occupational therapy documentation.",
  }
};
