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
        about: 'Giới Thiệu',
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
        year: 'năm',
        seeAllMenu:'Xem Toàn Bộ Thực Đơn',
        bookTable: 'Đặt Bàn Ngay',
      },
      home: {
        heroTitle: 'Bánh Cuốn',
        heroBrand: 'Tây Hồ',
        heroSubtitle: 'Từ bàn tay khéo léo, mỗi phần bánh là một câu chuyện Việt',
        heroOpenTime: 'Mở cửa hàng ngày',
        heroAddress:'Địa chỉ chính',
        heroLocation:'127 Đinh Tên Hoàng - Đa Kao, Quận 1, TP. HCM',
        heroOrder: 'Đặt bàn',
        welcomeTitle: 'Chào Mừng Đến Với Bánh Cuốn Tây Hồ',
        storyFirst:'Bắt đầu từ năm',
        storySecond: 'đã bắt đầu hành trình lan tỏa hương vị truyền thống Việt. Chúng tôi tự hào giữ gìn công thức gia truyền và quy trình thủ công, tạo nên những chiếc bánh cuốn',
        storyThird:'mỏng mịn, thơm ngon, mang đậm hồn dân tộc',
        storyFour: 'Trải qua hơn',
        storyFive: ' thương hiệu đã trở thành một phần quen thuộc trong ký ức của người Việt, và là một điểm dừng chân không thể bỏ lỡ với du khách mỗi khi đến',
        storySix:'  Với từng phần bánh là một câu chuyện, chúng tôi mang đến trải nghiệm ẩm thực',
        storySeven:'đúng chất Việt Nam',
        videoTitle1:'Quy Trình',
        videoTitle2:'Làm Bánh',
        videoSubtitle:'Khám phá quy trình thủ công tỉ mỉ để tạo nên những chiếc bánh cuốn mỏng mịn, đậm đà hương vị truyền thống – một đặc sản nổi tiếng hơn 60 năm của Hà Nội.',
        videoDescription: ' Bánh cuốn được làm từ bột gạo xay nhuyễn hoà với nước theo tỉ lệ chuẩn, sau đó tráng mỏng trên lớp vải căng đặt trên nồi nước sôi. Lớp bánh mỏng tang vừa chín tới sẽ được nhẹ nhàng lấy ra, cuốn cùng nhân thịt băm, mộc nhĩ thơm lừng hoặc để chay tuỳ khẩu vị. Cuối cùng, bánh được rắc thêm hành phi vàng ruộm và thưởng thức cùng nước mắm pha đậm đà.',
        foodSubtitle:'Khám phá các loại bánh cuốn đặc sắc của Tây Hồ – từ bánh cuốn chay đến nhân thịt thơm ngon',
        foodTitle1: 'Món Đặc Trưng',
        foodSubtitle1:'Khám phá các loại bánh cuốn đặc sắc của Tây Hồ – từ bánh cuốn chay đến nhân thịt thơm ngon.',
        processTitle: 'Quy Trình Làm Bánh',
        ctaTitle: ' 60 Năm Vẹn Nguyên, Hương Vị Việt',
        ctaSubTitle: 'Bánh cuốn Tây Hồ không chỉ là món ăn, mà là ký ức, là tinh hoa ẩm thực Việt được trao truyền qua bao thế hệ.',
        customer: 'Khách Hàng',
        speak:'Nói Gì',
        aboutUs:'Về Chúng Tôi',
        reviews:'đánh giá'

      },
      menu: {
        title: 'Thực Đơn',
        subtitle: 'Tìm hiểu thực đơn đa dạng của chúng tôi, từ món chay thanh đạm đến món mặn',
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
        name: 'Họ và Tên',
        email: 'Email',
        phone: 'Số Điện Thoại',
        position: 'Vị Trí Ứng Tuyển',
        experience: 'Kinh Nghiệm',
        message: 'Giới Thiệu Bản Thân',
        submit: 'Gửi Đơn',
        requiredField: 'Trường bắt buộc',
        successMessage: "Gửi thành công!",
        emailSentSuccess: "cảm ơn bạn đã gửi đơn ứng tuyển. Chúng tôi sẽ liên hệ sớm nhất!",
        errorMessage: "Gửi thất bại",
        emailSentError: "Đã có lỗi xảy ra khi gửi. Vui lòng thử lại sau hoặc kiểm tra kết nối mạng.",
        processTitle: 'Quy Trình Ứng Tuyển',
        processSubtitle: 'Tìm hiểu các bước trong quy trình tuyển dụng của Bánh Cuốn Tây Hồ',
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
      about: {
        storyTitle: 'Câu Chuyện Của Chúng Tôi',
        storyDescription1:' Bánh Cuốn Tây Hồ bắt đầu từ một cửa hàng nhỏ tại phố cổ Hà Nội vào năm 1972. Với công thức gia truyền độc đáo và tình yêu dành cho ẩm thực truyền thống Việt Nam,chúng tôi đã dần xây dựng được thương hiệu uy tín và được yêu mến trong lòng người dân Hà Nội.',
        storyDescription2:' Trải qua hơn 5 thập kỷ, Bánh Cuốn Tây Hồ vẫn giữ nguyên hương vị truyền thống với bột gạo tươi được làm thủ công mỗi ngày, nhân thịt thơm ngon, và nước chấm đặc trưng theo công thức bí truyền.',
        storyDescription3: ' Ngày nay, Bánh Cuốn Tây Hồ đã phát triển thành chuỗi nhà hàng trên khắp Việt Nam, nhưng chúng tôi vẫn luôn giữ vững triết lý kinh doanh: tôn trọng truyền thống, đảm bảo chất lượng, và không ngừng đổi mới để mang đến trải nghiệm tốt nhất cho khách hàng.',
        storyImgtitle1: 'Hơn 60 năm',
        storyImgtitle2:'gìn giữ hương vị truyền thống', 
        timelineTitle: 'Hành Trình Phát Triển',
        timeSubtitle: 'Những cột mốc quan trọng trong lịch sử phát triển của Bánh Cuốn Tây Hồ', 
        valueTitle: 'Giá Trị Cốt Lõi',
        valueSubtitle: 'Những nguyên tắc và giá trị định hướng mọi hoạt động của chúng tôi' ,
        
      }
     
    },

    //english
    en: {
      common: {
        home: 'Home',
        menu: 'Menu',
        about: 'About',
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
        year: 'year',
        seeAllMenu: 'View Full Menu',
        bookTable: 'Book a Table Now'

      },
      home: {
        heroTitle: 'Banh Cuon',
        heroBrand: 'Tay Ho',
        heroSubtitle: "Crafted by skillful hands, each roll tells a story of Vietnam",
        heroOpenTime: 'Open daily',
        heroAddress:'Main Address',
        heroLocation: "127 Dinh Tien Hoang - Da Kao, District 1, Ho Chi Minh City",
        heroOrder: "Reserve a Table",
        welcomeTitle: 'Welcome to Banh Cuon Tay Ho',
        storyFirst: 'Since the year',
        storySecond: 'we have begun our journey to share the traditional flavors of Vietnam. We take pride in preserving our family recipe and handmade process, creating each bánh cuốn',
        storyThird: 'delicately thin, fragrant, and rich in Vietnamese heritage.',
        storyFour: 'After more than',
        storyFive: ' the brand has become a familiar part of Vietnamese memories and a must-visit stop for travelers whenever they come to',
        storySix: '  Each rice roll tells a story, bringing an authentic culinary experience',
        storySeven: 'true to the spirit of Vietnam.',
        processTitle: 'Our Making Process',
        videoTitle1: 'The Process',
        videoTitle2: 'of Making Banh Cuon',
        videoSubtitle: 'Discover the meticulous handmade process behind each delicate rice roll – a traditional delicacy with over 60 years of heritage from Hanoi.',
        videoDescription: 'Banh cuon is made by mixing finely ground rice flour with water in a precise ratio, then spreading it thinly on a tightly stretched cloth over boiling water. Once gently steamed, the delicate rice sheet is removed and rolled with aromatic minced pork and wood ear mushrooms, or kept vegetarian depending on taste. Finally, it is topped with golden fried shallots and enjoyed with rich, flavorful fish sauce.',
        foodSubtitle: 'Discover the signature varieties from flavorful vegetarian rolls to savory meat-filled delights.',
        foodTitle1: 'Signature Dishes',
        foodSubtitle1: 'Discover the signature varieties of Tay Ho’s bánh cuốn – from flavorful vegetarian rolls to savory meat-filled delights.',
        customer: 'What Customers',
        ctaTitle: '60 Years of Authentic Vietnamese Flavor',
        ctaSubTitle: 'Tay Ho’s banh cuon is not just food — it’s a memory, a culinary treasure passed down through generations.',
        speak: 'Say',
        aboutUs: 'About Us',
        reviews: 'Reviews',


      },
      menu: {
        title: 'Menu',
        subtitle: 'Discover our diverse menu, from light vegetarian dishes to flavorful savory options.',
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
        successMessage: "Submission Successful!",
        emailSentSuccess: "thank you for applying. We’ll get back to you shortly!",
        errorMessage: "Submission Failed",
        emailSentError: "An error occurred while sending. Please try again later or check your internet connection.",
        processTitle: 'Application Process',
        processSubtitle: 'Learn about the steps in Bánh Cuốn Tây Hồ’s recruitment process',

      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We Are Always Ready to Serve You',
        address: '127 Dinh Tien Hoang - Da Kao, District 1, Ho Chi Minh City',
        phone: '028 3820 0584',
        hours: '5:30 AM - 9:30 PM (Monday - Sunday)',
        orderOnline: 'Order Online',
        scanQR: 'Scan the QR code to order via ShopeeFood',
        messageUs: 'Send Us a Message',
        name: 'Your Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',

      },
      about: {
        storyTitle: 'Our Story',
        storyDescription1: 'Banh Cuon Tay Ho began as a small shop in Hanoi’s Old Quarter in 1972. With a unique family recipe and a deep love for traditional Vietnamese cuisine, we gradually built a trusted and beloved brand in the hearts of Hanoians.',
        storyDescription2: 'For over five decades, Bánh Cuốn Tây Hồ has preserved its authentic flavor—featuring freshly handmade rice batter daily, savory meat fillings, and a signature dipping sauce based on a secret recipe.',
        storyDescription3: 'Today, Bánh Cuốn Tây Hồ has grown into a restaurant chain across Vietnam, but we remain committed to our core philosophy: honoring tradition, ensuring quality, and continuously innovating to deliver the best experience to our customers.',
        storyImgtitle1: 'Over 60 Years',
        storyImgtitle2: 'of Preserving Traditional Flavor',
        timelineTitle: 'Our Development Journey',
        timeSubtitle: 'Key milestones in the history of Banh Cuon Tay Ho’s growth',
        valueTitle: 'Core Values',
        valueSubtitle: 'The principles and values that guide all of our actions',
      }

    },

    //japan
    jp: {
      common: {
        home: 'ホーム',
        menu: 'メニュー',
        about: 'アバウト・アス',
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
        year: '年',
        seeAllMenu: 'メニューをすべて見る',
        bookTable: '今すぐ予約する'

      


      },
      home: {
        heroTitle: 'バインクオン',
        heroBrand: 'タイホー',
        heroSubtitle: "巧みな手から生まれた一つひとつのバインクオンに、ベトナムの物語が込められている",
        heroOpenTime: "毎日営業",
        heroAddress:'本店住所',
        heroLocation: "ホーチミン市1区ダカオ区ディン・ティエン・ホアン通り127番地",
        heroOrder: "席を予約する",
        welcomeTitle: 'バインクオン・タイホーへようこそ',
        storyFirst: 'その年から、',
        storySecond: '私たちはベトナムの伝統的な味を広める旅を始めました。家族のレシピと手作りの製法を守り続け、一つひとつのバインクオンを',
        storyThird: '繊細で香り高く、ベトナムの文化を色濃く映す味わいに仕上げています。',
        storyFour: '〜年以上の歳月を経て、',
        storyFive: ' このブランドは多くのベトナム人にとって懐かしい存在となり、訪れる旅行者にとっても外せない立ち寄りスポットとなっています。',
        storySix: '  一つひとつのバインクオンには物語があり、本物の味わいを通じて',
        storySeven: 'ベトナムらしさをお届けします。',
        processTitle: '製造プロセス',
        videoTitle1: '工程',
        videoTitle2: 'バインクオン作り',
        videoSubtitle: 'ハノイで60年以上愛されてきた伝統の味—薄くて繊細なバインクオンを生み出す、丁寧な手作業の工程をご紹介します。',
        videoDescription: 'バインクオンは、細かく挽いた米粉を水と正確な比率で混ぜ、生地を沸騰したお湯の上に張った布の上で薄く広げて蒸します。蒸し上がったばかりの薄い生地は丁寧に取り出され、香ばしい豚ひき肉やきくらげの具を包んだり、好みに応じて精進風にも仕上げられます。最後にカリッと揚げたエシャロットをふりかけ、風味豊かなヌクマム（魚醤）と共に味わいます。',
        foodTitle1: '名物料理',
        foodSubtitle1: '西湖のバインクオンの多彩な味わいを発見—風味豊かな精進巻きから香ばしい肉入りまで。',
        testimonialTitle: 'お客様の声',
        ctaTitle: '60年守り続けた、本物のベトナムの味',
        ctaSubTitle: '西湖のバインクオンは、ただの料理ではなく、世代を超えて受け継がれる記憶とベトナム料理の真髄です。',
        customer:'お客様（おきゃくさま',
        speak: 'の声',
        aboutUs: '私たちについて',
        reviews: 'レビュー',

      },
      menu: {
        title: 'メニュー',
        subtitle: 'あっさりとしたベジタリアン料理から風味豊かな料理まで、私たちの多彩なメニューをご覧ください。',
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
        successMessage: "送信が完了しました！",
        emailSentSuccess: "ご応募ありがとうございます。担当者より近日中にご連絡いたします。",
        errorMessage: "送信に失敗しました",
        emailSentError: "送信中にエラーが発生しました。しばらくしてから再試行するか、インターネット接続をご確認ください。",
        processTitle: '応募プロセス',
        processSubtitle: 'バインクオン・タイホーの採用プロセスの各ステップをご紹介します',

      },
      contact: {
        title: 'お問い合わせ',
        subtitle: 'いつでもあなたのご来店をお待ちしております',
        address: '127 Dinh Tien Hoang 通り - Da Kao, 1区, ホーチミン市',
        phone: '028 3820 0584',
        hours: '5:30〜21:30（月曜〜日曜）',
        orderOnline: 'オンライン注文',
        scanQR: 'ShopeeFoodで注文するにはQRコードをスキャンしてください',
        messageUs: 'メッセージを送る',
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ内容',
        send: '送信',

      },
      about: {
        storyTitle: '私たちの物語',
        storyDescription1: 'バインクオン・タイホーは、1972年にハノイ旧市街の小さな店舗から始まりました。ユニークな家伝レシピとベトナム伝統料理への深い愛情により、私たちは次第にハノイの人々に愛され、信頼されるブランドを築き上げてきました。',
        storyDescription2: '50年以上の歳月を経ても、バインクオン・タイホーは毎日手作りされる新鮮な米粉生地、香ばしい肉の具材、そして秘伝のタレで伝統の味を守り続けています。',
        storyDescription3: '現在、バインクオン・タイホーはベトナム全土に店舗を展開するチェーンへと成長しましたが、私たちは「伝統を大切に、品質を守り、常に革新を続ける」という理念を貫き、お客様に最高の体験をお届けしています。',
        storyImgtitle1: '60年以上',
        storyImgtitle2: '伝統の味を守り続ける',
        timelineTitle: '発展の歩み',
        timeSubtitle: 'バインクオン・タイホーの歴史における重要な節目',
        valueTitle: 'コアバリュー（核心的価値）',
        valueSubtitle: '私たちのすべての行動を導く理念と価値観',



      }
    },
  };
  
  export default translations;
  