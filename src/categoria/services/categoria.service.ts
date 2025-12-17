import {  HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";

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

   async create(categoria:Categoria): Promise<Categoria>{
         return await this.CategoriaRepository.save(categoria);
   }

   async update(categoria:Categoria):Promise<Categoria>{
   await this.findById(categoria.id)  
   
   return await this.CategoriaRepository.save(categoria);
  }

  async remove(id:number):Promise <DeleteResult>{
    const categoria = await this.findById(id);
   return await this.CategoriaRepository.delete(id);
  }

}
