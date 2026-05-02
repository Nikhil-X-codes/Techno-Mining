import {
  FileCheck,
  Zap,
  Shield,
  Map,
  Drone,
  AlertCircle,
  Users,
  Compass,
} from 'lucide-react';

export const serviceDetails = [
  {
    slug: 'dgms-permissions',
    name: 'DGMS Permissions & Statutory Compliance',
    tagline: 'Fast approvals and compliant staffing for DGMS requirements.',
    summary:
      'End-to-end DGMS permissions, statutory manpower planning, and compliance support for mining operations.',
    icon: FileCheck,
    whatIs: {
      what: 'We help you prepare and submit DGMS applications with complete statutory and safety documentation.',
      problem:
        'Incomplete files and missed requirements delay approvals and create compliance risks for your mine.',
    },
    whyNeeded: [
      'DGMS permissions are mandatory for approvals, expansions, and operational changes.',
      'Reduces stoppages, penalties, and inspection delays.',
      'Demonstrates safety readiness to regulators and stakeholders.',
    ],
    whatWeDo: [
      'Review mine plans and statutory requirements.',
      'Prepare DGMS forms, registers, and annexures.',
      'Coordinate site inspections and compliance checks.',
      'Track submissions and manage follow-ups with authorities.',
      'Align statutory manpower deployment with rules.',
    ],
    process: [
      { title: 'Consultation', description: 'Understand scope, mine status, and timelines.' },
      { title: 'Document Checklist', description: 'Confirm required records and formats.' },
      { title: 'Preparation', description: 'Draft applications, annexures, and safety documents.' },
      { title: 'Submission', description: 'File with DGMS and manage queries.' },
      { title: 'Approval', description: 'Receive approval and share compliance roadmap.' },
    ],
    documents: [
      'Lease deed or LOI',
      'Mine plan and layout maps',
      'Safety management plan',
      'Statutory manpower details',
      'Survey plans and sections',
      'Company registrations and ID proofs',
    ],
    benefits: [
      'Faster approvals with fewer resubmissions.',
      'Lower compliance risk and inspection surprises.',
      'Clear staffing and safety alignment for operations.',
    ],
  },
  {
    slug: 'blast-optimization',
    name: 'Blast Design Optimization & Vibration Study',
    tagline: 'Safer blasts with better fragmentation and controlled vibration.',
    summary:
      'Scientific blast design optimization and vibration analysis with practical, site-specific recommendations.',
    icon: Zap,
    whatIs: {
      what: 'We analyze blast geometry, burden, spacing, and charge to improve outcomes and safety.',
      problem:
        'Poor blast design increases vibration, overbreak, and operating costs.',
    },
    whyNeeded: [
      'Meet regulatory vibration limits and protect nearby assets.',
      'Reduce drilling, hauling, and crushing costs.',
      'Improve safety for workforce and equipment.',
    ],
    whatWeDo: [
      'Study geology and blast patterns.',
      'Measure vibration and air overpressure.',
      'Optimize charge and timing design.',
      'Provide actionable blast improvement plan.',
      'Train site teams on best practices.',
    ],
    process: [
      { title: 'Site Review', description: 'Collect geology, patterns, and blast logs.' },
      { title: 'Data Capture', description: 'Monitor vibrations and blast performance.' },
      { title: 'Design Modeling', description: 'Optimize parameters for safer results.' },
      { title: 'Recommendations', description: 'Share design updates and control measures.' },
      { title: 'Validation', description: 'Verify improvements on trial blasts.' },
    ],
    documents: [
      'Blast logs and drill plans',
      'Bench geometry details',
      'Explosive type and charge data',
      'Vibration monitoring reports',
      'Site layout and sensitive receptors map',
    ],
    benefits: [
      'Reduced vibration and fly-rock risk.',
      'Better fragmentation and productivity.',
      'Lower cost per tonne mined.',
    ],
  },
  {
    slug: 'slope-safety',
    name: 'Slope Safety Monitoring & Prediction',
    tagline: 'Predict slope risks before they become failures.',
    summary:
      'Proactive slope monitoring, analysis, and mitigation planning to protect people and assets.',
    icon: Shield,
    whatIs: {
      what: 'We assess slope stability using field observations, monitoring data, and engineering checks.',
      problem:
        'Unstable slopes can trigger sudden failures that halt production and endanger workers.',
    },
    whyNeeded: [
      'Safety compliance for active mining faces.',
      'Protects equipment and infrastructure.',
      'Reduces unplanned downtime from slope failures.',
    ],
    whatWeDo: [
      'Slope mapping and condition survey.',
      'Monitoring strategy and alert thresholds.',
      'Stability analysis and risk zoning.',
      'Mitigation and reinforcement guidance.',
      'Ongoing review and reporting.',
    ],
    process: [
      { title: 'Site Survey', description: 'Inspect slopes and collect baseline data.' },
      { title: 'Monitoring Setup', description: 'Define instrumentation and inspection plan.' },
      { title: 'Analysis', description: 'Model stability and failure mechanisms.' },
      { title: 'Mitigation', description: 'Recommend stabilization measures.' },
      { title: 'Review', description: 'Track changes and update advisories.' },
    ],
    documents: [
      'Geological maps and logs',
      'Slope cross-sections',
      'Monitoring data or inspection records',
      'Bench and wall geometry details',
      'Hydrology and drainage information',
    ],
    benefits: [
      'Early warning to prevent failures.',
      'Safer working environment.',
      'Longer asset life and stable production.',
    ],
  },
  {
    slug: 'mine-survey',
    name: 'Mine Survey Plan & Sections',
    tagline: 'Accurate, certified survey plans that stand up to scrutiny.',
    summary:
      'Certified plans and sections with accurate boundary demarcation and documentation.',
    icon: Map,
    whatIs: {
      what: 'We prepare statutory survey plans and sections for compliance and operational planning.',
      problem:
        'Outdated or inaccurate survey plans lead to regulatory issues and operational risk.',
    },
    whyNeeded: [
      'Statutory requirement for inspections and approvals.',
      'Ensures clear boundary demarcation.',
      'Improves planning accuracy for production teams.',
    ],
    whatWeDo: [
      'Field survey and data verification.',
      'Prepare plans, sections, and boundary maps.',
      'Coordinate certifications and submissions.',
      'Update legacy survey records.',
      'Support DGMS and state submissions.',
    ],
    process: [
      { title: 'Briefing', description: 'Confirm survey scope and timelines.' },
      { title: 'Field Work', description: 'Collect measurements and verify boundaries.' },
      { title: 'Drafting', description: 'Prepare plans and sections.' },
      { title: 'Review', description: 'Validate accuracy and compliance.' },
      { title: 'Submission', description: 'Deliver certified documents.' },
    ],
    documents: [
      'Lease boundary records',
      'Previous survey plans',
      'Mine workings data',
      'Topographic maps',
      'Coordinate and benchmark details',
    ],
    benefits: [
      'Clear statutory compliance.',
      'Reliable data for planning and safety.',
      'Reduced rework during inspections.',
    ],
  },
  {
    slug: 'drone-survey',
    name: 'Drone Survey',
    tagline: 'Rapid mapping with high-precision aerial data.',
    summary:
      'High-precision drone surveying and mapping for large mine sites.',
    icon: Drone,
    whatIs: {
      what: 'We use drone imagery and photogrammetry to create accurate maps and models.',
      problem:
        'Traditional surveys are slow and costly for large or inaccessible areas.',
    },
    whyNeeded: [
      'Fast updates for dynamic mine environments.',
      'Improves safety by reducing field exposure.',
      'Supports volume calculations and planning.',
    ],
    whatWeDo: [
      'Flight planning and permissions support.',
      'Aerial data capture and ground control.',
      'Photogrammetry and model processing.',
      'Deliver maps, contours, and volumes.',
      'Integrate outputs with mine planning tools.',
    ],
    process: [
      { title: 'Planning', description: 'Define coverage, altitude, and control points.' },
      { title: 'Data Capture', description: 'Execute drone flights safely.' },
      { title: 'Processing', description: 'Generate orthomosaic and 3D models.' },
      { title: 'Validation', description: 'Check accuracy with ground control.' },
      { title: 'Delivery', description: 'Share maps, models, and volumes.' },
    ],
    documents: [
      'Site boundaries and no-fly zones',
      'Ground control points',
      'Previous survey references',
      'Access permissions',
      'Output requirements and formats',
    ],
    benefits: [
      'Faster survey turnaround.',
      'Improved accuracy and coverage.',
      'Lower survey cost for large areas.',
    ],
  },
  {
    slug: 'environmental-clearance',
    name: 'Environmental Clearance & Monitoring',
    tagline: 'Clearance support with reliable monitoring and reporting.',
    summary:
      'Environmental clearances, monitoring support, and CTO/CTE approvals for mining projects.',
    icon: AlertCircle,
    whatIs: {
      what: 'We prepare environmental documents and support compliance monitoring and reporting.',
      problem:
        'Delays in clearance and poor reporting can halt operations or invite penalties.',
    },
    whyNeeded: [
      'Legal requirement for project approvals and renewals.',
      'Ensures responsible operations and community trust.',
      'Avoids penalties and operational shutdowns.',
    ],
    whatWeDo: [
      'Coordinate baseline data and studies.',
      'Prepare clearance applications and forms.',
      'Support CTO/CTE documentation.',
      'Manage monitoring schedules and reports.',
      'Align compliance with authority expectations.',
    ],
    process: [
      { title: 'Scoping', description: 'Define clearance pathway and requirements.' },
      { title: 'Data Collection', description: 'Coordinate environmental monitoring.' },
      { title: 'Documentation', description: 'Prepare reports and application files.' },
      { title: 'Submission', description: 'Submit and track authority feedback.' },
      { title: 'Compliance', description: 'Set up monitoring and reporting cadence.' },
    ],
    documents: [
      'Project details and location maps',
      'Baseline environmental data',
      'Monitoring reports and lab results',
      'CTO/CTE application forms',
      'Compliance history records',
    ],
    benefits: [
      'Faster clearance processing.',
      'Clear compliance reporting.',
      'Lower risk of penalties or shutdowns.',
    ],
  },
  {
    slug: 'hydrogeology',
    name: 'Hydrogeology Study',
    tagline: 'Water insights that protect safety and productivity.',
    summary:
      'Hydrogeological assessments to support safe, sustainable, and compliant mining operations.',
    icon: Users,
    whatIs: {
      what: 'We assess groundwater behavior and its impact on mine safety and operations.',
      problem:
        'Unmanaged water inflow causes instability, delays, and higher costs.',
    },
    whyNeeded: [
      'Supports safe pit design and dewatering plans.',
      'Meets regulatory reporting requirements.',
      'Improves long-term operational planning.',
    ],
    whatWeDo: [
      'Review hydrogeological data and records.',
      'Conduct field assessments and monitoring.',
      'Model groundwater behavior and inflow.',
      'Recommend dewatering and control measures.',
      'Prepare reports for approvals and audits.',
    ],
    process: [
      { title: 'Data Review', description: 'Assess available hydro data and site records.' },
      { title: 'Field Study', description: 'Measure water levels and flow behavior.' },
      { title: 'Analysis', description: 'Model inflow and aquifer interactions.' },
      { title: 'Recommendations', description: 'Define dewatering and monitoring plan.' },
      { title: 'Reporting', description: 'Deliver final report and compliance files.' },
    ],
    documents: [
      'Borehole and well logs',
      'Water level records',
      'Pumping test data',
      'Geological logs and maps',
      'Mine plan and pit geometry',
    ],
    benefits: [
      'Reduced water-related downtime.',
      'Safer pit walls and benches.',
      'Predictable dewatering costs.',
    ],
  },
  {
    slug: 'mineral-exploration',
    name: 'Mineral Exploration',
    tagline: 'From target selection to validated mineral potential.',
    summary:
      'Exploration planning and execution to identify and validate mineral potential.',
    icon: Compass,
    whatIs: {
      what: 'We plan and execute exploration programs to evaluate mineral presence and quality.',
      problem:
        'Unstructured exploration leads to wasted drilling and unclear results.',
    },
    whyNeeded: [
      'Builds confidence before major investment.',
      'Improves resource estimation accuracy.',
      'Supports statutory reporting and approvals.',
    ],
    whatWeDo: [
      'Target mapping and exploration strategy.',
      'Sampling and field program planning.',
      'Coordinate drilling and logging support.',
      'Interpretation and resource estimation.',
      'Reporting for regulators and investors.',
    ],
    process: [
      { title: 'Targeting', description: 'Identify zones with mineral potential.' },
      { title: 'Sampling', description: 'Plan and execute sampling programs.' },
      { title: 'Drilling', description: 'Support drilling and data collection.' },
      { title: 'Interpretation', description: 'Analyze results and estimate resources.' },
      { title: 'Reporting', description: 'Prepare technical reports and summaries.' },
    ],
    documents: [
      'Geological maps and reports',
      'Previous exploration records',
      'Sampling and assay data',
      'Drilling logs and core photos',
      'Lease and access permissions',
    ],
    benefits: [
      'Clear exploration roadmap.',
      'Higher confidence in resource estimates.',
      'Reduced exploration waste and costs.',
    ],
  },
  {
    slug: 'mining-plan',
    name: 'Preparation of Mining Plan or Scheme',
    tagline: 'Compliant mining plans that move approvals forward.',
    summary:
      'Complete preparation of mining plans and schemes aligned to statutory requirements.',
    icon: FileCheck,
    whatIs: {
      what: 'We prepare statutory mining plans with technical and compliance details.',
      problem:
        'Incomplete plans delay approvals and slow project execution.',
    },
    whyNeeded: [
      'Mandatory for approvals, renewals, and expansions.',
      'Aligns operations with safety and environmental norms.',
      'Builds clarity for production and budgeting.',
    ],
    whatWeDo: [
      'Compile geological and survey inputs.',
      'Draft mining plan schedules and sections.',
      'Align staffing, production, and safety plans.',
      'Coordinate statutory annexures and forms.',
      'Support review and authority queries.',
    ],
    process: [
      { title: 'Kickoff', description: 'Define scope, lease status, and timeline.' },
      { title: 'Data Gathering', description: 'Collect geology, survey, and production data.' },
      { title: 'Plan Drafting', description: 'Prepare plan sections and schedules.' },
      { title: 'Review', description: 'Validate compliance and fix gaps.' },
      { title: 'Submission', description: 'Submit and manage approvals.' },
    ],
    documents: [
      'Lease details and approvals',
      'Geological reports and maps',
      'Survey plans and sections',
      'Production and manpower data',
      'Environmental and safety records',
    ],
    benefits: [
      'Faster approvals with compliant plans.',
      'Clear operational roadmap.',
      'Lower risk of rejections or delays.',
    ],
  },
  {
    slug: 'mining-lease',
    name: 'Mining Lease Granting',
    tagline: 'Guidance and documentation for smooth lease approvals.',
    summary:
      'Guidance and documentation support for mining lease processes and submissions.',
    icon: FileCheck,
    whatIs: {
      what: 'We assist with documentation and compliance for mining lease applications.',
      problem:
        'Missed steps and incomplete records can stall lease approvals.',
    },
    whyNeeded: [
      'Lease approval is the foundation for legal operations.',
      'Helps avoid costly compliance setbacks.',
      'Provides clarity for project timelines and funding.',
    ],
    whatWeDo: [
      'Identify statutory requirements and gaps.',
      'Prepare application documentation sets.',
      'Coordinate with survey and legal teams.',
      'Support inspections and authority queries.',
      'Track approvals through each stage.',
    ],
    process: [
      { title: 'Eligibility Check', description: 'Review lease status and prerequisites.' },
      { title: 'Document Prep', description: 'Assemble ownership and technical records.' },
      { title: 'Submission', description: 'File applications and forms.' },
      { title: 'Follow-Up', description: 'Respond to queries and inspections.' },
      { title: 'Granting', description: 'Receive lease and compliance roadmap.' },
    ],
    documents: [
      'Ownership and land records',
      'Company registration documents',
      'Survey reports and maps',
      'Technical project report',
      'ID proofs and authorizations',
    ],
    benefits: [
      'Clear guidance through complex steps.',
      'Reduced risk of rejection.',
      'Faster path to operational readiness.',
    ],
  },
];
