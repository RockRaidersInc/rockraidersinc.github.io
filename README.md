[rockraiders.github.io](https://rockraidersinc.github.io/)
=====================
RPI Rock Raiders Official Page
------------------------------
Webmaster: Patrick Love [lovep@rpi.edu](mailto:lovep@rpi.edu)

### This is the root of the public site please commit carefully!!!

All development should proceed in the develop branch until it is deemed appropriate to pull into the production branch.
New pages should be completed in their own branch off the current develop.

1. Please follow the current project structure as defined in the various README's (if you have any suggestions for
improvements feel free to run them by me)
2. This site is built using mobile-first design.  Primarily, this means that CSS should be written such that outer
level styles specify the style for mobile, and media queries with (min-width:) should be used to add/modify styles
for a tablet/desktop environment.
3. Chrome is the primary development browser and Firefox should be also be supported

# Frameworks

This section provides a list of all external libraries in use by the site, as well as links to assoicated documentation

1. [Normalize.css](https://necolas.github.io/normalize.css/) - Standardizes display of elements so cross-browser differences are minimized.  Should not really affect development.
2. [Flexbox Grid](http://flexboxgrid.com/) - Contains CSS for a 12 column grid layout based on the `flex` property.  This should be the primary means of laying out responsive web pages.  For consistency, custom media query breakpoints should align with the breakpoints used by this grid, namely `48em`, `64em`, and `75em` (corosponding to `sm`, `md`, and `lg` respectively).
    
 
