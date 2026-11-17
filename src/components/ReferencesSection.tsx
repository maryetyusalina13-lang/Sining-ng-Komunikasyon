import { Printer } from 'lucide-react';
import { REFERENCES_LIST } from '../data/lessonsData';
import { CoverMetadata } from '../types/filipino';

interface ReferencesSectionProps {
  cover: CoverMetadata;
}

export function ReferencesSection({ cover }: ReferencesSectionProps) {
  return (
    <footer id="sanggunian" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Mga Sanggunian at Katapatan sa Akademya
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-slate-900">
              Talaan ng mga Pinagkunang Sanggunian
            </h2>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Printer className="h-4 w-4 text-slate-500" />
            I-print / I-save bilang PDF
          </button>
        </div>

        <ol className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-[#F8FAFC]">
          {REFERENCES_LIST.map((ref, idx) => (
            <li key={ref.id} className="p-4 sm:p-5">
              <p className="text-sm text-slate-900">
                <span className="font-mono text-xs font-semibold text-blue-900 tabular-nums">
                  [{idx + 1}]{' '}
                </span>
                <span className="font-semibold">{ref.author}</span> ({ref.year}).{' '}
                <em className="italic">{ref.title}</em>. {ref.publisher}.
              </p>
              <p className="mt-1 text-xs text-slate-600">{ref.note}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            {cover.websiteTitle} · {cover.subjectName} · {cover.courseSection}
          </p>
          <p className="tabular-nums">
            Inihanda ni {cover.studentName} · Taong Panuruan {cover.academicYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
