import React from 'react';

function ColorsBlock({colors}){
    return(
        colors.map((c,idx) => {
        return (<div style = {{backgroundColor:c}} key={c}>{c}</div>);
            
        })
    )
}


export default ColorsBlock;