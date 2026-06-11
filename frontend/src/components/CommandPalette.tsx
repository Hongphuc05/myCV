import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCornerDownLeft, FiDownload, FiSun, FiNavigation } from 'react-icons/fi';
import './CommandPalette.css';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands = [
    { id: 'home', label: 'Di chuyển tới Trang chủ', icon: FiNavigation, action: () => scrollToSection('home') },
    { id: 'about', label: 'Di chuyển tới Giới thiệu', icon: FiNavigation, action: () => scrollToSection('about') },
    { id: 'skills', label: 'Di chuyển tới Kỹ năng', icon: FiNavigation, action: () => scrollToSection('skills') },
    { id: 'experience', label: 'Di chuyển tới Kinh nghiệm', icon: FiNavigation, action: () => scrollToSection('experience') },
    { id: 'projects', label: 'Di chuyển tới Dự án', icon: FiNavigation, action: () => scrollToSection('projects') },
    { id: 'contact', label: 'Di chuyển tới Liên hệ', icon: FiNavigation, action: () => scrollToSection('contact') },
    { id: 'download-cv', label: 'Tải xuống CV của tôi (PDF)', icon: FiDownload, action: () => downloadCV() },
    { id: 'toggle-theme', label: 'Chuyển đổi giao diện Sáng / Tối', icon: FiSun, action: () => toggleTheme() },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === '/') {
        // If not in input, search area, etc.
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
          return;
        }
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv_HongPhuc.pdf';
    link.download = 'cv_HongPhuc.pdf';
    link.click();
    setIsOpen(false);
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new Event('storage')); // Trigger navbar refresh
    setIsOpen(false);
  };

  const handleSelect = (index: number) => {
    if (filteredCommands[index]) {
      filteredCommands[index].action();
    }
  };

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(selectedIndex);
    }
  };

  return (
    <>
      {/* Search trigger button floating or in navbar */}
      <button 
        className="cmd-palette-trigger" 
        onClick={() => setIsOpen(true)}
        title="Nhấn Ctrl+K hoặc / để mở"
      >
        <span className="cmd-icon">⌘</span>
        <span className="cmd-text">K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="cmd-palette-overlay" onClick={() => setIsOpen(false)}>
            <motion.div
              className="cmd-palette-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onKeyDown={handleKeyDownList}
            >
              <div className="cmd-palette-search-wrapper">
                <FiSearch className="cmd-search-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Tìm kiếm lệnh (gõ để bắt đầu)..."
                  className="cmd-palette-input"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                />
                <kbd className="cmd-kbd-indicator">ESC</kbd>
              </div>

              <div className="cmd-palette-results" ref={listRef}>
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, index) => {
                    const Icon = cmd.icon;
                    const isSelected = index === selectedIndex;
                    return (
                      <div
                        key={cmd.id}
                        className={`cmd-palette-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelect(index)}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div className="cmd-item-left">
                          <Icon className="cmd-item-icon" />
                          <span className="cmd-item-label">{cmd.label}</span>
                        </div>
                        {isSelected && (
                          <span className="cmd-enter-badge">
                            <FiCornerDownLeft size={12} /> Enter
                          </span>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="cmd-no-results">Không tìm thấy lệnh nào phù hợp...</div>
                )}
              </div>

              <div className="cmd-palette-footer">
                <div className="cmd-shortcuts">
                  <span><kbd>↑↓</kbd> để di chuyển</span>
                  <span><kbd>Enter</kbd> để chọn</span>
                  <span><kbd>Esc</kbd> để đóng</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
