// DATA


let connection = new TikTokIOConnection(undefined);
let finishGame = false;
let iconList = [];
let nextId = 1;
let winner = [];
let animationID;
// START
$(document).ready(() => {

    // $("#targetConnect").click(function (e) {
    //     // Check
    //     let targetLive = $("#targetUsername").val();
    //     connect(targetLive);

    // });

    setTimeout(function () {
        let targetLive = "oyun_aze";
        connect(targetLive);
    }, 5000);
})


/*
* LIVE TIKTOK
*/

function playSound() {
    var excludedNumbers = [4, 10, 11];
    var mode;
    do {
        mode = Math.floor(Math.random() * 26) + 1;
    } while (excludedNumbers.includes(mode));

    document.getElementById("sfx" + mode).play();
}

function connect(targetLive) {
    if (targetLive !== '') {
        $('#stateText').text('Qoşulur...');
        $("#usernameTarget").html("@" + targetLive);
        connection.connect(targetLive, {
            enableExtendedGiftInfo: true
        }).then(state => {
            $('#stateText').text(`Xoş gəldin... ${state.roomId}`);
        }).catch(errorMessage => {
            $('#stateText').text(errorMessage);
        })
    } else {
        alert('İstifadəçi adını daxil et');
    }
}


function deleteAllIcons() {
    const allIcons = document.querySelectorAll(".icon"); // tüm ikonlar

    // Tüm ikonları döngüye alarak sil
    allIcons.forEach((icon) => {
        icon.remove();
    });

    iconList = []; // 

    finishGame = false;
}

connection.on('chat', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                iconList[i].size += 0.75; // add 20 to each object's value property
                let icons = document.getElementsByClassName('icon');
                for (let j = 0; j < icons.length; j++) {
                    if (icons[j].src === iconList[i].imgurl) {
                        if (newSize > 400) {
                            icons[j].style.width = iconList[i].size + 'px';
                            icons[j].style.height = iconList[i].size + 'px';
                            icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                            icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                        }
                        break;
                    }
                }
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40 + 0.5;
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

});

function createList(username, numOfItems) {
    if (finishGame) {
        return;
    }
    const list = [];

    for (let i = 1; i <= numOfItems; i++) {
        const item = {
            id: i,
            username: `${username}_${i}`
        };

        list.push(item);
    }

    list.sort((a, b) => a.id - b.id);

    return list;
}
let animationFrameId;
let lastDrawTime = 0;
const drawInterval = 1000 / 60; // 60 FPS
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
let largestIconUsername = null;
let largestIconSize = null;
let lastSizeChangeTime = 0;
let lastSize = 0;

let isFireworkGifScaled = false;

function showFireworkGif() {
    const fireworkGifIds = ['fireworkGif1', 'fireworkGif2', 'fireworkGif3'];
    const randomIndex = Math.floor(Math.random() * fireworkGifIds.length); // Generate a random index between 0 and 3
    const fireworkGif = document.getElementById(fireworkGifIds[randomIndex]);
    const scaleFactor = 0.9;

    fireworkGif.style.display = 'block';
    fireworkGif.style.zIndex = 9999;
    fireworkGif.style.position = 'absolute';

    const canvasRect = canvas.getBoundingClientRect();
    const fireworkGifRect = fireworkGif.getBoundingClientRect();

    if (!isFireworkGifScaled) {
        const newWidth = fireworkGifRect.width * scaleFactor;
        const newHeight = fireworkGifRect.height * scaleFactor;
        fireworkGif.style.width = newWidth + 'px';
        fireworkGif.style.height = newHeight + 'px';
        isFireworkGifScaled = true;
    }

    fireworkGif.style.top = (canvasRect.top + (canvasRect.height / 2) - (fireworkGif.offsetHeight / 2)) + 'px';
    fireworkGif.style.left = (canvasRect.left + (canvasRect.width / 2) - (fireworkGif.offsetWidth / 2)) + 'px';
}

if (!finishGame) {

    window.addEventListener('resize', showFireworkGif);

}

function hideFireworkGif() {
    const fireworkGifIds = ['fireworkGif1', 'fireworkGif2', 'fireworkGif3'];
    const lastIndex = fireworkGifIds.length - 1;
    for (let i = 0; i < lastIndex; i++) {
        const fireworkGif = document.getElementById(fireworkGifIds[i]);
        fireworkGif.style.display = 'none';
    }
    const lastFireworkGif = document.getElementById(fireworkGifIds[lastIndex]);
    lastFireworkGif.style.display = 'none';
}

let lastCheckedSize = null;

function drawIcons(currentTime) {
    if (finishGame) {
        // Cancel the animation frame
        cancelAnimationFrame(animationFrameId);
        return;
    }
    if (!finishGame) {
        // Calculate elapsed time since last draw
        const elapsedTime = currentTime - lastDrawTime;
        if (elapsedTime >= drawInterval) {
            let overlappingIcon = null;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            iconList.sort((a, b) => b.size - a.size);

            // Set a constant move speed for all icons
            const minSpeed = 0.2;
            const maxSpeed = 1.5;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            iconList.sort((a, b) => b.size - a.size);

            iconList.forEach((icon, index) => {
                // Set random initial position for each icon
                if (!icon.hasOwnProperty("x")) {
                    icon.x = Math.random() * (canvas.width - icon.size);
                }
                if (!icon.hasOwnProperty("y")) {
                    icon.y = Math.random() * (canvas.height - icon.size);
                }

                // Set random move speed for each icon
                if (!icon.hasOwnProperty("moveSpeed")) {
                    icon.moveSpeed = {
                        x: randomRange(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1),
                        y: randomRange(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1),
                    };
                }



                // Update the icon's position
                icon.x += icon.moveSpeed.x;
                icon.y += icon.moveSpeed.y;

                // Check if the icon has reached the edge of the canvas
                if (icon.x + icon.size >= canvas.width) {
                    icon.x = canvas.width - icon.size;
                    icon.moveSpeed.x *= -1;
                }
                if (icon.x <= 0) {
                    icon.x = 0;
                    icon.moveSpeed.x *= -1;
                }
                if (icon.y + icon.size >= canvas.height) {
                    icon.y = canvas.height - icon.size;
                    icon.moveSpeed.y *= -1;
                }
                if (icon.y <= 0) {
                    icon.y = 0;
                    icon.moveSpeed.y *= -1;
                }

                // Check if icon overlaps with largest icon
                if (icon !== iconList[0] &&
                    icon.x < canvas.width / 2 + iconList[0].size / 2 &&
                    icon.x + icon.size > canvas.width / 2 - iconList[0].size / 2 &&
                    icon.y < canvas.height / 2 + iconList[0].size / 2 &&
                    icon.y + icon.size > canvas.height / 2 - iconList[0].size / 2) {
                    overlappingIcon = icon;
                }

                // Set image source and draw icon
                icon.img.src = icon.imgUrl;
                icon.zIndex = index;

                lastDrawTime = currentTime;
            });

            // Draw overlapping icon outside of yellow circle
            if (overlappingIcon) {
                ctx.drawImage(overlappingIcon.img, overlappingIcon.x, overlappingIcon.y, overlappingIcon.size, overlappingIcon.size);
            }

            // Draw the largest icon last with a higher z-index than other icons
            const largestIcon = iconList[0];
            if (largestIcon) {
                if (largestIcon.size !== lastSize) {
                    lastSizeChangeTime = currentTime;
                    lastSize = largestIcon.size;
                }
                // Check if it's been 1 minute since the last size change and set size to 41
                if (currentTime - lastSizeChangeTime >= 60000 && largestIcon.size === lastSize) {
                    largestIcon.size = 41;
                }

                largestIcon.img.src = largestIcon.imgUrl;

                // Set zIndex to highest value
                largestIcon.zIndex = iconList.length;

                // Check zIndex values for all icons in array
                // ...

                // ...
                for (let i = iconList.length - 1; i >= 0; i--) {
                    const icon = iconList[i];
                
                    if (icon !== largestIcon && icon.zIndex >= largestIcon.zIndex) {
                        icon.zIndex = i;
                    }
                
                    // Check if the icon size hasn't changed for 1 minute
                    if (!icon.hasOwnProperty("lastSizeChangeTime")) {
                        icon.lastSizeChangeTime = currentTime;
                        icon.lastSize = icon.size;
                    } else {
                        if (icon.size !== icon.lastSize) {
                            icon.lastSizeChangeTime = currentTime;
                            icon.lastSize = icon.size;
                        } else if (currentTime - icon.lastSizeChangeTime >= 90000) {
                            iconList.splice(i, 1); // Remove the icon if its size hasn't changed for 1 minute
                        }
                    }
                }
                
                



                // ...


                // ...


                // Draw all icons with correct zIndex values
                iconList.sort((a, b) => a.zIndex - b.zIndex);
                iconList.forEach((icon) => {
                    // Draw a yellow circle
                    ctx.beginPath();
                    ctx.arc(icon.x + icon.size / 2, icon.y + icon.size / 2, icon.size / 2, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'yellow';
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    // Draw the icon image inside the circle
                    ctx.save();
                    ctx.clip();
                    ctx.drawImage(icon.img, icon.x, icon.y, icon.size, icon.size);
                    ctx.restore();
                });

                // Check if largest icon is equal to canvas size
                if (largestIcon.size >= canvas.width && largestIcon.size >= canvas.height) {
                    // Stop all movements
                    playSound();
                    showFireworkGif();
                    const backgroundImage = new Image();
                    backgroundImage.crossOrigin = "anonymous"; // Add this line

                    backgroundImage.src = largestIcon.imgUrl;
                    backgroundImage.onload = () => {
                        // Save the current context state
                        // let currentContextState = ctx.getImageData(0, 0, canvas.width, canvas.height);

                        // Define function to draw text
                        function drawText() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.save();

                            // Define clipping path
                            ctx.beginPath();
                            ctx.arc(200, 200, 200, 0, 2 * Math.PI);
                            ctx.closePath();
                            ctx.clip();

                            // Draw background image
                            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

                            // Restore the context state
                            ctx.restore();
                            const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

                            // Set random color for text
                            let color = colors[Math.floor(Math.random() * colors.length)];
                            ctx.fillStyle = color;
                            ctx.font = "bold 30px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText("Congratulations", canvas.width / 2, 280 + Math.sin(Date.now() / 200) * 10);

                            ctx.fillStyle = color;
                            ctx.font = "bold 30px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText(largestIcon.username, canvas.width / 2, 240 + Math.sin(Date.now() / 200) * 10);

                            animationID = requestAnimationFrame(drawText);
                        }

                        drawText();
                    };

                    // Stop animation after 10 seconds
                    function stopAnimation() {
                        cancelAnimationFrame(animationID);
                    }

                    let canvas2 = document.getElementById("myCanvas2");
                    let ctx2 = canvas2.getContext("2d");

                    if (winner.length === 3) {

                        ctx2.clearRect(0, 0, canvas.width, canvas.height);

                        winner.splice(0, 3);
                    }


                    addWinner(largestIcon.username, largestIcon.imgUrl);


                    // Create the winner list
                    ctx2.font = "20px Arial";
                    ctx2.fillStyle = "black";
                    ctx2.fillText("Winners:", 10, 30);

                    for (let i = 0; i < winner.length; i++) {
                        // Load the image
                        let img = new Image();
                        img.src = winner[i].imgurl;

                        // Draw the image and username
                        // Draw the image and username
                        img.onload = function () {
                            ctx2.drawImage(img, 10, 50 + i * 50, 40, 40); // Draw the image with a size of 40 x 40 pixels
                            ctx2.fillText(i + 1 + ' - ' + winner[i].username, 60, 70 + i * 60); // Draw the username
                        };
                    }

                    // Clear the canvas and delete all icons after 10 seconds
                    finishGame = true;
                    setTimeout(function () {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        canvas.width = canvas.width;
                        deleteAllIcons();
                        hideFireworkGif();
                        stopAnimation();
                    }, 10000); // 30 saniye beklet
                    return;
                }
            }
        }

        animationFrameId = requestAnimationFrame(drawIcons);
    }
}


function addWinner(userName, imgUrl) {
    winner.push({
        id: nextId++,
        username: userName,
        imgurl: imgUrl
    });
}

connection.on('like', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let likeCount = data.likeCount;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                iconList[i].size += likeCount * 0.1; // add 20 to each object's value property
                let icons = document.getElementsByClassName('icon');
                for (let j = 0; j < icons.length; j++) {
                    if (icons[j].src === iconList[i].imgurl) {
                        if (newSize > 400) {
                            icons[j].style.width = iconList[i].size + 'px';
                            icons[j].style.height = iconList[i].size + 'px';
                            icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                            icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                        }
                        break;
                    }
                }
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40 + (likeCount * 0.05);
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

});

connection.on('member', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40;
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

})

connection.on('social', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                iconList[i].size += 1; // add 20 to each object's value property
                let icons = document.getElementsByClassName('icon');
                for (let j = 0; j < icons.length; j++) {
                    if (icons[j].src === iconList[i].imgurl) {
                        if (newSize > 400) {
                            icons[j].style.width = iconList[i].size + 'px';
                            icons[j].style.height = iconList[i].size + 'px';
                            icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                            icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                        }
                        break;
                    }
                }
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40 + 0.5;
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

})



// // New gift received
connection.on('gift', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    giftCount = (data.diamondCount * data.repeatCount);
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                iconList[i].size += giftCount * 15; // add 20 to each object's value property
                let icons = document.getElementsByClassName('icon');
                for (let j = 0; j < icons.length; j++) {
                    if (icons[j].src === iconList[i].imgurl) {
                        if (newSize > 400) {
                            icons[j].style.width = iconList[i].size + 'px';
                            icons[j].style.height = iconList[i].size + 'px';
                            icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                            icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                        }
                        break;
                    }
                }
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40 + (giftCount * 15);
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

})


function isPendingStreak(data) {
    return data.giftType === 1 && !data.repeatEnd;
}

// End
connection.on('streamEnd', () => {
    $('#stateText').text('Canlı sona çatdı.');
})