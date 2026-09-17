import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { askQuestions } from "../services/api";


const DocumentChat = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const document = location.state?.document;
    

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const pdfurl = document?.filename ? `http://localhost:8000/uploads/${document.filename}`
    : null ;
// console.log("DOCUMENT:", document);
// console.log("PDF URL:", pdfurl);

    const handleAskQuestion = async (e) => {


        e.preventDefault();

        if (!question.trim()) return;

        const userQuestion = question.trim();

        // Add user message
        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userQuestion
            }
        ]);

        setQuestion("");
        setLoading(true);

        try {

            const data = await askQuestions(userQuestion);

            console.log("Chat response:", data);
            console.log("ANSWER:", data?.data?.answer);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.data.answer
                }
            ]);

        } catch (error) {

            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Something went wrong. Please try again."
                }
            ]);

        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <header className="flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-6">

                <button
                    onClick={() => navigate("/")}
                    className="text-gray-500 hover:text-gray-900"
                >
                    ←
                </button>

                <div>
                    <h1 className="font-semibold text-gray-900">
                        {document?.name || "PDF Chat"}
                    </h1>

                    <p className="text-xs text-gray-400">
                        Ask questions about this document
                    </p>
                </div>

            </header>


            {/* Main */}
            <main className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-2">

                {/* PDF side */}
                <section className="rounded-2xl border border-gray-200 bg-white p-6">

                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Document
                        </h2>
                    </div>

                    <div className="flex min-h-[500px] items-center justify-center rounded-xl bg-gray-50 text-center">

                  {pdfurl ? (
                    <iframe src={pdfurl}
                    title = {document?.name || "PDF"}
                    className="h-[700px] w-full"
                    />
                  ):(
                          <div>
                            <div className="mb-3 text-5xl">
                                📄
                            </div>

                            <h3 className="font-semibold text-gray-900">
                                {document?.name || "Your PDF"}
                            </h3>

                            <p className="mt-1 text-sm text-gray-400">
                                {document?.pages || 0} pages
                            </p>
                        </div>
                  )}

                    </div>

                </section>


                {/* Chat side */}
                <section className="flex min-h-[600px] flex-col rounded-2xl border border-gray-200 bg-white">

                    {/* Chat header */}
                    <div className="border-b border-gray-200 p-5">

                        <h2 className="font-semibold text-gray-900">
                            AI Assistant
                        </h2>

                        <p className="mt-1 text-xs text-gray-400">
                            Ask anything about your PDF
                        </p>

                    </div>


                    {/* Messages */}
                    <div className="flex-1 space-y-4 overflow-y-auto p-5">

                        {messages.length === 0 && (
                            <div className="flex h-full items-center justify-center text-center">

                                <div>

                                    <div className="mb-3 text-4xl">
                                        ✨
                                    </div>

                                    <p className="font-medium text-gray-900">
                                        Start a conversation
                                    </p>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Ask a question about your PDF.
                                    </p>

                                </div>

                            </div>
                        )}


                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={`flex ${
                                    message.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >

                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                                        message.role === "user"
                                            ? "bg-gray-900 text-white"
                                            : "bg-gray-100 text-gray-900"
                                    }`}
                                >
                                    {message.content}
                                </div>

                            </div>

                        ))}


                        {loading && (
                            <div className="flex justify-start">

                                <div className="rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-500">
                                    Thinking...
                                </div>

                            </div>
                        )}

                    </div>


                    {/* Input */}
                    <form
                        onSubmit={handleAskQuestion}
                        className="border-t border-gray-200 p-4"
                    >

                        <div className="flex gap-3">

                            <input
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Ask something about this PDF..."
                                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                            />

                            <button
                                type="submit"
                                disabled={loading || !question.trim()}
                                className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Ask
                            </button>

                        </div>

                    </form>

                </section>

            </main>
        </div>
    );
};

export default DocumentChat;