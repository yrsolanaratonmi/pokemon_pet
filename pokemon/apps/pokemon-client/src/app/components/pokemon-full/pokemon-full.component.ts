import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { tap } from 'rxjs/operators';
import { SinglePokemonInfo } from '../../../../../../libs/dto/singlePokemonInfo.dto';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-full',
  templateUrl: './pokemon-full.component.html',
  styleUrls: ['./pokemon-full.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonFullComponent implements OnChanges {
  @Input() name: string;

  public singlePokemon: SinglePokemonInfo;

  public picsArray: Array<any> = [];

  public stats = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#42A5F5',
          '#66BB6A',
          '#FFA726',
          '#26C6DA',
          '#7E57C2',
          'red',
        ],
        label: '',
      },
    ],
    labels: [],
  };

  public display = false;

  constructor(
    private pokemonService: PokemonService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnChanges(): void {
    if (this.name) {
      this.pokemonService
        .getSinglePokemon('https://pokeapi.co/api/v2/pokemon/' + this.name)
        .pipe(tap(() => this.ref.markForCheck()))
        .subscribe((res) => {
          this.singlePokemon = res;
          delete this.singlePokemon.sprites.versions;
          if (this.picsArray.length !== 0) {
            this.picsArray = [];
          }
          this.getValues(this.singlePokemon.sprites);
          this.stats.labels = []
          this.stats.datasets[0].data = []
          res.stats.forEach((el) => {
            this.stats.labels.push(el.stat.name as never);
            this.stats.datasets[0].data.push(el.base_stat as never);
          });
        });
    }
  }
  showDialog() {
    this.display = true;
  }

  private getValues(smth: any) {
    for (const key in smth) {
      if (typeof smth[key] === 'object') {
        this.getValues(smth[key]);
      } else {
        this.picsArray.push(smth[key]);
      }
    }
  }
}
