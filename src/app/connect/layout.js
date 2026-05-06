export const metadata = {
  title: "Siddhartha.",
  description: "A modern portfolio showcasing creative development work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
