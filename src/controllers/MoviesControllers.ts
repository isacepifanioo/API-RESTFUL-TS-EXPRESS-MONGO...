import { Request, Response } from "express";
// import connect from "../../config/db";
import MovieModels from "../models/MovieModels";

export class MoviesControllers {
  static async updateById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const movielsUpdate = req.body;
      const moviel = await MovieModels.findById({ _id: id });
      if (!moviel) {
        res.status(400).json({ message: "Esse filme não existe" });
        return;
      }
      await MovieModels.updateOne({ _id: id }, movielsUpdate);
      res.status(200).json({ message: "Atulizado com sucesso" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  static async deleteById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await MovieModels.deleteOne({ _id: id });
      res.status(200).json({ message: "O Filme Foi Excluido com Sucesso" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  static async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const Movies = await MovieModels.findById({ _id: id });
      res.status(200).json(Movies);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
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
      await MovieModels.create(moviel);
      res.status(200).json({ message: "Seu Filme foi criado com sucesso" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}
