import axios from "axios";
//get rid of this on deployment
import keys from "../keys.js"

const authKey = keys.keys.nyt;
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey;
  


const createUrl = (query) => {
    console.log(query);
    let search = queryURLBase;

    search = `${search}&q=${query.query}`

    if (query.startDate) {
        console.log("first if happened")
        search = search + "&begin_date=" + query.startDate + "0101";
    }
    if (query.endDate) {
        console.log("second if happened")
        search = search + "&end_date=" + query.endDate + "0101";
    }
    return search;
}


export default {
    searchNyt: function(query) {
        const searchURL = createUrl(query)
        return axios.get(searchURL);
    },
    retrieve: function(query) {

    },
    create: function(query) {

    }
};
