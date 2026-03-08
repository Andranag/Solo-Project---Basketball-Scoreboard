function add1PointHome() {
    const HomeScore = document.getElementById("home-score")
    const currentScore = parseInt(HomeScore.textContent)
    const newScore = currentScore + 1
    HomeScore.textContent = newScore
    animateScore(HomeScore)
    playSound()
}

function add2PointsHome() {
    const HomeScore = document.getElementById("home-score")
    const currentScore = parseInt(HomeScore.textContent)
    const newScore = currentScore + 2
    HomeScore.textContent = newScore
    animateScore(HomeScore)
    playSound()
}

function add3PointsHome() {
    const HomeScore = document.getElementById("home-score")
    const currentScore = parseInt(HomeScore.textContent)
    const newScore = currentScore + 3
    HomeScore.textContent = newScore
    animateScore(HomeScore)
    playSound()
}

function add1PointGuest() {
    const GuestScore = document.getElementById("guest-score")
    const currentScore = parseInt(GuestScore.textContent)
    const newScore = currentScore + 1
    GuestScore.textContent = newScore
    animateScore(GuestScore)
    playSound()
}

function add2PointsGuest() {
    const GuestScore = document.getElementById("guest-score")
    const currentScore = parseInt(GuestScore.textContent)
    const newScore = currentScore + 2
    GuestScore.textContent = newScore
    animateScore(GuestScore)
    playSound()
}

function add3PointsGuest() {
    const GuestScore = document.getElementById("guest-score")
    const currentScore = parseInt(GuestScore.textContent)
    const newScore = currentScore + 3
    GuestScore.textContent = newScore
    animateScore(GuestScore)
    playSound()
}

function reset() {
    const homeScore = document.getElementById("home-score")
    const guestScore = document.getElementById("guest-score")
    
    // Animate reset
    homeScore.style.transform = "scale(0.8)"
    guestScore.style.transform = "scale(0.8)"
    
    setTimeout(() => {
        homeScore.textContent = "0"
        guestScore.textContent = "0"
        homeScore.style.transform = "scale(1)"
        guestScore.style.transform = "scale(1)"
    }, 200)
    
    playResetSound()
}

function animateScore(element) {
    element.style.transform = "scale(1.2)"
    element.style.transition = "transform 0.2s ease"
    
    setTimeout(() => {
        element.style.transform = "scale(1)"
    }, 200)
}

function playSound() {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = "sine"
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
}

function playResetSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.3)
    oscillator.type = "sine"
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
}

// Attach event listeners when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home-1")?.addEventListener("click", add1PointHome)
    document.getElementById("home-2")?.addEventListener("click", add2PointsHome)
    document.getElementById("home-3")?.addEventListener("click", add3PointsHome)
    document.getElementById("guest-1")?.addEventListener("click", add1PointGuest)
    document.getElementById("guest-2")?.addEventListener("click", add2PointsGuest)
    document.getElementById("guest-3")?.addEventListener("click", add3PointsGuest)
    document.getElementById("reset")?.addEventListener("click", reset)
})