"use client"

import { MemberCard } from "@/components/ui/member-card"

export const teamMembers = [
    {
        name: "Pham Hoai Nam",
        role: "Leader / Developer",
        imageSrc: "/members/member1.webp",
        socialLinks: {
            facebook: "#",
            github: "#",
            gmail: "namph@gmail.com",
        },
    },
    {
        name: "Tang Toan Thang",
        role: "Frontend Developer",
        imageSrc: "/members/member2.webp",
        socialLinks: {
            facebook: "#",
            github: "#",
            gmail: "thangtt@gmail.com",
        },
    },
    {
        name: "Nguyen Hoan Thao",
        role: "Backend Developer",
        imageSrc: "/members/member3.webp",
        socialLinks: {
            facebook: "#",
            github: "#",
            gmail: "thaonh@gmail.com",
        },
    },
    {
        name: "Le Hai Dang",
        role: "UI/UX Designer",
        imageSrc: "/members/member4.webp",
        socialLinks: {
            facebook: "#",
            github: "#",
            gmail: "danglh@gmail.com",
        },
    },
    {
        name: "Doan Hai Nam",
        role: "Data Analyst",
        imageSrc: "/members/member5.webp",
        socialLinks: {
            facebook: "#",
            github: "#",
            gmail: "namdh@gmail.com",
        },
    },
    {
        name: "Vu Tuan Anh",
        role: "QA Engineer",
        imageSrc: "/members/member6.webp",
        socialLinks: {
            facebook: "#",
            github: "#",
            gmail: "anhnt@gmail.com",
        },
    },
    {
        name: "Le Duc Long",
        role: "DevOps Engineer",
        imageSrc: "/members/member7.webp",
        socialLinks: {
            facebook: "#",
            github: "#",
            gmail: "longld@gmail.com",
        },
    },
]

export function TeamMembers() {
    return (
        <div className="mx-auto max-w-7xl px-6 xl:px-0">
            <div className="flex flex-wrap justify-center gap-8">
                {teamMembers.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        imageSrc={member.imageSrc}
                        socialLinks={member.socialLinks}
                    />
                ))}
            </div>
        </div>
    )
}
