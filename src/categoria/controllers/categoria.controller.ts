import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from './../services/categoria.service';
import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

@Controller("/Categorias")
 export class CategoriaController {
    constructor(private readonly CategoriaService: CategoriaService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]>{
        return this.CategoriaService.findAll();
    }
 }