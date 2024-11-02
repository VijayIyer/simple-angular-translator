import { Component, OnInit } from "@angular/core";
import { TranslateService } from "./translate.service";

interface AvailableLanguage {
  language: string;
  name: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  text: string;
  translatedText: string;
  selectedLanguage: string;
  options: AvailableLanguage[];
  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.translateService
      .getAvailableLanguages()
      .subscribe((result) => (this.options = result));
  }
  submit() {
    this.translateService
      .translate(this.text, this.selectedLanguage)
      .subscribe((result) => (this.translatedText = result));
  }
}
