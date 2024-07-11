const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  let genAI;
  let model;
  
  async function initializeGenerativeAI(apiKey) {
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
  }
  
  async function run(prompt) {
    if (!genAI || !model) {
      throw new Error('Generative AI not initialized');
    }
  
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const responseText = await result.response.text(); // Store the response text
    console.log(responseText); // Log the response text
    return responseText; // Return the response text
  }
  
  // Ensure API key is loaded securely
  const apiKey = import.meta.env.VITE_API_KEY;
  if (apiKey) {
    initializeGenerativeAI(apiKey).catch(error => {
      console.error('Failed to initialize generative AI:', error);
    });
  } else {
    console.error('API key not provided');
  }
  
  export default run;
  
