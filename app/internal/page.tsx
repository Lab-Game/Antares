export default function InternalPage() {
  return (
    <main className="site-page">
      <h2>Announcements</h2>
      <a
        className="section-edit-link"
        href="https://docs.google.com/document/d/1s1DQv08JHRtf0XDBuVnLDS99uQducST5dk2CXAhKp3w/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        edit
      </a>

      <div className="doc-embed">
        <iframe
          className="doc-embed__frame"
          title="Announcements document"
          src="https://docs.google.com/document/d/e/2PACX-1vS3PX3jIxeF1hY-T3JxPG6_2exwSkdSH7e4TQ-G8h_V4gqgLQgRaOyWM4IV-H2zh9IsfiWtmmXAroOT/pub?embedded=true"
        />
        <div className="doc-embed__fade" aria-hidden="true" />
      </div>

      <h2>Calendar</h2>
      <a
        className="section-edit-link"
        href="https://calendar.google.com/calendar/u/0?cid=ZGVhNzM2ODlkOGRiY2JmYjQ4ZDYzMTBkMjczNGI4ZmMxZTcyMjQ3MTAxMTEyMTBkZTlmMzdlYzYzNGYyZWMxYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
        target="_blank"
        rel="noopener noreferrer"
      >
        open
      </a>

      <div className="calendar-embed">
        <iframe
          className="calendar-embed__frame"
          title="Team calendar"
          src="https://calendar.google.com/calendar/embed?src=dea73689d8dbcbfb48d6310d2734b8fc1e7224710111210de9f37ec634f2ec1b%40group.calendar.google.com"
        />
      </div>

      <h2>Fabrication Queue</h2>
      <a
        className="section-edit-link"
        href="https://docs.google.com/spreadsheets/d/1Hqznh5m3hu4MdGiszVy1dAnKs3t-CaSBSBnMNm8I4RU/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        edit
      </a>

      <div className="doc-embed">
        <iframe
          className="doc-embed__frame"
          title="Fabrication queue spreadsheet"
          src="https://docs.google.com/spreadsheets/d/1Hqznh5m3hu4MdGiszVy1dAnKs3t-CaSBSBnMNm8I4RU/preview"
        />
        <div className="doc-embed__fade" aria-hidden="true" />
      </div>

    </main>
  );
}
