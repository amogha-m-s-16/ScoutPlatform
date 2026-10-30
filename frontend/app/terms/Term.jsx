import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const termsSections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <>
        <p className="mb-4">
          Rural Scout is a digital talent scouting platform designed to identify, connect, and promote talented rural athletes by providing opportunities to showcase their sporting abilities.
        </p>
        <p className="mb-4">
          Our platform connects athletes with scouts, coaches, sports organizations, and talent recruiters, helping bridge the gap between rural sporting talent and professional opportunities.
        </p>
        <p>
          These Terms of Service ("Terms") constitute an agreement between you and Rural Scout regarding your use of the platform.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Eligibility and Account Registration",
    content: (
      <>
        <p className="mb-3">To use Rural Scout, you must:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Provide accurate and complete registration information.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Be responsible for activities conducted through your account.</li>
          <li>Update your information whenever necessary.</li>
          <li>Use the platform only for lawful purposes.</li>
        </ul>
        <p className="mb-4">
          Users under the age of 18 must have appropriate parent or legal guardian consent and supervision when required by applicable law.
        </p>
        <p>
          Rural Scout reserves the right to suspend or terminate accounts containing misleading, fraudulent, or inappropriate information.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "User Roles and Responsibilities",
    content: (
      <div className="space-y-4">
        <p>Our platform supports different categories of users.</p>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">Athletes</h4>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700">
            <li>Create and maintain accurate athlete profiles.</li>
            <li>Upload genuine photographs, videos, and performance records.</li>
            <li>Provide truthful information about sporting achievements.</li>
            <li>Respect scouts, coaches, and other platform members.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">Scouts and Coaches</h4>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700">
            <li>Provide accurate professional information.</li>
            <li>Use athlete information exclusively for legitimate scouting and recruitment purposes.</li>
            <li>Respect athlete privacy and confidentiality.</li>
            <li>Avoid misleading recruitment offers or inappropriate communication.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">Administrators</h4>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700">
            <li>Manage platform activities and user accounts.</li>
            <li>Review reported content and user complaints.</li>
            <li>Maintain platform security and operational integrity.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Athlete Profiles and Content",
    content: (
      <>
        <p className="mb-3">
          Athletes may create profiles containing personal information, sporting backgrounds, achievements, statistics, photographs, and performance videos.
        </p>
        <p className="mb-3">By uploading content, you confirm that:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>You own the content or have permission to share it.</li>
          <li>The information provided is accurate to the best of your knowledge.</li>
          <li>Your uploads do not violate another person's rights.</li>
          <li>Your content does not contain harmful, abusive, or inappropriate material.</li>
        </ul>
        <p>
          Rural Scout does not guarantee that uploaded profiles or achievements will result in scouting opportunities, selection, scholarships, or professional contracts.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Talent Discovery and Scouting",
    content: (
      <>
        <p className="mb-3">
          Rural Scout provides tools that help scouts and sports organizations discover potential athletes based on their profiles, sporting categories, performance records, and other available information.
        </p>
        <p className="mb-3">However:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>We do not guarantee athlete selection or recruitment.</li>
          <li>We are not responsible for decisions made independently by scouts or sports organizations.</li>
          <li>Athletes should independently verify the authenticity of recruitment opportunities.</li>
          <li>We do not guarantee the accuracy of third-party evaluations or performance assessments.</li>
        </ul>
        <p>
          Rural Scout acts as a platform facilitating connections and does not function as an employment agency or guarantee sporting placements.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "User Conduct and Prohibited Activities",
    content: (
      <>
        <p className="mb-3">Users must not:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Submit false, misleading, or fabricated information.</li>
          <li>Impersonate another athlete, scout, coach, or organization.</li>
          <li>Upload offensive, abusive, discriminatory, or illegal content.</li>
          <li>Harass, threaten, exploit, or intimidate other users.</li>
          <li>Attempt unauthorized access to platform accounts or systems.</li>
          <li>Misuse athlete information or personal data.</li>
          <li>Engage in fraudulent recruitment or financial activities.</li>
          <li>Distribute malicious software or attempt to disrupt platform operations.</li>
        </ul>
        <p>
          Violations may result in content removal, account suspension, or permanent termination.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Privacy and Data Protection",
    content: (
      <>
        <p className="mb-3">
          Rural Scout respects the privacy of its users and is committed to handling personal information responsibly.
        </p>
        <p className="mb-3">Information collected may include:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Name and contact information.</li>
          <li>Age and general profile information.</li>
          <li>Sporting background and achievements.</li>
          <li>Uploaded photographs and videos.</li>
          <li>Performance statistics and records.</li>
          <li>Account and platform activity information.</li>
        </ul>
        <p className="mb-4">
          We use this information to operate the platform, maintain athlete profiles, facilitate talent discovery, improve user experience, and maintain security.
        </p>
        <p>
          Personal information will be handled in accordance with our Privacy Policy and applicable data protection laws.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p className="mb-3">
          All platform elements, including branding, logos, designs, graphics, website content, and software, are owned by or licensed to Rural Scout unless otherwise stated.
        </p>
        <p className="mb-3">
          Users retain ownership of the content they upload.
        </p>
        <p className="mb-3">
          By submitting content to Rural Scout, you grant us a limited, non-exclusive, royalty-free license to host, display, reproduce, and process that content solely for operating and improving the platform and providing its intended services.
        </p>
        <p>
          You may not reproduce, distribute, or commercially exploit platform materials without prior written permission.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-Party Services and External Links",
    content: (
      <>
        <p className="mb-3">
          Rural Scout may contain links to external websites, services, or third-party platforms.
        </p>
        <p className="mb-3">
          We do not control or guarantee the accuracy, availability, security, or reliability of third-party services.
        </p>
        <p>
          Users interact with such services at their own discretion and are encouraged to review their respective terms and privacy policies.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Account Suspension and Termination",
    content: (
      <>
        <p className="mb-3">
          Rural Scout reserves the right to restrict, suspend, or terminate user accounts if:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>These Terms are violated.</li>
          <li>Fraudulent or misleading information is submitted.</li>
          <li>Platform security is compromised.</li>
          <li>Users engage in harmful or illegal activities.</li>
          <li>Continued access creates risks for other users or the platform.</li>
        </ul>
        <p>
          Users may request account deletion by contacting the Rural Scout administration team.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-3">
          Rural Scout is provided on an "as available" basis.
        </p>
        <p className="mb-3">
          To the extent permitted by applicable law, Rural Scout shall not be liable for:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Missed sporting or recruitment opportunities.</li>
          <li>Decisions made by scouts, coaches, or organizations.</li>
          <li>Inaccurate information submitted by users.</li>
          <li>Unauthorized interactions between users.</li>
          <li>Temporary service interruptions or technical failures.</li>
          <li>Losses resulting from misuse of user accounts.</li>
        </ul>
        <p>
          Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Indemnification",
    content: (
      <>
        <p className="mb-3">
          You agree to use Rural Scout responsibly and not engage in activities that could harm the platform or its users.
        </p>
        <p>
          To the extent permitted by applicable law, you agree to be responsible for claims, damages, or expenses arising from your violation of these Terms, misuse of the platform, or infringement of another person's rights.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "Changes to These Terms",
    content: (
      <>
        <p className="mb-3">
          Rural Scout may update these Terms periodically to reflect changes in platform functionality, operational requirements, or applicable laws.
        </p>
        <p className="mb-3">
          Updated Terms will be published on this page along with the revised effective date.
        </p>
        <p>
          Continued use of the platform after changes take effect constitutes acceptance of the updated Terms, to the extent permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Governing Law and Jurisdiction",
    content: (
      <>
        <p className="mb-3">
          These Terms shall be governed by the laws of India.
        </p>
        <p>
          Any disputes arising from the use of Rural Scout shall be subject to the jurisdiction of the competent courts in the applicable jurisdiction in Karnataka, India, subject to applicable law.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Contact Us",
    content: (
      <>
        <p className="mb-4">
          If you have questions, concerns, or requests regarding these Terms of Service, please contact our team.
        </p>
      </>
    ),
  },
]

const Term = () => {
  return (
    <div className={`${jakarta.className} flex flex-col items-center min-h-screen max-w-full`}>
        <div className='px-50 py-10'>
            <h1 className='py-20 text-6xl font-bold'>Terms of Serivce</h1>
          
        </div>

        <div className="px-80">
          {termsSections.map((section) => (
            <div
              key={section.number}
              className="pb-20"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">
                  {section.number} 
                </span>
                <h2 className="px-2.5 text-3xl font-bold text-neutral-900 tracking-tight">
                  {section.title}
                </h2>
              </div>
              <div className="text-[20px]  text-neutral-900">
                {section.content} 
              </div>
            </div>
          ))}
        </div>

      </div>

  )
}

export default Term
