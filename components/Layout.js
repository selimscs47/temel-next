import Navbar from "./Navbar";


export default function Layout({children}) {
  return (
    <div className="coontent">
        <Navbar />
        {children}
    </div>
  )
}
