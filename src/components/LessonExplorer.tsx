import {
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Search,
  XCircle,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { TERM_THEMES, TERMS_META } from '../data/lessonsData';
import { Lesson, TermId } from '../types/filipino';
import { InteractiveDiagram } from './InteractiveDiagram';

interface LessonExplorerProps {
  lessons: Lesson[];
  activeTerm: TermId | 'all';
  activeLessonId: string;
  reviewedIds: string[];
  onChangeTerm: (term: TermId | 'all') => void;
  onSelectLesson: (lessonId: string) => void;
  onToggleReviewed: (lessonId: string) => void;
}

export function LessonExplorer({
  lessons,
  activeTerm,
  activeLessonId,
  reviewedIds,
  onChangeTerm,
  onSelectLesson,
  onToggleReviewed,
}: LessonExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const filteredLessons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return lessons.filter((lesson) => {
      const matchesTerm = activeTerm === 'all' || lesson.term === activeTerm;
      if (!matchesTerm) return false;
      if (!query) return true;
      return (
        lesson.title.toLowerCase().includes(query) ||
        lesson.subtitle.toLowerCase().includes(query) ||
        lesson.classroomRef.toLowerCase().includes(query) ||
        lesson.summary.toLowerCase().includes(query)
      );
    });
  }, [lessons, activeTerm, searchQuery]);

  const currentLesson = useMemo(() => {
    const match = filteredLessons.find((l) => l.id === activeLessonId);
    return match || filteredLessons[0] || lessons[0];
  }, [filteredLessons, activeLessonId, lessons]);

  const currentIndexInAll = lessons.findIndex((l) => l.id === currentLesson.id);
  const prevLesson = currentIndexInAll > 0 ? lessons[currentIndexInAll - 1] : null;
  const nextLesson =
    currentIndexInAll < lessons.length - 1 ? lessons[currentIndexInAll + 1] : null;

  const currentTermMeta = TERMS_META.find((t) => t.id === currentLesson.term);
  const currentTheme = TERM_THEMES[currentLesson.term];
  const isReviewed = reviewedIds.includes(currentLesson.id);

  const handleSelectQuizAnswer = (questionId: string, choiceIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: choiceIndex }));
  };

  const countTerm = (term: TermId | 'all') =>
    term === 'all' ? lessons.length : lessons.filter((l) => l.term === term).length;

  return (
    <section
      id="mga-aralin"
      className={`border-b border-slate-200 py-12 transition-colors duration-200 sm:py-16 ${currentTheme.sectionBg}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Controls */}
        <div className="flex flex-col gap-6 border-b border-slate-300/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-600">
              Ikatlong Bahagi · Mga Aralin sa Bawat Termino
            </p>
            <h2 className="font-display text-balance mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Kumpletong Balangkas ng mga Aralin (Prelim hanggang Finals)
            </h2>
          </div>

          {/* Interactive Search Input */}
          <div className="no-print relative w-full lg:w-72">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Maghanap ng paksa o module..."
              aria-label="Maghanap ng aralin"
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
            />
          </div>
        </div>

        {/* Interactive Term Filter Tabs with Each Term's Signature Color */}
        <div
          role="tablist"
          aria-label="Salain ayon sa termino"
          className="no-print mt-6 flex flex-wrap items-center gap-1.5 rounded-lg bg-white/80 p-1.5 border border-slate-200"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTerm === 'all'}
            onClick={() => onChangeTerm('all')}
            className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTerm === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Lahat ng Termino ({countTerm('all')})
          </button>
          {TERMS_META.map((term) => {
            const tTheme = TERM_THEMES[term.id];
            const isActive = activeTerm === term.id;
            return (
              <button
                key={term.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChangeTerm(term.id)}
                className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? `${tTheme.accentBg} text-white shadow-xs`
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {term.label} ({countTerm(term.id)})
              </button>
            );
          })}
        </div>

        {/* Two-Zone Layout: Lesson Index Sidebar + Main Lesson Reader */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Zone: Lesson Selector */}
          <aside className="no-print lg:col-span-4">
            <div className="sticky top-20 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-semibold text-slate-700">
                  Talaan ng mga Aralin
                </span>
                <span className="font-mono text-xs text-slate-500 tabular-nums">
                  {reviewedIds.length}/{lessons.length} Tapos
                </span>
              </div>

              {filteredLessons.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-sm font-medium text-slate-700">
                    Walang nahanap na aralin para sa "{searchQuery}".
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      onChangeTerm('all');
                    }}
                    className="mt-3 text-xs font-semibold text-slate-900 underline cursor-pointer"
                  >
                    Ipakita ang lahat ng aralin
                  </button>
                </div>
              ) : (
                <ul className="mt-3 space-y-1.5">
                  {filteredLessons.map((lesson) => {
                    const isSelected = lesson.id === currentLesson.id;
                    const done = reviewedIds.includes(lesson.id);
                    const termLabel = TERMS_META.find((t) => t.id === lesson.term)?.label;
                    const itemTheme = TERM_THEMES[lesson.term];

                    return (
                      <li key={lesson.id}>
                        <button
                          type="button"
                          onClick={() => onSelectLesson(lesson.id)}
                          className={`w-full rounded-lg border px-3.5 py-3 text-left transition-colors cursor-pointer ${
                            isSelected
                              ? `${itemTheme.bannerBg} text-white border-transparent`
                              : `border-slate-200 ${itemTheme.softSurface} hover:bg-white`
                          }`}
                        >
                          <div
                            className={`flex items-center justify-between gap-2 text-xs ${
                              isSelected ? 'text-white/80' : 'text-slate-500'
                            }`}
                          >
                            <span className="font-mono tabular-nums">
                              Aralin {lesson.number} · {termLabel}
                            </span>
                            {done && (
                              <span
                                className={`inline-flex items-center gap-1 font-medium ${
                                  isSelected ? 'text-white' : 'text-emerald-700'
                                }`}
                              >
                                <Check className="h-3.5 w-3.5" />
                                Napag-aralan
                              </span>
                            )}
                          </div>
                          <p
                            className={`mt-1 text-sm font-semibold leading-snug ${
                              isSelected ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {lesson.title}
                          </p>
                          <p
                            className={`mt-1 text-xs ${
                              isSelected ? 'text-white/80' : 'text-slate-600'
                            }`}
                          >
                            {lesson.classroomRef} · {lesson.examples.length} halimbawa
                          </p>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </aside>

          {/* Right Zone: Full Lesson Reader (a–e complete structure) */}
          <article className="lg:col-span-8">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              {/* Term-Differentiated Colored Header Banner */}
              <div className={`px-6 py-7 sm:px-8 sm:py-8 ${currentTheme.bannerBg} ${currentTheme.bannerText}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <p className={`text-xs font-medium tabular-nums ${currentTheme.bannerSubtext}`}>
                      {currentTermMeta?.label} ({currentTermMeta?.subtitle}) · Aralin{' '}
                      {currentLesson.number} · {currentLesson.classroomRef} ·{' '}
                      {currentLesson.readingMinutes} minutong pagbasa
                    </p>

                    {/* a. Pamagat ng Aralin */}
                    <h3 className="font-display text-balance mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {currentLesson.title}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${currentTheme.bannerSubtext}`}>
                      {currentLesson.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleReviewed(currentLesson.id)}
                    className={`no-print inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isReviewed
                        ? 'border-white bg-white text-slate-900'
                        : 'border-white/40 bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {isReviewed ? 'Napag-aralan Na' : 'Markahan bilang Napag-aralan'}
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* b. Paliwanag o Talakayan */}
                <section aria-labelledby="talakayan-heading">
                  <h4
                    id="talakayan-heading"
                    className={`text-xs font-semibold tracking-wide uppercase ${currentTheme.accentText}`}
                  >
                    a–b. Paliwanag at Talakayan
                  </h4>
                  <p className={`mt-3 rounded-lg p-4 text-sm leading-relaxed font-medium text-slate-800 ${currentTheme.softSurface}`}>
                    {currentLesson.summary}
                  </p>

                  <div className="mt-5 space-y-4 text-[15.5px] leading-[1.7] text-slate-700">
                    {currentLesson.discussion.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Mahahalagang Konsepto */}
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {currentLesson.keyConcepts.map((concept) => (
                      <div
                        key={concept.term}
                        className={`rounded-lg border p-4 ${currentTheme.borderColor} ${currentTheme.softSurface}`}
                      >
                        <p className="text-sm font-semibold text-slate-900">{concept.term}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          {concept.meaning}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* c. Mga Halimbawa (Hindi bababa sa 4) */}
                <section
                  aria-labelledby="halimbawa-heading"
                  className="mt-10 border-t border-slate-200 pt-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4
                      id="halimbawa-heading"
                      className={`text-xs font-semibold tracking-wide uppercase ${currentTheme.accentText}`}
                    >
                      c. Mga Halimbawa ({currentLesson.examples.length} halimbawa)
                    </h4>
                    <span className="text-xs text-slate-500">
                      Malinaw na paglalapat ng mga konsepto
                    </span>
                  </div>

                  <div className={`mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 ${currentTheme.softSurface}`}>
                    {currentLesson.examples.map((ex, idx) => (
                      <div key={ex.id} className="p-4 sm:p-5">
                        <div className="flex items-baseline gap-2.5">
                          <span className={`font-mono text-xs font-semibold tabular-nums ${currentTheme.accentText}`}>
                            {String(idx + 1).padStart(2, '0')}.
                          </span>
                          <h5 className="text-sm font-semibold text-slate-900">{ex.title}</h5>
                        </div>

                        <p className="mt-2 text-[15px] font-medium text-slate-900">
                          {ex.statement}
                        </p>

                        {ex.segmentA && ex.segmentB && (
                          <div className="mt-2.5 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                            <div className="rounded-md border border-emerald-200 bg-white px-3 py-2 text-slate-900">
                              <span className="font-semibold text-emerald-800">{ex.labelA}:</span>{' '}
                              {ex.segmentA}
                            </div>
                            <div className="rounded-md border border-amber-200 bg-white px-3 py-2 text-slate-900">
                              <span className="font-semibold text-amber-800">{ex.labelB}:</span>{' '}
                              {ex.segmentB}
                            </div>
                          </div>
                        )}

                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                          {ex.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* d. Mga Larawan o Biswal */}
                <section
                  aria-labelledby="biswal-heading"
                  className="mt-10 border-t border-slate-200 pt-8"
                >
                  <h4
                    id="biswal-heading"
                    className={`text-xs font-semibold tracking-wide uppercase ${currentTheme.accentText}`}
                  >
                    d. Mga Larawan, Dayagram, at Talahanayan
                  </h4>

                  <div className="mt-4 space-y-6">
                    {/* Editorial Photo with Fallback */}
                    <figure className={`overflow-hidden rounded-xl border border-slate-200 ${currentTheme.softSurface}`}>
                      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 sm:aspect-[21/9]">
                        {!imgErrors[currentLesson.id] ? (
                          <img
                            src={currentLesson.imagePath}
                            alt={currentLesson.imageAlt}
                            referrerPolicy="no-referrer"
                            onError={() =>
                              setImgErrors((prev) => ({ ...prev, [currentLesson.id]: true }))
                            }
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center gap-3 bg-slate-100 p-6 text-slate-600">
                            <BookOpen className={`h-6 w-6 ${currentTheme.accentText}`} />
                            <span className="text-sm font-medium">{currentLesson.title}</span>
                          </div>
                        )}
                      </div>
                      <figcaption className="border-t border-slate-200 px-4 py-3 text-xs text-slate-600">
                        {currentLesson.imageCaption}
                      </figcaption>
                    </figure>

                    {/* Interactive Filipino Diagram */}
                    <InteractiveDiagram type={currentLesson.diagramType} />

                    {/* Structured Comparison Table */}
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                      <div className={`border-b border-slate-200 px-4 py-3 ${currentTheme.softSurface}`}>
                        <h5 className="text-sm font-semibold text-slate-900">
                          {currentLesson.table.title}
                        </h5>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {currentLesson.table.caption}
                        </p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                          <thead>
                            <tr className="border-b border-slate-200 bg-white">
                              {currentLesson.table.headers.map((header) => (
                                <th
                                  key={header}
                                  className="px-4 py-2.5 text-xs font-semibold text-slate-700"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 bg-white">
                            {currentLesson.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`px-4 py-2.5 text-xs leading-relaxed ${
                                      cIdx === 0
                                        ? 'font-semibold text-slate-900'
                                        : 'text-slate-700'
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* e. Karagdagang Impormasyon at Maikling Pagsusulit */}
                <section
                  aria-labelledby="karagdagan-heading"
                  className="mt-10 border-t border-slate-200 pt-8"
                >
                  <h4
                    id="karagdagan-heading"
                    className={`text-xs font-semibold tracking-wide uppercase ${currentTheme.accentText}`}
                  >
                    e. Karagdagang Impormasyon, Gawain, at Maikling Pagsusulit
                  </h4>

                  {/* Extra Activity */}
                  <div className={`mt-4 rounded-xl border border-slate-200 p-5 ${currentTheme.softSurface}`}>
                    <h5 className="text-sm font-semibold text-slate-900">
                      {currentLesson.extraActivity.title}
                    </h5>
                    <p className="mt-1.5 text-sm text-slate-700">
                      {currentLesson.extraActivity.instructions}
                    </p>
                    <p className="mt-3 border-t border-slate-200 pt-3 text-xs leading-relaxed text-slate-600">
                      {currentLesson.extraActivity.samplePrompt}
                    </p>
                  </div>

                  {/* Interactive Mini-Quiz */}
                  <div className="no-print mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-semibold text-slate-900">
                        Maikling Pagsusulit para sa Aralin {currentLesson.number}
                      </h5>
                      <span className="font-mono text-xs text-slate-500 tabular-nums">
                        {currentLesson.quiz.length} Tanong
                      </span>
                    </div>

                    {currentLesson.quiz.map((q, qIdx) => {
                      const chosen = quizAnswers[q.id];
                      const hasAnswered = chosen !== undefined;
                      const isCorrect = chosen === q.correctIndex;

                      return (
                        <div
                          key={q.id}
                          className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                        >
                          <p className="text-sm font-semibold text-slate-900">
                            <span className={`font-mono tabular-nums ${currentTheme.accentText}`}>
                              {qIdx + 1}.{' '}
                            </span>
                            {q.question}
                          </p>

                          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {q.choices.map((choice, cIdx) => {
                              const selectedThis = chosen === cIdx;
                              const rightChoice = cIdx === q.correctIndex;

                              let styleClass =
                                'border-slate-200 bg-[#F8FAFC] text-slate-800 hover:bg-slate-100';
                              if (hasAnswered) {
                                if (rightChoice) {
                                  styleClass =
                                    'border-emerald-700 bg-emerald-50 text-emerald-950 font-medium';
                                } else if (selectedThis) {
                                  styleClass = 'border-red-700 bg-red-50 text-red-950';
                                } else {
                                  styleClass = 'border-slate-200 bg-white text-slate-400';
                                }
                              }

                              return (
                                <button
                                  key={cIdx}
                                  type="button"
                                  onClick={() => handleSelectQuizAnswer(q.id, cIdx)}
                                  className={`rounded-lg border px-3.5 py-2.5 text-left text-xs transition-colors cursor-pointer ${styleClass}`}
                                >
                                  {choice}
                                </button>
                              );
                            })}
                          </div>

                          {hasAnswered && (
                            <div
                              className={`mt-3 flex items-start gap-2 rounded-lg p-3 text-xs ${
                                isCorrect
                                  ? 'bg-emerald-50 text-emerald-900'
                                  : 'bg-amber-50 text-amber-950'
                              }`}
                            >
                              {isCorrect ? (
                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700 shrink-0" />
                              ) : (
                                <XCircle className="mt-0.5 h-4 w-4 text-red-700 shrink-0" />
                              )}
                              <div>
                                <span className="font-semibold">
                                  {isCorrect ? 'Tama!' : 'Subukan muli — Paliwanag:'}
                                </span>{' '}
                                {q.explanation}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Bottom Previous / Next Lesson Controls */}
                <div className="no-print mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
                  {prevLesson ? (
                    <button
                      type="button"
                      onClick={() => onSelectLesson(prevLesson.id)}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Nakaraan: Aralin {prevLesson.number}
                    </button>
                  ) : (
                    <span />
                  )}

                  {nextLesson && (
                    <button
                      type="button"
                      onClick={() => onSelectLesson(nextLesson.id)}
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-white cursor-pointer ${currentTheme.accentBg}`}
                    >
                      Susunod: Aralin {nextLesson.number}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
