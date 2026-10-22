/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppCatalog } from './components/AppCatalog';
import { Features } from './components/Features';
import { ScreenshotsGallery } from './components/ScreenshotsGallery';
import { RoiCalculator } from './components/RoiCalculator';
import { InstallationGuide } from './components/InstallationGuide';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { DownloadModal } from './components/DownloadModal';
import { ScreenshotModal } from './components/ScreenshotModal';

export default function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number | null>(null);

  const handleOpenDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };

  const handleOpenScreenshotModal = (index: number) => {
    setSelectedScreenshotIndex(index);
  };

  const handleCloseScreenshotModal = () => {
    setSelectedScreenshotIndex(null);
  };

  const handleNavigateScreenshot = (newIndex: number) => {
    setSelectedScreenshotIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-[#0A0D12] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Bar following 3-Zone Contract */}
      <Navbar onOpenDownloadModal={handleOpenDownloadModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDownloadModal={handleOpenDownloadModal}
          onOpenScreenshotModal={handleOpenScreenshotModal}
        />

        {/* Store Catalog */}
        <AppCatalog
          onOpenDownloadModal={handleOpenDownloadModal}
          onOpenScreenshotModal={handleOpenScreenshotModal}
        />

        {/* Core Capabilities & Bento Grid */}
        <Features />

        {/* Real Screenshots Gallery */}
        <ScreenshotsGallery
          onOpenScreenshotModal={handleOpenScreenshotModal}
        />

        {/* Interactive ROI & Time Savings Calculator */}
        <RoiCalculator
          onOpenDownloadModal={handleOpenDownloadModal}
        />

        {/* Step by Step Installation Guide */}
        <InstallationGuide
          onOpenDownloadModal={handleOpenDownloadModal}
        />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenDownloadModal={handleOpenDownloadModal} />

      {/* Compact Sticky Mobile CTA */}
      <StickyMobileCta onOpenDownloadModal={handleOpenDownloadModal} />

      {/* Modals */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={handleCloseDownloadModal}
      />

      <ScreenshotModal
        currentIndex={selectedScreenshotIndex}
        onClose={handleCloseScreenshotModal}
        onNavigate={handleNavigateScreenshot}
        onOpenDownloadModal={handleOpenDownloadModal}
      />
    </div>
  );
}
