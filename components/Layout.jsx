import Header from './navbar/Header'
import Footer from './footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}