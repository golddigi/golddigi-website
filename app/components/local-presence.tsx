import Link from "next/link";
import { Icon } from "./icons";
import styles from "./local-presence.module.css";

export function LocalPresence() {
  return (
    <article className={styles.feature} aria-labelledby="local-service-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}><Icon name="map-pin" /> 01 / FOR LOCAL BUSINESSES</p>
        <h3 id="local-service-title">Google Business Profile<br /><em>optimization.</em></h3>
        <p className={styles.intro}>Your next customer could be searching nearby.</p>
        <p className={styles.description}>Make it easier to understand your business and get in touch on Google Search and Maps. I help you improve your profile and keep it current.</p>
        <div className={styles.actions}>
          <Link href="/google-business-profile" className="button button-orange">Explore profile services <Icon name="arrow-up-right" /></Link>
          <span>Initial optimization & ongoing management</span>
        </div>
      </div>
      <div className={styles.journey}>
        <p className={styles.journeyLabel}>FROM A LOCAL SEARCH TO A NEXT STEP</p>
        <ol>
          <li><span className={styles.stepIcon}><Icon name="map-pin" /></span><div><h4>Help them find the right fit.</h4><p>Accurate categories, services, location and hours.</p></div></li>
          <li><span className={styles.stepIcon}><Icon name="message" /></span><div><h4>Give them a reason to choose you.</h4><p>Useful photos, clear information and review replies.</p></div></li>
          <li><span className={styles.stepIcon}><Icon name="arrow-up-right" /></span><div><h4>Make getting in touch simple.</h4><p>Current contact details, directions and website links.</p></div></li>
        </ol>
        <div className={styles.fit}><span /> For shops, clinics, local services and businesses that visit customers.</div>
      </div>
    </article>
  );
}
