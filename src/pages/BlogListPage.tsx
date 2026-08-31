import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogs';
import { PageRoute } from '../types';
import { BrandSlider } from '../components/BrandSlider';

interface BlogListPageProps {
  navigate: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="space-y-0">
      <section className="bg-linear-to-b from-[#EAF6FF]/70 via-white to-white py-14 border-b border-[#E3EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7] text-xs font-extrabold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Thane AC Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight">
            AC Maintenance Guides & Troubleshooting
          </h1>
          <p className="text-sm sm:text-base text-[#5B6472] max-w-2xl mx-auto leading-relaxed">
            Practical, technical advice written by HVAC professionals to help Thane residents optimize AC cooling, avoid expensive breakdowns, and reduce power bills.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_ARTICLES.map(article => (
              <div
                key={article.slug}
                onClick={() => {
                  navigate({ type: 'blog-detail', slug: article.slug });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl p-6 border border-[#E3EAF2] hover:border-[#0B72E7] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EAF6FF] text-[#0B72E7]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#5B6472]">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-[#172033] group-hover:text-[#0B72E7] transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3EAF2] flex items-center justify-between text-xs font-bold text-[#0B72E7] group-hover:translate-x-0.5 transition-transform">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandSlider />
    </div>
  );
};
