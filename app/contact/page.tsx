import { ContactForm } from "@/components/contact-form"
import { PageHeader } from "@/components/page-header"
import { MapSection } from "@/components/map-section"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for inquiries and enrollment information"
      />

      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Phone className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Mail className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@geekshub.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <MapPin className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Tech Street, Digital City</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Clock className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 9AM-6PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <MapSection />
          </div>
        </div>
      </section>
    </div>
  )
}

