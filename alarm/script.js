document.getElementById('set-alarm').addEventListener('click', function () {
    const eventName = document.getElementById('name').value;
    const eventDate = document.getElementById('date').value;
    const eventTime = document.getElementById('time').value;

    if (!eventName || !eventDate || !eventTime) {
        alert('Please fill in all fields.');
        return;
    }

    const eventDateTime = new Date(`${eventDate}T${eventTime}`);

    const now = new Date();
    const timeToAlarm = eventDateTime - now;

    if (timeToAlarm > 0) {
        document.getElementById('msg').innerText = `Alarm set for ${eventDateTime.toLocaleString()}`;
        setTimeout(() => {
            document.getElementById('myAudio').play();
            // alert(`Alarm! ${eventName} is starting now!`);
        }, timeToAlarm);
    } else {
        alert("The event time has already passed.");
    }
});
