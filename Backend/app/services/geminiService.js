const ai = require("../config/gemini");

class GeminiService {
  async generateResponse(message) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
      });

      return response.text;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new GeminiService();