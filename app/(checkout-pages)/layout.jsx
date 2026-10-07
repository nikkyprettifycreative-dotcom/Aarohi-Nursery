import CheckoutHeader from "@/components/CheckoutHeader";
import Footer from "@/components/Footer";
import "../../styles/checkout/checkout.css"
import  "../../app/global.css"
import  "../../styles/header/header.css"
 
export default function CheckoutLayout({ children }) {
    return (
      <html lang="en">
        <body cz-shortcut-listen="true">
          <CheckoutHeader />
          {children}
          <Footer />
        </body>
      </html>
    );
}