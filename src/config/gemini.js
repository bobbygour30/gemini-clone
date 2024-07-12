let genAI = null;
let model = null;
let isInitializing = false;
let initializationPromise = null;

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function initializeGenerativeAI(apiKey) {
  try {
    console.log("Initializing Generative AI...");
    isInitializing = true;

    // Dynamically import GoogleGenerativeAI when needed
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    console.log("Generative AI initialized successfully.");
    isInitializing = false;
  } catch (error) {
    console.error('Failed to initialize generative AI:', error);
    isInitializing = false;
    throw error; // Propagate the error
  }
}

async function ensureInitialized() {
  if (!genAI || !model) {
    if (!isInitializing) {
      initializationPromise = initializeGenerativeAI(import.meta.env.VITE_API_KEY);
    }
    await initializationPromise;
  }
}

async function run(prompt) {
  try {
    await ensureInitialized();

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

  } catch (error) {
    console.error('Error running generative AI:', error);
    throw error; // Propagate the error
  }
}

export default run;
