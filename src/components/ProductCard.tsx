import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Link } from "lucide-react"

const ProductCard = () => {
    return (
        <Card className="w-full max-w-sm m-4 shadow-lg hover:shadow-xl transition-shadow rounded-xl border border-gray-200 dark:border-gray-700">
            <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-xl">
                    <img
                        src="https://nvhphunu.vn/wp-content/uploads/2023/07/banh-cuon-ngon-1.jpg"
                        alt="Bánh Cuốn"
                        className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </CardContent>

            <CardHeader className="px-4 pt-4 pb-2">
                <CardTitle className="text-xl font-bold text-banhcuon-800 dark:text-banhcuon-100">
                    Bánh Cuốn Nhân Tôm
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground mt-1">
                    Chỉ từ <span className="font-semibold text-primary">199.000đ</span>
                </CardDescription>
            </CardHeader>

            <CardContent className="px-4 pb-2 text-sm text-muted-foreground space-y-2">
                <p>
                    Bánh cuốn với nhân tôm tươi ngon, thơm ngọt tự nhiên, ăn kèm với rau
                    thơm và nước mắm chua ngọt.
                </p>
                <p>
                    <span className="font-medium text-foreground">Nguyên liệu:</span> Bột gạo, tôm, hành phi, rau sống, nước mắm pha.
                </p>
            </CardContent>

            <CardFooter className="px-4 pb-4 pt-2">
                <div className="w-full flex flex-row gap-2">
                    <Button
                        variant="outline"
                        className="flex items-center justify-center gap-1 flex-1"
                    >
                        <Facebook className="w-4 h-4" />
                        Facebook
                    </Button>

                    <Button
                        variant="outline"
                        className="flex items-center justify-center gap-1 flex-1"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </Button>

                    <Button
                        variant="outline"
                        className="flex items-center justify-center gap-1 flex-1"
                    >
                        <Link className="w-4 h-4" />
                        Copy
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProductCard
