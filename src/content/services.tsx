import React from 'react';
import { PUBLIC_IMAGES } from '@/assets/images';

export interface ServiceContent {
  banner: {
    title: string;
    description: string;
    image: string;
  };
  whatIs?: {
    title: string | React.ReactNode;
    description: string;
    stats: {
      number: string;
      title: string;
      description: string;
      colorClass?: string;
    }[];
  };
  independence?: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  whoIsFor?: {
    title: string;
    items?: {
      title: string;
      description: string;
      id?: string;
    }[];
    cards?: {
      title: string;
      description: string;
      variant: string;
      wide?: boolean;
    }[];
    rightCol?: {
      badge: string;
      title: string;
      description: string;
    };
  };
  serviceGrid?: {
    title: string;
    subtitle: string;
    services: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
  evaluation?: {
    title: string | React.ReactNode;
    description: string;
    stats: {
      number: string;
      text: string;
      type: string;
    }[];
    domainsTitle: string;
    domains: {
      title: string;
      description: string;
    }[];
  };
  redefining?: {
    title: string;
    subtitle: string;
    description: string;
    types: {
      title: string;
      subtitle: string;
    }[];
    factorsTitle: string;
    factors: string[];
  };
  whyStrategic?: {
    title: string;
    description: string;
    image: string;
    stats: {
      number: string;
      text: string;
      type: string;
    }[];
  };
  difference?: {
    title: string;
    pillars: {
      title: string;
      description: string;
      color: string;
    }[];
  };
  specializedNeeds?: {
    badge: string;
    title: string | React.ReactNode;
    description: string;
    categories: {
      title: string;
      description: string;
    }[];
  };
  precisionReporting?: {
    title: string;
    subtitle: string;
    evaluationProcess: {
      title: string;
      list: {
        num: string;
        title: string;
        text: string;
      }[];
    };
    finalReport: {
      title: string;
      list: {
        title: string;
        text: string;
      }[];
    };
  };
  whyPrecisionMatters?: {
    badge: string;
    title: string | React.ReactNode;
    image: string;
    list: {
      title: string;
      description: string;
    }[];
  };
  impact?: {
    title: string;
    impacts: string[];
    cards: {
      title: string;
      text: string;
    }[];
  };
  support?: {
    title: string;
    cards: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  targeted?: {
    title: string;
    image: string;
    populations: {
      title: string;
      description: string;
    }[];
  };
  service?: {
    title: string;
    services: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  journey?: {
    title: string;
    subtitle?: string;
    steps: {
      id?: number;
      number?: number;
      title: string;
      description: string;
      isHighlighted?: boolean;
    }[];
  };
  framework?: {
    title: string;
    cards: {
      title: string;
      description: string;
      size?: string;
      variant?: string;
    }[];
  };
  pathway?: {
    title: string;
    subtitle?: string;
    steps: {
      number: number;
      title: string;
      description: string;
    }[];
  };
  developmentAreas?: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      variant: string;
      wide?: boolean;
    }[];
  };
  cta: {
    title: string | React.ReactNode;
    subtitle: string;
  };
}

export const servicesContent: Record<string, ServiceContent> = {
  agedCare: {
    banner: {
      title: "Aged Care Occupational Therapy",
      description: "Expert occupational therapy for older adults to maintain independence and safety at home.",
      image: PUBLIC_IMAGES.AGED_CARE_BANNER,
    },
    independence: {
      title: "Maintaining Independence at Home",
      subtitle: "Aged care occupational therapy supports older adults to maintain independence and continue engaging in everyday activities.",
      cards: [
        { 
          title: "Daily Living Skills", 
          description: "Optimizing routines for personal care, cooking, and household management.",
          image: "/aged_care_independence_1.png" 
        },
        { 
          title: "Home safety", 
          description: "Identifying environmental risks to prevent accidents and promote security.",
          image: "/aged_care_independence_2.png" 
        },
        { 
          title: "Mobility and access", 
          description: "Enhancing movement within and outside the home environment.",
          image: "/aged_care_independence_3.png" 
        },
        { 
          title: "Equipment/modifications", 
          description: "Prescribing assistive technology and structural home changes.",
          image: "/aged_care_independence_4.png" 
        },
      ]
    },
    whoIsFor: {
      title: "Who This Is For",
      cards: [
        {
          title: "Older adults and their families",
          description: "Individuals seeking to improve safety and independence at home while navigating the aging process.",
          variant: "grey",
          wide: true,
        },
        {
          title: "Families & Carers",
          description: "Providing support and expert guidance to those caring for loved ones.",
          variant: "blue",
        },
        {
          title: "Healthcare Professionals",
          description: "Collaborating with GPs and specialists for comprehensive care.",
          variant: "green",
        },
        {
          title: "Aged Care Providers",
          description: "Partnering with organizations to deliver high-quality occupational therapy solutions.",
          variant: "grey",
          wide: true,
        }
      ]
    },
    serviceGrid: {
      title: "Comprehensive Clinical Service",
      subtitle: "Our clinical assessments are rigorous, evidence-based, and fully documented for regulatory compliance.",
      services: [
        { id: "01", title: "Functional Assessment", desc: "Detailed analysis of daily activities and personal capacity within the home." },
        { id: "02", title: "Home Safety Assessment", desc: "Environment-wide audit for trip hazards, lighting issues, and accessibility barriers." },
        { id: "03", title: "Falls Risk Identification", desc: "Evidence-based screening to mitigate high-risk movement patterns." },
        { id: "04", title: "Assistive Technology", desc: "Prescription of specialized equipment from basic aids to complex robotic support." },
        { id: "05", title: "Home Modifications", desc: "Design and oversight of rails, ramps, and major bathroom renovations." },
        { id: "06", title: "Care Planning", desc: "Long-term strategic advice for families and providers to support aging in place." },
      ]
    },
    impact: {
      title: "The Impact of Precision OT Intervention",
      impacts: [
        "Drastic reduction in preventable fall-related hospital admissions.",
        "Sustained independence through targeted skill preservation.",
        "Elimination of care ambiguity for family members.",
        "Measurable improvement in self-reported quality of life scores."
      ],
      cards: [
        { title: "RESPECTFUL", text: "Valuing life experience and dignity in every interaction." },
        { title: "PRACTICAL", text: "Feasible solutions that fit within existing home environments." },
        { title: "DETAIL-ORIENTED", text: "Surgical precision in assessment and documentation." },
        { title: "COLLABORATIVE", text: "Working in tandem with families and health teams." }
      ]
    },
    journey: {
      title: "The Assessment Journey",
      steps: [
        { number: 1, title: "Referral Submitted", description: "Initial intake details are captured via our secure portal." },
        { number: 2, title: "Initial Review", description: "Clinical leads assess urgency and assign a specialist OT." },
        { number: 3, title: "Assessment", description: "In-home consultation to evaluate function and safety." },
        { number: 4, title: "Recommendations", description: "Actionable insights provided on equipment and mods." },
        { number: 6, title: "Report Provided", description: "Comprehensive clinical report delivered to all stakeholders." },
      ]
    },
    cta: {
      title: "Looking for aged care occupational therapy support?",
      subtitle: "Our clinicians are accepting referrals for home-based aged care support nationwide.",
    },
  },
  paediatric: {
    banner: {
      title: "Paediatric Occupational Therapy",
      description: "We provide a structured roadmap from initial contact to measurable progress, ensuring your child receives the comprehensive care they deserve at home.",
      image: PUBLIC_IMAGES.PAEDIATRIC_BANNER,
    },
    developmentAreas: {
      title: "Foundational Development Areas",
      subtitle: "Our holistic approach targets the essential pillars of childhood development through evidence-based clinical intervention.",
      cards: [
        { title: "Fine Motor & Handwriting", description: "Developing the precision and strength required for school-based tasks, pencil control, and tool use, ensuring academic confidence from day one.", variant: "grey", wide: true },
        { title: "Sensory Processing", description: "Helping children understand and regulate their response to sensory input in their environment.", variant: "blue" },
        { title: "Self-Care Skills", description: "Fostering independence in activities of daily living including dressing, hygiene, and feeding.", variant: "green" },
        { title: "Play & Social Readiness", description: "Developing the executive functions required for collaborative play, emotional regulation, and navigating social dynamics in school and community settings.", variant: "grey", wide: true }
      ]
    },
    whoIsFor: {
      title: "Who This Is For",
      items: [
        { id: "01", title: "Developmental Milestones", description: "Children who may be meeting motor or social milestones later than expected." },
        { id: "02", title: "NDIS Participants", description: "Families with self-managed or plan-managed NDIS funding seeking evidence-based support." },
        { id: "03", title: "School Transitions", description: "Preparing children for the sensory and functional demands of the classroom environment." }
      ],
      rightCol: {
        badge: "The clinical justification",
        title: "Why Early Intervention Matters",
        description: "Neuroplasticity is at its peak during the early childhood years. Consistent, evidence-based occupational therapy during this window doesn't just build temporary skills—it rewires the foundational pathways for lifelong independence."
      }
    },
    pathway: {
      title: "The Clinical Pathway",
      subtitle: "A structured roadmap from initial contact to measurable progress.",
      steps: [
        { number: 1, title: "Initial Referral & Intake", description: "We gather medical history, developmental concerns, and family goals to ensure our services align with your child's needs." },
        { number: 2, title: "Comprehensive Assessment", description: "Clinical triage to in-depth functional capacity assessment to establish clinical baseline and intervention scope. client alignment." },
        { number: 3, title: "Goal-Oriented Intervention", description: "Regular, play-based therapy sessions focused on achieving specific, measurable functional outcomes." },
        { number: 4, title: "Progress Review & Reporting", description: "Detailed clinical reports for NDIS reviews and parent feedback sessions to track evolution and adjust care plans." }
      ]
    },
    cta: {
      title: "Ready to Begin Therapy?",
      subtitle: "Start your child's journey today with our evidence-based paediatric interventions.",
    },
  },
  ata: {
    banner: {
      title: "Assistive Technology Assessments",
      description: "Evidence-based technology recommendations that transform daily living. Precisely matched to NDIS funding requirements and individual needs.",
      image: PUBLIC_IMAGES.ATA_BANNER,
    },
    whatIs: {
      title: <>What is Assistive<br />Technology?</>,
      description: "Assistive Technology (AT) includes any device or system that helps you perform tasks you might otherwise find difficult or impossible. From simple kitchen aids to complex customized mobility solutions, we focus on identifying the right tool for your specific environment and goals.",
      stats: [
        { number: '01', title: 'Functional Needs', description: 'Comprehensive initial screening to align clinical outcomes with participant aspirations.', colorClass: 'statBlue' },
        { number: '02', title: 'Safety & Risk', description: 'Mitigating environmental hazards and ensuring long-term physical wellbeing through ergonomics.', colorClass: 'statBlue' },
        { number: '03', title: 'NDIS Criteria', description: "Direct alignment with 'Reasonable and Necessary' benchmarks for successful funding outcomes.", colorClass: 'statBlue' },
      ]
    },
    framework: {
      title: "The Assessment Framework",
      cards: [
        { title: "Clinical Reasoning Report", description: "Detailed NDIS-ready documentation featuring technical specifications and long-term functional benefits.", size: "large" },
        { title: "Comprehensive Trials", description: "Hands-on testing with multiple equipment options in your real-world environment to ensure fit-for-purpose outcomes.", size: "medium" },
        { title: "Supplier Sync", description: "Direct collaboration with equipment vendors for custom builds.", size: "small", variant: "blue" },
        { title: "Needs Review", description: "Initial consult to define goals and current barriers.", size: "small", variant: "cyan" }
      ]
    },
    cta: {
      title: "Need assistive technology recommendations?",
      subtitle: "Our clinicians are accepting referrals for NDIS AT assessments nationwide.",
    },
  },
  fca: {
    banner: {
      title: "Functional Capacity Assessments",
      description: "Our thorough assessments provide the clinical clarity needed to justify supports and empower independence.",
      image: PUBLIC_IMAGES.FCA_BANNER,
    },
    evaluation: {
      title: <>A comprehensive evaluation of <span style={{color: '#0059f4'}}>independence.</span></>,
      description: "Functional Capacity Assessment (FCA) is a detailed investigation into how an individual's disability impacts their everyday life across all life domains.",
      stats: [
        { number: '12-15', text: 'Average Hours invested per report', type: 'blue' },
        { number: '100%', text: 'Clinician verified evidence', type: 'green' }
      ],
      domainsTitle: "Domains of Evaluation",
      domains: [
        { title: 'Daily Living Skills', description: 'Self-care, nutrition, and home management.' },
        { title: 'Mobility & Access', description: 'Transfers, community navigation, and physical capacity.' },
        { title: 'Cognitive Capacity', description: 'Decision making, social interactions, and memory.' },
        { title: 'Environmental Factors', description: 'Home modifications and assistive technology needs.' }
      ]
    },
    specializedNeeds: {
      badge: "Eligibility",
      title: "Specialized for high-complexity needs.",
      description: "Our assessments are designed for individuals requiring clear clinical documentation to secure essential support services.",
      categories: [
        { title: 'NDIS Participants', description: 'Adults and adolescents seeking new or renewed plan funding.' },
        { title: 'Neuro Conditions', description: 'Our focus is on real-life change supporting people to do more of what matters to them each day.' },
        { title: 'Physical Disabilities', description: 'Mobility impairments requiring complex assistive tech.' },
        { title: 'Support Changes', description: 'Individuals experiencing significant functional decline or life transitions.' }
      ]
    },
    precisionReporting: {
      title: "Precision Reporting Standards",
      subtitle: "Every FCA includes an exhaustive clinical deep-dive.",
      evaluationProcess: {
        title: "The Evaluation Process",
        list: [
          { num: '01', title: 'Review of Medical History', text: 'Analysis of existing reports and diagnostic documentation.' },
          { num: '02', title: 'In-Depth Interview', text: 'Consultation with the participant and their core support network.' },
          { num: '03', title: 'Direct Observation', text: 'Real-world assessment of functional performance in the home.' },
          { num: '04', title: 'Standardized Tools', text: 'Evidence-based assessment tools (WHODAS, LSP-16, etc).' }
        ]
      },
      finalReport: {
        title: "The Final Report",
        list: [
          { title: 'Detailed Functional Analysis', text: 'Categorized by NDIS domain requirements.' },
          { title: 'Clinical Reasoning', text: 'Scientific justification for every recommendation made.' },
          { title: 'Funding Justification', text: 'Meeting the "Reasonable and Necessary" criteria.' },
          { title: 'Actionable Recommendations', text: 'Specific therapy hours and equipment needs.' }
        ]
      }
    },
    whyPrecisionMatters: {
      badge: "Strategic value",
      title: <>Why precision<br />matters in NDIS<br />pathways.</>,
      image: "/aged_care_independence_1.png",
      list: [
        { title: 'Funding Approvals', description: 'Our reports use the exact language required by NDIA planners, significantly increasing the likelihood of funding approvals for critical supports.' },
        { title: 'Reduced Delays', description: 'By providing comprehensive evidence upfront, we minimize the need for the NDIA to request additional information, speeding up your plan review.' },
        { title: 'Direction for Therapy', description: 'More than a funding document, the FCA provides a strategic roadmap for your ongoing therapy and intervention goals.' }
      ]
    },
    journey: {
      title: "The Assessment Journey",
      subtitle: "Submission of details via our secure intake portal.",
      steps: [
        { number: 1, title: 'Referral', description: 'Submission of details via our secure intake portal.' },
        { number: 2, title: 'Review', description: 'Clinical triage to ensure clinician client alignment.' },
        { number: 3, title: 'Schedule', description: 'Booking the home visit or telehealth consultation.' },
        { number: 4, title: 'Conduct', description: '3-4 hour comprehensive assessment session.' },
        { number: 5, title: 'Prepare', description: 'Clinical drafting, analysis, and quality assurance.' },
        { number: 6, title: 'Deliver', description: 'Final clinical report issued to the participant.' }
      ]
    },
    cta: {
      title: "Need a Functional Capacity Assessment?",
      subtitle: "Get the clinical documentation you need to support your NDIS plan.",
    },
  },
  hma: {
    banner: {
      title: "Home Modification Assessments",
      description: "Strategic architectural modifications designed to improve safety, accessibility, and long-term independence.",
      image: PUBLIC_IMAGES.HMA_BANNER,
    },
    redefining: {
      title: "Redefining Accessibility",
      subtitle: "Defining Modifications",
      description: "From minor adjustments like grab rails and hand-held showers to complex structural changes including bathroom re-configurations and ramp installations. We bridge the gap between architectural possibility and clinical necessity.",
      types: [
        { title: "Complex", subtitle: "High Structural" },
        { title: "Minor", subtitle: "Low Complexity" }
      ],
      factorsTitle: "Assessment Factors",
      factors: [
        "Functional daily routines",
        "Environmental safety risks",
        "Accessibility bottlenecks",
        "Anticipated future needs",
        "NDIS compliance audits"
      ]
    },
    whoIsFor: {
      title: "Who This Is For",
      items: [
        { id: "01", title: "NDIS Participants", description: "Requiring structural home changes." },
        { id: "02", title: "Fall Risk Individuals", description: "Enhancing safety through environmental design." },
        { id: "03", title: "Transitions", description: "Coming home from hospital or care facilities." }
      ]
    },
    whyStrategic: {
      title: "Why Strategic Modification Matters",
      description: "Poorly planned modifications lead to expensive rework and delayed independence. Our clinical approach identifies the root cause of environmental barriers to ensure the first solution is the right one.",
      image: PUBLIC_IMAGES.HMA_STRATEGIC,
      stats: [
        { number: "0%", text: "Tolerance for error", type: "blue" },
        { number: "24/7", text: "Safe independence", type: "green" }
      ]
    },
    difference: {
      title: "The Montra Difference",
      pillars: [
        { title: "Real-life Context", description: "We don't just assess rooms; we assess your daily flow, habits, and community interactions within the home environment.", color: "#1CA364" },
        { title: "Future-proofing", description: "Our clinical foresight accounts for progressive conditions, ensuring modifications remain functional for years, not just months.", color: "#28E68D" },
        { title: "Detail-oriented Documentation", description: "Detailed measurements and clear clinical reasoning facilitate smoother approvals through the NDIS funding portal.", color: "#78EFB7" }
      ]
    },
    journey: {
      title: "The Assessment Journey",
      steps: [
        { id: 1, title: "Referral", description: "Submit your initial request through our digital portal." },
        { id: 2, title: "Triage", description: "Clinical review to match you with the right specialist." },
        { id: 3, title: "Home Visit", description: "In-depth on-site assessment and measurements." },
        { id: 4, title: "Collab", description: "Consultation with builders and stakeholders." },
        { id: 5, title: "Drafting", description: "Developing the clinical report and justification." },
        { id: 6, title: "Delivery", description: "Submission to NDIS and final report handover.", isHighlighted: true }
      ]
    },
    cta: {
      title: "Need a home modification assessment?",
      subtitle: "Our experts provide the architectural guidance needed for safe home changes.",
    },
  },
  oot: {
    banner: {
      title: "Ongoing Occupational Therapy",
      description: "Sustainable, goal-oriented clinical intervention designed to foster independence and enhance quality of life.",
      image: PUBLIC_IMAGES.OOT_BANNER,
    },
    support: {
      title: "Therapy Support Areas",
      cards: [
        { title: "Daily Living Skills", description: "Developing strategies for essential tasks to enhance daily functional success.", image: PUBLIC_IMAGES.OOT_DAILY_LIVING },
        { title: "Independence", description: "Empowering participants to take control of their environment and routines.", image: PUBLIC_IMAGES.OOT_INDEPENDENCE },
        { title: "Cognitive Support", description: "Customized cognitive strategies to improve mental engagement and processing.", image: PUBLIC_IMAGES.OOT_COGNITIVE }
      ]
    },
    targeted: {
      title: "Targeted Care Populations",
      image: PUBLIC_IMAGES.OOT_TARGETED,
      populations: [
        { title: "NDIS Participants", description: "Self-managed, plan-managed, or NDIA-managed participants seeking outcome-focused therapy." },
        { title: "Families & Carers", description: "Families requiring professional guidance on home modification and capacity building." },
        { title: "Aged Care Providers", description: "Partnerships for long-term functional maintenance and safety assessments." }
      ]
    },
    service: {
      title: "Comprehensive Clinical Service",
      services: [
        { id: "01", title: "Goal Identification", description: "Comprehensive initial screening to align clinical outcomes with participant aspirations." },
        { id: "02", title: "Home Sessions", description: "Therapy delivered in the participant's primary environment for maximum ecological validity." },
        { id: "03", title: "Progres Monitoring", description: "Data-driven analysis of functional improvements and on going milestone reporting." },
        { id: "04", title: "Review Reports", description: "Formal documentation supporting NDIS plan reviews and funding justifications." }
      ]
    },
    journey: {
      title: "The Clinical Journey",
      subtitle: "Submission of details via our secure intake portal.",
      steps: [
        { id: 1, title: "Referral", description: "Digital submission of participant details and preliminary goals via our secure portal." },
        { id: 2, title: "Assessment", description: "Clinical triage to in-depth functional capacity assessment to establish clinical baseline and intervention scope." },
        { id: 3, title: "Implementation", description: "Delivery of structured therapy sessions focused on targeted functional domains.", isHighlighted: true }
      ]
    },
    cta: {
      title: "Ready to Begin Therapy?",
      subtitle: "Connect with our skilled occupational therapists for ongoing, goal-oriented support.",
    },
  },
};
