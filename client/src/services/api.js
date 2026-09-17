const API_URL = "http://localhost:8000";

export const upLoadPdf = async(file) =>{
    const formdata = new FormData();

    formdata.append("file" , file);
    
    const resposne = await fetch(`${API_URL}/api/upload`, {
        method : "POST",
        body : formdata
    });

    const data = await resposne.json();

    console.log(data);

    if (!resposne.ok) {
        throw new Error("Failed to upload PDF");
    }
    return data;
}


export const askQuestions = async (question  , documentId) =>{
    const response = await fetch(`${API_URL}/api/chat`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"

        },
        body: JSON.stringify({question , documentId})
    })

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        throw new Error("Failed to ask question");
    }
    return data;
}

