
# to set up reactjs with typescript
npx create-react-app threejs --template typescript


# install tailwind css
npm install -D tailwindcss
npx tailwindcss init

# Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

# install three js
npm install three @types/three @react-three/fiber

react-three-fiber is an open-source react-renderer for three. js. It makes it easier to use three. js in React by exposing reusable and self-contained components from three.


# to contorl objects using
 npm i @react-three/drei