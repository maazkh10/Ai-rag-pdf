import multer from "multer";

import path from "path";

import fs from "fs";


const uploadDir = path.join(process.cwd(), "upload");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir , { recursive: true });
}

const stroage = multer.diskStorage({
    destination:(req , file, cb)=>{
        cb(null , "upload/")
    },

    filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1E9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
})

const fileFilter = (req , file , cb) =>{
    if(file.mimetype === "application/pdf"){
        cb(null , true)
    }else{
        cb(new Error("Only pdf file is allowed") , false)
    }
}

const upload = multer({
    storage: stroage,
    fileFilter: fileFilter,
    limits:{
        fileSize : 10 * 1024 * 1024
    }
})

export default upload;