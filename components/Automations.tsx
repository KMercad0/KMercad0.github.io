'use client';

import { m, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import LazyVideo from './LazyVideo';

/**
 * Automations — n8n workflow demos.
 * Same color tokens & type families as Projects. Sits before Projects.
 *
 * Each card = a self-built automation. Click "WATCH WALKTHROUGH" → YouTube
 * lightbox (unlisted videos). Posters live locally in /public/images.
 *
 * Tokens (Tailwind):
 *   primary #ff9157 · background #0e0e0e
 *   surface-container-high #1f1f1f · surface-container-highest #262626
 *   on-surface #ffffff · on-surface-variant #ababab · outline-variant #484848
 */

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Types & data
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type Automation = {
  id: string;
  title: string;
  blurb: string;            // one-line "what it does"
  flow: string[];           // pipeline steps, e.g. ['Webhook', 'GPT-4', 'Notion', 'Slack']
  stats: string;            // e.g. "8 nodes · 4 integrations"
  tech: string[];
  poster?: string;          // /images/*.png — 16:9 thumbnail
  youTubeId: string;        // unlisted video id; '' = not recorded yet
  workflowHref?: string;    // GitHub link to the exported workflow .json
  span?: 4 | 8;             // md:col-span-{n}
};

// Repo is private; walkthrough videos + posters to follow.
const automations: Automation[] = [
  {
    id: 'content-pipeline',
    title: 'Content Pipeline with Human-in-the-Loop Approval',
    blurb:
      'Google Sheets row triggers a Claude draft, posts it to Slack for one-click approve/reject, then auto-publishes or logs the rejection — with a 48-hour timeout fallback.',
    flow: ['Sheets trigger', 'Claude draft', 'Slack approval', 'Wait webhook', 'Publish / Reject'],
    stats: '16 nodes · 3 integrations',
    tech: ['n8n', 'Anthropic Claude', 'Google Sheets', 'Slack'],
    poster: '/images/contentpipeline.webp',
    youTubeId: '',
    workflowHref: undefined,
    span: 8,
  },
  {
    id: 'support-triage',
    title: 'Customer Support Ticket Triage',
    blurb:
      'Inbound tickets are validated, matched against a keyword KB, classified by Claude, then either auto-replied via Gmail or escalated to Slack with an acknowledgement — every ticket logged to Sheets.',
    flow: ['Webhook', 'KB lookup', 'Claude triage', 'Auto-reply / Escalate', 'Sheets log'],
    stats: '17 nodes · 4 integrations',
    tech: ['n8n', 'Anthropic Claude', 'Gmail', 'Slack', 'Google Sheets'],
    poster: '/images/customertriage.webp',
    youTubeId: '',
    workflowHref: undefined,
    span: 4,
  },
  {
    id: 'lead-capture',
    title: 'Lead Capture & Qualification',
    blurb:
      'Form submissions are scored by Claude as hot / warm / cold — hot leads spawn a HubSpot contact and ping #sales-hot-leads, warm leads route to nurture, cold leads tagged and archived to Sheets.',
    flow: ['Webhook', 'Claude qualify', 'Hot → HubSpot + Slack', 'Warm → Slack', 'Sheets log'],
    stats: '14 nodes · 4 integrations',
    tech: ['n8n', 'Anthropic Claude', 'HubSpot', 'Slack', 'Google Sheets'],
    poster: '/images/leadcapture.webp',
    youTubeId: '',
    workflowHref: undefined,
    span: 4,
  },
  {
    id: 'hvac-checklist',
    title: 'HVAC Job Checklist → Slack + Sheets',
    blurb:
      'Field techs POST a job completion checklist; the workflow calculates on-time vs. scheduled, fans out a Slack notification, and appends the record to a Google Sheet for ops review.',
    flow: ['Webhook', 'On-time calc', 'Slack notify', 'Sheets append'],
    stats: '4 nodes · 2 integrations',
    tech: ['n8n', 'Slack', 'Google Sheets'],
    poster: '/images/hvacjobcheck.webp',
    youTubeId: '',
    workflowHref: undefined,
    span: 4,
  },
];

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Icons
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function PlayIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ArrowRight({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function CloseIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Card
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function AutomationCard({
  item,
  index,
  onWatch,
}: {
  item: Automation;
  index: number;
  onWatch: (id: string, title: string) => void;
}) {
  const span = item.span ?? 4;
  const colSpan = span === 8 ? 'md:col-span-8' : 'md:col-span-4';
  const titleSize = span === 8 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl';
  const hasVideo = item.youTubeId.length > 0;

  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative col-span-1 ${colSpan} flex flex-col overflow-hidden rounded-md
                  border border-outline-variant/30 bg-surface-container-high/40
                  transition-colors duration-300 hover:border-primary/50`}
    >
      {/* Poster / play button */}
      <button
        type="button"
        onClick={() => hasVideo && onWatch(item.youTubeId, item.title)}
        aria-label={hasVideo ? `Watch ${item.title} walkthrough` : `${item.title} — walkthrough coming soon`}
        className="relative block aspect-video w-full overflow-hidden bg-surface-container-highest/60"
      >
        {item.poster ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${item.poster})` }}
            aria-hidden="true"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 12px, transparent 12px 24px)',
            }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" aria-hidden="true" />

        {/* Play disc */}
        <span
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2
                     items-center justify-center rounded-full border border-primary/60 bg-black/40
                     text-primary backdrop-blur-sm transition-all duration-300
                     group-hover:scale-110 group-hover:bg-primary group-hover:text-background"
        >
          <PlayIcon className="ml-0.5 h-5 w-5" />
        </span>

        {!hasVideo && (
          <span
            className="absolute bottom-3 left-3 rounded-sm bg-black/60 px-2 py-0.5
                       font-mono uppercase tracking-[0.14em] text-on-surface-variant text-[0.6rem]"
          >
            Walkthrough soon
          </span>
        )}
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="font-mono uppercase tracking-[0.2em] text-primary text-[0.65rem] mb-2">
          // demo build
        </div>

        <h3 className={`font-display font-semibold leading-tight tracking-tight text-on-surface ${titleSize}`}>
          {item.title}
        </h3>

        <p className="mt-3 font-sans leading-relaxed text-on-surface-variant text-sm sm:text-base">
          {item.blurb}
        </p>

        {/* Pipeline */}
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono uppercase tracking-[0.12em] text-on-surface-variant/70 text-[0.6rem]">
          {item.flow.map((step, i) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span>{step}</span>
              {i < item.flow.length - 1 && <span className="text-primary/60">→</span>}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-2 font-mono uppercase tracking-[0.14em] text-primary/80 text-[0.6rem]">
          {item.stats}
        </div>

        {/* Tech + actions pinned to bottom */}
        <div className="mt-auto flex flex-col gap-4 pt-5">
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span
                key={t}
                className="rounded-sm bg-surface-container-highest/60 px-2 py-0.5
                           font-mono uppercase tracking-[0.14em] text-on-surface-variant text-[0.65rem]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-5">
            <button
              type="button"
              onClick={() => hasVideo && onWatch(item.youTubeId, item.title)}
              disabled={!hasVideo}
              className="group/link inline-flex items-center gap-1.5 font-mono font-semibold uppercase
                         tracking-[0.16em] text-primary text-[0.7rem] disabled:cursor-not-allowed disabled:text-on-surface-variant/50"
            >
              <span>Watch walkthrough</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </button>

            {item.workflowHref && (
              <a
                href={item.workflowHref}
                className="group/link inline-flex items-center gap-1.5 font-mono font-semibold uppercase
                           tracking-[0.16em] text-primary text-[0.7rem]"
              >
                <span>View workflow</span>
                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </m.article>
  );
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Section
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function Automations() {
  const [video, setVideo] = useState<{ id: string; title: string } | null>(null);

  return (
    <section
      id="automations"
      className="relative w-full overflow-hidden py-24 md:py-32 text-on-surface"
    >
      {/* Video bg (previously the Skills section's backdrop) */}
      <LazyVideo src="/videos/skills.mp4" mobileSrc="/videos/skills_mobile.mp4" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/85 via-black/80 to-black/85"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <m.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="font-mono uppercase tracking-[0.2em] text-primary text-[0.7rem]">
            // automations
          </p>
          <h2 className="mt-3 font-display font-semibold tracking-tight text-on-surface
                         text-4xl sm:text-5xl md:text-6xl">
            automation builds
          </h2>
          <p className="mt-4 max-w-2xl font-sans leading-relaxed text-on-surface-variant text-sm sm:text-base">
            Self-built n8n workflows — each with a short walkthrough video. Source JSON lives in a private repo; available to clients on request.
          </p>
        </m.header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {automations.map((item, i) => (
            <AutomationCard
              key={item.id}
              item={item}
              index={i}
              onWatch={(id, title) => setVideo({ id, title })}
            />
          ))}
        </div>
      </div>

      {/* YouTube lightbox */}
      <AnimatePresence>
        {video && (
          <m.div
            key="video-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setVideo(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md
                         border border-outline-variant/30 bg-black/40 text-on-surface
                         transition-colors hover:bg-black/60"
            >
              <CloseIcon />
            </button>
            <m.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-4xl overflow-hidden rounded-md bg-black"
            >
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                title={`${video.title} — walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
