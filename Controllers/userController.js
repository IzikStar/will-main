import { login } from "../Services/userService.js";
import { StatusCodes } from "http-status-codes";

const loginHandler = async (req, res, next) => {
    try {
        const answer = login(req.params.password);

        res.status(StatusCodes.OK).json({
            class: 4,
            riddle: "additional",
            date: "24/3/2025",
            time: "19:20",
            answer,
            cheetah: `https://www.hayadan.org.il/images/content3/2013/02/800px-Gepardjagt1_Acinonyx_jubatus-500x282.jpg.webp`
        });
    } catch (error) {
        next(error);
    }
};

export { loginHandler };
