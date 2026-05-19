const axios = require("axios");

exports.analyzeComplaint = async (req, res) => {

    try {

        const { description } = req.body;

        const response = await axios.post(

            "https://openrouter.ai/api/v1/chat/completions",

            {
                model: "openai/gpt-3.5-turbo",

                messages: [
                    {
                        role: "user",
                        content: `
                        Analyze this complaint:
                        ${description}

                        Give:
                        1. Priority
                        2. Department
                        3. Summary
                        4. Auto response
                        `
                    }
                ]
            },

            {
                headers: {

                    Authorization:
                    `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type": "application/json"
                }
            }
        );

        res.json(
            response.data.choices[0].message
        );

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "AI Error"
        });
    }
};