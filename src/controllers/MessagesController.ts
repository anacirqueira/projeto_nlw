import { Request, Response, text } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;
    const messagesService = new MessagesService();

    const messageServices = await messagesService.create({
      admin_id,
      text,
      user_id
    });
    return response.json(message);
  }
}

export { MessagesController };

function message(message: any) {
  throw new Error("Function not implemented.");
}
