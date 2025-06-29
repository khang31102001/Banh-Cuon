import SectionTitle from "../SectionTitle";

const SectionGallery = () => {

    const dataImage = [
        {
            id: 1,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182632/508920783_122118553220885814_7010974851121946162_n_yotuxz.jpg",
            alt: "bánh cuốn tây hồ"
        },
        {
            id: 2,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182617/506069053_122117767292885814_8152344644859877400_n_epxy1b.jpg",
            alt: "bánh cuốn tây hồ"
        },
        {
            id: 3,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751184446/498313682_122101878608885814_4142669532275574802_n_bqql2d.jpg",
            alt: "bánh cuốn tây hồ"
        },
        {
            id: 4,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751184486/500226122_122101878362885814_3490229808087531610_n_svnknq.jpg",
            alt: "bánh cuốn tây hồ"
        },
        {
            id: 5,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182617/505755295_122114450726885814_3786610001348244466_n_meehdq.jpg",
            alt: "bánh cuốn tây hồ"
        },
        {
            id: 6,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751184599/497908722_122103751634885814_5694134216041822322_n_wjm6fv.jpg",
            alt: "bánh cuốn tây hồ"
        },
        {
            id: 7,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182618/506493704_122117226812885814_1795829713802535382_n_avl2y1.jpg",
            alt: "bánh cuốn tây hồ"
        },
        {
            id: 8,
            link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182616/503651616_122112142712885814_7973374300325574410_n_p4f6xn.jpg",
            alt: "bánh cuốn tây hồ"
        },
      
    ]

    // Chia mảng thành nhóm 2 ảnh một
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
        }
        return result;
    };
    const chunkedImages = chunkArray(dataImage, 2);

    return (
        <div>
            {/* Workplace Gallery Section */}
            <section className="bg-banhcuon-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title3="Môi Trường Làm Việc"
                        subtitle="Khám phá không gian làm việc năng động và thân thiện tại Bánh Cuốn Tây Hồ"
                        lightText={true}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  animation-element in-vew">
                        {chunkedImages.map((groupItem, groupIndex)=> {
                            return(
                                <div key={groupIndex} className="grid gap-4">
                                      {groupItem.map((img) => (
                                        <div key={img.id}>
                                        <img
                                            className="h-auto max-w-full rounded-lg object-cover"
                                            src={img.link}
                                            alt={img.alt}
                                        />
                                        </div>
                                    ))}
                                   
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionGallery;