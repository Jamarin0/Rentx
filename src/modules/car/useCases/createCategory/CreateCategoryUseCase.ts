import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({ description, name }: IRequest): void {
        const categoriesAlreadyExists = this.categoriesRepository.findByName(
            name
        );

        if (categoriesAlreadyExists) {
            throw new Error("Category Already exists!");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };