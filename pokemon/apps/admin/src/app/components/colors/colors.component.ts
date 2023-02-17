import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsComponent {}
