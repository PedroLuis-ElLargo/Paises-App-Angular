import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrl: './pais-input.component.css',
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(200)).subscribe((termino) => {
      this.onDebounce.emit(termino);
    });
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }
  teclaPrecionada() {
    this.debouncer.next(this.termino);
  }
}
