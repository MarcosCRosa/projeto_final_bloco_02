import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from './../services/categoria.service';
import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";

@Controller("/Categorias")
 export class CategoriaController {
    constructor(private readonly CategoriaService: CategoriaService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]>{
        return this.CategoriaService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id')id:number):Promise<Categoria>{
        return this.CategoriaService.findById(id);
    }
 }