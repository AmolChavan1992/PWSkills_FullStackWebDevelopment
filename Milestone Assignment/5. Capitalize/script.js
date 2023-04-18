let user_name = "sample";
user_name = user_name.charAt(0) == user_name.charAt(0).toLowerCase() ? user_name.charAt(0).toUpperCase() + user_name.slice(1):user_name;
console.log(user_name);