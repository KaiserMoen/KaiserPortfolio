function getAngle(percent){
    return  (percent / 100) * 360;
}
function setProgressPercent(){
    const progressValueContainer = document.querySelectorAll('.skill-info');
    progressValueContainer.forEach(container => {
        const circle = container.querySelector('.circular-progress');
        const valueContainer = container.querySelector('.progress-value')
        const percent = valueContainer.getAttribute('value');
        const angle = getAngle(percent);
        circle.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
        valueContainer.innerText = `${percent}%`
      });
}
export function main(){
    setProgressPercent();
}
