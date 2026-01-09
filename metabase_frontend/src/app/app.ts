import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('metabase_frontend');
  metabaseUrl: SafeResourceUrl | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (this.metabaseUrl) return;
    this.http.get<any>('http://127.0.0.1:8000/api/metabase/iframe_url/')
      .subscribe(res => {
        this.metabaseUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(res.url);
          console.log(this.metabaseUrl)
          this.cdr.detectChanges();
      });
  }
}
