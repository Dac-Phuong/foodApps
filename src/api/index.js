import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

export const api = async function(endpoint, type, data, useFormData = false){
    const authType = await AsyncStorage.getItem("authType");
    if(!authType){
      AsyncStorage.setItem("authType", "live");
    }

        
    const domain = authType == "live" ? process.env.DOMAIN : process.env.STAGINGDOMAIN;
    const token = await AsyncStorage.getItem("token");
    const expiresIn = await AsyncStorage.getItem("expiresIn");

    if(expiresIn){
        console.log(expiresIn);
        var duration = moment.duration(moment(expiresIn, "YYYY-MM-DD HH:mm:ss").diff(moment()));
        var difInMins = duration.asMinutes();
    
        console.log("dif: ", difInMins);
    
        if(difInMins < -1){
            console.log("expired token");
            AsyncStorage.removeItem("token");
            AsyncStorage.removeItem("refreshToken");
            return "expired";
        } else if(difInMins <= 120){
            await refreshToken();
        }
    }

    

    if(useFormData){
        var formData = new FormData();
        formData.append("responses", JSON.stringify(data.responses));
    
        for (let im = 0; im < data.photos.length; im++) {
            const element = data.photos[im];
            if(element.name){
                formData.append("photos", element, element.name)
            } else {
                formData.append("photos", JSON.stringify(element))
            }
        }
    
        data = formData;    
    }

    try{
        let request = await axios({
            method: type,
            url: domain+endpoint,
            headers: {
                authorization: `Bearer ${token}`
            },
            data: data
        });
        return request;
    } catch (error){
        console.log("Domain: ", domain);
        console.log("Endpoint: ", endpoint);
        console.log("Type: ", endpoint);
        console.log("API Error: ", error);
        return error.response;
    }
}

export const refreshToken = async function(){
    console.log("refresh token, its about to expire");
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    
    if(refreshToken !== null){
        try{
            let request = await axios({
                method: "POST",
                url: process.env.AUTHDOMAIN + "/oauth/token",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                    grant_type: "refresh_token",
                    client_id: process.env.CLIENTID,
                    client_secret: process.env.SECRET,
                    refresh_token: refreshToken
                })
            });
            if(request.status == 200){
                let result = request.data;
                AsyncStorage.setItem("token", result.access_token);
                AsyncStorage.setItem("refreshToken", result.refresh_token);
                let expiry = moment().add(result.expires_in, "seconds");
                AsyncStorage.setItem("expiresIn", String(expiry));
            }
        } catch (error){
            console.log("API Error: ", error);
        } 
    }
}