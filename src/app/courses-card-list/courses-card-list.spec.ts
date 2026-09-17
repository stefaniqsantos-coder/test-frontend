import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MOCK_COURSES} from '../testing/testing-data';
import {describe, expect, it, beforeEach} from "vitest"
import {provideRouter} from '@angular/router';
import {By} from '@angular/platform-browser';
import {CoursesCardList} from "./courses-card-list";
import {CoursesDialog} from '../courses-dialog/courses-dialog';
import {DebugElement} from '@angular/core';

describe ('CoursesCardList', () => {
    let component: CoursesCardList;
    let fixture: ComponentFixture<CoursesCardList>;
    let de: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CoursesCardList, CoursesDialog],
            providers: [provideRouter([])]
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesCardList);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.componentRef.setInput('courses', MOCK_COURSES)
        fixture.detectChanges()
    })

    it('should open dialog when clicking the edit button', () => {
        const btn = de.query(By.css(".course-card:first-child .edit-btn"));
        btn.nativeElement.click();
        fixture.detectChanges();

        const form = document.querySelectorAll(".course-form");
            expect(form, "The edit course dorm should be visible").toBeTruthy();
    })

})
