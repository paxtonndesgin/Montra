import React from 'react';

export interface AboutContent {
  banner: {
    title: string | React.ReactNode;
    description: string;
    imageLeft?: string;
    imageCenter?: string;
    imageRight?: string;
  };
  intro: {
    title: string | React.ReactNode;
    subtitle: string;
    cards: {
      image: string;
      content: string;
    }[];
  };
  purposeVisionValues: {
    title: string | React.ReactNode;
    purpose: { title: string; text: string; };
    vision: { title: string; text: string; };
    values: { title: string; text: string; };
    approach: { title: string; text: string; };
  };
  achievement: {
    title: string;
    items: {
      id: number;
      title: string;
      description: string;
      color: string;
    }[];
  };
  specialFeatures: {
    title: string | React.ReactNode;
    features: {
      id: string;
      title: string;
      content: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
  };
}

export const aboutContent: AboutContent = {
  banner: {
    title: <> <span style={{ color: '#0059f4' }}>About</span> Montra Therapy</>,
    description: "A warm, person-centred occupational therapy practice focused on practical outcomes and meaningful progress.",
  },
  intro: {
    title: <>Occupational <span style={{ background: '#e1f5fe', color: '#0059f4', padding: '4px 16px', borderRadius: '40px' }}>therapy</span> in grounded <span style={{ background: '#e8f5e9', color: '#1ca364', padding: '4px 16px', borderRadius: '40px' }}>everyday life</span></>,
    subtitle: "Supporting people to participate more confidently and independently in the activities that matter most.",
    cards: [
      {
        image: "/images/about/banner.png",
        content: "Montra Therapy is a community-based occupational therapy practice committed to providing high-quality, personalised support. We work with children, adults and older people across a range of settings, helping them navigate challenges, build capacity and improve their everyday function."
      },
      {
        image: "/images/about/banner.png",
        content: "Our approach is warm, collaborative and grounded in real life. We understand that meaningful therapy is not just about assessment and recommendations — it is about listening well, understanding each person's goals and creating practical strategies that genuinely support daily living."
      },
      {
        image: "/images/about/banner.png",
        content: "Whether we are completing a functional assessment, providing ongoing therapy, recommending assistive technology or supporting safer living at home, we aim to deliver services that are thoughtful, responsive and clinically sound."
      }
    ]
  },
  purposeVisionValues: {
    title: <>Our <span style={{ color: '#0059f4' }}>Purpose Vision & Values</span></>,
    purpose: {
      title: "Purpose",
      text: "To provide occupational therapy that helps people engage more fully, safely and confidently in everyday life."
    },
    vision: {
      title: "Vision",
      text: "To build a trusted therapy practice known for warm relationships, high-quality clinical care and practical outcomes."
    },
    values: {
      title: "Values",
      text: "Compassion, integrity, collaboration, respect and person-centred care guide every aspect of our work."
    },
    approach: {
      title: "Approach",
      text: "We listen carefully, assess thoroughly and work alongside each person to identify realistic goals and meaningful next steps."
    }
  },
  achievement: {
    title: "Achievement",
    items: [
      { id: 1, title: 'Warm and professional approach', description: 'We aim to make the therapy process feel supportive, respectful and easy to navigate.', color: '#FF61CD' },
      { id: 2, title: 'Clear recommendations', description: 'Our reports and recommendations are practical, well-reasoned and focused on meaningful outcomes.', color: '#337AF6' },
      { id: 3, title: 'Evidence-informed practice', description: 'Our work is guided by clinical reasoning, best practice principles and real-world function.', color: '#FF9D2E' },
      { id: 4, title: 'Thoughtful assessments', description: 'We take a thorough and functional approach to understanding each person’s strengths, challenges and support needs.', color: '#22C478' },
      { id: 5, title: 'Broad community experience', description: 'We support individuals across disability, paediatrics, aged care and complex community settings.', color: '#FF7272' },
      { id: 6, title: 'Functional focus', description: 'We keep everyday participation, independence and quality of life at the centre of what we do.', color: '#8D8D8D' }
    ]
  },
  specialFeatures: {
    title: <><span style={{ color: '#0059f4' }}>Special</span> Features</>,
    features: [
      { id: '01', title: '(01) Person-centred care', content: 'Every recommendation and intervention is tailored to the individual, their goals and their daily environment.' },
      { id: '02', title: '(02) Practical support', content: 'We focus on practical, actionable strategies that can be implemented into everyday life.' },
      { id: '03', title: '(03) Collaborative communication', content: 'We value working closely with participants, families, carers and the wider support team.' },
      { id: '04', title: '(04) Community-based service delivery', content: 'We deliver our services where they matter most – in homes, schools, workplaces and the community.' }
    ]
  },
  cta: {
    title: "Join Our Mission",
    subtitle: "Experience the difference of precision clinical documentation and heartfelt support.",
  }
};
