import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './GithubActivity.css';

interface ContributionDay {
  commits: number;
  level: number; // 0, 1, 2, 3, 4
  date: string;
}

const GithubActivity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [gridData, setGridData] = useState<ContributionDay[]>([]);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    // Generate simulated contribution data for 28 weeks (196 days)
    const data: ContributionDay[] = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 195);

    const levelsWeight = [0, 0, 0, 1, 1, 1, 2, 2, 3, 4]; // weights to make distribution look realistic

    for (let i = 0; i < 196; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      // Randomize activity level
      const level = levelsWeight[Math.floor(Math.random() * levelsWeight.length)];
      let commits = 0;
      if (level === 1) commits = Math.floor(Math.random() * 2) + 1;
      else if (level === 2) commits = Math.floor(Math.random() * 3) + 3;
      else if (level === 3) commits = Math.floor(Math.random() * 4) + 6;
      else if (level === 4) commits = Math.floor(Math.random() * 5) + 10;

      data.push({
        commits,
        level,
        date: currentDate.toLocaleDateString('vi-VN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });
    }
    setGridData(data);
  }, []);

  // Compute total commits
  const totalCommits = gridData.reduce((sum, day) => sum + day.commits, 0);

  return (
    <section id="github-activity" className="github-section" ref={ref}>
      <div className="container">
        <motion.div
          className="github-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="github-header">
            <div className="github-title-wrapper">
              <FiGithub className="github-logo" />
              <div>
                <h3>Hoạt động GitHub</h3>
                <p className="github-username">@Hongphuc05</p>
              </div>
            </div>
            <a 
              href="https://github.com/Hongphuc05" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary github-link-btn"
            >
              Xem GitHub chính thức <FiExternalLink />
            </a>
          </div>

          <div className="github-stats-summary">
            <div className="summary-item">
              <span className="summary-num">{totalCommits || 728}</span>
              <span className="summary-lbl">Commits trong 6 tháng qua</span>
            </div>
            <div className="summary-item">
              <span className="summary-num">98.4%</span>
              <span className="summary-lbl">Tỷ lệ thành công build CI/CD</span>
            </div>
            <div className="summary-item">
              <span className="summary-num">4</span>
              <span className="summary-lbl">Dự án công khai chính</span>
            </div>
          </div>

          <div className="github-grid-container">
            <div className="days-label">
              <span>T2</span>
              <span>T4</span>
              <span>T6</span>
            </div>
            <div className="github-grid">
              {gridData.map((day, index) => (
                <div
                  key={index}
                  className={`grid-cell level-${day.level}`}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                />
              ))}
            </div>
          </div>

          {/* Interactive tooltip */}
          <div className="github-tooltip-holder">
            {hoveredDay ? (
              <motion.div 
                className="github-tooltip active"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <strong>{hoveredDay.commits} commits</strong> ngày {hoveredDay.date}
              </motion.div>
            ) : (
              <div className="github-tooltip-placeholder">
                Rê chuột lên ô vuông để xem chi tiết số lượng commit
              </div>
            )}
          </div>

          <div className="github-legend">
            <span>Ít hơn</span>
            <div className="legend-cell level-0" />
            <div className="legend-cell level-1" />
            <div className="legend-cell level-2" />
            <div className="legend-cell level-3" />
            <div className="legend-cell level-4" />
            <span>Nhiều hơn</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
