type GithubIssue = {
  assignees: Array<{ login: string }>;
  comments: number;
  html_url: string;
  labels: Array<{ id: number; name: string }>;
  number: number;
  pull_request?: unknown;
  title: string;
};

const issuesUrl = "https://github.com/team6962/Code-2026/issues";

async function getOpenIssues(): Promise<GithubIssue[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/team6962/Code-2026/issues?state=open&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const issues = (await response.json()) as GithubIssue[];
    return issues.filter((issue) => !issue.pull_request);
  } catch {
    return [];
  }
}

export default async function InternalPage() {
  const issues = await getOpenIssues();

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

      <h2>Github Issues</h2>
      <a
        className="section-edit-link"
        href={issuesUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        open
      </a>

      <section className="issue-frame" aria-label="Open Github issues">
        {issues.length > 0 ? (
          <ul className="issue-list">
            {issues.map((issue) => (
              <li className="issue-list__item" key={issue.number}>
                <div className="issue-list__main">
                  <a
                    className="issue-list__title"
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue.title}
                  </a>
                  <div className="issue-list__details">
                    <span>#{issue.number}</span>
                    {issue.assignees.length > 0 && (
                      <span>
                        Assigned to {issue.assignees.map(({ login }) => login).join(", ")}
                      </span>
                    )}
                  </div>
                  {issue.labels.length > 0 && (
                    <div className="issue-list__labels" aria-label="Labels">
                      {issue.labels.map((label) => (
                        <span className="issue-list__label" key={label.id}>
                          {label.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {issue.comments > 0 && (
                  <span className="issue-list__comments">
                    {issue.comments} {issue.comments === 1 ? "comment" : "comments"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="issue-frame__empty">
            Issues are unavailable here right now. Use the open link to view them on Github.
          </p>
        )}
      </section>

    </main>
  );
}
