// components/TTIInfographic.jsx
import React from 'react';
import {
  HeartIcon,
  PencilIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  BeakerIcon,
} from '@heroicons/react/24/solid';
import {
  HiBookOpen,
  HiGlobeAlt,
  HiBeaker,
  HiSun,
  HiShoppingBag,
  HiUserGroup,
  HiWifi,
  HiSparkles,
} from 'react-icons/hi2';

const infographicData = {
  sections: {
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
          { label: "Scholarships", icon: HiBookOpen, angle: 0, color: '#2563eb' },
          { label: "Agriculture", icon: HiGlobeAlt, angle: 45, color: '#16a34a' },
          { label: "Science", icon: HiBeaker, angle: 90, color: '#a855f7' },
          { label: "Water Access", icon: HiSun, angle: 135, color: '#0ea5e9' },
          { label: "Textiles", icon: HiShoppingBag, angle: 180, color: '#f97316' },
          { label: "Partnerships", icon: HiUserGroup, angle: 225, color: '#10b981' },
          { label: "Technology", icon: HiWifi, angle: 270, color: '#7c3aed' },
          { label: "Empowerment", icon: HiSparkles, angle: 315, color: '#db2777' },
        ]
      }
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

const ConnectionNode = ({ icon: Icon, label, angle, color }) => {
  // Adjust the angle to start from top (0° = top)
  const adjustedAngle = angle - 90;
  const rad = adjustedAngle * (Math.PI / 180);
  
  // Calculate position (radius is 40% from center)
  const x = 50 + 40 * Math.cos(rad);
  const y = 50 + 40 * Math.sin(rad);

  return (
    <div
      className="absolute w-20 text-center z-20"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        transform: 'translate(-50%, -50%)',
        animation: `pulse 2s infinite ${angle * 50}ms`
      }}
    >
      <div
        className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2"
        style={{ borderColor: color, color }}
      >
        <Icon size={24} />
      </div>
      <p className="text-xs mt-1 font-medium text-gray-700">{label}</p>
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


        <main>
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
        </main>
      </div>
    </div>
  );
};

export default TTIInfographic;
