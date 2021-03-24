import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface user {
  nombre: string,
  apellidos: string,
  fecha_nacimiento: Date,
  email: string,
  nickname: string,
  contraseña: string,
  confirmar_contraseña: string,
  foto: string,
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

  insert(formValues) {
    console.log(formValues);
    formValues.foto = "http";
    return this.httpClient.post(this.baseUrl, formValues, this.createHeaders()).toPromise()
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise()
  }
}
