import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.css',
})
export class RecipeComponent implements OnInit{

  recipes: Array<any> = [];
  nameRecipe: string = "";
  texto:string ="";

  constructor(private recipeService: RecipeService,
    private cd: ChangeDetectorRef
  ) { }

  buscarRecetas() {

    this.recipeService.getRecipe(this.nameRecipe).subscribe(

      (resultado) => {
        this.recipes=resultado;
        this.cd.detectChanges();
        console.log(this.recipes);
        this.cd.detectChanges();
      },
      error => {
        console.log(error);
      }

    );
  }

  traducirTexto(texto:string) {
    this.recipeService.traducirTexto(texto).subscribe(
      (resultado) => {
        console.log(resultado) 
        this.cd.detectChanges();
        this.texto=resultado.data.translations.translatedText[0];
        this.cd.detectChanges();
        console.log(this.texto)
             
      },error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    //this.buscarRecetas();
  }
}
