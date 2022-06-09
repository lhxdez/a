import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/post-category", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute( { name, description } );

    return res.status(201).send();
});

categoriesRoutes.get("/list-categories", (req, res) => {
    const lists = categoriesRepository.list();

    return res.json(lists);
});

export { categoriesRoutes };