import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/header";
import Footer from '../components/footer';
import axios from "axios";

export default function Home({country}) {
    return (
        <div className={null}>
            <Header country={country}/>
            <Footer country={country}/>
        </div>
    )
}

export async function getServerSideProps() {

    let data = await axios("https://api.ipregistry.co/31.41.165.74?key=3i4bfoudttq5w3dr").then((res) => {
        return res.data.location.country
    }).catch((e) => {
        console.log(e);
    })

    return {
        props : {
            country : {
                name: data.name,
                flag: data.flag.emojitwo
            }
        }
    }

}
