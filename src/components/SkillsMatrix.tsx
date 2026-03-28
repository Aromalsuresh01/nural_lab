import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { skillMetrics } from '../data';

export default function SkillsMatrix() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-tertiary/5 rounded-full blur-[100px] -z-10"></div>
      
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillMetrics}>
          <PolarGrid stroke="#1e293b" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#8b9bb4', fontSize: 12, fontFamily: 'monospace' }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#060e20', 
              borderColor: '#00e639',
              fontFamily: 'monospace',
              color: '#00e639'
            }}
            itemStyle={{ color: '#00e639' }}
          />
          <Radar 
            name="Aromal Suresh" 
            dataKey="A" 
            stroke="#00e639" 
            fill="#00e639" 
            fillOpacity={0.2} 
            dot={{ r: 3, fill: '#00e639' }} 
            activeDot={{ r: 5, fill: '#fff' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
