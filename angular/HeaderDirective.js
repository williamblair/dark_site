/* Defines  a site navbar directive for angular */
(function() {
    /* Get the application module */
    var app = angular.module('mysite', []);

    /* Define the directive */
    var HeaderDirective = function() {
        return {
            template: `
                <div id="headerDiv">
                    <ul id="navList">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="EyeTracker.html">Eye Tracking</a></li>
                        <li><a href="CanvasPhysics.html">HTML5 Canvas</a></li>
                        <li><a href="WindowManager.html">X11 Window Manager</a></li>
                        <li><a href="CS518/index.html">CS518</a></li>
                        <li>
                            <div class="dropdown">
                                <a class="dropbtn" href="#">
                                    WebGL
                                </a>
                                <div class="dropdown-content">
                                    <a href="WebGL1.html">WebGL 1</a>
                                    <a href="WebGL2.html">WebGL 2</a>
                                    <a href="WebGL3.html">WebGL 3</a>
                                    <a href="WebGL4.html">WebGL 4</a>
                                    <a href="WebGL5.html">WebGL 5</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="gba.html">GBA Programming</a></li>
                     </ul>
                 </div>

            `
        };
    };

    /* Register the directive */
    app.directive('siteHeader', HeaderDirective);
})();