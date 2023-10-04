import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex">
            <div>

                <div>
                    <Image
                        src='/logo.svg'
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                    <p>
                        Carhub 2023 <br/>
                        Todos os direitos reservados &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div>
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-gray-500"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div>
                    <div>
                        <Link href='/' className="text-gray-500">
                            Privacy Policy
                        </Link>
                        <Link href='/' className="text-gray-500">
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}