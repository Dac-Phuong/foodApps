import React from "react";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RFToken = async function(navigation, expires_in, rfToken,  AUTHDOMAIN, CLIENTID, SECRET){
    console.log("expires in: ", expires_in);

    var duration = moment.duration(moment(expires_in).diff(moment()));
    var difInMins = duration.asMinutes();

    console.log("diff in mins: ", difInMins);

    if(difInMins < 4.5){
        let didRefresh = await refresh(navigation, rfToken, AUTHDOMAIN, CLIENTID, SECRET);
        return didRefresh;
    } else {
        return true;
    }
}

export const expireToken = async function(navigation){
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("refreshToken");
    navigation.navigate("LoginScreen");
}

function setAsyncVals(result){
    AsyncStorage.setItem("token", result.access_token);
    AsyncStorage.setItem("refreshToken", result.refresh_token);  
    console.log("expiry: ", result.expires_in);  
    let expiry = moment().add(result.expires_in, "seconds");
    console.log("expiry in date: ", expiry);             
    AsyncStorage.setItem("expires_in", String(expiry));  
}


async function refresh(navigation, rfToken, AUTHDOMAIN, CLIENTID, SECRET){
    const refreshOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            grant_type: "refresh_token",
            client_id: CLIENTID,
            client_secret: SECRET,
            refresh_token: rfToken,
        }),
    };
    const refresh = await fetch(AUTHDOMAIN + "/oauth/token", refreshOptions)
    const result = await refresh.json();
        console.log("GET NEW TOKEN Function :::::");
        console.log(result);
    if (result.access_token) {
        setAsyncVals(result);
        return true;               
    } else {
        expireToken();
        return false;
    } 
}