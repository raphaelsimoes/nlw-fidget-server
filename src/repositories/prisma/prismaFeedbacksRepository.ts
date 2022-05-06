import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedBacksRepository } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedBacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }
}