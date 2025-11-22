const HtmlToDocx = require("html-to-docx")

const convertToDocx = async(req, res) => {
    const { html } = req.body;

    try {
        const docxBuffer = await HtmlToDocx(html);
        console.log("DOCX buffer ", docxBuffer)
        const string = Buffer.from(docxBuffer).toString("base64")
        console.log("Stringed ", string)
        
        res.status(200).json({message:string})
    } catch (error) {
        console.error("Error Message  ", error)
        res.status(500).json({error:"Failed to generate document"})
    }
}

module.exports = {convertToDocx}