
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: "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",
});

const openai = new OpenAIApi(config);

const questionAndAnswer = async (prompt) => {
	try {
	  const openaiResponse = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: prompt,
		max_tokens: 2048,
		temperature: 1,
	  });
  
	  const parsableJSONresponse = openaiResponse.data.choices[0].text;
	  return parsableJSONresponse;

	} catch (error) {

	  console.error("Error al llamar a la API de OpenAI:", error);
	  return "Lo siento, no puedo responder en este momento. Por favor, inténtalo más tarde.";
	  
	}
  };
  
module.exports = {
	questionAndAnswer,
  };

