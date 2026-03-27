import { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { labReports } from '../data';

export function LabReports() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex items-center gap-4 mb-12 border-b border-outlineVariant/20 pb-6">
        <h2 className="text-3xl font-display font-medium text-white tracking-wide">LAB_REPORTS</h2>
        <div className="h-px bg-outlineVariant flex-1 opacity-30"></div>
        <span className="font-mono text-outline text-sm">ENTRIES: {labReports.length}</span>
      </div>

      <div className="space-y-4">
        {labReports.map((report) => {
          const isExpanded = expandedId === report.id;

          return (
            <div
              key={report.id}
              className="bg-surfaceContainerLow border border-outlineVariant/20 hover:border-outlineVariant/40 transition-all duration-300"
            >
              {/* Report Header */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : report.id)}
                className="w-full text-left p-6 flex items-start gap-6 group cursor-pointer"
              >
                {/* Classification Badge */}
                <div className="flex-shrink-0 mt-1">
                  <div className="relative">
                    <div className="w-12 h-12 border-2 border-tertiary/40 flex items-center justify-center bg-tertiary/5">
                      <FileText size={20} className="text-tertiary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-tertiary animate-pulse"></div>
                  </div>
                </div>

                {/* Report Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-tertiary/10 border border-tertiary/30 text-tertiary tracking-widest">
                      {report.classification}
                    </span>
                    <span className="font-mono text-[10px] text-outline flex items-center gap-1">
                      <Clock size={10} /> {report.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-white group-hover:text-tertiary transition-colors mb-2">
                    {report.title}
                  </h3>

                  <p className="text-sm text-primary/70 leading-relaxed line-clamp-2">
                    {report.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {report.tags.map((tag, i) => (
                      <span key={i} className="font-mono text-[10px] px-2 py-0.5 bg-surface border border-outlineVariant/20 text-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand Toggle */}
                <div className="flex-shrink-0 mt-2">
                  {isExpanded ? (
                    <ChevronUp size={20} className="text-tertiary" />
                  ) : (
                    <ChevronDown size={20} className="text-outline group-hover:text-primary transition-colors" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-6 border-t border-outlineVariant/20">
                  <div className="pt-6 grid md:grid-cols-[3fr_1fr] gap-8">
                    {/* Main Content */}
                    <div className="space-y-6">
                      {report.sections.map((section, i) => (
                        <div key={i}>
                          <h4 className="font-mono text-xs text-tertiary tracking-widest uppercase mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-tertiary"></span>
                            {section.heading}
                          </h4>
                          <p className="text-sm text-primary/80 leading-relaxed font-body">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Sidebar Meta */}
                    <div className="space-y-4">
                      <div className="glass-panel p-4">
                        <h4 className="font-mono text-[10px] text-outline tracking-widest mb-3">METADATA</h4>
                        <div className="space-y-2 text-xs font-mono">
                          <div className="flex justify-between">
                            <span className="text-outline">Date</span>
                            <span className="text-primary">{report.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-outline">Read Time</span>
                            <span className="text-primary">{report.readTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-outline">Status</span>
                            <span className="text-tertiary">{report.classification}</span>
                          </div>
                        </div>
                      </div>
                      {report.relatedProject && (
                        <div className="glass-panel p-4">
                          <h4 className="font-mono text-[10px] text-outline tracking-widest mb-2">RELATED_PROJECT</h4>
                          <span className="font-mono text-xs text-primary">{report.relatedProject}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
