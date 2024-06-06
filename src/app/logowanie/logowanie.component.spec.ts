import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';
import { FormsModule } from '@angular/forms';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogowanieComponent, FormsModule]
    });

    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with required fields', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    expect(usernameField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(usernameField.getAttribute('required')).toBe('');
    expect(passwordField.getAttribute('required')).toBe('');
  });

  it('should call logowanie() method when form is submitted', () => {
    spyOn(component, 'logowanie');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.logowanie).toHaveBeenCalled();
  });

  it('should display an error message for invalid login', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    usernameField.value = 'exampleUser';
    passwordField.value = 'invalidPassword';

    submitButton.click();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
  });

  it('should log in for valid username and password', async () => {
    component.formData.username = 'exampleUser';
    component.formData.password = 'validPassword';
    fixture.detectChanges();
    await fixture.whenStable();
  
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
  
    console.log('Component formData before submit:', component.formData);
  
    submitButton.click();
    fixture.detectChanges();
    await fixture.whenStable();
  
    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    console.log('Error message content:', errorMessage ? errorMessage.textContent : 'No error message');
    console.log('Component errorMessage after submit:', component.errorMessage);
    console.log('Form data username after submit:', component.formData.username);
    console.log('Form data password after submit:', component.formData.password);
  
    expect(component.errorMessage).toBe('');
    expect(errorMessage).toBeFalsy();
  });
});