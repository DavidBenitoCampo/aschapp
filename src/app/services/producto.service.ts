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

    constructor(private httpClient: HttpClient) { this.baseUrl = `http://localhost:3000/products` }

    getAllProducts(): Promise<product[]> {
        return this.httpClient.get<product[]>(this.baseUrl, this.createHeaders()).toPromise();
    }

    insert(formValues) {
        return this.httpClient.post(this.baseUrl, formValues, this.createHeaders()).toPromise();
    }


    createHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })

        }
    }


}