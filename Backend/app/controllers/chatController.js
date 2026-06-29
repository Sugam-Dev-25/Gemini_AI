const geminiService = require("../services/geminiService");

class ChatController {
  async chat(req, res) {
try {

    const { message } = req.body;

    const aiResponse = await geminiService.generateResponse(message);

    return res.status(200).json({
        success: true,
        userMessage: message,
        aiResponse,
    });

} catch (error) {

    return res.status(500).json({
        success: false,
        message: error.message,
    });

}
  }
}

module.exports = new ChatController();
