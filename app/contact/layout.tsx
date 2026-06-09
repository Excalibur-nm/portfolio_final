import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nirmal Manvar for collaborations, internships, or project inquiries. Reach out via email, phone, or social media.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
