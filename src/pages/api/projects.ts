import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";


export default async function Project(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method not allowed" });
        return ;
    }
    try {
        const projects = await prisma.project.findMany({
        });

        
        res.json(projects);
    } catch (error) {
        return res.status(500).json({ message: "Could not get the post, please try later", error });
    }
}