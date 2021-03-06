import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;


describe("list Cars", ()=> {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    })

        it("should be able to list all available cars", async ()=>{
            const car = await carsRepositoryInMemory.create({
                name: "Car1", 
                description: "Car Description", 
                daily_rate: 140.00, 
                license_plate: "BOY-1234", 
                fine_amount: 100, 
                brand: "car_brand", 
                category_id: "category_id"
            })
            
            const cars = await listAvailableCarsUseCase.execute({});

            expect(cars).toEqual([car]);
        });

        it("should be able to list all available cars by brand", async () => {
            const car = await carsRepositoryInMemory.create({
                name: "Car2", 
                description: "Car Description", 
                daily_rate: 140.00, 
                license_plate: "BOY-1235", 
                fine_amount: 100, 
                brand: "car_brand_test", 
                category_id: "category_id"
            })
            
            const cars = await listAvailableCarsUseCase.execute({
                brand: "car_brand_test",
            });

            expect(cars).toEqual([car]);
        });

        it("should be able to list all available cars by name", async () => {
            const car = await carsRepositoryInMemory.create({
                name: "Car3", 
                description: "Car Description", 
                daily_rate: 140.00, 
                license_plate: "BOY-1236", 
                fine_amount: 100, 
                brand: "car_brand_test", 
                category_id: "category_id"
            })
            
            const cars = await listAvailableCarsUseCase.execute({
                name: "Car3",
            });

            expect(cars).toEqual([car]);
        });

        it("should be able to list all available cars by category", async () => {
            const car = await carsRepositoryInMemory.create({
                name: "Car3", 
                description: "Car Description", 
                daily_rate: 140.00, 
                license_plate: "BOY-1236", 
                fine_amount: 100, 
                brand: "car_brand_test", 
                category_id: "12345"
            })
            
            const cars = await listAvailableCarsUseCase.execute({
                category_id: "12345",
            });

            expect(cars).toEqual([car]);
        });
    });
