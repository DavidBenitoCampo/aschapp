import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface product {
    productos: string,
    precio: number,
    usuario: string,
    archivo: string
}

@Injectable({

    providedIn: 'root'
})
export class ProductoService {

    baseUrl: string;

    constructor(private httpClient: HttpClient) { this.baseUrl = `http://localhost:3000/api` }

    getAllProducts(): Promise<product[]> {
        return this.httpClient.get<product[]>(`${this.baseUrl}/products`, this.createHeaders()).toPromise();
    }


    getUserById(pId): Promise<product[]> {
        return this.httpClient.get<product[]>(`${this.baseUrl}/products/${pId}`, this.createHeaders()).toPromise();
    }

    insert(formValues) {
        return this.httpClient.post(this.baseUrl, formValues, this.createHeaders()).toPromise();
    }



    createHeaders() {
        return {
            headers: new HttpHeaders({
                'authorization': localStorage.getItem('token_user')
            })
        }
    }


}