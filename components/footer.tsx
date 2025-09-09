"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Dictionary } from "@/lib/dictionary";

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || '';
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href={`/${locale}`} className="inline-block mb-6">
              <div className="relative w-56 h-24">
                <Image
                  src="/Elev8-logo-media-dark.svg"
                  alt="Elev8 Rwanda Logo"
                  fill
                  className="object-contain object-left dark:hidden"
                  priority
                />
                <Image
                  src="/Elev8-logo-light.svg"
                  alt="Elev8 Rwanda Logo"
                  fill
                  className="object-contain object-left hidden dark:block"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              {dict.common.footer.description}
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-burgundy hover:text-burgundy-light transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-burgundy hover:text-burgundy-light transition-colors hover:scale-110 transform duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.001" />
                  <path d="M20.5 4.5 L22 4.5 L22 3.5 L20.5 3.5 L20.5 2 L19.5 2 L19.5 3.5 L18 3.5 L18 4.5 L19.5 4.5 L19.5 6 L20.5 6 L20.5 4.5" />
                  <path d="M18 3.5a3.5 3.5 0 0 0 -3.5 3.5v9a3.5 3.5 0 0 1 -3.5 3.5h-5a3.5 3.5 0 0 1 -3.5 -3.5v-9a3.5 3.5 0 0 1 3.5 -3.5h9" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="#"
                className="text-burgundy hover:text-burgundy-light transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              {dict.common.footer.quickLinks}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-burgundy"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.navigation.home}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.navigation.about}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.navigation.services}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.navigation.blog}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.navigation.contact}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              {dict.common.footer.ourServices}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-burgundy"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.footer.socialMedia}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.footer.contentCreation}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-600 dark:text-gray-400 hover:text-burgundy dark:hover:text-burgundy-light transition-colors flex items-center group"
                >
                  <span>{dict.common.footer.podcastProduction}</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              {dict.common.footer.contactUs}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-burgundy"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-burgundy" />
                <span className="text-gray-600 dark:text-gray-400">
                  {dict.common.footer.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-burgundy" />
                <span className="text-gray-600 dark:text-gray-400">
                  {dict.common.footer.phone}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-burgundy" />
                <span className="text-gray-600 dark:text-gray-400">
                  {dict.common.footer.email}
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-sm">{dict.common.footer.businessHours}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {dict.common.footer.weekdayHours}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {dict.common.footer.saturdayHours}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {dict.common.footer.sundayClosed}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Elev8 Media. {dict.common.footer.rights}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href={`/${locale}/privacy-policy`}
              className="text-sm text-gray-500 hover:text-burgundy transition-colors"
            >
              {dict.common.footer.privacy}
            </Link>
            <Link
              href={`/${locale}/terms-of-service`}
              className="text-sm text-gray-500 hover:text-burgundy transition-colors"
            >
              {dict.common.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
