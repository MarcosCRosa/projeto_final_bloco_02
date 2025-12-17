import {  Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private CategoriaRepository: Repository<Categoria>
    ){ }
    async findAll (): Promise<Categoria[]>{
    return await this.CategoriaRepository.find(); 
}   
   async findById (id:number):Promise<Categoria>{
     const categoria =  await this.CategoriaRepository.findOneBy({id});
    if(!categoria){
        throw new NotFoundException(`Categoria com o id ${id} não encontrada`);
    }
    return categoria;
   }
    
}
