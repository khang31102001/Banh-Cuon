

const Testimonials = () =>{
    return(

        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-restaurant-dark mb-4">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Những đánh giá chân thực từ khách hàng đã trải nghiệm dịch vụ tại Bánh Cuốn Ville.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-container">
            {[
              {
                name: "Nguyễn Văn A",
                role: "Khách hàng thường xuyên",
                comment: "Bánh cuốn ở đây thực sự ngon, đặc biệt là bánh cuốn nhân thịt. Không gian quán đẹp và sạch sẽ, nhân viên phục vụ rất thân thiện.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Trần Thị B",
                role: "Food Blogger",
                comment: "Tôi đã thử nhiều quán bánh cuốn nhưng Bánh Cuốn Ville thực sự khác biệt. Bánh mỏng, nhân đậm đà và nước chấm tuyệt vời.",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Lê Văn C",
                role: "Doanh nhân",
                comment: "Địa điểm lý tưởng để gặp gỡ đối tác. Món ăn ngon, không gian thoáng đãng và yên tĩnh, phù hợp để nói chuyện công việc.",
                avatar: "https://randomuser.me/api/portraits/men/67.jpg"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-restaurant-light rounded-xl p-6 shadow-md staggered-reveal"
              >
                <div className="mb-4 text-restaurant-primary">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  {item.comment}
                </p>
                <div className="flex items-center">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-restaurant-dark">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default Testimonials;