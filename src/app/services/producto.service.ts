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

    constructor(private httpClient: HttpClient) {
        this.baseUrl = `http://localhost:3000/api/products`
    }

    getAllProducts(): Promise<product[]> {
        return this.httpClient.get<product[]>(`${this.baseUrl}`, this.createHeaders()).toPromise();
    }

    getUserById(pId): Promise<product[]> {
        return this.httpClient.get<product[]>(`${this.baseUrl}${pId}`, this.createHeaders()).toPromise();
    }

    getProductByUserId(pId): Promise<product[]> {
        return this.httpClient.get<product[]>(`${this.baseUrl}/user/${pId}`, this.createHeaders()).toPromise();
    }

    insert(fd: FormData) {
        return this.httpClient.post(this.baseUrl, fd, this.createHeaders()).toPromise();
    }

    insertCarrito(pProductoId) {
        console.log(pProductoId)
        return this.httpClient.post(`${this.baseUrl}/carrito/${pProductoId}`, {}, this.createHeaders()).toPromise();
    }

    getToCarrito(): Promise<product[]> {
        return this.httpClient.get<product[]>(`${this.baseUrl}/carrito`, this.createHeaders()).toPromise();
    }



    createHeaders() {
        return {
            headers: new HttpHeaders({
                'authorization': localStorage.getItem('token_user')
            })
        }
    }


}