import { PageHeader } from "@/components/page-header"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services"
      />

      <section className="container py-12">
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the GeeksHub website and services, you accept and agree to be bound by the terms and
            provisions of this agreement. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2>Course Registration and Payment</h2>
          <p>
            When you register for a course at GeeksHub, you agree to provide accurate, current, and complete
            information. Payment terms vary depending on the course, and all fees are non-refundable unless otherwise
            specified in our refund policy.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            All content on the GeeksHub website, including but not limited to text, graphics, logos, images, course
            materials, and software, is the property of GeeksHub and protected by copyright and other intellectual
            property laws. You may not reproduce, distribute, modify, or create derivative works of any materials
            without prior written consent.
          </p>

          <h2>User Conduct</h2>
          <p>You agree to use our services only for lawful purposes and in a way that does not:</p>
          <ul>
            <li>Violate the rights of others or restrict their use of our services</li>
            <li>Prohibit or restrict other users from enjoying our services</li>
            <li>Use our services for unauthorized commercial purposes</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts</li>
            <li>Transmit any viruses, worms, or other malicious code</li>
          </ul>

          <h2>Course Attendance and Completion</h2>
          <p>
            Students are expected to attend all scheduled classes or inform the institute of absences in advance.
            Certificates of completion will only be issued to students who meet the attendance and assessment
            requirements specified for each course.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            GeeksHub shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
            damages resulting from your access to or use of our services. This includes damages for loss of profits,
            goodwill, data, or other intangible losses.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold GeeksHub harmless from any claim or demand, including reasonable attorneys'
            fees, made by any third party due to or arising out of your breach of these Terms, your violation of any
            law, or your violation of the rights of a third party.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            GeeksHub reserves the right to modify these Terms at any time. We will provide notice of significant changes
            by posting the updated Terms on our website. Your continued use of the services after such modifications
            constitutes your acceptance of the revised Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its
            conflict of law provisions.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at info@geekshub.com or through our contact
            page.
          </p>

          <p className="text-sm text-muted-foreground mt-10">Last updated: March 25, 2023</p>
        </div>
      </section>
    </div>
  )
}

