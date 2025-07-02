import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  rolId: any;
  userId: any;

  private url = 'http://localhost:3000/'
  constructor(private http: HttpClient, private router: Router) { }

  getAllusers() {
    return this.http.get(this.url + 'users')
  }

  getUserById(id: any) {
  return this.http.get(this.url + 'users/' + id);
}

  getAllpages() {
    return this.http.get(this.url + 'catalogo')
  }

  getAllOrders() {
    return this.http.get(this.url + 'orders')
  }

  getOrdersById(id: any) {
    return this.http.get(this.url + 'orders/' + id)
  }
  deletePageById(id: any) {
    return this.http.delete(this.url + 'catalogo/' + id)
  }
  buscarPagina(id: any) {
    return this.http.get(this.url + 'catalogo/' + id);
  }

  postOrder(title: string, description: string, img: string, clientId: number, typeOrder: string,) {
    const orderData = { title: title, description: description,  img: img, clientId: clientId, typeOrder: typeOrder, }
    try {
      console.log(typeOrder);
      return this.http.post(this.url + 'orders/create', orderData )
    } catch (error){
      console.log(typeOrder);

      console.error('hay un error: ', error);
    }
  }
  postPage(titulo: string, description: string, url: string) {
    const orderData = { titulo: titulo, description: description,  url: url}
    try {
      return this.http.post(this.url + 'catalogo/create', orderData )
    } catch (error){
      console.error('hay un error: ', error);
    }
  }

  updatePage(id: string, titulo: string, description: string, url: string) {
    const pageData = { titulo, description, url };
    try {
      return this.http.patch(this.url + 'catalogo/' + id, pageData);
    } catch (error) {
      console.error('hay un error: ', error);
    }
  }

  updateUsuario(id: string, nombre: string, email: string, rolId: number, password: string) {
  const userData = { nombre, email, rolId, password };
      try {
      return this.http.patch(this.url + 'users/' + id, userData);
    } catch (error) {
      console.error('hay un error: ', error);
    }
}

  login(email: string, password: string) {
    const loginData = { email, password };

    const response = this.http.post(this.url + 'auth/login', loginData).pipe(
      tap(( response: any ) => {
        const savedRol = localStorage.setItem('rolId', response.userInfo.rolId);
        const savedUserId = localStorage.setItem('userId', response.userInfo.id);
        const savedUserName = localStorage.setItem('userName', response.userInfo.username);


        this.rolId = localStorage.getItem('rolId');
        this.userId = localStorage.getItem('userId');

        if( this.rolId === '1' ){
          this.router.navigate(['/admin']);
        }

        if( this.rolId === '2' ){
          this.router.navigate(['/client/' + this.userId]);
        }
      })
    );

     return response
  }

  register(username: string, email: string, password: string) {
    const user = { username, email, password, rolId: 2};
    const res = this.http.post(this.url + 'users/create', user);
    if (res) {
      this.router.navigate(['/login']);
    }
    return res
  }

  deleteUserById(id: any) {
  return this.http.delete(this.url + 'users/' + id);
}

deleteOrderById(id: any) {
  return this.http.delete(this.url + 'orders/' + id);
}
}
