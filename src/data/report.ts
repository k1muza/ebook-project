// data/reportData.ts
import { ReportData } from '@/types/report';

export const reportData: ReportData = {
  pageTitle: 'Tererai Trent Foundation - Progress Report',
  pageDescription: 'H1 2025 Progress Report: Sowing Seeds of Hope and Opportunity',
  organization: "Tererai Trent International Foundation",
  reportTitle: "H1 2025 Progress Report: Sowing Seeds of Hope and Opportunity",
  period: "January – June 2025",
  guidingPrinciple: "Providing universal access to quality education",
  mission: "We envision empowered rural communities where all children have access to quality education, regardless of their gender or socio-economic backgrounds.",
  logoImage: {
    src: '/images/logo.jpg',
    alt: 'TTI logo',
  },
  coverImage: {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    alt: 'African students learning',
  },
  tocTitle: 'i. Table of Contents',
  infographic: {
    sections: {
      impact: {
        title: 'ii. Impact Overview',
        icon: 'HeartIcon',
        color: 'purple',
        stats: [
          { value: '28', label: 'Scholarship Recipients', icon: 'AcademicCapIcon', color: 'blue' },
          { value: '461', label: 'Students received stationery', icon: 'PencilIcon', color: 'purple' },
          { value: '2', label: 'Science Labs Built', icon: 'BeakerIcon', color: 'yellow' },
          { value: '7,512', label: 'Tomato plants cultivated', icon: 'GlobeAltIcon', color: 'green' },
          { value: '2', label: 'First female software engineers', icon: 'ComputerDesktopIcon', color: 'pink' },
          { value: '23', label: 'Leadership tour participants', icon: 'UserGroupIcon', color: 'teal' },
        ],
        connections: {
          centerLabel: 'TTI',
          nodes: [
            { label: 'Scholarships', icon: 'HiBookOpen', angle: 0, color: '#2563eb' },
            { label: 'Agriculture', icon: 'HiGlobeAlt', angle: 45, color: '#16a34a' },
            { label: 'Science', icon: 'HiBeaker', angle: 90, color: '#a855f7' },
            { label: 'Water Access', icon: 'HiSun', angle: 135, color: '#0ea5e9' },
            { label: 'Textiles', icon: 'HiShoppingBag', angle: 180, color: '#f97316' },
            { label: 'Partnerships', icon: 'HiUserGroup', angle: 225, color: '#10b981' },
            { label: 'Technology', icon: 'HiWifi', angle: 270, color: '#7c3aed' },
            { label: 'Empowerment', icon: 'HiSparkles', angle: 315, color: '#db2777' },
          ],
        },
      },
    },
  },
  message: {
    title: "A Message of Gratitude and Progress",
    content: [
      "The first half of 2025 has been a period of incredible growth and transformative impact for the Tererai Trent International (TTI) Foundation. With the unwavering support of our partners, donors, and community members, we have made significant strides in our core focus areas of educational support, sustainable agriculture, and community empowerment.",
      "This report celebrates the milestones we have achieved together. It tells the story of how three key initiatives—our scholarship program, an income-generating sewing project, and school-based irrigation systems—are not just changing lives but are building a foundation for a self-sustaining future. We are thrilled to share our progress, acknowledge the challenges we've faced, and look ahead with renewed purpose to the work that still needs to be done.",
      {
        type: "imagePair",
        layout: "split",
        images: [
          {
            src: "/images/classroom.jpg",
            alt: "Students learning in classroom",
            caption: "Figure 1: Classroom construction"
          },
          {
            src: "/images/celebration.jpg",
            alt: "Community gathering",
            caption: "Figure 2: Community members and TTI staff celebrating progress in education initiatives"
          }
        ]
      }
    ]
  },
  impactTitle: "Our Impact at a Glance",
  milestones: [
    {
      title: "Expanded Our Scholarship Program",
      description: "welcoming 10 new female students, while celebrating 5 graduates who have completed their studies."
    },
    {
      title: "Drilled 3 New Boreholes",
      description: "bringing clean, accessible water to our school communities and planting 3 vibrant irrigation gardens."
    },
    {
      title: "Launched 2 State-of-the-Art Science Laboratories",
      description: "at Chivakanenyama and Zvimhonja Secondary Schools, opening doors to STEM education for rural students."
    },
    {
      title: "Kickstarted the TTI Sewing Enterprise",
      description: "contracting 15 women from our vocational training program to produce school uniforms, already reaching 25% of our target schools."
    },
    {
      title: "Hosted a Leadership Tour",
      description: "for 20 students and 3 fundraising team members from Oklahoma State University, strengthening our global partnerships."
    },
    {
      title: "Constructed a New Classroom Block",
      description: "at Chivakanenyama Secondary, which has now been upgraded to a High School, offering Advanced Level classes for the first time."
    },
    {
      title: "Secured Essential Resources",
      description: "including a fuel-saver vehicle for local travel, two significant stationery donations, and laboratory equipment from OSU."
    }
  ],
  strategicVision: {
    intro: "TTI's common goal is to provide universal access to quality education and develop an educational system that is sustainable and not solely reliant on external funding. To accomplish this, our work is guided by six core goals:",
    educationHeading: 'Education-Driven Goals',
    educationGoals: [
      {
        title: "Improving Education Quality",
        description: "Ensuring all children have access to quality education through financial assistance for tuition, accommodation, and food, alongside improved classroom resources."
      },
      {
        title: "Gender Parity in Education",
        description: "Actively correcting gender imbalances by addressing the unique barriers that affect girls' and boys' access to education."
      },
      {
        title: "Innovation & Technology",
        description: "Promoting modern educational tools and programs to enable students to attain higher education degrees and valuable certifications."
      }
    ],
    businessHeading: 'Business-Driven Goals',
    businessGoals: [
      {
        title: "Establishing a Self-Sustainable Organization",
        description: "Aligning our business model to sustain our education efforts while improving community livelihoods."
      },
      {
        title: "Generating Financial Value",
        description: "Creating incremental revenue to support our core non-profit work and reduce our need for external funding."
      }
    ]
  },
  strategicVisionTitle: 'Our Strategic Vision: A Blueprint for a Brighter Future',
  sections: [
    {
      title: "Empowering Minds, One Student at a Time",
      content: [
        { type: "subheading", text: "Scholarships: A Lifeline to a Brighter Future" },
        { type: "paragraph", text: "Our scholarship program remains the cornerstone of our commitment to educational access. This half-year, we proudly supported 28 tertiary students and 3 Advanced Level high school students, covering their tuition, accommodation, and food. Strategic follow-ups ensured that our support was aligned with both their academic performance and individual needs." },
        { type: "paragraph", text: "We are thrilled to announce that we welcomed 10 more brilliant young women into the program. Empowering a girl is one of the most profound investments we can make. When girls are educated in safe, encouraging environments, they are more likely to stay in school, avoid early marriage, and make informed choices about their futures. They become leaders who uplift their families and communities, breaking the cycle of poverty for generations to come." },
        { type: "paragraph", text: "A landmark achievement this period was celebrating Tryness Nyauvanga and Christabel Dura, the first TTI-supported students to pursue a degree in Software Engineering. Their courage in entering a male-dominated field is a powerful testament to our efforts in promoting STEM education for girls. To support their journey, TTI provided each with a new laptop, removing a critical barrier to their success." },
        {
          type: "imagePair",
          layout: "split",
          images: [
            {
              src: "/images/books.jpg",
              alt: "Students receiving scholarships",
              caption: "Figure 3: Scholarship recipients at the January 2025 orientation"
            },
            {
              src: "/images/students.jpg",
              alt: "Students at orientation",
              caption: "Figure 4: Scholarship recipients at the January 2025 orientation"
            }
          ]
        },
        { type: "subheading", text: "Scholarship Orientation: Building a Community of Leaders" },
        { type: "paragraph", text: "In January 2025, thanks to our generous donors, we held our first-ever orientation for 27 scholarship beneficiaries. This session was more than an introduction; it was a community-building experience. Students learned practical skills like time management and goal setting, connected with peers and mentors, and aligned their personal journeys with TTI's mission to uplift and empower." },
        { type: "quote", text: "Before the orientation, I was nervous and unsure about what to expect. But after hearing stories and guidance, I felt confident and ready to focus on my goals. I now understand that this scholarship is not just about school fees; it's about shaping my future.", author: "Christabel Dura" },
        {
          type: "imagePair",
          layout: "split",
          images: [
            {
              src: "/images/potatoes.jpg",
              alt: "Potato field",
              caption: "Figure 5: Potato field "
            },
            {
              src: "/images/tomatoes.jpg",
              alt: "Tomato field",
              caption: "Figure 6: Tomato field"
            }
          ]
        },
        { type: "subheading", text: "Gender Equity: Addressing Critical Needs" },
        { type: "paragraph", text: "A needs assessment in our 6 partner secondary schools revealed a dire situation: over half the children lacked basic stationery, and approximately 100 were not attending school due to financial hardship. In response, we secured a donation of 2,500 exercise books and 4,000 counter books from Rank Zimbabwe. The first distribution reached 461 students who had no supplies, with a second planned for August. Our hope is to secure further support to cover tuition fees and ensure no child is left behind." }
      ]
    },
    {
      title: "Innovation for a Self-Sustaining Community",
      content: [
        { type: "paragraph", text: "Beyond direct scholarships, our strategy focuses on building systems that foster independence and create lasting change." },
        { type: "subheading", text: "Vocational Training: From Skills to Enterprise" },
        { type: "paragraph", text: "The Skills and Business Center, established in late 2024, is already bearing fruit. This reporting period, we successfully integrated 80% of the women trained in fashion and tailoring into a new school uniform production initiative." },
        {
          type: "image",
          src: "/images/sewing.jpg",
          alt: "Women sewing uniforms",
          caption: "Figure 7: Women from the vocational training program producing school uniforms",
          layout: "split"
        },
        { type: "paragraph", text: "This community-led enterprise addresses multiple needs at once. By producing affordable, locally-made uniforms, we are easing the financial burden on families and improving school attendance. More importantly, we are providing graduates of our training program with immediate, meaningful employment. The income generated not only strengthens household resilience but is also channeled back into our scholarship fund, creating a virtuous, sustainable cycle." },
        { type: "subheading", text: "Science Labs: Opening a World of Possibility" },
        { type: "paragraph", text: "In the past, over 88% of students in the Matau cluster graduated with an Arts focus, largely due to a lack of science facilities. This year, we shattered that barrier by introducing and completing two modern science laboratories at Chivakanenyama and Zvimhonja Secondary Schools." },
        {
          type: "image",
          src: "/images/lab.jpg",
          alt: "Science laboratory",
          caption: "Figure 8: New science lab at Zvimhonja Secondary School",
          layout: "full"
        },
        { type: "paragraph", text: "A science lab levels the playing field, giving rural students the same opportunities as their urban peers. It ignites dreams of becoming doctors, engineers, and innovators. The impact was immediate: Chivakanenyama Secondary has been upgraded to a High School and is now offering Advanced Level science classes. A donation of a microscope and other lab equipment from visiting OSU students has already enabled the first practical science lessons, marking a new era of education in Matau." },
        { type: "subheading", text: "Solar-Powered Irrigation: Cultivating a Sustainable Future" },
        { type: "paragraph", text: "Access to water is fundamental to health, hygiene, and economic prosperity. We are proud to report the successful drilling of 3 boreholes at Chiroti Primary, Zvimhinja Primary, and Denderedzi Secondary." },
        {
          type: "imagePair",
          layout: "split",
          images: [
            {
              src: "/images/solar.jpg",
              alt: "Solar-powered irrigation",
              caption: "Figure 9: Solar-powered garden at Denderedzi Primary School"
            },
            {
              src: "/images/tank.jpg",
              alt: "Water storage tank",
              caption: "Figure 10: Solar-powered garden at Denderedzi Primary School"
            }
          ]
        },
        { type: "paragraph", text: "Building on this, we established two one-hectare, solar-powered, drip-irrigated garden plots at Zvimhonja and Denderedzi Primary Schools. In the first quarter of 2025, a total of 7,512 tomato plants were planted, with the first harvest in June expected to generate over $6,000 USD. These business models, along with other crop projects, are creating a vital income stream for the schools, fostering entrepreneurship, and ensuring the long-term sustainability of our projects." }
      ]
    },
    {
      title: "Strengthening Our Roots Through Partnership",
      content: [
        {
          type: "image",
          src: "/images/endowment.jpg",
          alt: "TTI team and partners",
          caption: "Figure 13: TTI team members with community partners and donors",
          layout: "full"
        },
        { type: "subheading", text: "Leadership Tours: Building Bridges and Trust" },
        {
          type: "imagePair",
          layout: "split",
          images: [
            {
              src: "/images/driller.jpg",
              alt: "Leadership tour",
              caption: "Figure 11: OSU students visiting TTI projects in Zimbabwe"
            },
            {
              src: "/images/osu.jpg",
              alt: "OSU students group",
              caption: "Figure 12: OSU students visiting TTI projects in Zimbabwe"
            }
          ]
        },
        { type: "paragraph", text: "Partnerships are the lifeblood of our work. This reporting period, we were honored to host 20 students from Oklahoma State University, in partnership with Awakened Woman. These tours are invaluable. They allow our sponsors to see their impact firsthand, deepen their emotional connection to our mission, and witness the real-life stories of transformation. The visit fostered incredible learning on both sides and left our team and community feeling inspired and hopeful for future collaborations." },
        { type: "subheading", text: "The Endowment Fund: Securing Our Future" },
        { type: "paragraph", text: "To ensure the long-term impact of our work, we have focused on establishing an endowment fund. This fund will provide a reliable source of income, reducing our dependence on short-term grants and allowing us to plan, innovate, and scale our projects with confidence. We are deeply grateful to Alice, Susan, and TTI Chairperson Peace Mitchell, who dedicated their time to document our work in Hurungwe and interview scholarship beneficiaries. Their efforts are a critical step toward securing a sustainable future for TTI, and we remain hopeful for a positive outcome." }
      ]
    }
  ],
  futureGoalsTitle: 'Looking Ahead: Our Goals for H2 2025',
  futureGoals: [
    "Conduct our 2nd Half Strategic Review Meeting to assess progress and refine our plans.",
    "Complete the Borehole and Fence Installation for the Chiroti Primary garden project.",
    "Launch the Denderedzi Secondary goat procurement project, including kraal installation.",
    "Begin construction of a Library and Computer Lab at Musukwi Secondary.",
    "Continue construction of the Chivakanenyama Secondary School classroom block.",
    "Conduct a full financial review of all H1 2025 projects."
  ],
  financialIntro: "The income statement below highlights how donations fund our programs and operations during the first half of 2025.",
  financialsTitle: 'Financial Performance',
  totalRevenueAmount: '$35,000',
  totalRevenueHeading: 'Total Revenue',
  programInvestmentAmount: '$35,000',
  programInvestmentHeading: 'Program Investment',
  programInvestmentNote: '92% to education programs',
  netImpactAmount: '$0',
  netImpactHeading: 'Net Impact',
  netIncomeAmount: '$0',
  netSurplusText: 'Surplus reinvested in programs',
  netDeficitText: 'Deficit covered by reserves',
  incomeStatementHeading: 'Income Statement',
  incomeStatementItemHeading: 'Item',
  incomeStatementAmountHeading: 'Amount',
  incomeStatementRevenueLabel: 'Revenue',
  incomeStatementExpensesLabel: 'Expenses',
  incomeStatementNetLabel: 'Net Income',
  financialAuditNote: '* Financials audited by independent accounting firm',
  financialAllocationHeading: 'Financial Allocation',
  financialAllocationText:
    'Our financial strategy prioritizes direct program impact, with 92% of funds allocated to education initiatives, while maintaining efficient operations below industry standards for administrative costs.',
  financialMetrics: [
    { label: 'Revenue Growth', value: '+12%', change: 'positive', icon: 'ArrowUp', description: 'compared to H1 2024' },
    { label: 'Program Efficiency', value: '86%', change: 'positive', description: 'of funds go directly to programs' },
    { label: 'Admin Cost Ratio', value: '8.6%', change: 'negative', icon: 'ArrowDown', description: 'below industry average of 15%' },
  ],
  financials: {
    revenue: [{ item: 'Donations and Grants', amount: '$35,000' }],
    expenses: [
      { item: 'Scholarship Support', amount: '$15,000' },
      { item: 'Infrastructure Projects', amount: '$10,000' },
      { item: 'Community Programs', amount: '$7,000' },
      { item: 'Administrative Costs', amount: '$3,000' }
    ]
  },
  locationsTitle: 'Where We Work',
  locations: [
    { name: 'Chivakanenyama Secondary School', lat: -16.712, lng: 29.164 },
    { name: 'Zvimhonja Primary School', lat: -16.745, lng: 29.123 },
    { name: 'Denderedzi Secondary School', lat: -16.737, lng: 29.138 }
  ],
  closingTitle: 'A Heartfelt Thank You',
  closing: "None of this would be possible without you—our dedicated partners, donors, and the resilient communities we serve. Your belief in our mission fuels our work and turns dreams into reality for thousands of children. Together, we are not just providing education; we are building a legacy of empowerment, sustainability, and hope. Thank you for being a part of this incredible journey.",
  closingImage: {
    src: "/images/endowment.jpg",
    classes: "object-top",
    alt: "TTI team and partners",
    caption: "Figure 13: TTI team members with community partners and donors"
  },
  highlightsTitle: ''
};
