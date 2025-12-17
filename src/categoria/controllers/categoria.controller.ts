import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from './../services/categoria.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";

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
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()categoria:Categoria):Promise<Categoria>{
        return this.CategoriaService.create(categoria);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id')id:number,@Body()categoria:Categoria):Promise<Categoria>{
        categoria.id = Number(id);
        return this.CategoriaService.update(categoria);
    }
 }