import React from "react";

function Ad({ divId, size }) {
    React.useEffect(() => {
      if (typeof window !== "undefined") {
        try {
          window._mNHandle.queue.push(function () {
            window._mNDetails.loadTag(divId, size, divId)
          })
        } catch (error) {}
      }
    }, [divId, size])
  
    return <div id={divId} />
  }

export default Ad;