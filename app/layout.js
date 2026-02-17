import './globals.css';

export const metadata = {
  title: 'Nicolas Landscaping & Construction LLC',
  description:
    'Professional landscaping, patios, remodeling, and lawn services in New Jersey.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
