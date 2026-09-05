import Link from "next/link";
import { Icon } from "./icons";
import styles from "./automation-teasers.module.css";

const automations = [
  { number: "01", channel: "WHATSAPP", icon: "message" as const, title: "From outreach to conversation.", description: "Start with a template message. When a customer replies, an AI agent responds with a relevant answer and keeps the conversation moving.", flow: ["Template sent", "Customer replies", "AI responds"], stack: "Official WhatsApp API · n8n · OpenAI" },
  { number: "02", channel: "EMAIL", icon: "mail" as const, title: "An inbox that answers back.", description: "An email agent that responds to incoming messages, helping your business handle repeat questions with less manual typing.", flow: ["Email arrives", "AI prepares a reply", "Response sent"], stack: "Gmail · n8n · OpenAI" },
  { number: "03", channel: "INDIAMART", icon: "workflow" as const, title: "New enquiries, neatly captured.", description: "Move new IndiaMART leads into a database, so contact details and enquiry information are organized for your next step.", flow: ["New lead", "Details captured", "Saved to database"], stack: "IndiaMART · n8n · Supabase" },
];

export function AutomationTeasers() {
  return (
    <section className="possibilities" id="possibilities" aria-labelledby="automations-title">
      <div className="section-wrap section-space">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="section-marker" /> AUTOMATIONS I’VE BUILT</p><h2 id="automations-title">Less chasing.<br />More <em>moving forward.</em></h2></div>
          <p className="section-description">Three practical systems for the conversations and enquiries that keep your business running.</p>
        </div>
        <div className={styles.grid}>
          {automations.map((item) => (
            <article className={styles.card} key={item.channel}>
              <div className={styles.channel}><span><Icon name={item.icon} />{item.channel}</span><span>{item.number}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ol className={styles.flow}>{item.flow.map((step) => <li key={step}><span aria-hidden="true" />{step}</li>)}</ol>
              <span className={styles.stack}>{item.stack}</span>
            </article>
          ))}
        </div>
        <div className={styles.bottom}><p>Built systems, presented as simple workflow illustrations.<br />The setup is adapted to your business and connected accounts.</p><Link className="button button-dark" href="/ai-automations">Explore the automations <Icon name="arrow-up-right" /></Link></div>
      </div>
    </section>
  );
}
