# Atención Integral de la Mujer
Web Site about Atención Integral de la Mujer from the doctor Gema Sombrerero Juárez

## HTML Files
![HTML_Head](/README_resources/README_images/head_image.png)

This head uses the common ASCII values, resizable viewport. It links the normalizer.css to work on any browser and then the styles for the whole site. The icon makes reference to the icon shown on the tab in the browser. The html file is in spanish for the translate to be able to work. The title of this web page is shown by the "title" tag. This structure repeats in all my html files except for the "title" tag which varies.

![HTML_Head](/README_resources/README_images/footer_image.png)

The footer is divided in multiple divs and uses classes for containers with different properties. This can improve by making multiple classes with single values that repeat and add them instead in the html. The scripts are incrusted outside the body to take effect in the whole website.

The "section" tags are used throughout the whole html files to differenciate different sections of the website. The section, in index.html, commented is a room for improvement since the client asked to add it later, since right now they don't have information nor images that they like to include in that section.

## CSS Files

The normalizer.css file is a library like resources used to normalize the styles between browsers since different browsers have different configurations for things. The styles.css manages animations, the colors used in variables and it also includes the management for screens smaller than 980px and 580px for smaller screens and phone screens by resizing the values for images and some values of texts. Most of the measurements used for the properties were measured in em to help resize, since those measurements function more or less like the % measurement. Pixel measurements are used being conscious about the risks in the responsive design but are used for small measurements.

## JavaScript Files

The script of google api is used to control the embedded google maps at the id="#ubicacion" sections at index.html. Next, the scripts.js is a local file that controls for the following: Controller for the burger animation when the screen is less than 580px. It displays the unordered list of the navbar for the user to keep navigating in smalleer screens; Controller for the image slider that calls the images and passes them to the display. It also controls the buttons to switch image and the index buttons to access an image quicker; Controls for a section also hided by petition of the client to show more cards about their service; And controllers for scheduling in agendar.html which manages inputing wrong information with alerts and sends the information once the information is correct through an API for scheduling.

## Link to the Website

atencionintegraldelamujer.netlify.app