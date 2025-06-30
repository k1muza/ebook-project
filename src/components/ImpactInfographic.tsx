// components/TTIInfographic.jsx
import React from 'react';
import {
  ChartBarIcon, HeartIcon, FlagIcon, BookOpenIcon, BeakerIcon,
  PencilIcon, GlobeAltIcon, SunIcon, ShoppingBagIcon, SparklesIcon, UserGroupIcon,
  ComputerDesktopIcon, BanknotesIcon, BuildingLibraryIcon, WifiIcon,
  AcademicCapIcon, LightBulbIcon, ArrowTrendingUpIcon, MapPinIcon
} from '@heroicons/react/24/solid';

const infographicData = {
  mainTitle: "H1 2025 Impact Report",
  mainSubtitle: "Tererai Trent International Foundation",
  mission: "Empowering rural communities through education, innovation, and sustainable development",
  sections: {
    achievements: {
      title: "Strategic Goals Progress",
      icon: ChartBarIcon,
      color: 'blue',
      cards: [
        {
          title: "Education Initiatives",
          tag: "+10 Girls Supported",
          color: 'blue',
          items: [
            { label: "Scholarship Program", value: 100, icon: AcademicCapIcon },
            { label: "Science Lab Setup", value: 100, icon: BeakerIcon },
            { label: "Stationery Distribution", value: 25, icon: PencilIcon },
          ]
        },
        {
          title: "Sustainability Projects",
          tag: "$7K+ Revenue",
          color: 'green',
          items: [
            { label: "Irrigation Gardens", value: 100, icon: GlobeAltIcon },
            { label: "Solar Boreholes", value: 75, icon: SunIcon },
            { label: "Textile Business", value: 80, icon: ShoppingBagIcon },
          ]
        }
      ]
    },
    impact: {
      title: "Community Impact",
      icon: HeartIcon,
      color: 'purple',
      stats: [
        { value: "28", label: "Scholarship Recipients", icon: AcademicCapIcon, color: 'blue' },
        { value: "461", label: "Students received stationery", icon: PencilIcon, color: 'purple' },
        { value: "2", label: "Science Labs Built", icon: BeakerIcon, color: 'yellow' },
        { value: "7,512", label: "Tomato plants cultivated", icon: GlobeAltIcon, color: 'green' },
        { value: "2", label: "First female software engineers", icon: ComputerDesktopIcon, color: 'pink' },
        { value: "23", label: "Leadership tour participants", icon: UserGroupIcon, color: 'teal' },
      ],
      connections: {
        centerLabel: "TTI",
        nodes: [
          { label: "Scholarships", icon: BookOpenIcon, angle: 0 },
          { label: "Agriculture", icon: GlobeAltIcon, angle: 45 },
          { label: "Science", icon: BeakerIcon, angle: 90 },
          { label: "Water Access", icon: SunIcon, angle: 135 },
          { label: "Textiles", icon: ShoppingBagIcon, angle: 180 },
          { label: "Partnerships", icon: UserGroupIcon, angle: 225 },
          { label: "Technology", icon: WifiIcon, angle: 270 },
          { label: "Empowerment", icon: SparklesIcon, angle: 315 },
        ]
      }
    },
    goals: {
      title: "H2 2025 Strategic Goals",
      icon: FlagIcon,
      color: 'yellow',
      items: [
        { title: "Infrastructure Development", description: "Borehole and fence installation at Chiroti Primary", icon: MapPinIcon, color: 'blue' },
        { title: "Agricultural Expansion", description: "Procurement of goats at Denderedzi Secondary", icon: GlobeAltIcon, color: 'green' },
        { title: "Education Enhancement", description: "Library and computer lab at Musukwi Secondary", icon: BuildingLibraryIcon, color: 'purple' },
        { title: "Financial Sustainability", description: "Review of H1 projects for improved efficiency", icon: BanknotesIcon, color: 'yellow' },
      ]
    }
  }
};

const Section = ({ title, icon: Icon, color, children }) => {
  const colorClasses = {
    blue: 'text-blue-600 border-blue-200',
    green: 'text-green-600 border-green-200',
    purple: 'text-purple-600 border-purple-200',
    yellow: 'text-yellow-600 border-yellow-200',
  };
  return (
    <div className="p-6 print:p-4">
      <h2 className={`text-xl font-bold text-gray-800 mb-5 flex items-center pb-3 border-b ${colorClasses[color]}`}>
        <Icon className={`h-5 w-5 mr-3 ${colorClasses[color].split(' ')[0]}`} />
        {title}
      </h2>
      {children}
    </div>
  );
};

const ProgressBar = ({ label, value, color, icon: Icon }) => {
  const colorClasses = {
    bg: { 
      blue: 'bg-blue-600', 
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      yellow: 'bg-yellow-600',
      pink: 'bg-pink-600',
      teal: 'bg-teal-600'
    },
    bgLight: { 
      blue: 'bg-blue-100', 
      green: 'bg-green-100',
      purple: 'bg-purple-100',
      yellow: 'bg-yellow-100',
      pink: 'bg-pink-100',
      teal: 'bg-teal-100'
    },
    text: {
      blue: 'text-blue-700', 
      green: 'text-green-700',
      purple: 'text-purple-700',
      yellow: 'text-yellow-700',
      pink: 'text-pink-700',
      teal: 'text-teal-700'
    }
  };
  return (
    <div className="flex items-center space-x-3 mb-4">
      <div className={`p-2 rounded-lg ${colorClasses.bgLight[color]} flex-shrink-0`}>
        <Icon className={`h-5 w-5 ${colorClasses.text[color]}`} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-sm mb-1 text-gray-700">
          <span className="font-medium">{label}</span>
          <span className="font-bold">{value}%</span>
        </div>
        <div className={`h-2 ${colorClasses.bgLight[color]} rounded-full overflow-hidden`}>
          <div className={`${colorClasses.bg[color]} h-full rounded-full`} style={{ width: `${value}%` }}></div>
        </div>
      </div>
    </div>
  );
};

const ProgressCard = ({ title, tag, color, items }) => {
  const colorClasses = {
    text: { blue: 'text-blue-800', green: 'text-green-800', purple: 'text-purple-800', yellow: 'text-yellow-800' },
    bg: { blue: 'bg-blue-100', green: 'bg-green-100', purple: 'bg-purple-100', yellow: 'bg-yellow-100' },
    gradient: { 
      blue: 'from-blue-50 to-blue-100', 
      green: 'from-green-50 to-green-100',
      purple: 'from-purple-50 to-purple-100',
      yellow: 'from-yellow-50 to-yellow-100'
    }
  };
  return (
    <div className={`bg-gradient-to-br ${colorClasses.gradient[color]} p-5 rounded-xl border border-gray-200 shadow-sm`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`font-bold ${colorClasses.text[color]}`}>{title}</h3>
        <div className={`${colorClasses.bg[color]} ${colorClasses.text[color]} px-3 py-1 rounded-full text-xs font-semibold`}>
          {tag}
        </div>
      </div>
      <div>
        {items.map(item => <ProgressBar key={item.label} {...item} />)}
      </div>
    </div>
  );
};

const StatCard = ({ value, label, icon: Icon, color }) => {
  const colorClasses = {
    text: { 
      blue: 'text-blue-700', 
      green: 'text-green-600', 
      purple: 'text-purple-600', 
      yellow: 'text-yellow-600',
      pink: 'text-pink-600',
      teal: 'text-teal-600'
    },
    bg: { 
      blue: 'bg-blue-50', 
      green: 'bg-green-50', 
      purple: 'bg-purple-50', 
      yellow: 'bg-yellow-50',
      pink: 'bg-pink-50',
      teal: 'bg-teal-50'
    }
  };
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start space-x-3 shadow-sm">
      <div className={`p-3 rounded-lg ${colorClasses.bg[color]}`}>
          <Icon className={`h-6 w-6 ${colorClasses.text[color]}`} />
      </div>
      <div>
        <div className={`text-2xl font-bold ${colorClasses.text[color]} mb-1`}>{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
};

const ConnectionNode = ({ icon: Icon, label, angle }) => {
  // Adjust the angle to start from top (0° = top)
  const adjustedAngle = angle - 90;
  const rad = adjustedAngle * (Math.PI / 180);
  
  // Calculate position (radius is 40% from center)
  const x = 50 + 40 * Math.cos(rad);
  const y = 50 + 40 * Math.sin(rad);

  return (
    <div 
      className="absolute w-16 text-center z-20"
      style={{ 
        top: `${y}%`, 
        left: `${x}%`, 
        transform: 'translate(-50%, -50%)',
        animation: `pulse 2s infinite ${angle * 50}ms`
      }}
    >
      <div className="mx-auto w-10 h-10 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center text-blue-600 shadow-md">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-xs mt-1 font-medium text-gray-700">{label}</p>
    </div>
  );
};

const GoalItem = ({ title, description, icon: Icon, color }) => {
  const colorClasses = {
    bg: { 
      blue: 'bg-blue-100', 
      green: 'bg-green-100', 
      purple: 'bg-purple-100', 
      yellow: 'bg-yellow-100',
      teal: 'bg-teal-100',
      pink: 'bg-pink-100'
    },
    text: { 
      blue: 'text-blue-700', 
      green: 'text-green-700', 
      purple: 'text-purple-700', 
      yellow: 'text-yellow-700',
      teal: 'text-teal-700',
      pink: 'text-pink-700'
    },
  };
  return (
    <div className="flex items-start p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${colorClasses.bg[color]}`}>
        <Icon className={`h-5 w-5 ${colorClasses.text[color]}`} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const TTIInfographic = () => {
  const data = infographicData;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 rounded-2xl">
      <div className="w-full rounded-2xl overflow-hidden print:shadow-none">
        <style jsx global>{`
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.05); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }
        `}</style>

        {/* Header */}
        {/* <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 relative">
          <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
            H1 2025 REPORT
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mr-6 mb-4 md:mb-0">
              <AcademicCapIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{data.mainTitle}</h1>
              <p className="text-blue-200 mt-1">{data.mainSubtitle}</p>
              <p className="text-blue-100 mt-3 max-w-2xl">{data.mission}</p>
            </div>
          </div>
        </div> */}

        <main>
          {/* Achievements Section */}
          {/* <Section {...data.sections.achievements}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.sections.achievements.cards.map(card => 
                <ProgressCard key={card.title} {...card} />
              )}
            </div>
          </Section> */}

          {/* Impact Section */}
          <Section {...data.sections.impact}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.sections.impact.stats.map(stat => 
                  <StatCard key={stat.label} {...stat} />
                )}
              </div>
              
              {/* Connection Diagram */}
              <div className="flex items-center justify-center p-4">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Connection lines - placed first to be behind everything */}
                  <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 100 100">
                    {data.sections.impact.connections.nodes.map((node, index) => {
                      // Adjust angle to start from top
                      const adjustedAngle = node.angle - 90;
                      const rad = adjustedAngle * (Math.PI / 180);
                      
                      // Calculate line positions
                      const centerX = 50;
                      const centerY = 50;
                      const endX = 50 + 40 * Math.cos(rad);
                      const endY = 50 + 40 * Math.sin(rad);
                      
                      return (
                        <line 
                          key={index} 
                          x1={centerX} 
                          y1={centerY} 
                          x2={endX} 
                          y2={endY} 
                          stroke="#dbeafe" 
                          strokeWidth="1" 
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                    {data.sections.impact.connections.centerLabel}
                  </div>
                  
                  {/* Connection nodes */}
                  {data.sections.impact.connections.nodes.map(node => 
                    <ConnectionNode key={node.label} {...node} />
                  )}
                </div>
              </div>
            </div>
          </Section>

          {/* Goals Section */}
          {/* <Section {...data.sections.goals}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.sections.goals.items.map(goal => 
                <GoalItem key={goal.title} {...goal} />
              )}
            </div>
          </Section> */}
        </main>

        {/* Footer */}
        {/* <div className="bg-gray-800 text-gray-300 p-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-medium">Tererai Trent International Foundation</div>
              <div>Registered as 501(C)(3) in USA & PVO in Zimbabwe</div>
            </div>
            <div className="text-center md:text-right">
              <div className="font-medium">Impact Report: January - June 2025</div>
              <div>Generated: July 1, 2025</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TTIInfographic;