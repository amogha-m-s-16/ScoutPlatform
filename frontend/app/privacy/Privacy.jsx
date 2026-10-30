import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const privacySections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <>
        <p className="mb-4">
          Rural Scout is a digital talent scouting platform designed to connect talented rural athletes with scouts, coaches, sports organizations, and recruiters.
        </p>
        <p className="mb-4">
          We understand the importance of protecting personal information, particularly when dealing with young athletes and their sporting profiles.
        </p>
        <p className="mb-4">
          This Privacy Policy describes our practices regarding the collection, processing, storage, sharing, and protection of personal information.
        </p>
        <p>
          By accessing or using Rural Scout, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <p>We may collect different categories of information depending on how you interact with our platform.</p>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">A. Personal Information</h4>
          <p className="mb-2 text-neutral-700">When registering or creating an account, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Date of birth or age</li>
            <li>Gender, if voluntarily provided</li>
            <li>State, district, city, and general location</li>
            <li>Profile photograph</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">B. Athletic and Sporting Information</h4>
          <p className="mb-2 text-neutral-700">To help athletes showcase their abilities, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700">
            <li>Sport and playing category</li>
            <li>Sporting experience</li>
            <li>Position or specialization</li>
            <li>Achievements and awards</li>
            <li>Performance statistics</li>
            <li>Competition participation records</li>
            <li>Training history</li>
            <li>Performance videos and photographs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">C. Account Information</h4>
          <p className="mb-2 text-neutral-700">We may collect:</p>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700">
            <li>Username and account credentials</li>
            <li>User role (Athlete, Scout, Coach, or Administrator)</li>
            <li>Account creation date</li>
            <li>Login and account activity</li>
            <li>Profile updates and preferences</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">D. Technical Information</h4>
          <p className="mb-2 text-neutral-700">When you access Rural Scout, certain technical information may be collected automatically:</p>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Website usage information</li>
            <li>Access timestamps and technical logs</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-3">We collect and process information to provide and improve our services.</p>
        <p className="mb-2 text-neutral-700">Your information may be used to:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Create and manage user accounts.</li>
          <li>Build and maintain athlete profiles.</li>
          <li>Help scouts discover athletes based on sporting information.</li>
          <li>Display athlete achievements and performance records.</li>
          <li>Facilitate connections between athletes and scouts.</li>
          <li>Verify user identities and account information where necessary.</li>
          <li>Improve platform functionality and user experience.</li>
          <li>Detect fraudulent activity and prevent unauthorized access.</li>
          <li>Respond to support requests and user inquiries.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
        <p>
          We only intend to process information for legitimate and disclosed purposes, subject to applicable law.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Athlete Profile Visibility",
    content: (
      <>
        <p className="mb-3">
          Rural Scout allows athletes to showcase their sporting abilities through digital profiles.
        </p>
        <p className="mb-2 text-neutral-700">Depending on platform settings and functionality, athlete profiles may include:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Name and profile photograph.</li>
          <li>Sporting category and playing position.</li>
          <li>Achievements and performance statistics.</li>
          <li>Uploaded photographs and videos.</li>
          <li>General location information.</li>
          <li>Other information voluntarily added to the profile.</li>
        </ul>
        <p className="mb-3">
          Certain profile information may be accessible to registered scouts, coaches, or other authorized users.
        </p>
        <p className="mb-4">
          We aim to provide appropriate visibility controls so users can understand and manage how their information is displayed.
        </p>
        
      </>
    ),
  },
  {
    number: "05",
    title: "Information Sharing and Disclosure",
    content: (
      <div className="space-y-4">
        <p>Rural Scout does not intend to sell users' personal information.</p>
        <p>However, information may be shared in the following circumstances:</p>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">A. With Scouts and Coaches</h4>
          <p className="text-neutral-700">
            Relevant athlete profile information may be made available to authorized scouts, coaches, and sports organizations to support talent discovery and recruitment.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">B. With Service Providers</h4>
          <p className="mb-2 text-neutral-700">We may work with trusted third-party providers for:</p>
          <ul className="list-disc pl-6 space-y-1 text-neutral-700 mb-2">
            <li>Website hosting.</li>
            <li>Database management.</li>
            <li>Authentication and account security.</li>
            <li>File and media storage.</li>
            <li>Website analytics.</li>
            <li>Technical maintenance.</li>
          </ul>
          <p className="text-neutral-700">
            These providers may process information on our behalf where necessary to deliver their services.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">C. Legal Requirements</h4>
          <p className="text-neutral-700">
            We may disclose information when required by applicable laws, regulations, court orders, or lawful government requests.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1.5">D. Safety and Security</h4>
          <p className="text-neutral-700">
            Information may be processed or disclosed when reasonably necessary to investigate fraud, prevent misuse, protect users, or safeguard the platform.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "06",
    title: "Privacy and Protection of Minors",
    content: (
      <>
        <p className="mb-3">
          Rural Scout recognizes that many talented athletes may be under the age of 18.
        </p>
        <p className="mb-3">
          We take additional care when handling information relating to minors.
        </p>
        <p className="mb-2 text-neutral-700">Our approach includes:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Obtaining verifiable parental or legal guardian consent wherever required by applicable law.</li>
          <li>Applying appropriate safeguards to minor athlete profiles.</li>
          <li>Limiting the collection of unnecessary personal information.</li>
          <li>Avoiding unnecessary public disclosure of sensitive information.</li>
          <li>Providing appropriate mechanisms for parents or guardians to raise privacy concerns.</li>
          <li>Taking steps to prevent inappropriate use of athlete information.</li>
        </ul>
        <p className="mb-4">
          Parents or legal guardians may contact our team regarding the collection, use, correction, or deletion of a minor's information.
        </p>
        <p>
          Rural Scout will handle children's personal data in accordance with applicable Indian laws, including requirements concerning parental consent and restrictions on processing children's data.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Data Storage and Security",
    content: (
      <>
        <p className="mb-2 text-neutral-700">
          We take reasonable technical and organizational measures to protect personal information against:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Unauthorized access.</li>
          <li>Accidental loss or destruction.</li>
          <li>Unauthorized modification.</li>
          <li>Disclosure or misuse.</li>
          <li>Security breaches.</li>
        </ul>
        <p className="mb-2 text-neutral-700">
          Depending on our technical infrastructure, these measures may include:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Secure authentication mechanisms.</li>
          <li>Access restrictions.</li>
          <li>Database security controls.</li>
          <li>Secure data transmission.</li>
          <li>Regular maintenance and security monitoring.</li>
        </ul>
        <p className="mb-4">
          However, no online platform or electronic storage system can guarantee absolute security.
        </p>
        <p>
          Users are responsible for maintaining the confidentiality of their account passwords and notifying us if they suspect unauthorized account access.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Data Retention",
    content: (
      <>
        <p className="mb-3">
          We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by applicable law.
        </p>
        <p className="mb-2 text-neutral-700">Information may be retained for:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Maintaining active user accounts.</li>
          <li>Providing athlete discovery services.</li>
          <li>Resolving disputes and complaints.</li>
          <li>Meeting legal and regulatory obligations.</li>
          <li>Preventing fraud and maintaining security.</li>
        </ul>
        <p>
          When information is no longer required, we will take appropriate steps to delete or anonymize it, subject to applicable legal requirements.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p className="mb-3">
          Rural Scout may use cookies and similar technologies to improve website functionality and user experience.
        </p>
        <p className="mb-2 text-neutral-700">These technologies may help us:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li>Maintain login sessions.</li>
          <li>Remember user preferences.</li>
          <li>Understand website usage.</li>
          <li>Improve navigation and performance.</li>
          <li>Identify technical issues.</li>
        </ul>
        <p className="mb-4">
          Users may manage or disable cookies through their browser settings. However, disabling certain cookies may affect some platform features.
        </p>
        <p>
          If analytics or third-party tracking services are introduced, their use will be disclosed appropriately.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Your Privacy Rights",
    content: (
      <>
        <p className="mb-3">
          Depending on applicable law, users may have rights concerning their personal information.
        </p>
        <p className="mb-2 text-neutral-700">These may include:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4 text-neutral-700">
          <li><span className="font-semibold text-neutral-900">Right to Access:</span> Request information about personal data being processed.</li>
          <li><span className="font-semibold text-neutral-900">Right to Correction:</span> Request correction of inaccurate or incomplete information.</li>
          <li><span className="font-semibold text-neutral-900">Right to Erasure:</span> Request deletion of personal information, subject to applicable legal exceptions.</li>
          <li><span className="font-semibold text-neutral-900">Right to Withdraw Consent:</span> Withdraw consent where processing is based on consent.</li>
          <li><span className="font-semibold text-neutral-900">Right to Grievance Redressal:</span> Raise complaints regarding the handling of personal information.</li>
          <li><span className="font-semibold text-neutral-900">Right to Nominate:</span> Exercise nomination rights where provided under applicable data protection law.</li>
        </ul>
        <p>
          To exercise these rights, users may contact the Rural Scout support team.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Third-Party Websites and Services",
    content: (
      <>
        <p className="mb-3">
          Our platform may contain links to external websites, sports organizations, or third-party services.
        </p>
        <p className="mb-3">
          Rural Scout is not responsible for the privacy practices, content, or security of external websites.
        </p>
        <p>
          We encourage users to review the privacy policies of third-party services before sharing personal information with them.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Data Breach and Security Incidents",
    content: (
      <>
        <p className="mb-2 text-neutral-700">
          In the event of a personal data breach, Rural Scout will take appropriate steps to:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-neutral-700">
          <li>Investigate the incident.</li>
          <li>Identify the affected information and users.</li>
          <li>Take measures to contain and mitigate the breach.</li>
          <li>Notify affected individuals and relevant authorities where required by applicable law.</li>
          <li>Implement corrective measures to reduce the likelihood of similar incidents.</li>
        </ul>
      </>
    ),
  },
  {
    number: "13",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p className="mb-3">
          We may periodically update this Privacy Policy to reflect changes in platform functionality, data processing practices, or applicable legal requirements.
        </p>
        <p className="mb-3">
          Any updates will be published on this page along with the revised last-updated date.
        </p>
        <p>
          Users are encouraged to review this page periodically to remain informed about how their information is handled.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Grievance Redressal and Contact Information",
    content: (
      <>
        <p className="mb-3">
          If you have questions, privacy concerns, or requests relating to your personal information, you can contact the Rural Scout team.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Governing Law",
    content: (
      <>
        <p className="mb-3">
          This Privacy Policy shall be governed by the applicable laws of India, including relevant provisions of the Digital Personal Data Protection Act, 2023, and rules and regulations brought into force under it, as applicable.
        </p>
        <p>
          Any disputes concerning this Privacy Policy shall be handled by the competent courts in the applicable jurisdiction in Karnataka, India, subject to applicable law.
        </p>
      </>
    ),
  },
]

const Privacy = () => {
  return (
    <div className={`${jakarta.className} flex flex-col items-center min-h-screen max-w-full`}>
        <div className='px-50 py-10'>
            <h1 className='py-20 text-6xl font-bold'>Privacy Policy</h1>
          
        </div>


         <div className="px-80">
          {privacySections.map((section) => (
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

export default Privacy
