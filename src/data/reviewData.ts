interface Review {
    id: string;
    author_name: string;
    rating: number;
    relative_time_description: string;
    link: string;
    text: {
        vi: string,
        en: string,
        jp: string

    };
    profile_photo_url: string;
  }

export const  mockReviews: Review[] = [
    {
      id: "1",
      author_name: "Am I XNhi?",
      rating: 5,
      relative_time_description: "1 tháng trước",
      link: "https://maps.app.goo.gl/k2CvQR4wxB5XFZVAA",
      text: {
        vi: "Nơi duy nhất ở thành phố khiến mình biết thèm bánh cuốn và cũng là nơi duy nhất mình cảm giác giá tiền cao (trung bình 50-65K/ dĩa) đi đôi với chất lượng.",
        en: "The only place in the city that makes me crave Bánh cuốn—and also the only one where I feel the higher price (around 50–65K per plate) truly matches the quality.",
        jp: "この街で唯一、バインクオンを食べたくなる場所であり、価格が少し高め（1皿あたり約50〜65K）でも、それに見合う品質を感じられる唯一の場所です。",
      },
      
      profile_photo_url: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: "2",
      author_name: "Thanh Tran Thi Thien",
      rating: 4,
      relative_time_description: "2 tuần trước",
      link: "https://maps.app.goo.gl/6TNArR52s5qr6bNL6",
      text: {
        vi: "Bánh cuốn ngon, giá cả hợp lý. Điểm trừ là quán không có máy lạnh nên hơi nực. Một phần bánh cuốn chỉ có 4 cuốn bánh cuốn nhân thịt, không chả, không nem. Muốn ăn phải gọi thêm. Một phần chả, nem có thể ăn được 2 người.",
        en: "The Bánh cuốn is delicious and reasonably priced. The downside is that there's no air conditioning, so it can be a bit hot. One serving includes only 4 meat-filled rolls without any pork sausage or fermented pork. If you want those, you’ll have to order separately. A portion of sausage and nem is enough for two people to share.",
        jp: "バインクオンは美味しくて価格も手頃です。難点はエアコンがなく、少し蒸し暑いことです。1人前には肉入りのバインクオンが4本だけで、チャー（豚ソーセージ）やネム（発酵豚肉）は含まれていません。食べたい場合は別途注文が必要です。チャーとネムの1人前は2人で分けて食べられる量です。",
      },
      profile_photo_url: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: "3",
      author_name: "Ngọc Bảo Châu Nguyễn",
      rating: 5,
      relative_time_description: "3 ngày trước",
      link: "https://maps.app.goo.gl/cczz6jXpEiiB4a796",
      text: {
        vi: "Quán bánh cuốn thương hiệu lâu đời. Mình kêu phần bánh cuốn thịt đặc biệt 60k, trà đá miễn phí và thêm 2k cho khăn lạnh. Đĩa bánh gồm 4 cuốn ú nu, vỏ bánh mỏng vừa ăn, dai ngon, nhân bánh rất nhiều thịt và nêm nếm rất vừa ăn. Vừa ăn vừa đọc những câu chuyện được quán dán trên tường cũng rất thú vị.",
      
        en: "A long-standing Bánh Cuốn brand. I ordered the special pork Bánh Cuốn set for 60,000 VND. Free iced tea and a wet towel cost an extra 2,000 VND. The plate came with 4 plump rolls—the rice paper was thin and chewy, the filling was full of flavorful pork and perfectly seasoned. Reading the stories posted on the restaurant's wall while eating was also a fun experience.",
      
        jp: "老舗のバインクオン専門店です。私は特製の豚肉入りバインクオンセットを60,000ドンで注文しました。アイスティーは無料で、冷たいおしぼりは2,000ドンの追加料金でした。お皿にはふっくらとしたロールが4本。皮は薄くもちもちしていて、具には味付けがちょうど良い豚肉がたっぷり入っていました。食事をしながら、店内の壁に貼られた物語を読むのもとても楽しかったです。",
      },
      profile_photo_url: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: "4",
      author_name: "Myle Le",
      rating: 5,
      relative_time_description: "1 tuần trước",
      link: "https://maps.app.goo.gl/9igmXmWMWWtEau9g8",
      text: {
        vi: "Một tiệm lâu năm và cũng khá có tiếng ở Sài Gòn. Menu chủ yếu là bánh cuốn, giá cũng khá cao. Một đĩa bánh cuốn không có sẵn các loại chả và nem, muốn ăn thì phải gọi phần riêng, vậy giá cũng cao lên nhiều so với 1 đĩa bánh cuốn thông thường.",
        en: "A long-established and fairly well-known restaurant in Saigon. The menu mainly focuses on Bánh cuốn, and the prices are relatively high. A plate of Bánh cuốn doesn't come with pork sausage or fermented pork by default—you have to order them separately, which makes the total cost much higher than a typical Bánh cuốn dish.",
        jp: "ホーチミンで長年営業していて、かなり有名なお店です。メニューは主にバインクオンが中心で、価格はやや高めです。通常のバインクオンの皿にはチャー（豚ソーセージ）やネム（発酵豚肉）は付いておらず、それらを食べたい場合は別途注文する必要があるため、合計金額は一般的なバインクオンよりもかなり高くなります。",
      },
      profile_photo_url: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      id: "5",
      author_name: "Tran Hang",
      rating: 4,
      relative_time_description: "2 tháng trước",
      link: "https://maps.app.goo.gl/7qSPGrHVxXvWBcGW9",
      text: {
        vi: "Ko biết sao quán bị mất địa chỉ trên Google Map nên mình ủng hộ bằng 1 review khác. Nhân viên và quản lý ở đây ai cũng lịch sự và hiếu khách. Bánh cuốn thì chất lượng khỏi chê rồi, chỉ có cà cuống thì quả thực rất khó ăn và khó diễn tả mùi hương haha",
        en: "Not sure why the restaurant's address disappeared from Google Maps, so I'm supporting them with another review. The staff and manager here are all polite and welcoming. The Bánh cuốn is top quality—no complaints at all. As for the *cà cuống* essence, it's honestly hard to eat and even harder to describe the smell, haha.",
        jp: "なぜかGoogleマップからお店の住所が消えてしまったので、応援の気持ちを込めてもう1つレビューを書きます。スタッフもマネージャーも皆さん礼儀正しくて親切です。バインクオンの品質は文句なしです。ただ、カークオン（カメムシの香りエッセンス）は正直かなり食べにくくて、香りを言葉で表すのも難しいです（笑）。",
      },
      profile_photo_url: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      id: "6",
      author_name: "Nougusta",
      rating: 5,
      relative_time_description: "1 tuần trước",
      link: "https://maps.app.goo.gl/u2ikqkSDNDAXWLFt7",
      text: {
        vi: "Một địa điểm tuyệt vời để thưởng thức bánh cuốn! Quán chuyên phục vụ bánh cuốn tươi nóng với cả lựa chọn nhân mặn và chay, giá cả rất phải chăng. Chúng tôi đã thử 3 loại bánh cuốn khác nhau, kèm bánh đậu chiên và trà, tổng cộng khoảng 180,000 VND. Quán đã hoạt động hàng chục năm. Cô chủ rất dễ thương và biết chút tiếng Anh, cô ấy còn hướng dẫn chúng tôi cách pha nước chấm món này. Quán có wifi miễn phí – rất tiện cho khách du lịch. Bánh đậu chiên có vị rất lạ và đặc biệt.",
      
        en: "Great place to have Bánh Cuốn! They specialize in freshly cooked Bánh Cuốn with both meat and vegetarian options at affordable prices. We had 3 different types of Bánh Cuốn, the fried bean cakes, and tea for around VND 180,000. They’ve been operating for decades. A charming lady runs the shop, and they speak a bit of English—she was very kind and even showed us how to make the dipping sauce for this local dish. They also offer free Wi-Fi, which is great for tourists. The fried bean cakes had a unique and different flavor.",
      
        jp: "バインクオンを楽しむには最高のお店です！ここでは、肉入りとベジタリアンの両方の新鮮なバインクオンを手頃な価格で提供しています。私たちは3種類のバインクオン、揚げ豆腐、そしてお茶を注文して、合計で約18万ドンでした。このお店は何十年も営業しており、店主の女性はとても親切で、少し英語も話せます。彼女は地元のこの料理に使うタレの作り方も丁寧に教えてくれました。観光客にうれしい無料Wi-Fiもあります。揚げ豆腐は他では味わえないユニークな風味がありました。",
      },      
      profile_photo_url: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: "7",
      author_name: "Khanh Dinh",
      rating: 4,
      relative_time_description: "3 tuần trước",
      link:"https://maps.app.goo.gl/ARguvRaFGYEqHWrm8",
      text: {
        vi: "Bánh cuốn ở đây ăn rất ngon. Bánh được cuốn to bự với rất nhiều nhân. Một phần bánh ở đây không bao gồm bánh đậu và chả, phải gọi món riêng. Một phần bánh cuốn tôm thịt, thêm bánh đậu và chả là 90,000 vnd. Giá hơi cao với các hàng bánh cuốn bình thường. Trà đá miễn phí. Các chị nhân viên thân thiện.",
        en: "The Bánh cuốn here is really delicious. The rolls are large and generously filled. A basic portion doesn’t include tofu cake or pork sausage—you have to order those separately. A portion of shrimp and pork Bánh cuốn with tofu cake and sausage costs 90,000 VND. The price is a bit high compared to regular Bánh cuốn places. Free iced tea is provided, and the staff are friendly and welcoming.",
        jp: "ここのバインクオンはとても美味しいです。ロールは大きくて具もたっぷり入っています。基本のセットには豆腐揚げやチャー（豚ソーセージ）は含まれていないので、別で注文する必要があります。エビと豚肉のバインクオンに豆腐揚げとチャーを追加すると、価格は90,000VNDになります。一般的なバインクオン店と比べると少し高めです。アイスティーは無料で提供され、スタッフの方々もフレンドリーです。",
      },
      profile_photo_url: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: "8",
      author_name: "Chem bánhMì",
      rating: 5,
      relative_time_description: "2 tuần trước",
      link: "https://maps.app.goo.gl/qxkvz3vVy3xDPRwt7",
      text: {
        vi: "Vị bánh rất ngon, ăn vào sẽ có cảm giác bánh tan chảy trong miệng. Mềm và cực mềm. Bánh chay và bánh mặn, bánh nào cũng ngon. Nhân viên quán thì hiếu khách cực kỳ, cần gì luôn đáp ứng tắc tắc là có. Ăn lâu rồi nay mới review, cô chú Việt kiều về Việt Nam năm nào cũng ghé bánh cuốn Tây Hồ để nhớ về hương vị Việt Nam từ thuở xưa, không chỗ nào có được cái vị bánh như nơi này.",
        
        en: "The Bánh cuốn here is incredibly tasty—it melts in your mouth. So soft, unbelievably soft. Both the vegetarian and meat-filled versions are delicious. The staff are exceptionally hospitable—whatever you need, they respond instantly. I’ve been eating here for a long time, only now getting around to writing a review. Every year, my aunt and uncle who live overseas come back to Vietnam and always visit Bánh Cuốn Tây Hồ to relive the nostalgic flavors of old Vietnam. You just can't find this taste anywhere else.",
        
        jp: "ここのバインクオンは本当に美味しくて、口の中でとろけるような食感です。とても柔らかくて、信じられないほどソフトです。精進料理のバインクオンも肉入りのものも、どちらも絶品です。スタッフの方々はとても親切で、何か頼むとすぐに対応してくれます。長年通っていますが、今回初めてレビューを書きます。海外に住んでいる叔父と叔母は毎年ベトナムに帰国するたびに、昔ながらのベトナムの味を思い出すために必ずこのバインクオン西湖のお店に立ち寄ります。この味は他では決して味わえません。",
      },
      profile_photo_url: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
      id: "9",
      author_name: "TOAN QUOC TRAN (BlackBold)",
      rating: 4,
      relative_time_description: "1 tháng trước",
      link: "https://maps.app.goo.gl/CDjfN4S5bE2p31Tv8",
      text: {
        vi: "Bánh cuốn nhân thịt ngon. Có ăn kèm bánh đậu xanh. Mình thích nước mắm với ớt ở đây nhìn nó tươi lắm. Có phòng lạnh luôn. Phần bánh cuốn nhiều nghen. Đặc biệt là còn nhiều nữa. Chỗ đậu xe hơi ô tô thì hơi bất tiện vì tiệm nằm ngoài mặt tiền đường lộ luôn. Bạn bè nước ngoài du lịch về lần nào mình cũng dẫn lại đây ăn. Hehe",
      
        en: "The meat-filled Bánh cuốn is delicious. It comes with mung bean cake on the side. I really like the fish sauce with chili here—it looks so fresh. There's also an air-conditioned room. The portion of Bánh cuốn is generous, and there's even more than you’d expect. The only downside is that parking for cars can be a bit inconvenient since the restaurant is right on the main road. Every time friends from abroad visit Vietnam, I always bring them here to eat. Hehe",
      
        jp: "肉入りのバインクオンはとても美味しいです。付け合わせには緑豆のお菓子もあります。ここのヌクマム（魚醤）と唐辛子はとても新鮮で見た目もいい感じです。エアコンのある部屋もあります。バインクオンの量はかなり多めで、想像以上にたっぷり出てきます。唯一の難点は、お店が大通り沿いにあるため車の駐車が少し不便なことです。海外から友人がベトナムに来るたびに、必ずここに連れて行って一緒に食べています。へへ。",
      },      
      profile_photo_url: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
      id: "10",
      author_name: "chi hui Yu",
      rating: 5,
      relative_time_description: "2 tháng trước",
      link: "https://maps.app.goo.gl/UX4edzVx9wTpfPjX7",
      text: {
        vi: "Bánh cuốn rất ngon. Có cả lựa chọn chay, mình đã gọi một phần combo chay và thật sự rất tuyệt vời, khác hẳn với những gì mình từng ăn trước đây. Nhân được làm từ hạt sen và nhiều loại đậu. Bánh đậu chay chiên chấm nước mắm thì đúng là khiến người ta phải thèm chảy nước miếng.",
      
        en: "Good Banh cuon. They have a vegetarian option—I ordered the vegetarian combo and it was absolutely delicious, completely different from what I’ve had before. The filling includes lotus seeds and various types of beans. The fried vegetarian bean cake, when dipped in fish sauce, is truly mouthwatering.",
      
        jp: "バインクオンはとても美味しかったです。ベジタリアンメニューもあり、私はベジタリアンコンボを注文しましたが、本当に絶品で、これまでに食べたものとはまったく違っていました。具には蓮の実やさまざまな豆が使われていて、豆の揚げパンをヌクマム（魚醤）に付けて食べると、本当に食欲をそそられます。",
      },      
      profile_photo_url: "https://randomuser.me/api/portraits/women/77.jpg"
    },
    {
      id: "11",
      author_name: "Natasha",
      rating: 4,
      relative_time_description: "3 tháng trước",
      link:"https://maps.app.goo.gl/S16xY4RBovTa2XrS6",
      text: {
        vi: "Đây nên là điểm dừng chân đầu tiên của bạn để ăn sáng tại Sài Gòn. Món ăn thì tuyệt ngon, mà dịch vụ còn tuyệt vời hơn! Cô chủ rất thân thiện và bạn có thể cảm nhận được tình yêu mà gia đình đã dành cho quán này từ khi mẹ cô ấy mở vào những năm 70. Một địa điểm đáng kinh ngạc – chắc chắn sẽ quay lại!",
      
        en: "This should be your first stop for breakfast in Ho Chi Minh City. The food is delicious, and the service is even better! The owner is so friendly, and you can really feel the love that has been poured into this place since her mother opened it in the 1970s. An incredible spot—I'll definitely be back!",
      
        jp: "ホーチミン市で朝食を食べるなら、まず最初に訪れるべきお店です。料理はとても美味しく、サービスはそれ以上に素晴らしいです！オーナーはとても親切で、1970年代にお母様がこのお店を開いて以来、愛情が込められているのが感じられます。素晴らしいお店で、また必ず来たいです！",
      },
       profile_photo_url: "https://randomuser.me/api/portraits/women/77.jpg"
    },
    {
        id: "12",
        author_name: "Dave Ng",
        rating: 5,
        relative_time_description: "2 tháng trước",
        link: "https://maps.app.goo.gl/U4XTk3n6UsfyzKaY9",
        text: {
            vi: "Cô chủ cực kỳ thân thiện, cô còn hướng dẫn chúng tôi cách ăn bánh cuốn đúng cách. Thậm chí cô còn phục vụ tận bàn cho chúng tôi – điều mà chúng tôi không ngờ tới. Chúng tôi gọi phần bánh cuốn thập cẩm với tôm và thịt heo. Một bữa sáng đơn giản, nhẹ nhàng. Bạn cần chấm bánh vào bát nước mắm trước khi ăn. Rất khuyến khích cho những ai chưa từng thử món ăn sáng truyền thống này.",
            en: "The owner is super friendly. She explained to us how to properly eat the rice paper rolls, and even helped serve us—which we didn’t expect. We ordered the mixed rolls with prawn and pork. It was a simple and light breakfast. You need to dip the rolls into a bowl of fish sauce before eating. Highly recommended for anyone who hasn’t tried this traditional Vietnamese breakfast.",
            jp: "オーナーはとても親切で、バインクオン（ライスペーパーロール）の正しい食べ方を丁寧に教えてくれました。しかも、私たちに直接料理を運んでくれるとは思っていなかったので驚きました。私たちはエビと豚肉のミックスロールを注文しました。シンプルで軽めの朝食でした。食べる前にヌクマム（魚醤）にロールを浸してからいただきます。ベトナムの伝統的な朝食をまだ体験したことがない方には、ぜひおすすめしたいです。",
          },          
        profile_photo_url: "https://randomuser.me/api/portraits/women/77.jpg"
      },
]