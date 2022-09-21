import {Component, OnInit} from '@angular/core';
import {OutletPosition} from "@spartacus/storefront";
import {LanguageService} from "../../@core/services/language/language.service";
import {Language} from "@spartacus/core";

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cxOutletPos = OutletPosition;
  languages: Language[] = [];

  constructor(public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.getAll().subscribe((languages: Language[]) => {
      this.languages = languages;
    });
  }

}
