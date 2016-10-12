import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class IftttService {

    constructor (private http: Http) {}

    setWallpaper (): Observable<string> {
        //let body = JSON.stringify({ "value1" : "http://hd.wallpaperswide.com/thumbs/sunset_winter_shadows-t2.jpg" });
        let body = "value1:http://hd.wallpaperswide.com/thumbs/sunset_winter_shadows-t2.jpg";
        let headers = new Headers({ 
            'Content-Type': 'application/json'         
         });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("https://maker.ifttt.com/trigger/wallpaper/with/key/cb1HzjTDLdidtevHsYOHih", body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.text;
        return body || "";
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}