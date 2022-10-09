import express from "express";
import {Router} from "express-lite-router";

export default (context: Record<string, any> = {}) => {
    const router = Router({
        router: express.Router(),
        dir: 'src/backend/views',
        context
    });

    return router.express();
}