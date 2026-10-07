import  "../../app/global.css"
import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
