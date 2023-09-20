import React from "react"
function About() {
    return (
        <div>
            {/* The Flex Container */}
            <div className="flex justify-center space-x-8 p-4">
                {/* Image on the left */}
                <img src='/src/assets/images/Image12.png' className="w-1/3 h-auto" />


                {/* Text on the right */}
                <div className="w-1/3 text-justify">
                    <h1 className="font-bold  text-2sxl  ">
                        History
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat.<br /> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.
                    </p>

                </div>

            </div>

        </div>

    )
}


export default About