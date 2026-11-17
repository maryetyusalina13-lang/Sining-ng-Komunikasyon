/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { CoverSection } from './components/CoverSection';
import { EditCoverModal } from './components/EditCoverModal';
import { IntroSection } from './components/IntroSection';
import { LessonExplorer } from './components/LessonExplorer';
import { MasterQuizSection } from './components/MasterQuizSection';
import { ReferencesSection } from './components/ReferencesSection';
import { TopBar } from './components/TopBar';
import { DEFAULT_COVER_METADATA, LESSONS_DATA } from './data/lessonsData';
import { CoverMetadata, TermId } from './types/filipino';

const STORAGE_COVER_KEY = 'filipino1_cover_metadata_v1';
const STORAGE_REVIEWED_KEY = 'filipino1_reviewed_lessons_v1';

export default function App() {
  const [cover, setCover] = useState<CoverMetadata>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_COVER_KEY);
      if (saved) return JSON.parse(saved) as CoverMetadata;
    } catch {
      // Ignore storage read errors
    }
    return DEFAULT_COVER_METADATA;
  });

  const [reviewedIds, setReviewedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_REVIEWED_KEY);
      if (saved) return JSON.parse(saved) as string[];
    } catch {
      // Ignore storage read errors
    }
    return [];
  });

  const [activeTerm, setActiveTerm] = useState<TermId | 'all'>('all');
  const [activeLessonId, setActiveLessonId] = useState<string>(LESSONS_DATA[0].id);
  const [isEditCoverOpen, setIsEditCoverOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_COVER_KEY, JSON.stringify(cover));
    } catch {
      // Ignore storage write errors
    }
  }, [cover]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_REVIEWED_KEY, JSON.stringify(reviewedIds));
    } catch {
      // Ignore storage write errors
    }
  }, [reviewedIds]);

  const handleSelectTermFromCover = (term: TermId) => {
    setActiveTerm(term);
    const firstInTerm = LESSONS_DATA.find((l) => l.term === term);
    if (firstInTerm) {
      setActiveLessonId(firstInTerm.id);
    }
    const target = document.getElementById('mga-aralin');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChangeTerm = (term: TermId | 'all') => {
    setActiveTerm(term);
    if (term !== 'all') {
      const current = LESSONS_DATA.find((l) => l.id === activeLessonId);
      if (!current || current.term !== term) {
        const first = LESSONS_DATA.find((l) => l.term === term);
        if (first) setActiveLessonId(first.id);
      }
    }
  };

  const handleToggleReviewed = (lessonId: string) => {
    setReviewedIds((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <TopBar onOpenEditCover={() => setIsEditCoverOpen(true)} />

      <main>
        <CoverSection
          cover={cover}
          lessons={LESSONS_DATA}
          reviewedIds={reviewedIds}
          onSelectTerm={handleSelectTermFromCover}
          onOpenEditCover={() => setIsEditCoverOpen(true)}
        />

        <IntroSection />

        <LessonExplorer
          lessons={LESSONS_DATA}
          activeTerm={activeTerm}
          activeLessonId={activeLessonId}
          reviewedIds={reviewedIds}
          onChangeTerm={handleChangeTerm}
          onSelectLesson={setActiveLessonId}
          onToggleReviewed={handleToggleReviewed}
        />

        <MasterQuizSection lessons={LESSONS_DATA} />
      </main>

      <ReferencesSection cover={cover} />

      <EditCoverModal
        isOpen={isEditCoverOpen}
        cover={cover}
        onClose={() => setIsEditCoverOpen(false)}
        onSave={setCover}
      />
    </div>
  );
}
