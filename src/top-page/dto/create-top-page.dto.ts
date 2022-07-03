import { Type } from 'class-transformer'
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  isNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator'
import { TopLevelCategory } from '../top-page.model'

export class TopPageHHDto {
  @IsNumber()
  count: number

  @IsNumber()
  juniorSalary: number

  @IsNumber()
  middleSalary: number

  @IsNumber()
  seniorSalary: number
}

export class TopPageAdvantagesDto {
  @IsString()
  title: string

  @IsString()
  description: string
}

export class CreateTopPageDto {
  @IsNotEmpty()
  @IsEnum(TopLevelCategory)
  readonly firstLevelCatagory: TopLevelCategory

  @IsString()
  secondCategory: string

  @IsString()
  title: string

  @IsString()
  alias: string

  @IsString()
  category: string

  @IsOptional()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => TopPageHHDto)
  hh?: TopPageHHDto

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TopPageAdvantagesDto)
  advantages: TopPageAdvantagesDto[]

  @IsString()
  seoText: string

  @IsArray()
  @IsString({ each: true })
  tags: string[]

  @IsString()
  tagsTitle: string
}
