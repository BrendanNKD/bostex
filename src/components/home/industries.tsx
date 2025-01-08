import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from "next/image";

interface imageTextContent {
    image: string
    title: string
    desc: string
}

interface IProps {
    content: {
        data: Array<imageTextContent>
    }
}
// import Reveal from '@/components/animate/reveal'

const ImgText = ({ content }: IProps) => {
    return (
        <div className="container mx-auto py-10 px-4">
            <article className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-stretch">
                {content.data.map((service, index) => (
                    <Card
                        key={index}
                        className="flex flex-col h-[400px] w-full max-w-[300px] hover:bg-[#262626] rounded-xl bg-transparent border border-gray-600 overflow-hidden"
                    >
                        <CardHeader className="flex justify-center items-center h-[200px]">
                            <div className="flex justify-center items-center w-full h-full">
                                <Image
                                    className="object-contain"
                                    src={service.image}
                                    width={300}
                                    height={200}
                                    alt="icon"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between items-center space-y-4 text-center p-4">
                            <CardTitle className="text-lg font-semibold text-white break-words whitespace-normal">
                                {service.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-300 line-clamp-3">
                                {service.desc}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </article>
        </div>
    )
}

export default ImgText
