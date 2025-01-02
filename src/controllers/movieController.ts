import { Request, Response } from "express";
import Logger from "../../config/logger";
import { MovieModel } from "../models/Movie";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`Error creating movie: ${e.message}`);
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`Error finding movie: ${e.message}`);
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Error finding movies: ${e.message}`);
  }
}

export async function deleteMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    await movie.deleteOne();
    return res.status(200).json("Movie deleted");
  } catch (e: any) {
    Logger.error(`Error finding movie: ${e.message}`);
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    await movie.updateOne(data);
    return res.status(200).json("Movie updated");
  } catch (e: any) {
    Logger.error(`Error finding movie: ${e.message}`);
  }
}
