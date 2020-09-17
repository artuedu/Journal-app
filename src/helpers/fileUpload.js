export const fileUpload = async(file) => {

    const cloudUrl = "https://api.cloudinary.com/v1_1/artuedu/upload";

    const formData = new FormData();
    formData.append("upload_preset", "react-journal");
    formData.append("file", file);

    var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
    };

    try {
        const resp = await fetch(cloudUrl, requestOptions);
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            // throw await resp.json();
            return null;
        }
        
    } catch (err) {
        throw err;
    }

}