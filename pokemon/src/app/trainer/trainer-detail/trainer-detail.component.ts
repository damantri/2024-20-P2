import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  trainerDetail!: Trainer;

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getTrainerDetail(id);
  }

  getTrainerDetail(id: number): void {
    this.trainerService.getTrainerById(id).subscribe((data) => {
      this.trainerDetail = data;
    });
  }
  calculateAverageLevel(): number {
    if (!this.trainerDetail || !this.trainerDetail.pokemons.length) return 0;
    const totalLevel = this.trainerDetail.pokemons.reduce((sum, p) => sum + p.level, 0);
    return totalLevel / this.trainerDetail.pokemons.length;
  }
}
