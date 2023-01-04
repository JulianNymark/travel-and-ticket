import { Card } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TravelBookingForm } from "../components/TravelBookingForm";
import { TripTable } from "../components/TripTable";
import styles from "../styles/Home.module.css";

/**
 * Site Name
 * @type {string}
 */
const siteName = "Travel and Ticket";

export default function Home() {
  const [tripData, setTripData] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteName}</title>
        <meta
          name="description"
          content="simple POC for ordering tickets using existing open source components"
        />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

          <h1 className={styles.tagline}>🚄 Find Travels... buy tickets 🎫</h1>

          <Card title="Find Trip" bordered={false} className={styles.form}>
            <TravelBookingForm setTripData={setTripData} />
          </Card>

          {!!tripData?.length && (
            <Card className="list">
              <TripTable data={tripData}/>
            </Card>
          )}
          <Link href="/about" className={styles.card} id={styles.about}>
            <h2>About Page &rarr;</h2>
            <p>Cypress will test if this link is working.</p>
          </Link>
      </main>
    </div>
  );
}
