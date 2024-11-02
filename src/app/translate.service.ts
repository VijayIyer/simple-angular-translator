import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TranslateService {
  translateUrl =
    "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA";

  getLanguagesUrl =
    "https://translation.googleapis.com/language/translate/v2/languages?target=en&&key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA";

  constructor(private http: HttpClient) {}

  translate(text: string, target: string) {
    return this.http
      .post(this.translateUrl, {
        q: text,
        target,
      })
      .pipe(
        map((res: any) => {
          return res.data.translations[0].translatedText;
        })
      );
  }

  getAvailableLanguages() {
    return this.http.get(this.getLanguagesUrl).pipe(
      map((res: any) => {
        return res.data.languages;
      })
    );
  }
}
