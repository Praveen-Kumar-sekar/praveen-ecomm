import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data.type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: undefined |product[];
  noSearchResult = false;
  searchedQuery:string|undefined|null;
  constructor(private activeRute:ActivatedRoute,private product:ProductService){

  }

  ngOnInit(): void {
    let Query = this.activeRute.snapshot.paramMap.get('query');
Query && this.product.searchProduct(Query).subscribe((result)=>{

  this.searchResult = result;
  if(this.searchResult.length<1){
    this.noSearchResult = true;
    this.searchedQuery = Query;

  }
});    
  }

}
