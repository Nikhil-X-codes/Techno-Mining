import { Shield, Compass, AlertCircle, FileCheck } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    icon: Shield,
    title: 'DGMS Permissions',
    description: 'End-to-end DGMS permission support and statutory manpower compliance for mining operations.',
    slug: 'dgms-permissions',
    image: '/images/DGMS Permissions & Statutory Manpower Deployment.jpg',
    imageAlt: 'DGMS permissions and statutory manpower deployment',
    details: {
      whatIs:
        'DGMS permission support to secure statutory approvals, staffing compliance, and safe operational clearance for mining activities.',
      whyNeeded: [
        'Mandatory legal compliance for mine operations',
        'Prevents shutdowns, penalties, and rework',
        'Ensures qualified statutory manpower is in place',
      ],
      whatWeDo: [
        'Assess site readiness and statutory role requirements',
        'Prepare DGMS applications, annexures, and drawings',
        'Coordinate with authorities and address queries',
        'Support inspections and post-approval compliance',
      ],
      processSteps: [
        'Requirement intake and document checklist',
        'Gap analysis and manpower mapping',
        'Documentation, drafting, and filing',
        'DGMS follow-ups and clarifications',
        'Approval handover and compliance plan',
      ],
      requiredDocuments: [
        'Mining lease and ownership records',
        'Approved mining plan or scheme',
        'Statutory staff qualifications and appointment letters',
        'Site plans, layout, and safety plan',
        'Past compliance records (if applicable)',
      ],
      benefits: [
        'Faster approvals with fewer revisions',
        'Clear compliance trail for audits',
        'Reduced operational and legal risk',
      ],
    },
  },
  {
    id: 2,
    icon: Compass,
    title: 'Blast Design Optimization and Vibration Analysis',
    description: 'Optimization of blast design parameters and vibration analysis to improve productivity and safety.',
    slug: 'blast-optimization',
    image: '/images/Blast Design Optimisation & Vibration Study.png',
    imageAlt: 'Blast design optimisation and vibration study',
    details: {
      whatIs:
        'Technical evaluation and optimization of blast design to control vibration, fragmentation, and overall blast performance.',
      whyNeeded: [
        'Improves fragmentation and reduces secondary blasting',
        'Controls vibration impact on structures and safety',
        'Cuts costs and improves production consistency',
      ],
      whatWeDo: [
        'Review current blast designs and field conditions',
        'Model vibration and fragmentation outcomes',
        'Recommend optimized parameters and patterns',
        'Support trials and performance validation',
      ],
      processSteps: [
        'Baseline data collection and site study',
        'Design analysis and vibration modeling',
        'Optimization recommendations',
        'Pilot blast and monitoring',
        'Final reporting and standardization',
      ],
      requiredDocuments: [
        'Current blast design sheets and logs',
        'Geology and bench geometry details',
        'Vibration records or monitoring data',
        'Production and fragmentation targets',
      ],
      benefits: [
        'Higher productivity with lower blasting costs',
        'Better safety and vibration control',
        'Consistent fragmentation quality',
      ],
    },
  },
  {
    id: 3,
    icon: AlertCircle,
    title: 'Slope Stability Monitoring and Failure Prediction',
    description: 'Monitoring and prediction of slope failures to protect people, equipment, and assets.',
    slug: 'slope-safety',
    image: '/images/Slope Safety Monitoring & Prediction.png',
    imageAlt: 'Slope safety monitoring and prediction',
    details: {
      whatIs:
        'Continuous monitoring and analysis to identify instability and predict slope failures in time to act.',
      whyNeeded: [
        'Reduces risk to life, equipment, and operations',
        'Provides early warnings for proactive action',
        'Supports regulatory and safety compliance',
      ],
      whatWeDo: [
        'Baseline stability assessment and risk zoning',
        'Instrumentation and monitoring plan',
        'Data analysis and trigger thresholds',
        'Mitigation recommendations and reporting',
      ],
      processSteps: [
        'Site inspection and geotechnical review',
        'Monitoring setup and data collection',
        'Trend analysis and alert thresholds',
        'Reporting and mitigation planning',
        'Ongoing review and updates',
      ],
      requiredDocuments: [
        'Geology and geotechnical reports',
        'Pit design and bench geometry',
        'Historical instability records',
        'Monitoring access and layout plan',
      ],
      benefits: [
        'Improved safety and risk visibility',
        'Reduced unplanned downtime',
        'Better slope design confidence',
      ],
    },
  },
  {
    id: 4,
    icon: FileCheck,
    title: 'Mine Survey Planning and Section Mapping',
    description: 'Accurate mine survey planning, mapping, and sections for operations and statutory needs.',
    slug: 'mine-survey',
    image: '/images/Mine Survey Plan & Sections.jpg',
    imageAlt: 'Mine survey plan and sections',
    details: {
      whatIs:
        'Survey planning and precise sectional mapping to support operations, compliance, and reporting.',
      whyNeeded: [
        'Ensures accurate mine geometry and progress tracking',
        'Supports statutory submissions and audits',
        'Improves operational planning and safety',
      ],
      whatWeDo: [
        'Plan survey control points and methodology',
        'Capture field data and validate accuracy',
        'Prepare plans, sections, and updates',
        'Deliver compliant drawings and reports',
      ],
      processSteps: [
        'Survey scope and control planning',
        'Field data collection and validation',
        'Drafting and section preparation',
        'Review with operations team',
        'Final deliverables and updates',
      ],
      requiredDocuments: [
        'Existing mine plans and survey control data',
        'Lease boundary and coordinate system details',
        'Production and excavation records',
        'Statutory format requirements',
      ],
      benefits: [
        'Accurate operational decision-making',
        'Reliable compliance documentation',
        'Reduced survey rework',
      ],
    },
  },
  {
    id: 5,
    icon: Compass,
    title: 'Drone Survey and Aerial Mapping Solutions',
    description: 'High-accuracy drone survey support for mapping, measurement, and documentation.',
    slug: 'drone-survey',
    image: '/images/Drone Survey.webp',
    imageAlt: 'Drone survey',
    details: {
      whatIs:
        'Aerial survey and mapping using drones to capture high-resolution terrain data quickly and safely.',
      whyNeeded: [
        'Faster coverage than ground surveys',
        'Accurate volumetrics and progress tracking',
        'Improved safety with reduced field exposure',
      ],
      whatWeDo: [
        'Flight planning and regulatory checks',
        'Data capture with calibrated sensors',
        'Processing for orthomosaics and DSM/DTM',
        'Deliverables in required formats',
      ],
      processSteps: [
        'Site briefing and flight plan approval',
        'Drone data capture',
        'Data processing and QA',
        'Map and model delivery',
        'Client review and revisions',
      ],
      requiredDocuments: [
        'Site location and boundary details',
        'Survey objectives and accuracy needs',
        'Access permissions and safety approvals',
      ],
      benefits: [
        'Rapid turnaround with high accuracy',
        'Comprehensive visual documentation',
        'Lower survey costs over time',
      ],
    },
  },
  {
    id: 6,
    icon: FileCheck,
    title: 'Environmental Clearance and Compliance (CTO/CTE)',
    description: 'Environmental clearance, monitoring, and CTO/CTE compliance support.',
    slug: 'environmental-clearance',
    image: '/images/Environmental Clearance & Monitoring.webp',
    imageAlt: 'Environmental clearance and monitoring',
    details: {
      whatIs:
        'Support for environmental clearances and CTO/CTE compliance with monitoring and reporting.',
      whyNeeded: [
        'Regulatory requirement for mining operations',
        'Avoids penalties and operational delays',
        'Ensures sustainable compliance practices',
      ],
      whatWeDo: [
        'Prepare clearance applications and reports',
        'Coordinate with agencies for approvals',
        'Set up monitoring and compliance schedules',
        'Maintain audit-ready documentation',
      ],
      processSteps: [
        'Compliance review and scope definition',
        'Documentation and data preparation',
        'Submission and follow-ups',
        'Monitoring implementation',
        'Ongoing reporting and renewal support',
      ],
      requiredDocuments: [
        'Project details and mining plan',
        'Baseline environmental data',
        'Site layout, production, and capacity details',
        'Past compliance records (if any)',
      ],
      benefits: [
        'Smoother approvals and renewals',
        'Reduced compliance risk',
        'Transparent documentation for audits',
      ],
    },
  },
  {
    id: 7,
    icon: AlertCircle,
    title: 'Hydrogeological Study and Water Resource Analysis',
    description: 'Groundwater assessment and water resource analysis to support mining operations.',
    slug: 'hydrogeology',
    image: '/images/Hydrogeology Study.png',
    imageAlt: 'Hydrogeology study',
    details: {
      whatIs:
        'Hydrogeological assessment to understand groundwater behavior and its impact on mining activities.',
      whyNeeded: [
        'Supports dewatering and water management plans',
        'Reduces risk of inflow and instability',
        'Complies with environmental and safety norms',
      ],
      whatWeDo: [
        'Assess aquifers, recharge, and flow paths',
        'Model groundwater impact and drawdown',
        'Recommend mitigation and monitoring plans',
        'Provide technical reports for approvals',
      ],
      processSteps: [
        'Data collection and field investigation',
        'Hydrogeological mapping and analysis',
        'Modeling and impact assessment',
        'Mitigation plan and reporting',
        'Stakeholder review and updates',
      ],
      requiredDocuments: [
        'Site location and geology data',
        'Existing borehole and water level data',
        'Mine layout and production plan',
        'Water usage and discharge details',
      ],
      benefits: [
        'Better water management decisions',
        'Reduced operational disruptions',
        'Stronger approval readiness',
      ],
    },
  },
  {
    id: 8,
    icon: Compass,
    title: 'Mineral Exploration and Resource Evaluation',
    description: 'Resource identification and evaluation to support exploration and feasibility studies.',
    slug: 'mineral-exploration',
    image: '/images/Mineral Exploration.jpg',
    imageAlt: 'Mineral exploration',
    details: {
      whatIs:
        'Systematic exploration and evaluation to define mineral resources and development potential.',
      whyNeeded: [
        'Identifies viable targets and reserves',
        'Improves investment and planning decisions',
        'Reduces uncertainty in feasibility studies',
      ],
      whatWeDo: [
        'Target generation and exploration planning',
        'Geological mapping and sampling',
        'Resource modeling and reporting',
        'Support for regulatory submissions',
      ],
      processSteps: [
        'Desktop study and target selection',
        'Field work and sampling',
        'Laboratory analysis and modeling',
        'Resource estimation and reporting',
        'Review and planning recommendations',
      ],
      requiredDocuments: [
        'Lease area maps and access permissions',
        'Historic exploration data (if any)',
        'Geology maps and reports',
        'Sampling and drilling logs',
      ],
      benefits: [
        'Clear resource definition',
        'Better project valuation',
        'Reduced exploration risk',
      ],
    },
  },
  {
    id: 9,
    icon: Shield,
    title: 'Mining Plan and Scheme Preparation',
    description: 'Mining plans and schemes aligned with regulatory and operational requirements.',
    slug: 'mining-plan',
    image: '/images/Preparation of Mining Plan.webp',
    imageAlt: 'Preparation of mining plan',
    details: {
      whatIs:
        'Preparation of mining plans or schemes for approvals, operations, and compliance.',
      whyNeeded: [
        'Required for statutory approvals and renewals',
        'Defines safe and efficient mining strategy',
        'Aligns operations with compliance standards',
      ],
      whatWeDo: [
        'Compile geological and operational inputs',
        'Draft production, safety, and reclamation plans',
        'Prepare drawings and schedules',
        'Support approval submissions and revisions',
      ],
      processSteps: [
        'Data collection and scope definition',
        'Plan drafting and design',
        'Internal review and compliance checks',
        'Submission and authority response',
        'Final approval support',
      ],
      requiredDocuments: [
        'Lease documents and approvals',
        'Geology and reserve data',
        'Survey plans and production details',
        'Environmental and safety inputs',
      ],
      benefits: [
        'Smoother approvals and renewals',
        'Operational clarity and safer plans',
        'Reduced revision cycles',
      ],
    },
  },
  {
    id: 10,
    icon: FileCheck,
    title: 'Mining Lease Processing and Approval Support',
    description: 'Documentation and technical assistance for mining lease processing and approvals.',
    slug: 'mining-lease',
    image: '/images/Mining Lease Granting.jpg',
    imageAlt: 'Mining lease granting',
    details: {
      whatIs:
        'End-to-end support for mining lease processing, documentation, and approval coordination.',
      whyNeeded: [
        'Ensures correct documentation and compliance',
        'Reduces approval delays and rejections',
        'Provides a structured approval pathway',
      ],
      whatWeDo: [
        'Review eligibility and application requirements',
        'Prepare technical documents and annexures',
        'Coordinate with authorities for clarifications',
        'Track milestones and approvals',
      ],
      processSteps: [
        'Eligibility check and document planning',
        'Drafting and application submission',
        'Authority follow-ups and responses',
        'Approval tracking and compliance setup',
        'Final handover and records',
      ],
      requiredDocuments: [
        'Land and ownership documents',
        'Geology and reserve reports',
        'Environmental and safety clearances',
        'Survey and boundary maps',
      ],
      benefits: [
        'Clear approval roadmap',
        'Reduced documentation errors',
        'Faster lease processing',
      ],
    },
  },
];
