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

}
