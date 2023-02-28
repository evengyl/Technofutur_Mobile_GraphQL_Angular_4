import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { Observable } from 'rxjs'

export interface Users {
  name: string
  pseudo: string
  password: string
}
//on défini notre schéma de ce que l'on veux recup dans la query

export const GET_USERS = gql`
    query {
      allUsers  {
        name
        pseudo
      }
  }`


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersQuery: Observable<any> = new Observable

  constructor(private apollo: Apollo) //inject apollo service and deps + method
  {}

  getUsers(): Observable<any> {

    this.usersQuery = this.apollo.watchQuery({
      query: GET_USERS
    }).valueChanges.pipe()

    return this.usersQuery

  }
}