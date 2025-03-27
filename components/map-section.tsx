import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function MapSection() {
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-lg border h-[300px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1580908035075!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-end">
        <Link
          href="https://goo.gl/maps/8Ugn1yMJP8TdEZxL7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          View larger map <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

