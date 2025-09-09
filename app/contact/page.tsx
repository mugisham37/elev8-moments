"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formType, setFormType] = useState("media");

  return (
    <>
      <section className="bg-burgundy py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl mb-6">
              Get in touch with our team to discuss how we can help elevate your
              brand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              <div className="space-y-6">
                {/* <RadioGroup
                  defaultValue="media"
                  className="flex flex-col space-y-3"
                  onValueChange={(value) => setFormType(value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="media" id="media" />
                    <Label htmlFor="media">
                      I'm interested in Elev8 Media services
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moments" id="moments" />
                    <Label htmlFor="moments">
                      I'm interested in Elev8 Moments services
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other inquiry</Label>
                  </div>
                </RadioGroup> */}

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+250 788 123 456"
                    />
                  </div>

                  {formType === "media" && (
                    <div className="space-y-2">
                      <Label htmlFor="media-service">Service of Interest</Label>
                      <select
                        id="media-service"
                        title="Select a media service"
                        className="w-full p-2 border-2 bg-inherit dark:bg-[#18150f] border-dark-red dark:border-dark-red/50 rounded-md focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                      >
                        <option className="" value="">
                          Select a service
                        </option>
                        <option className="" value="social-media">
                          Social Media Management
                        </option>
                        <option className="" value="content-creation">
                          Content Creation
                        </option>
                        <option className="" value="podcast">
                          Podcast Production
                        </option>
                      </select>
                    </div>
                  )}

                  {formType === "moments" && (
                    <div className="space-y-2">
                      <select
                        id="moments-service"
                        title="Select a moments service"
                        className="w-full p-2 border-2 bg-inherit dark:bg-[#18150f] border-dark-red dark:border-dark-red/50 rounded-md focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                      >
                        <option value="">Select a service</option>
                        <option value="corporate-events">
                          Corporate Events
                        </option>
                        <option value="product-launches">
                          Product Launches
                        </option>
                        <option value="team-building">Team Building</option>
                        <option value="gifting">Personalized Gifting</option>
                      </select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="min-h-[120px] border-dark-red dark:border-dark-red/50"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-burgundy hover:bg-burgundy/90 text-white"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                You can also reach out to us directly using the contact
                information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-dark-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-muted-foreground">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-dark-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      info@elev8rwanda.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-dark-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+250 788 123 456</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-burgundy text-white p-3 rounded-full hover:bg-burgundy/90 transition-colors"
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
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="bg-burgundy text-white p-3 rounded-full hover:bg-burgundy/90 transition-colors"
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
                    >
                      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0" />
                      <path d="M16.5 7.5v.001" />
                      <path d="M20.5 4.5 L22 4.5 L22 3.5 L20.5 3.5 L20.5 2 L19.5 2 L19.5 3.5 L18 3.5 L18 4.5 L19.5 4.5 L19.5 6 L20.5 6 L20.5 4.5" />
                      <path d="M18 3.5a3.5 3.5 0 0 0 -3.5 3.5v9a3.5 3.5 0 0 1 -3.5 3.5h-5a3.5 3.5 0 0 1 -3.5 -3.5v-9a3.5 3.5 0 0 1 3.5 -3.5h9" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>
                  <a
                    href="#"
                    className="bg-burgundy text-white p-3 rounded-full hover:bg-burgundy/90 transition-colors"
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
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="mt-12 h-80 bg-gray-200 dark:bg-gray-900/40 rounded-lg">
                <section className="mapbox" data-mapbox>
                  <figure>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.59344731821!2d30.058153601031492!3d-1.974594272479979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca61434d56e91%3A0x9f4e8ed1622d9f06!2sGikondo%2C%20Kigali!5e0!3m2!1sen!2srw!4v1685282960444!5m2!1sen!2srw"
                      className="w-full h-80"
                      loading="lazy"
                    ></iframe>
                  </figure>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
