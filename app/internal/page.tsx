import styles from "./page.module.css";

export default async function InternalPage() {
  return (
    <main className="site-page">
      <h2>Announcements</h2>
      <a
        className={styles.editLink}
        href="https://docs.google.com/document/d/1s1DQv08JHRtf0XDBuVnLDS99uQducST5dk2CXAhKp3w/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        edit
      </a>

      <div className={styles.document}>
        <iframe
          className={styles.documentFrame}
          title="Announcements document"
          src="https://docs.google.com/document/d/e/2PACX-1vS3PX3jIxeF1hY-T3JxPG6_2exwSkdSH7e4TQ-G8h_V4gqgLQgRaOyWM4IV-H2zh9IsfiWtmmXAroOT/pub?embedded=true"
        />
        <div className={styles.documentFade} aria-hidden="true" />
      </div>
    </main>
  );
}
