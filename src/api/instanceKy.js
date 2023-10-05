import ky from "ky"

export const instance = ky.create({
    prefixUrl: "http://localhost:3000/api/",
})
