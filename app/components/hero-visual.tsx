"use client";

import { useState } from "react";
import styles from "./hero-visual.module.css";

function MiniIcon({ type }: { type: "window" | "spark" | "mail" | "sort" | "check" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === "window" && <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>}
      {type === "spark" && <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /><path d="m20 3 .7 1.3L22 5l-1.3.7L20 7l-.7-1.3L18 5l1.3-.7L20 3Z" /></>}
      {type === "mail" && <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>}
      {type === "sort" && <><path d="M9 6h11M9 12h11M9 18h7" /><rect x="3" y="4" width="2" height="3" rx=".5" /><rect x="3" y="10" width="2" height="3" rx=".5" /><rect x="3" y="16" width="2" height="3" rx=".5" /></>}
      {type === "check" && <path d="m5 12 4 4L19 6" />}
    </svg>
  );
}

function Architecture() {
  return (
    <svg className={styles.architecture} viewBox="0 0 270 265" fill="none">
      <path d="M0 0h270v265H0z" fill="#e9dec9" />
      <circle cx="51" cy="48" r="23" fill="#d7b886" />
      <path d="M0 193 270 157v108H0z" fill="#ddd0b7" />
      <ellipse cx="143" cy="228" rx="99" ry="16" fill="#c9b99b" opacity=".45" />
      <path d="M110 207V89c0-47 26-71 64-71s64 24 64 71v106l-18 12V101c0-27-13-42-33-42s-35 15-35 42v117z" fill="#a54632" />
      <path fillRule="evenodd" clipRule="evenodd" d="M92 218V101c0-47 26-71 64-71s64 24 64 71v106l-34 5V102c0-24-11-37-30-37s-30 13-30 37v110l-34 6Z" fill="#ce6549" />
      <path d="m126 213 26-7V100c0-16 6-29 15-35-3-.4-7-.8-11-.8-19 0-30 13-30 37v112Z" fill="#b45138" />
      <path d="M34 156h57v64H34z" fill="#87907a" />
      <ellipse cx="62.5" cy="220" rx="28.5" ry="10" fill="#87907a" />
      <path d="M65 156h26v64c0 5-12 9-26 10v-74Z" fill="#77816a" />
      <ellipse cx="62.5" cy="156" rx="28.5" ry="10" fill="#a5ac95" />
      <path d="m140 214 66-10 32 11-66 11-32-12Z" fill="#f3e9d7" />
      <path d="m140 214 32 12v17l-32-12v-17Z" fill="#d8c9ae" />
      <path d="m172 226 66-11v17l-66 11v-17Z" fill="#e8dcc5" />
      <path d="m184 246 54-9 22 8-54 10-22-9Z" fill="#eee3cf" />
      <path d="m206 255 54-10v8l-54 10v-8Z" fill="#d9cbb2" />
      <path d="m184 246 22 9v8l-22-9v-8Z" fill="#cdbb9e" />
    </svg>
  );
}

export function HeroVisual() {
  const [focus, setFocus] = useState<"website" | "automation">("website");

  return (
    <figure className={styles.visual} data-focus={focus}>
      <div className={styles.scene}>
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.personalNote} aria-hidden="true">
          Built around you.
          <svg viewBox="0 0 65 37" fill="none"><path d="M2 3c25-6 29 28 59 20M49 14l13 9-10 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>

        <div className={styles.browser} aria-hidden="true">
          <div className={styles.browserChrome}>
            <span className={styles.browserDots}><i /><i /><i /></span>
            <span className={styles.address}><svg viewBox="0 0 12 12" fill="none"><rect x="3" y="5" width="6" height="5" rx="1" stroke="currentColor" /><path d="M4 5V3a2 2 0 1 1 4 0v2" stroke="currentColor" /></svg>your-business.com</span>
            <span className={styles.browserMenu}>•••</span>
          </div>
          <div className={styles.website}>
            <div className={styles.siteNav}>
              <span className={styles.forma}>forma<span>.</span></span>
              <span className={styles.siteLinks}>Studio<span>About</span><span>Contact ↗</span></span>
            </div>
            <div className={styles.siteBody}>
              <div className={styles.siteCopy}>
                <span className={styles.eyebrow}>SPACES WITH SOUL</span>
                <p>A little<br />different.<br /><em>Entirely you.</em></p>
                <span className={styles.siteDescription}>Considered spaces.<br />A perspective of your own.</span>
                <span className={styles.siteCta}>Explore the studio <span>↗</span></span>
              </div>
              <Architecture />
            </div>
            <div className={styles.siteFooter}><span>Independent design studio</span><span>01 — 03</span></div>
          </div>
          <div className={styles.conceptCaption}><span />Custom website concept</div>
        </div>

        <div className={styles.workflow} aria-hidden="true">
          <div className={styles.workflowHeading}><span className={styles.workflowKicker}>CONVERSATIONS, CONNECTED</span><span className={styles.smallSpark}>✳</span></div>
          <div className={styles.workflowStatus}><span />WhatsApp workflow</div>
          <div className={styles.workflowTrigger}><span className={styles.triggerIcon}><MiniIcon type="mail" /></span><div><span className={styles.triggerLabel}>WHEN THIS HAPPENS</span><strong>Customer replies</strong></div></div>
          <div className={styles.workflowSteps}>
            <div className={styles.workflowStep}><span className={styles.stepIcon}><MiniIcon type="sort" /></span><span>Read the message</span><span className={styles.stepCheck}><MiniIcon type="check" /></span></div>
            <div className={styles.workflowStep}><span className={`${styles.stepIcon} ${styles.aiIcon}`}><MiniIcon type="spark" /></span><span>Generate an answer</span><span className={styles.stepCheck}><MiniIcon type="check" /></span></div>
            <div className={`${styles.workflowStep} ${styles.finalStep}`}><span className={styles.stepIcon}><MiniIcon type="check" /></span><span>Reply on WhatsApp</span><span className={styles.reviewDot} /></div>
          </div>
          <div className={styles.workflowFooter}>Keep the conversation going.<span>↗</span></div>
        </div>
        <span className={styles.cornerMark} aria-hidden="true">✳</span>
      </div>

      <figcaption className={styles.caption}>
        <div className={styles.focusControls} aria-label="Explore the example">
          <button type="button" aria-pressed={focus === "website"} onClick={() => setFocus("website")}><MiniIcon type="window" />Website</button>
          <button type="button" aria-pressed={focus === "automation"} onClick={() => setFocus("automation")}><MiniIcon type="spark" />Automation</button>
        </div>
        <p className={styles.captionText} aria-live="polite">
          {focus === "website" ? "Thoughtful design. Entirely your own." : "Customer replies. Your agent answers."}
        </p>
        <span className={styles.srOnly}>A custom website concept and an illustration of a WhatsApp AI reply workflow I’ve built: read the message, generate an answer, and reply on WhatsApp.</span>
      </figcaption>
    </figure>
  );
}
