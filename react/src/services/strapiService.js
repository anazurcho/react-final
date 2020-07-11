import axios from "axios";
import settings from "../../settings"

class StrapiService {
    async loginUser( email, token ) {
        return await axios.get( `${settings._apiBase}client/login`, {
                email: email,
                token: token,
            });
            // 03e76735850144c3ac8e9d1a4d78e5ee
    }

    async getData(token) {
        const res = await axios.get( `${settings._apiBase}v2/competitions/`, {
            // headers: {
            //     // 'X-Auth-Token': '${token}'
            //     'X-Auth-Token': '03e76735850144c3ac8e9d1a4d78e5ee'
            // }
        } )
        return res.data;
    }
    async getData2() {
        const res = await axios.get( `${settings._apiBase}v2/areas/`, {
        } )
        return res.data;
    }
// http: //api.football-data.org/v2/competitions/
}

export default StrapiService;

