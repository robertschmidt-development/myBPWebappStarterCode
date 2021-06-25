import React from 'react'

const ShowMoreLess = props => {
    
    const {items, initialShowing, step, showingIndex, setShowingIndex} = props

    const showMore = () => {
        if(showingIndex + step > items.length){
            setShowingIndex(items.length)
        } else {
            setShowingIndex(showingIndex + step)
        }
    }

    const showLess = () => {
        if (showingIndex - step < initialShowing) {
            setShowingIndex(initialShowing)
        } else {
            setShowingIndex(showingIndex - step)
        }
    }

    const zeigeMehr = <button className="btn btn-light" onClick={() => showMore()}>Zeige mehr</button>
    const zeigeWeniger = <button className="btn btn-light" onClick={() => showLess()}>Zeige weniger</button>
    const beide = <>{zeigeMehr} {zeigeWeniger}</>

    if(initialShowing >= items.length) return null
    if(showingIndex < items.length && showingIndex > initialShowing) return beide
    if(showingIndex < items.length) return zeigeMehr
    if(showingIndex >= initialShowing) return zeigeWeniger

}

export default ShowMoreLess