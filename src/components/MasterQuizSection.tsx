import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { TERM_THEMES, TERMS_META } from '../data/lessonsData';
import { Lesson, TermId } from '../types/filipino';

interface MasterQuizSectionProps {
  lessons: Lesson[];
}

export function MasterQuizSection({ lessons }: MasterQuizSectionProps) {
  const [termFilter, setTermFilter] = useState<TermId | 'all'>('all');
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const questions = useMemo(() => {
    return lessons
      .filter((l) => termFilter === 'all' || l.term === termFilter)
      .flatMap((lesson) =>
        lesson.quiz.map((q) => ({
          ...q,
          lessonNumber: lesson.number,
          lessonTitle: lesson.title,
          term: lesson.term,
        }))
      );
  }, [lessons, termFilter]);

  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;
  const correctCount = questions.filter(
    (q) => answers[q.id] === q.correctIndex
  ).length;

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <section
      id="pagsasanay"
      className="no-print border-b border-slate-200 bg-[#F8FAFC] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Pangkalahatang Pagtataya · Karagdagang Pagsasanay
            </p>
            <h2 className="font-display text-balance mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Interaktibong Pagsusulit sa Lahat ng Termino
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Subukin ang iyong pag-unawa mula Prelim hanggang Finals. Agarang lumalabas ang paliwanag sa bawat sagot.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-500">Kasalukuyang Iskor</p>
              <p className="font-mono text-lg font-semibold text-slate-900 tabular-nums">
                {correctCount} / {questions.length}{' '}
                <span className="text-xs font-normal text-slate-500">
                  ({answeredCount} nasagutan)
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Ulitin
            </button>
          </div>
        </div>

        {/* Term Filter Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-1.5 rounded-lg bg-slate-200/70 p-1">
          <button
            type="button"
            onClick={() => setTermFilter('all')}
            className={`rounded-md px-3.5 py-2 text-xs font-semibold cursor-pointer ${
              termFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Lahat ({lessons.reduce((acc, l) => acc + l.quiz.length, 0)})
          </button>
          {TERMS_META.map((term) => {
            const count = lessons
              .filter((l) => l.term === term.id)
              .reduce((acc, l) => acc + l.quiz.length, 0);
            const tTheme = TERM_THEMES[term.id];
            return (
              <button
                key={term.id}
                type="button"
                onClick={() => setTermFilter(term.id)}
                className={`rounded-md px-3.5 py-2 text-xs font-semibold cursor-pointer ${
                  termFilter === term.id
                    ? `${tTheme.accentBg} text-white shadow-xs`
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {term.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Questions Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {questions.map((q, idx) => {
            const chosen = answers[q.id];
            const hasAnswered = chosen !== undefined;
            const isCorrect = chosen === q.correctIndex;
            const termLabel = TERMS_META.find((t) => t.id === q.term)?.label;

            return (
              <div
                key={q.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5"
              >
                <div>
                  <p className="text-xs text-slate-500 tabular-nums">
                    Tanong {idx + 1} · {termLabel} · Aralin {q.lessonNumber}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-slate-900">
                    {q.question}
                  </p>

                  <div className="mt-4 space-y-2">
                    {q.choices.map((choice, cIdx) => {
                      const selectedThis = chosen === cIdx;
                      const rightChoice = cIdx === q.correctIndex;

                      let btnStyle =
                        'border-slate-200 bg-[#F8FAFC] text-slate-800 hover:bg-slate-100';
                      if (hasAnswered) {
                        if (rightChoice) {
                          btnStyle =
                            'border-emerald-700 bg-emerald-50 text-emerald-950 font-medium';
                        } else if (selectedThis) {
                          btnStyle = 'border-red-700 bg-red-50 text-red-950';
                        } else {
                          btnStyle = 'border-slate-200 bg-white text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={cIdx}
                          type="button"
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [q.id]: cIdx }))
                          }
                          className={`w-full rounded-lg border px-3.5 py-2 text-left text-xs transition-colors cursor-pointer ${btnStyle}`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {hasAnswered && (
                  <div
                    className={`mt-4 flex items-start gap-2 rounded-lg p-3 text-xs ${
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
                        {isCorrect ? 'Wasto!' : 'Paliwanag:'}
                      </span>{' '}
                      {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
