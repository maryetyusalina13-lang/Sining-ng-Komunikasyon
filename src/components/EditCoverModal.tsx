import { RotateCcw, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { CoverMetadata } from '../types/filipino';
import { DEFAULT_COVER_METADATA } from '../data/lessonsData';

interface EditCoverModalProps {
  isOpen: boolean;
  cover: CoverMetadata;
  onClose: () => void;
  onSave: (updated: CoverMetadata) => void;
}

export function EditCoverModal({
  isOpen,
  cover,
  onClose,
  onSave,
}: EditCoverModalProps) {
  const [form, setForm] = useState<CoverMetadata>(cover);

  useEffect(() => {
    setForm(cover);
  }, [cover, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      websiteTitle: form.websiteTitle.trim() || DEFAULT_COVER_METADATA.websiteTitle,
      studentName: form.studentName.trim() || DEFAULT_COVER_METADATA.studentName,
      courseSection: form.courseSection.trim() || DEFAULT_COVER_METADATA.courseSection,
      subjectName: form.subjectName.trim() || DEFAULT_COVER_METADATA.subjectName,
      teacherName: form.teacherName.trim() || DEFAULT_COVER_METADATA.teacherName,
      academicYear: form.academicYear.trim() || DEFAULT_COVER_METADATA.academicYear,
    });
    onClose();
  };

  const handleReset = () => {
    setForm(DEFAULT_COVER_METADATA);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-cover-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-[2px]"
    >
      <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2
              id="edit-cover-title"
              className="font-display text-xl font-semibold text-slate-900"
            >
              I-customize ang Pabalat (Cover Page)
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Ilagay ang iyong totoong pangalan at pangalan ng guro bago ipasa ang website.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Isara ang form"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="cover-title"
              className="block text-xs font-semibold text-slate-700"
            >
              Pamagat ng Website
            </label>
            <input
              id="cover-title"
              type="text"
              value={form.websiteTitle}
              onChange={(e) => setForm({ ...form, websiteTitle: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cover-student"
                className="block text-xs font-semibold text-slate-700"
              >
                Pangalan ng Mag-aaral
              </label>
              <input
                id="cover-student"
                type="text"
                placeholder="Hal. Juan Dela Cruz"
                value={form.studentName}
                onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="cover-section"
                className="block text-xs font-semibold text-slate-700"
              >
                Kurso at Seksyon
              </label>
              <input
                id="cover-section"
                type="text"
                value={form.courseSection}
                onChange={(e) => setForm({ ...form, courseSection: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cover-teacher"
                className="block text-xs font-semibold text-slate-700"
              >
                Pangalan ng Guro
              </label>
              <input
                id="cover-teacher"
                type="text"
                placeholder="Hal. Bb. Maria Santos"
                value={form.teacherName}
                onChange={(e) => setForm({ ...form, teacherName: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="cover-year"
                className="block text-xs font-semibold text-slate-700"
              >
                Taong Panuruan
              </label>
              <input
                id="cover-year"
                type="text"
                value={form.academicYear}
                onChange={(e) => setForm({ ...form, academicYear: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cover-subject"
              className="block text-xs font-semibold text-slate-700"
            >
              Pangalan ng Asignatura
            </label>
            <input
              id="cover-subject"
              type="text"
              value={form.subjectName}
              onChange={(e) => setForm({ ...form, subjectName: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Ibalik sa Default
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Kanselahin
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-900 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 cursor-pointer"
              >
                I-save ang Pabalat
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
