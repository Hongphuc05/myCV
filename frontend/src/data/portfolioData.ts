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
  },
  {
    title: 'Hệ thống Phát hiện Đối tượng',
    description:
      'Xây dựng hệ thống phát hiện vật thể trong ảnh từ đầu với 5 nhãn, thực hiện kỹ thuật fine-tuning từ mô hình ConvNeXt.',
    tags: ['Computer Vision', 'ConvNeXt', 'Fine-tuning', 'PyTorch'],
    github: 'https://github.com/Hongphuc05/object-detection',
    icon: 'eye',
  },
  {
    title: 'Quản lý học sinh trên xe đưa đón',
    description:
      'Hệ thống nhận dạng và quản lý người ra vào trên xe đưa đón học sinh sử dụng YOLOv8 và FaceNet để nhận diện mặt học sinh.',
    tags: ['YOLOv8', 'FaceNet', 'Computer Vision', 'Backend'],
    github: 'https://github.com/thangtrandoan/thptht_AI',
    icon: 'bus',
  },
  {
    title: 'Phân tích Topic & Sentiment',
    description:
      'Phân tích chủ đề và cảm xúc của văn bản tiếng Việt sử dụng PhoBERT (SOTA) với tập dữ liệu 20GB văn bản. Áp dụng Threshold Tuning để xử lý dữ liệu mất cân bằng.',
    tags: ['PhoBERT', 'NLP', 'Sentiment Analysis', 'Threshold Tuning'],
    github: 'https://github.com/Hongphuc05/demo-web',
    icon: 'comments',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Kỹ Sư Dữ Liệu',
    company: 'Công ty TNHH THEHEGEO - Sở KHCN Hà Nội',
    location: 'Hà Nội',
    period: '02/2026 - Hiện tại',
    description: 'Phát triển hệ thống Data Lakehouse & Cơ sở dữ liệu Đồ thị (Graph DB) phân tích rủi ro dữ liệu thuế và hóa đơn doanh nghiệp',
    achievements: [
      'Thiết kế & triển khai thành công luồng Event-Driven Data Lakehouse (Bronze - Silver - Gold) từ A-Z bằng Apache Iceberg, Apache Airflow, MinIO và EventBridge để tự động hóa xử lý tờ khai BCTC và dữ liệu hóa đơn.',
      'Ứng dụng CSDL đồ thị NebulaGraph (nGQL) trích xuất mạng lưới quan hệ doanh nghiệp, kết hợp nhãn AI hỗ trợ phát hiện rủi ro giao dịch bất thường và hóa đơn khống.',
      'Phát triển kỹ năng làm sạch dữ liệu lớn (ETL/Data Quality), tính toán Feature tài chính, tối ưu truy vấn (Redis Cache / Lakehouse Compaction) và giải quyết vấn đề testing / sửa lỗi hệ thống.',
    ],
  },
  {
    title: 'Leader Đội Ngũ Phát Triển Dự Án AI & Lập Trình Viên Phần Mềm',
    company: 'Công ty Nội thất GUU&T',
    location: 'Vinhomes Smart City, Hà Nội',
    period: '12/2025 - 07/2026',
    description: 'Phát triển đội ngũ AI agent quản lý quy trình làm việc cho lĩnh vực kiến trúc sư',
    achievements: [
      'Học được cách ứng dụng AI agent để thay thế các quy trình nghiệp vụ thực tế',
      'Thiết kế và deploy một trang web ra thị trường từ a-z (www.guut.com.vn)',
      'Phát triển kỹ năng xử lý, giải quyết vấn đề và testing sửa lỗi',
    ],
  },
  {
    title: 'Thực Tập Sinh Phần Mềm Khoa Trang Bị',
    company: 'Bệnh viện Trung ương Quân đội 108',
    location: 'Khoa Trang Bị',
    period: '09/2025 - 06/2026',
    description: 'Làm website quản lí vật tư y tế của bệnh viện',
    achievements: [
      'Học được cách triển khai một dự án software, cách gọi và làm việc API với các trang web và database nội bộ',
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
    gpa: '3.2',
    period: '08/2023 - 02/2027',
  },
  achievements: ['Chung kết 10% thí sinh xuất sắc Naver Hackathon', 'Giải khuyến khích UET Makathon'],
  goal: 'Tôi là sinh viên ngành Trí tuệ nhân tạo, có nền tảng về Machine Learning, phát triển phần mềm và các công cụ tự động hóa. Tôi mong muốn được tham gia vào môi trường làm việc thực tế để áp dụng kiến thức AI, xây dựng hệ thống phần mềm và triển khai các giải pháp tự động hóa nhằm giải quyết bài toán doanh nghiệp. Trong dài hạn, tôi định hướng phát triển trở thành AI Engineer có khả năng thiết kế, phát triển và vận hành các hệ thống thông minh ở môi trường production.',
};
