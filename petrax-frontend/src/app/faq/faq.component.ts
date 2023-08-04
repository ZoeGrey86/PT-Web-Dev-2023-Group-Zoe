import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getRandomCatFact();
    this.loadGoogleSearch();
  }

  getRandomCatFact() {
    fetch("https://catfact.ninja/facts")
      .then(response => response.json())
      .then(data => {
        let facts = data.data;
        let randomNumberedFact = Math.floor(Math.random() * facts.length);
        let fact = facts[randomNumberedFact].fact;
        this.displayRandomCatFact(fact);
      })
      .catch(error => console.error("Error getting cat fact", error));
  }

  displayRandomCatFact(fact) {
    let factElement = document.getElementById("factElement");
    if (factElement) {
      factElement.innerHTML = `<p>${fact}</p>`;
    }
  }
  loadGoogleSearch() {
    const cx = 'b51486f8d83c747a2'; 
    const gcseScript = document.createElement('script');
    gcseScript.src = "https://cse.google.com/cse.js?cx=b51486f8d83c747a2";
    gcseScript.async = true;
    gcseScript.defer = true;
    document.getElementsByTagName('head')[0].appendChild(gcseScript);
  }
}

