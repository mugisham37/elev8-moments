import { Icon } from "@iconify/react";
import Image from "next/image";
import { Dictionary } from "@/lib/dictionary";

interface TeamMember {
  name: string;
  position: string;
  bio?: string;
  image: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
  dict?: Dictionary['home']['team'];
}

export default function TeamSection({ teamMembers, dict }: TeamSectionProps) {
  // Map team members with their images
  const teamMembersWithImages = [
    {
      id: "sandra",
      image: "/Sandra Profile.jpg",
    },
    {
      id: "moustapha",
      image: "/Mustapha profile photo.jpg",
    },
    {
      id: "moses",
      image: "/Moses Profile.jpg",
    },
    {
      id: "teta",
      image: "/business assistant.jpg",
    },
    {
      id: "eloi",
      image: "/eloi.jpg",
    },
    {
      id: "mbabazi",
      image: "/mbabazi.jpg",
    },
  ];
  
  // If we have dictionary data, use it to create team members
  const ourTeamMembers = dict?.members ? 
    teamMembersWithImages.map(member => {
      const memberData = dict.members[member.id as keyof typeof dict.members];
      if (!memberData) return null;
      
      return {
        name: memberData.name,
        position: memberData.position,
        bio: 'bio' in memberData ? memberData.bio : undefined,
        image: member.image,
        socialLinks: {
          instagram: 'instagram' in memberData ? memberData.instagram : undefined,
          linkedin: 'linkedin' in memberData ? memberData.linkedin : undefined,
        }
      };
    }).filter(Boolean) as TeamMember[] : 
    // Fallback to default data if no dictionary is provided
    [
      {
        name: "Sandra Mushambokazi",
        position: "Founder & Creative director",
        bio: "Oversees strategy, creative execution, and client delivery, ensuring every project aligns with clear goals and strong brand messaging.",
        image: "/Sandra Profile.jpg",
        socialLinks: {
          instagram: "http://instagram.com/sandra_umushambokazi/",
          linkedin: "https://www.linkedin.com/in/sandra-mushambokazi/", 
        }
      },
      {
        name: "Moustapha Iradukunda",
        position: "Tech lead",
        bio: "Fullstack developer",
        image: "/Mustapha profile photo.jpg",
        socialLinks: {
          instagram: "https://www.instagram.com/mousty__i/",
          linkedin: "https://www.linkedin.com/in/mousty/"
        }
      },
      {
        name: "Moses Mugisha",
        position: "Fullstack Developer",
        bio: "A versatile problem-solver who bridges front-end aesthetics with back-end functionality, bringing digital products to life through code, creativity, and technical expertise.",
        image: "/Moses Profile.jpg",
        socialLinks: {
          instagram: "https://www.instagram.com/ngoniayididi/",
          linkedin: "https://www.linkedin.com/in/mugishamoses/"
        }
      },
      {
        name: "Teta Angle",
        position: "Business Assistant",
        bio: "Efficient, proactive business assistant dedicated to streamlining operations and anticipating needs before they arise.",
        image: "/business assistant.jpg",
      },
      {
        name: "Rwamitari Frank Eloi",
        position: "Dubai based photographer and videographer", 
        image: "/eloi.jpg"
      },
      {
        name: "MBABAZI Roger Dieu Merci",
        position: "Rwanda based photographer and videographer", 
        image: "/mbabazi.jpg"
      }
    ];

  return (
    <section className="py-16 md:py-24 bg-cream dark:bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict?.title || "Meet Our Team"}
          </h2>
          <p className="text-muted-foreground">
            {dict?.subtitle || "The talented individuals behind Elev8 Media's success."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourTeamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-80 relative bg-red-200">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="w-full h-full object-cover object-top"
                  aria-label={dict?.altText || `Team member photo`}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-burgundy font-medium mb-3">
                  {member.position}
                </p>
                {member.bio && <p className="text-muted-foreground mb-4">{member.bio}</p>}
                <div className="flex justify-center space-x-4">
                  {member.socialLinks?.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-burgundy dark:text-gray-400 dark:hover:text-burgundy-light transition-colors"
                      aria-label={dict?.ariaLabels?.instagram || "Visit Instagram profile"}
                    >
                      <Icon
                        icon={"basil:instagram-outline"}
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-burgundy dark:text-gray-400 dark:hover:text-burgundy-light transition-colors"
                      aria-label={dict?.ariaLabels?.linkedin || "Visit LinkedIn profile"}
                    >
                      <Icon icon={"mdi:linkedin"} width={20} height={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
