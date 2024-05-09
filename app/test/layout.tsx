import React from 'react';

const layout = ( {
    children
}: Readonly<{
  children: React.ReactNode;
}> ) => {
    return (
        <div>
            test layout
            { children }
        </div>
    );
};

export default layout;
