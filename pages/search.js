import Head from "next/head"
import { useRouter } from "next/router";
import Header from "../components/header"
import HeaderOptions from "../components/headerOptions"
import SearchResults from "../components/searchResults";

import { API_KEY , CONTEXT_KEY } from "../keys";
import Response from '../response'





function Search({results }) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>

            </Head>
            {/* Header */}
            <Header />
            <HeaderOptions />
            {/* Search Results */}
            <SearchResults results={results} />

        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || '0';


    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).
    then(response => response.json());
    
    //Pass the results tot he client side
    return{
        props:{
            results:data,
        }
    }
}

