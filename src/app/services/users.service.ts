import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface user {
  nombre: string,
  apellidos: string,
  edad: number,
  email: string,
  nickname: string,
  contraseña: string,
  confirmar_contraseña: string,
  cargar_imagen: string,
  rol: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/users';
  }
  getAll(): Promise<user[]> {
    return this.httpClient.get<user[]>(this.baseUrl).toPromise();
  }

  getUserById(pId): Promise<user> {
    return this.httpClient.get<user>(`${this.baseUrl}/${pId}`).toPromise();
  }
}
