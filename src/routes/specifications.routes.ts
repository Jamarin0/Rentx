import { Router } from "express";

import { SpecificationsRepository } from "../modules/car/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/car/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationRepository
    );
    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };