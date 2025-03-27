import { PageHeader } from "@/components/page-header"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Privacy Policy" description="Our commitment to protecting your personal information" />

      <section className="container py-12">
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            At GeeksHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or enroll in our courses. Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you register for a course, contact us, or
            participate in any interactive features of our services. This includes:
          </p>
          <ul>
            <li>Personal information such as name, email address, phone number, and mailing address</li>
            <li>Educational background and professional information</li>
            <li>Payment information (handled through secure third-party payment processors)</li>
            <li>Course preferences and learning objectives</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect about you for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information, such as updates or changes to our policies</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may use third-party services that collect, monitor, and analyze user data to help us improve our
            services. These third parties have access to your personal information only to perform these tasks on our
            behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
            protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at info@geekshub.com or visit our
            contact page.
          </p>

          <p className="text-sm text-muted-foreground mt-10">Last updated: March 25, 2023</p>
        </div>
      </section>
    </div>
  )
}

