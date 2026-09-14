import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import  { beforeEach, describe, it, vi } from "vitest";
import {CoursesDialog } from "./courses-dialog";
import { DIALOG_DATA, DialogRef } from "@angular/cdk/dialog";
import { MOCK_COURSES } from "../testing/testing-data";
import { CoursesService } from "../services/courses.service";


describe('courseDialog',async () => {
    let component: CoursesDialog;
    let fixture: ComponentFixture<CoursesDialog>;
    let de: DebugElement;
    let mockCoursesService: any;
    let mockDialogRef: any;
})

beforeEach(async () => {
 mockCoursesService = {
        saveCourse: vi.fn().mockResolvedValue({})
}})
        mockDialogRef = {
        close: vi.fn()
    }

    await TestBed.configureTestingModule({
    imports: [CoursesDialog],
    providers:[
    {provide: CoursesService useValue: mockCoursesService},
    {provide: DialogRef, useValue: mockDialogRef},
    {provide: DIALOG_DATA, useValue: {course:MOCK_COURSES[0]}},
    ]
}).compileComponents();

fixture = TestBed.createComponent(CourseDialog);
de = ComponentFixture.debugElement;
Component = fixture.componentInstance;
ComponentFixture.detectChanges();

it(' should initialize the form white course data', () => {
})

    it(' should call saveCouurse and close dialog', () => {
})


 it ('should handle all form field errors', () => {
})


