
# Dispatch Module - Final Build Specification

This README outlines the complete structure of the **Dispatch Module** for the LinehaulIQ platform.

---

## 🧩 Frontend Components

- `DispatchPhotoUploader.tsx` — Upload hook photos to Supabase and log in `dispatch_photos` table
- `PhotoValidationCard.tsx` — Display GPT analysis of hook photos
- `DwellTimeline.tsx` — View dwell logs per dispatch
- `DwellAlertCard.tsx` — Flag high dwell time events
- `ETAMessageComposer.tsx` — Compose and send ETA updates
- `EscalationQueuePanel.tsx` — View pending escalations
- `HookSlipOCRViewer.tsx` — Upload and view hook slip OCR text
- `DispatchScoreBar.tsx` — Show hook photo scores
- `HookScoreFeedbackBox.tsx` — Feedback box for hook photo review
- `DispatchDashboardPanel.tsx` — Dispatch overview dashboard
- `WeeklyBriefCard.tsx` — GPT weekly route summary
- `DispatchTimelineBar.tsx` — Timeline view of dispatch events
- `DispatchMapPanel.tsx` — Map panel for dispatch trips (placeholder)
- `HookPhotoReviewPanel.tsx` — Photo viewer for hook images
- `DispatchDetailPage.tsx` — Detailed view of a single dispatch
- `DispatchMetricsWidget.tsx` — ETA and notes widget for a dispatch

---

## 🧭 Backend API Routes

- `/api/photo/analyzePhoto`
- `/api/photo/getPhotoScorecard`
- `/api/dispatch/dwellTracker`
- `/api/dispatch/dwellSummary`
- `/api/etaNotifier/send`
- `/api/escalation/trigger`
- `/api/gpt/generateEscalationSummary`
- `/api/hookSlip/parse`
- `/api/hookSlip/match`
- `/api/briefing/generate`

---

## 🔮 GPT Prompt Text Files (`server/prompts/dispatch/`)

- `escalation_summary.txt` — Escalation summary prompt
- `hook_slip_parser.txt` — OCR parsing prompt for hook slips
- `hook_slip_matcher.txt` — Hook slip matching prompt
- `weekly_route_digest.txt` — Weekly route digest prompt
- `hook_photo_scorer.txt` — Hook photo scoring prompt

---

## 🗄️ Supabase Tables (Expected)

- `dispatch_photos`
- `photo_scores`
- `trip_logs`
- `dwell_time_records`
- `eta_messages`
- `escalation_events`
- `hook_slips`
- `dispatches`
- `briefing_logs`

---

## ✅ Completion Status

All frontend components, backend API files, GPT prompts, and Supabase integrations are aligned to the JSON spec and feature requirements.

