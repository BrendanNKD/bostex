import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from "next/image";

interface imageTextContent {
    icon: string
    title: string
    desc: string
}

interface IProps {
    content: {
        title: string
        desc: string
        data: Array<imageTextContent>
    }
}
import Reveal from '@/components/animate/reveal'
import ButtonLink from '../shared/buttons/primary';

const IconText = ({ content }: IProps) => {
    return (
        <div className="container mx-auto py-10 px-4 w-full">
            <article className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {content.data.map((service, index) => (
                    <Reveal key={index} className="w-full">
                        <Card className="flex flex-col h-full hover:bg-[#262626] rounded-xl bg-transparent border-none">
                            <CardHeader className="space-y-8">
                                <div className="flex flex-row justify-between items-center">
                                    <Image
                                        className="w-16 h-16 object-contain"
                                        src={service.icon}
                                        width={300} // Set appropriate width
                                        height={300} // Set appropriate height
                                        alt="icon"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-6">
                                <CardTitle className="pt-4 text-base text-white">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-300">
                                    {service.desc}
                                </CardDescription>
                            </CardContent>
                            <div className="p-4 flex">
                                <ButtonLink
                                    href="/comingsoon"
                                >
                                    More
                                </ButtonLink>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </article>
        </div>
    )
}

export default IconText
