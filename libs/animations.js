import gsap from 'gsap'

export const animatePageIn = () => {
  const overlay = document.getElementById('overlay')
  if (overlay) {
    const tl = gsap.timeline()
    // Move the overlay off the screen when page loads
    tl.to(overlay, {
      y: '-100%',
      duration: 1,
      ease: 'power4.inOut',
    })
  }
}

export const animatePageOut = (href, router) => {
  const overlay = document.getElementById('overlay')
  if (overlay) {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href) // Navigate after the animation completes
      },
    })
    // Animate the overlay back into view for transition
    tl.to(overlay, {
      y: 0,
      duration: 1,
      ease: 'power4.inOut',
    })
  }
}
