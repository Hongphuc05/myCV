import { SkillCategory, Project, Experience, ContactInfo } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning & AI',
    icon: 'brain',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow / PyTorch', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Data Preprocessing', level: 85 },
    ],
  },
  {
    title: 'Software Development',
    icon: 'code',
    skills: [
      { name: 'FastAPI / Spring Boot', level: 75 },
      { name: 'RESTful API', level: 80 },
      { name: 'SQL (MySQL/PostgreSQL)', level: 70 },
      { name: 'Git', level: 85 },
    ],
  },
  {
    title: 'Automation & Testing',
    icon: 'robot',
    skills: [
      { name: 'Selenium / Playwright', level: 80 },
      { name: 'Web Scraping', level: 85 },
      { name: 'CI/CD', level: 70 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'cloud',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'AWS / GCP', level: 60 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Dịch máy Anh - Việt cho Y tế',
    description:
      'Xây dựng kiến trúc Transformer từ đầu để hiểu sâu cơ chế hoạt động. Fine-tuning mô hình Baseline trên dữ liệu y tế chuyên biệt hóa.',
    tags: ['Transformer', 'NLP', 'PyTorch', 'Fine-tuning'],
    github: 'https://github.com/moimoi05/ENGLISH-VIETNAMESE-TRANSLATION-FOR-MEDICAL-PURPOSES',
    params: '90.5M tham số',
    icon: 'language',
    backgroundImage: '/cv_pic.jpg',
    demoImages: ['/cv_pic.jpg'],
  },
  {
    title: 'Quản lý học sinh trên xe đưa đón',
    description:
      'Hệ thống nhận dạng và quản lý người ra vào trên xe đưa đón học sinh sử dụng YOLOv8 và FaceNet để nhận diện mặt học sinh.',
    tags: ['YOLOv8', 'FaceNet', 'Computer Vision', 'Backend'],
    github: 'https://github.com/thangtrandoan/thptht_AI',
    icon: 'bus',
    backgroundImage: '/QuanLi.jpg',
    demoImages: ['/QuanLi.jpg', '/QuanLi2.jpg'],
  },
  {
    title: 'Phân tích Topic & Sentiment',
    description:
      'Phân tích chủ đề và cảm xúc của văn bản tiếng Việt sử dụng PhoBERT (SOTA) với tập dữ liệu 20GB văn bản. Áp dụng Threshold Tuning để xử lý dữ liệu mất cân bằng.',
    tags: ['PhoBERT', 'NLP', 'Sentiment Analysis', 'Threshold Tuning'],
    github: 'https://github.com/Hongphuc05/demo-web-Phân-tích-chủ-đề-và-cảm-xúc-của-văn-bản',
    icon: 'comments',
    backgroundImage: '/Topic&Sentiment.png',
    demoImages: ['/Topic&Sentiment.png', '/Topic&Sentiment2.png'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Thực Tập Sinh Phần Mềm',
    company: 'Bệnh Viện Trung Ương Quân Đội 108',
    location: 'Khoa Trang Bị',
    period: '12/2025 - Hiện tại',
    description: 'Phát triển website quản lý vật tư y tế của bệnh viện',
    achievements: [
      'Học được cách triển khai một dự án phần mềm hoàn chỉnh',
      'Làm việc với API và database nội bộ',
      'Phát triển kỹ năng làm việc nhóm trong môi trường thực tế',
    ],
  },
];

export const contactInfo: ContactInfo = {
  phone: '0943914498',
  email: 'hongphucnguyentrong@gmail.com',
  location: 'Hà Nội, Việt Nam',
  github: 'https://github.com/Hongphuc05',
  linkedin: 'https://linkedin.com',
};

export const aboutInfo = {
  education: {
    school: 'Trường ĐH Công nghệ - ĐHQG Hà Nội',
    major: 'Trí Tuệ Nhân Tạo',
    gpa: '3.0',
    period: '08/2016 - 06/2020',
  },
  achievements: ['Top 10% Naver Hackathon', 'Giải khuyến khích UET Makathon'],
  goal: 'Phát triển thành AI Engineer có khả năng thiết kế và vận hành các hệ thống thông minh trong môi trường production.',
};
