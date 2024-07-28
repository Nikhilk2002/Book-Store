import axios from "axios";

const userInstance= axios.create({
    baseURL:"http://localhost:4100/"
})

export{userInstance}