import { Request, Response } from "express";
// import connect from "../../config/db";
import MovieModels from "../models/MovieModels";

export class MoviesControllers {
  static async getMovielsAll(req: Request, res: Response) {
    try {
      const moviels = await MovieModels.find();
      res.status(200).json(moviels);
    } catch (error) {
        res.status(400).json({ message: error });
    }
  }
  static async saveMoviels(req: Request, res: Response) {
    try {
      const moviel = req.body;
      console.log(moviel);
      await MovieModels.create(moviel);
      res.status(200).json({ message: "Seu Filme foi criado com sucesso" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}
