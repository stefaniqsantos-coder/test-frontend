import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import  { beforeEach, describe, expect, it, vi } from "vitest";
import {CoursesDialog } from "./courses-dialog";
import { DIALOG_DATA, DialogRef } from "@angular/cdk/dialog";
import { MOCK_COURSES } from "../testing/testing-data";
import { CoursesService } from "../services/courses.service";
import {clickButton } from '../testing/testing-utils'
import { FieldState } from "@angular/forms/signals";
import { By } from "@angular/platform-browser";


describe('courseDialog',async () => {
    let component: CoursesDialog;
    let fixture: ComponentFixture<CoursesDialog>;
    let de: DebugElement;
    let mockCoursesService: any;
    let mockDialogRef: any;

    beforeEach(async () => {
        mockCoursesService = {
            saveCourse: vi.fn().mockResolvedValue({})
    }
})
        mockDialogRef = {
        close: vi.fn()
    }

    await TestBed.configureTestingModule({
    imports: [CoursesDialog],
    providers:[
        {provide: CoursesService, useValue: mockCoursesService},
        {provide: DialogRef, useValue: mockDialogRef},
        {provide: DIALOG_DATA, useValue: {course:MOCK_COURSES[0]}},
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesDialog);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();

    it(' should initialize the form white course data', () => {
        expect(component.courseForm.description().value()).toBe("Beginner: course");
        expect(component.courseForm.category().value()).toBe("BEGINNER");
        expect(component.courseForm.releasedAt().value()).toBe(new Date ().toLocaleDateString("pt-BR"));
        expect(component.courseForm.longDescription().value()).toBe("Theory")
        expect(component.courseForm().valid()).toBe(true);
})

    it(' should call saveCouurse and close dialog', () => {
        component.courseForm.description().value.set("New Course Title");
        fixture.detectChanges();
})

        clickButton(de, ".btn-primary");
        await fixture.whenStable();

        expect.objectContaining({
            titles: expect.objectContaining({description:"New Course Title"})
})


    it ('should handle all form field errors', () => {
        testFieldError(component.courseForm.description(), ".description", "Description is required");
        testFieldError(component.courseForm.category(), ".category", "Category is required");
        testFieldError(component.courseForm.releasedAt(), ".releasedat-at", "Release Date is required");
        testFieldError(component.courseForm.longDescription(), ".long-description", "Long Description is required");

})

})