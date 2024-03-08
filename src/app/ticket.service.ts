import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseApiUrl = '#YOUR_API_URL#';

  constructor(private http: HttpClient) { }

  createTicket(ticketData: { name: string, email: string }): Observable<any> {
    const endpoint = '/create_ticket';
    return this.http.post(this.baseApiUrl + endpoint, ticketData);
  }

  verifyTicket(ticketData: { qr_code_hash: string }): Observable<any> {
    const endpoint = '/verify_qr_code';
    return this.http.post(this.baseApiUrl + endpoint, ticketData);
  }
}