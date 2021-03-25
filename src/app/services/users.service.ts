import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface user {
  nombre: string,
  apellidos: string,
  fecha_nacimiento: Date,
  email: string,
  nickname: string,
  contrasena: string,
  confirmar_contrasena: string,
  foto: string,
  rol: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
  }
  getAll(): Promise<user[]> {
<<<<<<< HEAD
    /*     const httpOptions = {
          headers: new HttpHeaders({
            'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJjYWR1Y2EiOjE2MTcxNzM5MjgsImlhdCI6MTYxNjU3MzkyOH0.pdVIzwJF661VHpEQMRSLK0s7Mmxa-FltHR5iGi41mK8'
          })
        } */
=======
>>>>>>> 21cbf6abd9ac6729492e14c87cef9b096467f937
    return this.httpClient.get<user[]>(`${this.baseUrl}/users`, this.createHeaders()).toPromise();
  }

  getUserById(pId): Promise<user> {
    return this.httpClient.get<user>(`${this.baseUrl}/users/${pId}`, this.createHeaders()).toPromise();
  }

  getProductByUserId(pId): Promise<user> {
    return this.httpClient.get<user>(`${this.baseUrl}/users/profile/${pId}`, this.createHeaders()).toPromise();
  }

  insert(formValues) {
    console.log(formValues);
    formValues.foto = "http";
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise()
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token_user')
      })
    }
  }

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login/enter`, formValues).toPromise()
  }
}
