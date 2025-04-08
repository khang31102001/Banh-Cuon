type TranslationType = {
    [lang: string]: {
      [key: string]: string | { [key: string]: string };
    };
  };
  
  const translations: TranslationType = {
    vi: {
      common: {
        home: 'Trang Chủ',
        menu: 'Thực Đơn',
        recruitment: 'Tuyển Dụng',
        contact: 'Liên Hệ',
        orderNow: 'Đặt Ngay',
        apply: 'Ứng Tuyển Ngay',
        viewMenu: 'Xem Thực Đơn',
        address: 'Địa Chỉ',
        phone: 'Điện Thoại',
        hours: 'Giờ Mở Cửa',
        follow: 'Theo Dõi Chúng Tôi',
        darkMode: 'Chế Độ Tối',
        lightMode: 'Chế Độ Sáng',
        vegetarian: 'Món Chay',
        nonVegetarian: 'Món Mặn',
        all: 'Tất Cả',
      },
      home: {
        heroTitle: 'Bánh Cuốn Tây Hồ',
        heroSubtitle: 'Hương Vị Truyền Thống Hơn 30 Năm',
        welcomeTitle: 'Chào Mừng Đến Với Bánh Cuốn Tây Hồ',
        welcomeText: 'Bánh cuốn Tây Hồ tự hào mang đến hương vị truyền thống Hà Nội với công thức gia truyền hơn 30 năm. Mỗi chiếc bánh được làm thủ công, tráng mỏng mịn và cuốn với nhân thơm ngon từ thịt, nấm, hành phi và gia vị đặc biệt.',
        processTitle: 'Quy Trình Làm Bánh',
        testimonialTitle: 'Khách Hàng Nói Gì',
        testimonial1Name: 'Nguyễn Văn A',
        testimonial1Text: 'Bánh cuốn ở đây mỏng, mềm, thơm mùi gạo, nhân thịt đậm đà. Nước chấm chua ngọt vừa miệng!',
        testimonial2Name: 'Trần Thị B',
        testimonial2Text: 'Quán sạch sẽ, nhân viên phục vụ nhiệt tình. Bánh cuốn ngon đúng vị Hà Nội!',
        testimonial3Name: 'Lê Văn C',
        testimonial3Text: 'Đã thử nhiều quán bánh cuốn nhưng vẫn thích nhất ở Tây Hồ. Giá cả hợp lý, phần ăn đầy đặn.',
      },
      menu: {
        title: 'Thực Đơn',
        subtitle: 'Hương Vị Truyền Thống',
        vegetarianTitle: 'Món Chay',
        nonVegetarianTitle: 'Món Mặn',
        price: 'Giá',
        currency: '₫',
        ingredients: 'Nguyên Liệu',
      },
      recruitment: {
        title: 'Tuyển Dụng',
        subtitle: 'Tham Gia Đội Ngũ Bánh Cuốn Tây Hồ',
        joinUs: 'Tại sao nên gia nhập đội ngũ chúng tôi?',
        benefit1: 'Môi trường làm việc chuyên nghiệp, thân thiện',
        benefit2: 'Cơ hội thăng tiến và phát triển kỹ năng',
        benefit3: 'Chế độ lương thưởng và phúc lợi hấp dẫn',
        benefit4: 'Được đào tạo bài bản về ẩm thực truyền thống',
        openPositions: 'Vị Trí Đang Tuyển',
        position1: 'Đầu Bếp Bánh Cuốn',
        position2: 'Nhân Viên Phục Vụ',
        position3: 'Thu Ngân',
        position4: 'Quản Lý Cửa Hàng',
        applyForm: 'Đơn Ứng Tuyển',
        fullName: 'Họ và Tên',
        email: 'Email',
        phone: 'Số Điện Thoại',
        position: 'Vị Trí Ứng Tuyển',
        experience: 'Kinh Nghiệm',
        message: 'Giới Thiệu Bản Thân',
        submit: 'Gửi Đơn',
        requiredField: 'Trường bắt buộc',
        successMessage: 'Đơn ứng tuyển đã được gửi thành công!',
      },
      contact: {
        title: 'Liên Hệ',
        subtitle: 'Chúng Tôi Luôn Sẵn Sàng Phục Vụ Bạn',
        address: '127 Đinh Tiên Hoàng - Đa Kao, Q 1, Tp.HCM',
        phone: '028 3820 0584',
        hours: '5:30 - 21:30 (Thứ 2 - Chủ Nhật)',
        orderOnline: 'Đặt Hàng Online',
        scanQR: 'Quét mã QR để đặt hàng qua ShopeeFood',
        messageUs: 'Gửi Tin Nhắn Cho Chúng Tôi',
        name: 'Tên của bạn',
        email: 'Email',
        message: 'Tin nhắn',
        send: 'Gửi',
      },
    },
    en: {
      common: {
        home: 'Home',
        menu: 'Menu',
        recruitment: 'Recruitment',
        contact: 'Contact',
        orderNow: 'Order Now',
        apply: 'Apply Now',
        viewMenu: 'View Menu',
        address: 'Address',
        phone: 'Phone',
        hours: 'Opening Hours',
        follow: 'Follow Us',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        vegetarian: 'Vegetarian',
        nonVegetarian: 'Non-Vegetarian',
        all: 'All',
      },
      home: {
        heroTitle: 'Banh Cuon Tay Ho',
        heroSubtitle: 'Traditional Flavor For Over 30 Years',
        welcomeTitle: 'Welcome to Banh Cuon Tay Ho',
        welcomeText: 'Banh Cuon Tay Ho proudly brings you traditional Hanoi flavors with family recipes that have been perfected for over 30 years. Each rice roll is handmade, thinly steamed, and filled with delicious ingredients including meat, mushrooms, fried shallots, and special spices.',
        processTitle: 'Our Making Process',
        testimonialTitle: 'What Customers Say',
        testimonial1Name: 'Nguyen Van A',
        testimonial1Text: 'The rice rolls here are thin, soft, aromatic with a rich savory filling. The dipping sauce is perfectly balanced!',
        testimonial2Name: 'Tran Thi B',
        testimonial2Text: 'Clean restaurant with attentive staff. The banh cuon tastes authentically Hanoi!',
        testimonial3Name: 'Le Van C',
        testimonial3Text: 'I\'ve tried many banh cuon places but Tay Ho remains my favorite. Reasonable prices, generous portions.',
      },
      menu: {
        title: 'Menu',
        subtitle: 'Traditional Flavors',
        vegetarianTitle: 'Vegetarian',
        nonVegetarianTitle: 'Non-Vegetarian',
        price: 'Price',
        currency: 'VND',
        ingredients: 'Ingredients',
      },
      recruitment: {
        title: 'Recruitment',
        subtitle: 'Join the Banh Cuon Tay Ho Team',
        joinUs: 'Why join our team?',
        benefit1: 'Professional and friendly working environment',
        benefit2: 'Career growth and skill development opportunities',
        benefit3: 'Attractive salary and benefits package',
        benefit4: 'Comprehensive training in traditional cuisine',
        openPositions: 'Open Positions',
        position1: 'Banh Cuon Chef',
        position2: 'Waiter/Waitress',
        position3: 'Cashier',
        position4: 'Store Manager',
        applyForm: 'Application Form',
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        position: 'Position',
        experience: 'Experience',
        message: 'About Yourself',
        submit: 'Submit Application',
        requiredField: 'Required field',
        successMessage: 'Your application has been successfully submitted!',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We Are Always Ready to Serve You',
        address: '123 Lac Long Quan Street, Tay Ho, Hanoi',
        phone: '024 1234 5678',
        hours: '7:00 AM - 9:00 PM (Monday - Sunday)',
        orderOnline: 'Order Online',
        scanQR: 'Scan QR code to order via ShopeeFood',
        messageUs: 'Send Us a Message',
        name: 'Your Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
      },
    },
    jp: {
      common: {
        home: 'ホーム',
        menu: 'メニュー',
        recruitment: '採用情報',
        contact: 'お問い合わせ',
        orderNow: '注文する',
        apply: '応募する',
        viewMenu: 'メニューを見る',
        address: '住所',
        phone: '電話番号',
        hours: '営業時間',
        follow: 'フォローする',
        darkMode: 'ダークモード',
        lightMode: 'ライトモード',
        vegetarian: 'ベジタリアン',
        nonVegetarian: '非ベジタリアン',
        all: 'すべて',
      },
      home: {
        heroTitle: 'バインクオン・タイホー',
        heroSubtitle: '30年以上の伝統の味',
        welcomeTitle: 'バインクオン・タイホーへようこそ',
        welcomeText: 'バインクオン・タイホーは、30年以上受け継がれてきた家族のレシピで、伝統的なハノイの味を誇りを持ってお届けします。各ライスロールは手作りで、薄く蒸され、肉、きのこ、揚げたエシャロット、特製スパイスなどのおいしい具材が詰められています。',
        processTitle: '製造プロセス',
        testimonialTitle: 'お客様の声',
        testimonial1Name: 'グエン・ヴァン・A',
        testimonial1Text: 'ここのライスロールは薄くて柔らかく、香り豊かで、具も豊富です。つけダレのバランスが絶妙！',
        testimonial2Name: 'チャン・ティ・B',
        testimonial2Text: '清潔なレストランで、スタッフの対応も丁寧。バインクオンは本格的なハノイの味がします！',
        testimonial3Name: 'レ・ヴァン・C',
        testimonial3Text: '多くのバインクオンの店を試しましたが、タイホーが一番のお気に入りです。リーズナブルな価格で、量も多いです。',
      },
      menu: {
        title: 'メニュー',
        subtitle: '伝統の味',
        vegetarianTitle: 'ベジタリアン',
        nonVegetarianTitle: '非ベジタリアン',
        price: '価格',
        currency: 'VND',
        ingredients: '材料',
      },
      recruitment: {
        title: '採用情報',
        subtitle: 'バインクオン・タイホーチームに参加しましょう',
        joinUs: '私たちのチームに参加する理由',
        benefit1: 'プロフェッショナルでフレンドリーな職場環境',
        benefit2: 'キャリアアップとスキル開発の機会',
        benefit3: '魅力的な給与と福利厚生パッケージ',
        benefit4: '伝統料理の総合的なトレーニング',
        openPositions: '募集ポジション',
        position1: 'バインクオンシェフ',
        position2: 'ウェイター/ウェイトレス',
        position3: 'キャッシャー',
        position4: 'ストアマネージャー',
        applyForm: '応募フォーム',
        fullName: '氏名',
        email: 'メールアドレス',
        phone: '電話番号',
        position: 'ポジション',
        experience: '経験',
        message: '自己紹介',
        submit: '応募を送信',
        requiredField: '必須項目',
        successMessage: 'あなたの応募は正常に送信されました！',
      },
      contact: {
        title: 'お問い合わせ',
        subtitle: 'いつでもお客様のサービスに準備ができています',
        address: 'ベトナム ハノイ タイホー区 ラックロンクアン通り123',
        phone: '024 1234 5678',
        hours: '7:00 - 21:00（月曜〜日曜）',
        orderOnline: 'オンライン注文',
        scanQR: 'QRコードをスキャンしてShopeeFood経由で注文',
        messageUs: 'メッセージを送る',
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
        send: '送信',
      },
    },
  };
  
  export default translations;
  