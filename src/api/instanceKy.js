import ky from "ky"

export const instance = ky.create({
    prefixUrl: "http://localhost:1337/api/",
})
