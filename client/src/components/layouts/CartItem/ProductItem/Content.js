import React from 'react';

function Content(props) {

    return (    
        <div className="flex-1 flex-col px-2 py-2">
            <div className="flex flex-row px-2 py-2">
                <p className="text-gray-700 text-base">
                    Vivamus pellentesque tortor quis enim vehicula pellentesque. Suspendisse suscipit tristique suscipit. Integer sem velit, gravida et rhoncus eu, ultrices ut libero. Phasellus porta, lacus vel mollis finibus, mi dui ornare massa, sed imperdiet dui ipsum et leo. Sed blandit ultricies neque, et tincidunt nulla lacinia in.
                </p>
            </div>
            {props.children}
        </div>
    )
    
}

export default Content;