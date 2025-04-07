export type JobPosition = {
    id: number;
    title: {
      vi: string;
      en: string;
      jp: string;
    };
    description: {
      vi: string;
      en: string;
      jp: string;
    };
    requirements: {
      vi: string[];
      en: string[];
      jp: string[];
    };
    salary: {
      vi: string;
      en: string;
      jp: string;
    };
  };
  
  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: {
        vi: 'Đầu Bếp Bánh Cuốn',
        en: 'Banh Cuon Chef',
        jp: 'バインクオンシェフ',
      },
      description: {
        vi: 'Chịu trách nhiệm chính trong việc tráng và làm bánh cuốn theo công thức gia truyền của quán.',
        en: 'Responsible for preparing and making banh cuon according to our traditional family recipe.',
        jp: '当店の伝統的な家族のレシピに従ってバインクオンを準備し作る責任者。',
      },
      requirements: {
        vi: ['Có kinh nghiệm làm bánh cuốn ít nhất 1 năm', 'Nắm vững kỹ thuật tráng bánh mỏng, đều', 'Có khả năng làm việc nhanh trong giờ cao điểm', 'Sức khỏe tốt, chịu được áp lực công việc'],
        en: ['At least 1 year experience making banh cuon', 'Mastery of thin, even rice paper techniques', 'Ability to work quickly during peak hours', 'Good health, able to work under pressure'],
        jp: ['バインクオン製造の経験が少なくとも1年', '薄く均一なライスペーパーの技術の習得', 'ピーク時に迅速に作業する能力', '健康状態が良く、プレッシャーの下で働ける'],
      },
      salary: {
        vi: '8-12 triệu VNĐ/tháng (tùy kinh nghiệm)',
        en: '8-12 million VND/month (depending on experience)',
        jp: '月給800万〜1200万ドン（経験による）',
      },
    },
    {
      id: 2,
      title: {
        vi: 'Nhân Viên Phục Vụ',
        en: 'Waiter/Waitress',
        jp: 'ウェイター/ウェイトレス',
      },
      description: {
        vi: 'Chào đón và phục vụ khách hàng, giới thiệu món ăn và đảm bảo khách hàng có trải nghiệm tốt nhất.',
        en: 'Welcome and serve customers, introduce dishes and ensure customers have the best experience.',
        jp: 'お客様を歓迎し、料理を紹介し、お客様に最高の体験をしていただけるようサービスを提供。',
      },
      requirements: {
        vi: ['Thái độ thân thiện, niềm nở với khách hàng', 'Kỹ năng giao tiếp tốt', 'Nhanh nhẹn, cẩn thận trong công việc', 'Ưu tiên có kinh nghiệm làm việc trong ngành F&B'],
        en: ['Friendly attitude towards customers', 'Good communication skills', 'Quick and careful at work', 'Previous experience in F&B industry preferred'],
        jp: ['お客様への友好的な態度', '優れたコミュニケーションスキル', '仕事が迅速かつ注意深い', 'F&B業界での経験があれば優先'],
      },
      salary: {
        vi: '5-7 triệu VNĐ/tháng + tiền boa',
        en: '5-7 million VND/month + tips',
        jp: '月給500万〜700万ドン + チップ',
      },
    },
    {
      id: 3,
      title: {
        vi: 'Thu Ngân',
        en: 'Cashier',
        jp: 'キャッシャー',
      },
      description: {
        vi: 'Quản lý thu tiền, hoá đơn và xử lý các giao dịch thanh toán từ khách hàng.',
        en: 'Manage cash collection, invoices and process payment transactions from customers.',
        jp: '現金回収、請求書の管理、お客様からの支払い取引の処理。',
      },
      requirements: {
        vi: ['Kỹ năng tính toán nhanh, chính xác', 'Thành thạo sử dụng máy tính và phần mềm POS', 'Thái độ chuyên nghiệp và lịch sự', 'Trung thực, cẩn thận với tiền bạc'],
        en: ['Quick and accurate calculation skills', 'Proficient in using computers and POS software', 'Professional and polite attitude', 'Honest, careful with money'],
        jp: ['迅速かつ正確な計算スキル', 'コンピューターとPOSソフトウェアの使用に熟練', 'プロフェッショナルで丁寧な態度', '金銭に対して正直で慎重'],
      },
      salary: {
        vi: '6-8 triệu VNĐ/tháng',
        en: '6-8 million VND/month',
        jp: '月給600万〜800万ドン',
      },
    },
    {
      id: 4,
      title: {
        vi: 'Quản Lý Cửa Hàng',
        en: 'Store Manager',
        jp: 'ストアマネージャー',
      },
      description: {
        vi: 'Quản lý toàn bộ hoạt động của cửa hàng, bao gồm nhân sự, hàng hóa, chất lượng dịch vụ và kinh doanh.',
        en: 'Manage all store operations, including personnel, goods, service quality and business.',
        jp: '人員、商品、サービス品質、ビジネスを含むすべての店舗運営の管理。',
      },
      requirements: {
        vi: ['Có ít nhất 2 năm kinh nghiệm quản lý trong ngành F&B', 'Kỹ năng lãnh đạo và quản lý nhân sự tốt', 'Nắm vững quy trình kinh doanh nhà hàng', 'Khả năng giải quyết vấn đề và làm việc dưới áp lực cao'],
        en: ['At least 2 years management experience in F&B industry', 'Good leadership and personnel management skills', 'Strong knowledge of restaurant business processes', 'Problem-solving ability and working under high pressure'],
        jp: ['F&B業界での少なくとも2年の管理経験', '優れたリーダーシップと人事管理スキル', 'レストランビジネスプロセスの強い知識', '問題解決能力と高いプレッシャーの下での作業'],
      },
      salary: {
        vi: '15-20 triệu VNĐ/tháng + thưởng',
        en: '15-20 million VND/month + bonuses',
        jp: '月給1500万〜2000万ドン + ボーナス',
      },
    },
  ];
  
  export default jobPositions;