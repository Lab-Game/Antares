import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
        <a href="mailto:contact@team6962.com">contact@team6962.com</a><br/>
        1200 Villa Street<br/>
        Mountain View, CA 94041
    </footer>
  );
}