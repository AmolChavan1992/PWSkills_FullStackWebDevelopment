const homepage =  (req, res) => {
    res.status(200).json({
        success: true,
        msg:"I am homepage"
    });
};

const aboutpage = (req, res) => {
    res.status(200).json({
        success: true,
        msg:"I am about page"
    });
};

const contactpage = (req, res) => {
    res.status(200).json({
        success: true,
        email:"support@pwskills.com"
    });
};



module.exports = {
    homepage,
    aboutpage,
    contactpage
}