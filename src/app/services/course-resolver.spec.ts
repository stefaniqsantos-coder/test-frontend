import { TestBed } from "@angular/core/testing";
import { describe, beforeEach, vi,it, expect } from "vitest";
import { CoursesService } from "./courses.service";
import { CoursePage } from "../course-page/course-page";
import { provideRouter, Router } from "@angular/router";
import { RouterTestingHarness} from '@angular/router/testing';
import { courseResolver } from './course.resolver';
import { MOCK_COURSES } from "../testing/testing-data";


describe ('CourseResolver', () => {
    let mockCoursesService: any;
    let harness: RouterTestingHarness;

    beforeEach(async () => {
        mockCoursesService = {
            findCourseById: vi.fn ()
        }

        await TestBed.configureTestingModule({
            imports: [CoursePage],
            providers: [
                {provide: CoursesService, useValue: mockCoursesService},
                provideRouter([{
                    path: 'courses/:id',
                    component: CoursePage,
                    resolve: {
                    course: courseResolver
                    }
    }])
]
        }).compileComponents()
        harness = await RouterTestingHarness.create();
    })

    it("should load correct course by ID", async () => {
        mockCoursesService.findCourseById.mockResolvedValueOnce(MOCK_COURSES[0]);
        const component = await harness.navigateByUrl('/courses/1', CoursePage);
        
        //ESPERO QUE SEJA INJETADA NA ROTA A URL CORRETA
        expect(TestBed.inject(Router).url).toBe('/courses/1');

        //ESPERO QUE TENHA UMA CAMADA EM "FindCourseById" PARA O "ID 1"
        expect(mockCoursesService.findCourseById).toHaveBeenCalledOnce();
        expect(mockCoursesService.findCourseById).toHaveBeenCalledWith("1");

        expect(harness.routeNativeElement?.textContent).toContain("Beginner Course");
    

    })
})

