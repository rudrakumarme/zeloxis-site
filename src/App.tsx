/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Faq, FinalCta, Pricing, Process, Proof, Services } from './components/Sections';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const openAudit = useCallback(() => setIsAuditOpen(true), []);
  const closeAudit = useCallback(() => setIsAuditOpen(false), []);

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header onOpenAudit={openAudit} />
      <main>
        <Hero onOpenAudit={openAudit} />
        <Services />
        <Proof onOpenAudit={openAudit} />
        <Process />
        <Pricing onOpenAudit={openAudit} />
        <Faq />
        <FinalCta onOpenAudit={openAudit} />
      </main>
      <Footer />
      <AuditModal isOpen={isAuditOpen} onClose={closeAudit} />
    </div>
  );
}
