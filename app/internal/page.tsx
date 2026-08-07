export default function InternalPage() {
  return (
    <main className="site-page">
      <h2>Announcements</h2>

      <div className="doc-embed">
        <iframe
          className="doc-embed__frame"
          title="Announcements document"
          src="https://docs.google.com/document/d/e/2PACX-1vS3PX3jIxeF1hY-T3JxPG6_2exwSkdSH7e4TQ-G8h_V4gqgLQgRaOyWM4IV-H2zh9IsfiWtmmXAroOT/pub?embedded=true"
        />
        <div className="doc-embed__fade" aria-hidden="true" />
      </div>

    </main>
  );
}
