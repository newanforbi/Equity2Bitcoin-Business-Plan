/**
 * Sticky navbar scroll handler and active link highlighting
 */
export function initNav() {
  const navbar = document.getElementById('navbar')
  const navLinks = document.querySelectorAll('.nav-link')
  const hamburger = document.querySelector('.nav-hamburger')
  const navLinksContainer = document.querySelector('.nav-links')

  // Scroll behavior — add .scrolled class after 50px
  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
    updateActiveLink()
  }

  // Update active nav link based on scroll position
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]')
    const scrollPos = window.scrollY + 100

    let currentSection = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.id
      }
    })

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '')
      if (href === currentSection) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  // Smooth scroll on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').replace('#', '')
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        // Close mobile menu
        navLinksContainer.classList.remove('open')
        hamburger.setAttribute('aria-expanded', 'false')
      }
    })
  })

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open')
      hamburger.setAttribute('aria-expanded', String(isOpen))
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}
