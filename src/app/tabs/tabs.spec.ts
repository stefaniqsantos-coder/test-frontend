import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { beforeEach, describe, it, expect, vi } from "vitest";
import { TabsComponent} from './tabs';
import { TabData } from './tabs.model';
import { MOCK_TABS } from '../testing/testing-data';
import { By } from "@angular/platform-browser";



describe("TabsComponent", () => {
    let component: TabsComponent;
    let fixture: ComponentFixture<TabsComponent>;
    let de: DebugElement
    const mockTabs: TabData[] = MOCK_TABS;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TabsComponent]
        }).compileComponents();
        component = fixture.componentInstance;
        de = fixture,DebugElement;
        fixture.componentRef.setInput("tabs", mockTabs);
        fixture.detectChanges();
    })
})


it("should create the tabs component", () => {
        expect(component).toBeDefined();

    it("should render correct name of tab buttons", () => {
        const buttons = de.queryAll(By.css(".tab-link"));
        expect(buttons.length).toBe(2);
        expect(buttons[0].nativeElement.textContent.trim()).toBe("Beginner");
        expect(buttons[1].nativeElement.textContent.trim()).toBe("Advanced");

    })
});

