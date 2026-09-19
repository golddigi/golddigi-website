"use client";

import { useId, useState } from "react";
import { whatsappLink } from "../site-config";
import styles from "./automation-showcase.module.css";

type WorkflowKey = "whatsapp" | "email" | "indiamart";
type IconName = WorkflowKey | "spark" | "check" | "arrow" | "flow";

const workflows = {
  whatsapp: {
    number: "01",
    name: "WhatsApp marketing agent",
    shortName: "WhatsApp",
    summary: "Start a conversation. Keep it moving.",
    title: "Keep the conversation going.",
    outcome: "Reach opted-in customers with template messages, then let an AI agent respond when they reply.",
    steps: [
      { title: "Send a template message", detail: "Reach opted-in customers through the official WhatsApp API.", icon: "whatsapp" },
      { title: "Receive a customer reply", detail: "The conversation becomes the trigger for the next step.", icon: "flow" },
      { title: "Respond with AI", detail: "OpenAI generates a relevant reply and the agent responds.", icon: "spark" },
    ],
    stack: ["WhatsApp Business Platform", "n8n", "OpenAI"],
    cta: "Discuss a WhatsApp agent",
    enquiry: "Hello, we’d like to discuss a WhatsApp marketing agent for our business.",
  },
  email: {
    number: "02",
    name: "Email reply agent",
    shortName: "Email",
    summary: "Turn incoming mail into a response.",
    title: "Give every email a next step.",
    outcome: "An AI agent reads incoming emails and sends relevant replies, taking repetitive responses off your list.",
    steps: [
      { title: "An email arrives", detail: "A new message in Gmail starts the workflow.", icon: "email" },
      { title: "AI prepares an answer", detail: "OpenAI generates a reply relevant to the incoming message.", icon: "spark" },
      { title: "The reply is sent", detail: "The response goes back to the sender by email.", icon: "arrow" },
    ],
    stack: ["Gmail", "n8n", "OpenAI"],
    cta: "Discuss an email reply agent",
    enquiry: "Hello, we’d like to discuss an email reply agent for our business.",
  },
  indiamart: {
    number: "03",
    name: "IndiaMART lead capture",
    shortName: "IndiaMART",
    summary: "Bring new enquiries into one place.",
    title: "A new lead. Already organized.",
    outcome: "Save new IndiaMART enquiries to a lead database, so you can access the details without copying them by hand.",
    steps: [
      { title: "A new enquiry comes in", detail: "A buyer contacts your business through IndiaMART.", icon: "indiamart" },
      { title: "Capture the lead details", detail: "n8n collects the details of the new enquiry.", icon: "flow" },
      { title: "Save to your database", detail: "The lead is stored in Supabase for your team to access.", icon: "check" },
    ],
    stack: ["IndiaMART", "n8n", "Supabase"],
    cta: "Discuss IndiaMART lead capture",
    enquiry: "Hello, we’d like to discuss saving IndiaMART leads to a database for our business.",
  },
} as const;

function WorkflowIcon({ name }: { name: IconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {name === "whatsapp" && <><path d="M20 11.5a8.5 8.5 0 0 1-12.8 7.3L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z" /><path d="m8.1 7.2 1.7 2.5-1 1.3a9 9 0 0 0 4.2 4.2l1.3-1 2.5 1.7c-2.8 3.2-10.9-4.9-8.7-8.7Z" /></>}
      {name === "email" && <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>}
      {name === "indiamart" && <><ellipse cx="12" cy="5.5" rx="8" ry="3.5" /><path d="M4 5.5v6c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-6M4 11.5v6c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-6" /></>}
      {name === "spark" && <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /><path d="m20 2 .7 1.3L22 4l-1.3.7L20 6l-.7-1.3L18 4l1.3-.7L20 2Z" /></>}
      {name === "check" && <><rect x="3" y="3" width="18" height="18" rx="5" /><path d="m7 12 3 3 7-7" /></>}
      {name === "arrow" && <><path d="M5 12h14m-6-6 6 6-6 6" /><path d="M5 5v14" /></>}
      {name === "flow" && <><rect x="3" y="3" width="6" height="6" rx="2" /><rect x="15" y="15" width="6" height="6" rx="2" /><path d="M6 9v6a3 3 0 0 0 3 3h6m-3-3 3 3-3 3" /></>}
    </svg>
  );
}

function WhatsAppPreview() {
  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <span className={styles.businessAvatar}>S<span aria-hidden="true" /></span>
        <div><strong>Your business</strong><span>WhatsApp conversation</span></div>
        <span className={styles.headerDecoration} aria-hidden="true">•••</span>
      </div>
      <div className={styles.chatBody}>
        <span className={styles.conversationStart}>Template outreach</span>
        <div className={`${styles.bubble} ${styles.sentBubble}`}>
          <p>Hi Asha, our latest catalogue is ready. Would you like to take a look?</p>
          <span className={styles.messageMeta}>Your business <span aria-hidden="true">✓✓</span></span>
        </div>
        <div className={`${styles.bubble} ${styles.receivedBubble}`}>
          <p>Yes please! Do you handle bulk enquiries too?</p>
          <span className={styles.messageMeta}>Customer reply</span>
        </div>
        <div className={styles.aiSeparator}><WorkflowIcon name="spark" /><span>The agent picks up the conversation</span></div>
        <div className={`${styles.bubble} ${styles.sentBubble}`}>
          <span className={styles.aiLabel}><WorkflowIcon name="spark" />AI response</span>
          <p>Happy to help with your enquiry. Which product and quantity are you looking for?</p>
          <span className={styles.messageMeta}>Your business <span aria-hidden="true">✓✓</span></span>
        </div>
      </div>
      <div className={styles.previewBottom}><WorkflowIcon name="flow" /><span>Outreach and replies, connected.</span></div>
    </div>
  );
}

function EmailPreview() {
  return (
    <div className={styles.emailWindow}>
      <div className={styles.emailHeader}><span className={styles.emailAppIcon}><WorkflowIcon name="email" /></span><span>Business inbox</span><span className={styles.headerDecoration} aria-hidden="true">•••</span></div>
      <div className={styles.emailThread}>
        <span className={styles.mailFolder}>INCOMING ENQUIRY</span>
        <h4>A question about your services</h4>
        <div className={styles.emailSender}><span className={styles.senderAvatar}>A</span><div><strong>Asha</strong><span>To: your business</span></div></div>
        <p>Hello, we’re interested in your services. What information do you need to get started?</p>
        <span className={styles.emailDivider}><WorkflowIcon name="spark" /><span>AI prepares a relevant answer</span></span>
        <div className={styles.replyCard}>
          <div className={styles.replyHeader}><span className={styles.replyAvatar}><WorkflowIcon name="email" /></span><strong>Your business</strong><span className={styles.sentLabel}><WorkflowIcon name="check" />Reply sent</span></div>
          <p>Hi Asha,</p>
          <p>Thanks for getting in touch. Could you tell us a little about your business and what you need help with?</p>
          <p>If you have a timeline in mind, please share that too.</p>
        </div>
      </div>
      <div className={styles.previewBottom}><WorkflowIcon name="flow" /><span>From incoming message to relevant reply.</span></div>
    </div>
  );
}

function IndiaMartPreview() {
  return (
    <div className={styles.leadWindow}>
      <div className={styles.leadSource}><span className={styles.indiaMartIcon}><WorkflowIcon name="indiamart" /></span><div><span className={styles.leadSourceLabel}>NEW INDIAMART ENQUIRY</span><strong>A buyer is interested.</strong></div></div>
      <div className={styles.leadBridge} aria-hidden="true"><span /><WorkflowIcon name="flow" /><span /></div>
      <div className={styles.databaseCard}>
        <div className={styles.databaseHeader}><span>Lead database</span><span className={styles.savedLabel}><WorkflowIcon name="check" />Saved</span></div>
        <div className={styles.leadProfile}><span className={styles.buyerAvatar}>B</span><div><strong>Sample buyer</strong><span>IndiaMART enquiry</span></div></div>
        <dl className={styles.leadFields}>
          <div><dt>Interested in</dt><dd>Packaging boxes</dd></div>
          <div><dt>Quantity</dt><dd>1,000 units</dd></div>
          <div><dt>Location</dt><dd>Ahmedabad</dd></div>
          <div><dt>Source</dt><dd>IndiaMART</dd></div>
        </dl>
        <div className={styles.databaseNote}><WorkflowIcon name="check" /><span>Lead details stored in one place.</span></div>
      </div>
      <div className={styles.leadCaption}>Less copying. A more organized lead list.</div>
    </div>
  );
}

export function AutomationShowcase() {
  const [selected, setSelected] = useState<WorkflowKey>("whatsapp");
  const panelId = useId();

  return (
    <div className={styles.showcase}>
      <div className={styles.selector} aria-label="Choose an automation to explore">
        {(Object.keys(workflows) as WorkflowKey[]).map((key) => (
          <button className={styles.selectorButton} type="button" key={key} aria-pressed={selected === key} aria-controls={`${panelId}-${key}`} onClick={() => setSelected(key)}>
            <span className={`${styles.channelIcon} ${styles[key]}`}><WorkflowIcon name={key} /></span>
            <span className={styles.selectorCopy}><strong>{workflows[key].name}</strong><span>{workflows[key].summary}</span></span>
            <span className={styles.selectorArrow} aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      {(Object.keys(workflows) as WorkflowKey[]).map((key) => {
        const workflow = workflows[key];
        return <div className={styles.panel} id={`${panelId}-${key}`} key={key} hidden={selected !== key}>
        <div className={styles.details}>
          <div className={styles.detailIntro} aria-live="polite" aria-atomic="true">
            <span className={styles.workflowNumber}>THE WORKFLOW <span>{workflow.number} / 03</span></span>
            <h3>{workflow.title}</h3>
            <p>{workflow.outcome}</p>
          </div>

          <ol className={styles.steps} aria-label={`${workflow.shortName} workflow steps`}>
            {workflow.steps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepIcon}><WorkflowIcon name={step.icon} /></span>
                <div><span className={styles.stepNumber}>STEP {index + 1}</span><h4>{step.title}</h4><p>{step.detail}</p></div>
              </li>
            ))}
          </ol>

          <div className={styles.stack}><span>Built with</span><ul aria-label="Tools used">{workflow.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
          <a className={styles.enquiryLink} href={whatsappLink(workflow.enquiry)} target="_blank" rel="noopener noreferrer">{workflow.cta}<span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens WhatsApp in a new tab)</span></a>
        </div>

        <div className={styles.illustration} data-channel={key}>
          <div className={styles.illustrationLabel}><span aria-hidden="true" />Workflow illustration · based on systems we’ve built</div>
          <div className={styles.previewStage}>
            {key === "whatsapp" && <WhatsAppPreview />}
            {key === "email" && <EmailPreview />}
            {key === "indiamart" && <IndiaMartPreview />}
          </div>
          <div className={styles.sampleLabel}>{key === "whatsapp" ? "Sample conversation" : key === "email" ? "Sample email" : "Sample lead"}<span aria-hidden="true">✳</span></div>
        </div>
      </div>;
      })}
    </div>
  );
}
