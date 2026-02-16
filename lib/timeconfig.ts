export function getAppTimeZone(){
    const defaultTimeZone="Asia/Kolkata";
    return process.env.APP_TIMEZONE||defaultTimeZone;
}

