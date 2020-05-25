## Component Overview
- created the courses component in courses.component.ts
- register this app module in app.module.ts
    - added component in the declaration array
- finally use this component in the template for app.componet.html

#### A little tedious... to much boilerplate!
- create this TypeScript class
- import this component decorator
- apply it to this TypeScript class

#### Generating Components Using Angular CLI
- ng g c course
    - g: generate
    - c: component
    - 'course': component name

#### Output from 'ng g c course' in the CLI
>CREATE src/app/course/course.component.html (21 bytes)
    
>CREATE src/app/course/course.component.spec.ts (628 bytes)

>CREATE src/app/course/course.component.ts (275 bytes)

>CREATE src/app/course/course.component.css (0 bytes)

>UPDATE src/app/app.module.ts (771 bytes)
- updated and register the new component
