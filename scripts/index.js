const allPhoneData = async() => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();
    showAllPhone(data.data);
}

const showAllPhone = (phones) => {
    const allPhoneContainer = document.getElementById('all-phone-container');
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('p-6', 'border', 'border-[#CFCFCF]', 'rounded-lg', 'w-[364px]');
        phoneCard.innerHTML = `
        <div class="w-[314px] h-[300px] bg-[#0D6EFD0D] bg-opacity-5 rounded-lg">
            <img class="w-[214px] h-[213px] 
        mx-auto pt-12" src=${phone.image} alt="">
        </div>
        <div>
            <p class="font-bold text-2xl text-[#403F3F] mb-5 mt-6">${phone.phone_name}</p>
            <p class="text-lg text-[#706F6F] mb-2">There are many variations of passages of available, but the majority have suffered</p>
            <p class="font-bold text-2xl text-
        [#403F3F] mb-6">$999</p>
            <button class="py-2 px-6 bg-[#0D6EFD] rounded-lg text-[#FFFFFF] text-xl font-semibold">Show Details</button>
        </div>
        `
        allPhoneContainer.appendChild(phoneCard)
    });
}


const loading = () => {
    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden');
        allPhoneData()
    },3000)
}
