# AI Lead Finder Email Generator — Portfolio Case Study

## Portfolio card

**Title:** AI Lead Finder Email Generator

**Category:** Product design · Frontend engineering · Privacy-conscious sales tooling

**One-line summary:** A fast, private browser tool that turns structured lead research into personalized sales emails.

**Short description:** I designed and built a responsive email-generation workspace that transforms lead details, research notes, offer positioning, proof points, tone, and calls to action into polished outreach copy as the user types. The application runs entirely in the browser, requires no account or API key, sends no data to a server, and includes accessible form controls, clipboard fallback behavior, and a focused desktop-to-mobile experience.

**Tags:** JavaScript, HTML, CSS, Product Design, Responsive UI, Accessibility, Privacy, Sales Enablement, Browser APIs

**Repository:** https://github.com/jlstacks/ai-lead-finder-email-generator

---

## Detailed project summary

The AI Lead Finder Email Generator is a lightweight sales-enablement application for converting structured lead research into a usable first draft without moving sensitive prospect information through another service. It is designed as a companion to a lead-finding workflow: users bring in business details, location, contact information, research notes, their offer, a benefit, and a proof point, then shape the message with an email type, tone, subject line, opening hook, and call to action.

The core experience is deliberately immediate. Every change updates the email preview in place, so the user can see how each input affects the finished message without submitting a form, waiting on a request, or moving between screens. Three message patterns cover a first-touch cold introduction, a follow-up, and a very short note. The subject can be generated from available context or replaced manually, while optional details are included only when the user supplies them.

I treated the interface as a working composition surface rather than a conventional form. On desktop, lead and sender details sit beside a sticky output card so the draft remains visible during editing. On smaller screens, the layout becomes a single readable column with touch-friendly controls. A restrained dark visual system, subtle gradients, clear section labels, strong focus states, and a monospace output area distinguish research inputs from the message being produced.

The product uses only semantic HTML, responsive CSS, and vanilla JavaScript. It has no framework, package dependencies, build step, backend, account system, cookies, analytics, advertising, or external assets. Lead information remains in the current browser tab and disappears when the page is refreshed or closed. Copying uses the browser Clipboard API when available and falls back to selecting the generated text for a manual copy command.

The project was prepared for public repository publication with neutral sample data, an MIT license, a concise privacy statement, a basic ignore file, and Git initialized on the `main` branch. Unused lead fields were removed before release so every visible control has a clear purpose in the workflow.

## The challenge

Personalized sales outreach often begins with useful research but breaks down during the handoff from notes to writing. Repeating the same structure for each lead is slow, generic templates ignore context, and cloud-based generation can introduce unnecessary privacy concerns when prospect or company details are involved.

The product needed to make personalization faster without hiding the reasoning behind the output. It also needed to support incomplete inputs, several outreach styles, long copy, mobile screens, clipboard restrictions, and clear reset behavior—all without adding a backend or dependency chain to a very small tool.

## My role

- Product direction and feature definition
- Information architecture and interaction design
- Responsive visual design and frontend implementation
- Email-template logic and browser interaction behavior
- Accessibility, privacy, and source-security review
- Runtime verification, repository preparation, and documentation
- Portfolio narrative, screenshot direction, captions, and accessibility text

## Key product decisions

### Keep the draft visible while inputs change

The desktop layout pairs the research form with a sticky output card. Users can evaluate the message continuously instead of reaching a separate result screen after completing a long form.

### Generate locally and transparently

The app uses deterministic browser-side templates rather than an external generation service. The relationship between inputs and output stays understandable, response time is immediate, and prospect data never needs to leave the page.

### Support several outreach moments

Cold introduction, follow-up, and very short note modes provide useful starting structures without turning the interface into a large template library. Tone, subject, opening hook, proof, and call-to-action controls add meaningful variation within those modes.

### Treat optional information as optional

The message builder checks each value before adding its sentence. A useful draft still appears when only a few fields are available, while richer research produces a more specific message.

### Make privacy the default behavior

There is no account, storage layer, external request, tracking script, or third-party asset. The application does not need a privacy toggle because its baseline architecture keeps entered data in the active browser tab.

### Recover gracefully when clipboard access is restricted

The Copy email action uses the Clipboard API first. If browser permissions or local-file behavior block it, the app selects the generated text and tells the user to press Command+C rather than failing silently.

### Preserve one coherent mobile workflow

At the responsive breakpoint, the two-column workspace becomes a single column and the sticky behavior is removed. Inputs remain comfortably sized, the generated email stays readable, and the same controls work without a separate mobile implementation.

## Technical architecture

- **Structure:** Semantic HTML with labeled inputs, selects, textareas, regions, headings, and live status messaging
- **Presentation:** Dependency-free CSS with custom properties, responsive grids, a sticky desktop output panel, visible focus states, and mobile breakpoints
- **Application logic:** Vanilla JavaScript event listeners and deterministic message-building functions
- **Output:** Read-only textarea updated through its text value, preserving line breaks without interpreting user input as markup
- **Clipboard:** Native Clipboard API with a select-and-copy fallback
- **Storage:** None; all state exists only in the current document
- **Delivery:** Static files that can be opened directly or hosted on any static web service

## Security and privacy work

- No API keys, credentials, environment files, or secrets required
- No backend, database, account system, cookies, or persistent browser storage
- No external scripts, fonts, images, analytics, advertising, or tracking requests
- User-entered content is assigned to a textarea value rather than inserted as HTML
- No `innerHTML`, dynamic script execution, or third-party dependency surface
- Clipboard failure is handled without exposing or transmitting the generated message
- Neutral sample data replaces personal sender defaults in the public-ready source
- Unused data-collection fields were removed to keep the input surface intentional
- Repository includes a privacy statement, MIT license, and minimal ignore rules

## Validation and outcome

The finished application passed JavaScript syntax validation and 11 targeted browser checks against the working local build. Verification covered the neutral default state, accessible labels, live personalization, cold-introduction output, follow-up output, very-short-note output, tone and CTA switching, subject overrides, successful clipboard copying, full reset behavior, and the single-column mobile layout without horizontal overflow. The browser console remained free of warnings and errors throughout the checked flows.

Because this is a dependency-free static frontend, there is no backend test suite to report. The portfolio screenshots were captured from the verified local application at 1425-pixel desktop and 375-pixel mobile widths using privacy-safe sample data. All six supplied assets are true PNG files.

The result is a focused, documented, and repository-ready sales tool that turns research into editable outreach without creating another data-processing step. Its strongest outcome is the combination of speed, transparency, and privacy: the user receives an immediate, structured draft while retaining full control over every input and sentence.

## Compact résumé version

Designed and built a privacy-conscious, dependency-free sales email generator using semantic HTML, responsive CSS, and vanilla JavaScript. Created live multi-template personalization, tone and CTA controls, subject overrides, accessible form interactions, Clipboard API fallback behavior, and a desktop-to-mobile composition workflow with no backend, tracking, or persistent data storage.

## Suggested portfolio captions and alt text

### 01 — Product overview, desktop

**Caption:** A focused two-column workspace turns lead research and offer details into a live sales-email draft without requiring an account or API key.

**Alt text:** Desktop view of the AI Lead Finder Email Generator with an empty lead and sender form on the left and a generated starter email on the right in a dark blue interface.

### 02 — Complete email workspace, desktop

**Caption:** A completed example keeps lead context, positioning, proof, controls, and the resulting personalized email visible in one workspace.

**Alt text:** Desktop email-generation workspace filled with privacy-safe sample data for Northstar Advisory, showing a personalized cold email beside the completed lead and sender fields.

### 03 — Follow-up variation, desktop

**Caption:** Message type, tone, subject, and CTA controls reshape the same research into a concise follow-up without re-entering lead details.

**Alt text:** Desktop workspace showing Short follow-up and Direct selected, a custom follow-up subject, a one-page-overview CTA, and the updated email for Morgan at Northstar Advisory.

### 04 — Copy confirmation, desktop

**Caption:** The very-short-note pattern produces compact outreach, while inline status confirms that the finished message reached the clipboard.

**Alt text:** Desktop workspace set to Very short note and Friendly, with a compact generated email and a green Copied to clipboard confirmation beside the Copy email button.

### 05 — Lead entry, mobile

**Caption:** The responsive layout turns the desktop form into a readable, touch-friendly single-column flow.

**Alt text:** Mobile view of the Email Generator showing the heading and stacked lead-detail fields for business type, business name, location, contact, and notes.

### 06 — Generated email, mobile

**Caption:** On mobile, composition controls and the generated message remain readable and editable within the same continuous workflow.

**Alt text:** Mobile view of the completed Email Generator showing a personalized opening hook, CTA selector, generated Northstar Advisory email, and Copy email button.

## Usage notes

- **Primary portfolio image:** Use `01-overview-desktop.png` as the project thumbnail or opening hero.
- **Complete email workspace:** Place `02-complete-email-desktop.png` after the overview to show the full input-to-output workflow.
- Pair `03-follow-up-desktop.png` and `04-copy-confirmation-desktop.png` with the interaction-design section.
- **Mobile experience:** Present `05-overview-mobile.png` and `06-generated-email-mobile.png` side by side.
- The supplied PNGs are source-quality archival assets. Generate smaller WebP derivatives during the portfolio build if page weight is important, while preserving these originals.
