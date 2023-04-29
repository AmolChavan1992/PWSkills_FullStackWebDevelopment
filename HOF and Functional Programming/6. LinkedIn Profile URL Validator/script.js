let data = "https://www.linkedin.com/in/Amol_-1-";
const regex_data = /^https:\/\/www.linkedin.com\/in\/([A-Za-z0-9_-]+)+([A-Za-z0-9]+)$/;

if(regex_data.test(data)) {
    console.log("Valid linkedin profile");
}
else {
    console.log("Invalid linkedin profile");
}