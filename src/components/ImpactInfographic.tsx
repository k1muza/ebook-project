// components/TTIInfographic.jsx
import React from 'react'
import { useReport } from '@/contexts/ReportContext'
import {
  HeartIcon,
  PencilIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  BeakerIcon,
} from '@heroicons/react/24/solid'
import {
  HiBookOpen,
  HiGlobeAlt,
  HiBeaker,
  HiSun,
  HiShoppingBag,
  HiUserGroup,
  HiWifi,
  HiSparkles,
} from 'react-icons/hi2'

type IconComponent = React.ComponentType<{ className?: string; size?: number }>
type Color = 'blue' | 'green' | 'purple' | 'yellow' | 'pink' | 'teal'

const iconMap: Record<string, IconComponent> = {
  HeartIcon,
  PencilIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  BeakerIcon,
  HiBookOpen,
  HiGlobeAlt,
  HiBeaker,
  HiSun,
  HiShoppingBag,
  HiUserGroup,
  HiWifi,
  HiSparkles,
}

interface SectionProps {
  title: string
  icon: IconComponent
  color: Color
  children: React.ReactNode
}

const Section = ({ title, icon: Icon, color, children }: SectionProps) => {
  const colorClasses: Record<Color, string> = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    yellow: 'text-yellow-600',
    pink: 'text-pink-600',
    teal: 'text-teal-600',
  }
  return (
    <div className="p-6 print:p-4">
      <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline">
        <Icon className={`h-8 w-8 mr-2 ${colorClasses[color]}`} />
        {title}
      </h2>
      {children}
    </div>
  )
};


interface StatCardProps {
  value: string
  label: string
  icon: IconComponent
  color: Color
}

const StatCard = ({ value, label, icon: Icon, color }: StatCardProps) => {
  const colorClasses: {
    text: Record<Color, string>
    bg: Record<Color, string>
    gradient: Record<Color, string>
  } = {
    text: {
      blue: 'text-blue-700',
      green: 'text-green-600',
      purple: 'text-purple-600',
      yellow: 'text-yellow-600',
      pink: 'text-pink-600',
      teal: 'text-teal-600',
    },
    bg: {
      blue: 'bg-blue-50',
      green: 'bg-green-50',
      purple: 'bg-purple-50',
      yellow: 'bg-yellow-50',
      pink: 'bg-pink-50',
      teal: 'bg-teal-50',
    },
    gradient: {
      blue: 'from-blue-100 via-white to-blue-50',
      green: 'from-green-100 via-white to-green-50',
      purple: 'from-purple-100 via-white to-purple-50',
      yellow: 'from-yellow-100 via-white to-yellow-50',
      pink: 'from-pink-100 via-white to-pink-50',
      teal: 'from-teal-100 via-white to-teal-50',
    },
  }
  return (
    <div
      className={`p-4 rounded-xl border border-gray-200 flex items-start space-x-3 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br ${colorClasses.gradient[color]}`}
    >
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

interface ConnectionNodeProps {
  icon: IconComponent
  label: string
  angle: number
  color: Color
}

const ConnectionNode = ({ icon: Icon, label, angle, color }: ConnectionNodeProps) => {
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
        className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border-2"
        style={{ borderColor: color, color }}
      >
        <Icon size={24} />
      </div>
      <p className="text-xs mt-1 font-medium text-gray-700">{label}</p>
    </div>
  );
};

const TTIInfographic = () => {
  const { data } = useReport()
  if (!data || !data.infographic) return null
  const impact = data.infographic.sections.impact

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
          <Section title={impact.title} icon={iconMap[impact.icon]} color={impact.color as Color}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {impact.stats.map(stat => (
                  <StatCard key={stat.label} {...stat} icon={iconMap[stat.icon]} color={stat.color as Color} />
                ))}
              </div>
              
              {/* Connection Diagram */}
              <div className="flex items-center justify-center p-4">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Connection lines - placed first to be behind everything */}
                  <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 100 100">
                    {impact.connections.nodes.map((node, index) => {
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
                    {impact.connections.centerLabel}
                  </div>

                  {/* Connection nodes */}
                  {impact.connections.nodes.map(node => (
                    <ConnectionNode key={node.label} {...node} icon={iconMap[node.icon]} color={node.color as Color} />
                  ))}
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
