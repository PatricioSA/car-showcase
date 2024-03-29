import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col text-black-100 mt-5
        border-t border-gray-100">
            <section className="flex max-md:flex-col flex-wrap justify-between
            gap-5 sm:px-16 px-6 py-10">

                <div className="flex flex-col justify-start items-start gap-6">
                    <Image
                        src='/logo.svg'
                        alt="Car Hub logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                    <p className="text-base text-gray-700">
                        Carhub 2023 <br />
                        Todos os direitos reservados &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
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
            </section>

            <section className="flex justify-between items-center
            flex-wrap mt-10 borer-t border-gray-100 sm:px-16
            px-6 py-10">
                <p>@2023 CarHub. Todos os direitos reservados</p>
                <div className="footer__copyrights-link">
                    <Link href='/' className="text-gray-500">
                        Política de Privacidade
                    </Link>
                    <Link href='/' className="text-gray-500">
                        Termos de Uso
                    </Link>
                </div>
            </section>
        </footer>
    )
}