import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_categorias"})

export class Categoria{
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column({length:100})
    nome: string;
    
    @IsString()
    @Column({type:"text",nullable:true})
    descricao?: string;

}