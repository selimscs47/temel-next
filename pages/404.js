import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
    //   router.push("/");
      router.back();
    }, 2000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>404 | Sayfa Bulunamadı.</h2>
      <p>
        Lütfen <Link href="/">Anasayfa</Link> için tıklayınız
      </p>
    </div>
  );
}
