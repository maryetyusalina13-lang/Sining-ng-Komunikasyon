import { ArrowRight, BookOpen, PenLine } from 'lucide-react';
import { useState } from 'react';
import { CoverMetadata, Lesson, TermId } from '../types/filipino';
import { TERM_THEMES, TERMS_META } from '../data/lessonsData';

interface CoverSectionProps {
  cover: CoverMetadata;
  lessons: Lesson[];
  reviewedIds: string[];
  onSelectTerm: (term: TermId) => void;
  onOpenEditCover: () => void;
}

export function CoverSection({
  cover,
  lessons,
  reviewedIds,
  onSelectTerm,
  onOpenEditCover,
}: CoverSectionProps) {
  const [imgError, setImgError] = useState(false);

  const countByTerm = (termId: TermId) =>
    lessons.filter((lesson) => lesson.term === termId).length;

  return (
    <section
      id="pabalat"
      className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Pabalat Typography & Required Fields */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-500">
                Pangwakas na Pagsusulit · Pagbuo ng Website ng mga Aralin · {cover.academicYear}
              </p>

              <h1 className="font-display text-balance mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.15]">
                {cover.websiteTitle}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                Isang organisadong kalipunan ng lahat ng araling tinalakay sa{' '}
                <span className="font-medium text-slate-800">{cover.subjectName}</span> mula
                Prelim hanggang Finals para sa seksyong{' '}
                <span className="font-medium text-slate-800">{cover.courseSection}</span>.
              </p>

              {/* Required 6 Cover Page Elements in a clean hairline academic ledger */}
              <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-y border-slate-200 py-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium text-slate-500">Pangalan ng Mag-aaral</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    {cover.studentName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">Kurso at Seksyon</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    {cover.courseSection}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">Pangalan ng Asignatura</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    {cover.subjectName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">Pangalan ng Guro</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    {cover.teacherName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">Taong Panuruan</dt>
                  <dd className="mt-1 font-mono text-sm font-medium text-slate-900 tabular-nums">
                    {cover.academicYear}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">Kabuuang Nilalaman</dt>
                  <dd className="mt-1 font-mono text-sm font-medium text-slate-900 tabular-nums">
                    4 Termino · {lessons.length} Aralin · {reviewedIds.length}/{lessons.length} Napag-aralan
                  </dd>
                </div>
              </dl>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="no-print mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#mga-aralin"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-800 whitespace-nowrap shrink-0"
              >
                Simulan ang Pagbabasa
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenEditCover}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <PenLine className="h-4 w-4 text-slate-500" />
                Ilagay ang Iyong Pangalan
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative h-72 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-96 lg:h-full lg:min-h-[420px]">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_filipino_heritage_1794921761832.jpg"
                  alt="Buklat na aklat ng panitikang Filipino at panulat sa tabi ng bintana"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-8 text-center">
                  <BookOpen className="h-12 w-12 text-blue-900" />
                  <p className="font-display mt-4 text-lg font-semibold text-slate-900">
                    Filipino 1 · Kalipunan ng mga Aralin
                  </p>
                  <p className="mt-1 text-sm text-slate-600">Prelim hanggang Finals</p>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent p-6">
                <p className="text-xs font-medium text-amber-200">
                  Pabalat ng E-Portfolio · {cover.courseSection}
                </p>
                <p className="mt-1 text-sm leading-snug text-white">
                  Komprehensibong talakayan, mga halimbawa, biswal na dayagram, at pagsasanay sa wikang Filipino.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Term Overview Strip with Each Term's Signature Color */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TERMS_META.map((term) => {
            const count = countByTerm(term.id);
            const theme = TERM_THEMES[term.id];
            return (
              <button
                key={term.id}
                type="button"
                onClick={() => onSelectTerm(term.id)}
                className={`group flex flex-col justify-between rounded-xl p-5 text-left text-white transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${theme.cardBg} ${theme.cardHoverBg}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span className="font-mono font-medium tabular-nums">
                      Termino {term.roman} · {term.subtitle}
                    </span>
                    <span className="font-mono tabular-nums">{count} Aralin</span>
                  </div>
                  <h2 className="font-display mt-2 text-xl font-semibold text-white">
                    {term.label}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {term.periodSummary}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-white">
                  <span>Buksan ang mga aralin</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
