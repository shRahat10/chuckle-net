let readCount = document.getElementById('mark-as-read').innerText;

function readPost(title, view){
    setCount();
    console.log(title);
    console.log(view);
    const readContainer = document.getElementById('read-container');
    const readContainerDiv = document.createElement('div');
    readContainerDiv.className = 'space-y-4 flex justify-between items-center gap-5 bg-white rounded-2xl p-4';
    readContainerDiv.innerHTML = `
    <h1 class="font-bold text-base">${title}</h1>
    <div class="flex gap-2">
        <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <clipPath id="clip30_2408">
                    <rect id="tabler-icon-eye" width="28.000000" height="28.000000" fill="white"
                        fill-opacity="0" />
                </clipPath>
            </defs>
            <rect id="tabler-icon-eye" width="28.000000" height="28.000000" fill="#FFFFFF"
                fill-opacity="0" />
            <g clip-path="url(#clip30_2408)">
                <path id="Vector"
                    d="M12.3501 15.6499C12.7877 16.0875 13.3812 16.3334 14 16.3334C14.6188 16.3334 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6189 16.3333 14C16.3333 13.3811 16.0875 12.7876 15.6499 12.3501C15.2123 11.9126 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9126 12.3501 12.3501C11.9125 12.7876 11.6667 13.3811 11.6667 14C11.6667 14.6189 11.9125 15.2123 12.3501 15.6499ZM14 21C9.79999 21 6.29999 18.6666 3.5 14C6.29999 9.33325 9.79999 7 14 7C18.2 7 21.7 9.33325 24.5 14C21.7 18.6666 18.2 21 14 21Z"
                    stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                    stroke-linejoin="round" />
            </g>
        </svg>
        <p>${view}</p>
    </div>
    `;
    readContainer.appendChild(readContainerDiv);
}

function setCount(){
    readCount++;
    console.log(readCount);
    document.getElementById('mark-as-read').innerText = readCount;
}
