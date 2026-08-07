export default function BlogPage() {
  return (
    <main className="site-page">
      <h1>Blog</h1>

      <div className="year-tabs">
        <div className="year-tabs__nav">
          <label className="year-tabs__label">
            <input type="radio" name="blog-year" id="year-2027" defaultChecked />
            2027
          </label>
          <label className="year-tabs__label">
            <input type="radio" name="blog-year" id="year-2026" />
            2026
          </label>
          <label className="year-tabs__label">
            <input type="radio" name="blog-year" id="year-2025" />
            2025
          </label>
          <label className="year-tabs__label">
            <input type="radio" name="blog-year" id="year-2024" />
            2024
          </label>
          <label className="year-tabs__label">
            <input type="radio" name="blog-year" id="year-2023" />
            2023
          </label>
          <label className="year-tabs__label">
            <input type="radio" name="blog-year" id="year-2022" />
            2022
          </label>
        </div>

        {/* Put each year's posts (text, images, links) inside its matching panel below. */}
        <div id="year-2027-content" className="year-tabs__panel">
          <p>2027 posts will go here.</p>
        </div>
        <div id="year-2026-content" className="year-tabs__panel">
          <p>2026 posts will go here.</p>
        </div>
        <div id="year-2025-content" className="year-tabs__panel">

          <p>2025 posts will go here.</p>

        </div>
        <div id="year-2024-content" className="year-tabs__panel">
          <p>2024 posts will go here.</p>
        </div>
        <div id="year-2023-content" className="year-tabs__panel">
          <p>2023 posts will go here.</p>
        </div>
        <div id="year-2022-content" className="year-tabs__panel">
        
          <h2>Pre-Season and Week 1</h2>
          <h4>January 14, 2022</h4>
          
          <p>As we begin a new Robotics season, we wanted to share an update on Team 6962’s activities from the last season. As we all know, this past year has presented all sorts of interesting challenges for all of us. FRC was no different, and we had to spend the entire last season online. For the entire season, we worked together to design our own FRC game and improve the previous year’s robot. RobotX is proud to announce our game idea, FIRST Responders, won us an imagery award for the excellent animation! You can view our submission package here.</p>

        </div>
      </div>
    </main>
  );
}
