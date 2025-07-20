import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiskDataService } from '../disk-data';
import { Disk } from '../disk-list/Disk';

@Component({
  selector: 'app-disk-form',
  standalone: false,
  templateUrl: './disk-form.html',
  styleUrl: './disk-form.scss'
})
export class DiskForm implements OnInit {
  diskForm!: FormGroup;

  constructor(private fb: FormBuilder, private diskService: DiskDataService) {}

  ngOnInit(): void {
    this.diskForm = this.fb.group({
      name: ['', Validators.required],
      autor: ['', Validators.required],
      year: [1970, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      price: [1, [Validators.required, Validators.min(1)]],
      stock: [1, [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      clearance: [false],
    });
  }

  submit(): void {
    if (this.diskForm.valid) {
      const newDisk: Disk = {
        ...this.diskForm.value,
        quantity: 0 // quantity no se completa desde el form
      };

      this.diskService.createDisk(newDisk).subscribe({
        next: () => {
          alert('Disco creado correctamente');
          this.diskForm.reset();
        },
        error: () => {
          alert('Error al crear disco');
        }
      });
    }
  }
}