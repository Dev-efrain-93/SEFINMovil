import * as tslib_1 from "tslib";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { TestBed, async } from '@angular/core/testing';
import { Events, MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
    let eventsSpy, menuSpy, routerSpy, userDataSpy, statusBarSpy, splashScreenSpy, swUpdateSpy, platformReadySpy, platformSpy, app, fixture;
    beforeEach(async(() => {
        eventsSpy = jasmine.createSpyObj('Events', ['subscribe']);
        menuSpy = jasmine.createSpyObj('MenuController', ['toggle', 'enable']);
        routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
        userDataSpy = jasmine.createSpyObj('UserData', ['isLoggedIn', 'logout']);
        statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
        splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
        swUpdateSpy = jasmine.createSpyObj('SwUpdate', ['available', 'activateUpdate']);
        platformReadySpy = Promise.resolve();
        platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [IonicStorageModule.forRoot()],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Events, useValue: eventsSpy },
                { provide: MenuController, useValue: menuSpy },
                { provide: Router, useValue: routerSpy },
                { provide: UserData, useValue: userDataSpy },
                { provide: StatusBar, useValue: statusBarSpy },
                { provide: SplashScreen, useValue: splashScreenSpy },
                { provide: SwUpdate, useValue: swUpdateSpy },
                { provide: Platform, useValue: platformSpy }
            ]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
    });
    it('should create the app', () => {
        expect(app).toBeTruthy();
    });
    it('should initialize the app', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(platformSpy.ready).toHaveBeenCalled();
        yield platformReadySpy;
        expect(statusBarSpy.styleDefault).toHaveBeenCalled();
        expect(splashScreenSpy.hide).toHaveBeenCalled();
    }));
});
//# sourceMappingURL=app.component.spec.js.map