let data = "https://sample12@.com";
const regex_data = /^https:\/\/|http:\/\/([A-Za-z0-9_$&+,:;=?@#]+)+[.]*([A-Za-z]+)$/;

if(regex_data.test(data)) {
    console.log("Matched");
}
else {
    console.log("Not matched");
}