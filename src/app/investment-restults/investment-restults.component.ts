import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-restults',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-restults.component.html',
  styleUrl: './investment-restults.component.css',
})
export class InvestmentRestultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
