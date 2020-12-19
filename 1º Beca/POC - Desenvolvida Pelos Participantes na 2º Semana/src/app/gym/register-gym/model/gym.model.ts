import { CEP } from '../../cep/model/cep.model';
import { Equipament } from '../../equipament/model/equipament.model';
import { User } from '../../../user/model/user.model';
import { Coordinate } from 'src/app/maps/model/coordinate.model';
export class GYM{
  cep?:string
  street?:string
  number?:number
  complement?:string
  city?:string
  neighborhood?:string
  state?: string
  user: User
  latitude: number
  longitude: number
  id?: string
}
