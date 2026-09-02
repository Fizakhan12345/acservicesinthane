import React from 'react';
import { BookOpen, Clock, Calendar, User, ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import { BlogArticle, PageRoute } from '../types';
import { BrandSlider } from '../components/BrandSlider';

interface BlogDetailPageProps {
  article: BlogArticle;
  navigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  article,
  navigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-0">
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white py-12 border-b border-[#E3EAF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={() => navigate({ type: 'blog-list' })}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B72E7] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-[#5B6472]">
            <span className="font-bold px-2.5 py-0.5 rounded-full bg-[#EAF6FF] text-[#0B72E7]">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#172033] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-[#5B6472] font-medium leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-[#E3EAF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Article paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#172033]/90 leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quick Tips Box */}
          {article.tips && article.tips.length > 0 && (
            <div className="bg-[#EAF6FF] p-6 rounded-2xl border border-[#0B72E7]/20 space-y-3">
              <h3 className="text-base font-bold text-[#172033] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0B72E7]" />
                <span>Technician Action Tips for Thane Residents:</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#172033]">
                {article.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0B72E7] font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Direct CTA box */}
          <div className="bg-[#F7FAFC] p-6 rounded-2xl border border-[#E3EAF2] text-center space-y-4">
            <h3 className="text-lg font-bold text-[#172033]">Need Professional AC Help in Thane?</h3>
            <p className="text-xs sm:text-sm text-[#5B6472] max-w-md mx-auto">
              Our technicians provide doorstep troubleshooting and deep jet wash across all 59 Thane localities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-lg bg-[#0B72E7] hover:bg-[#0856B2] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Schedule Doorstep Visit
              </button>
              <a
                href="tel:+917021455426"
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#172033] border border-[#E3EAF2] font-bold text-xs transition-colors"
              >
                Call +91 7021455426
              </a>
            </div>
          </div>
        </div>
      </section>

      <BrandSlider />
    </div>
  );
};
