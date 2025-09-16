import Image from "next/image";
import styles from "./page.module.css";

export const revalidate = 3600;

export async function generateStaticParams() {
    return [];
}

export default async function Home({params}: {params: Promise<{subdomain: string}>}) {
  const {subdomain } = await params;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Subdomain is {subdomain}
      </main>
    </div>
  );
}
