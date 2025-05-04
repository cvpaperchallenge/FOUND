import { Outlet } from "react-router";
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function SharedUILayout() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
