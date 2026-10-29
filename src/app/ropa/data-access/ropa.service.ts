import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Ropa, RopaData } from './ropa.model';

@Service()
export class RopaService {
    private readonly http=inject(HttpClient)
    private readonly url = "http://localhost:3000/ropa"

    getAll(){
        return this.http.get<Ropa[]>(this.url)
    }

    getById(id:string|number){
        return this.http.get<Ropa>(`${this.url}/${id}`)
    }

    create(ropa:RopaData){
        return this.http.post<Ropa>(this.url, ropa)
    }

    update(id:string|number, ropa:RopaData){
        return this.http.patch<Ropa>(`${this.url}/${id}`, ropa)
    }

    delete(id:string|number){
        return this.http.delete<void>(`${this.url}/${id}`)
    }
}
