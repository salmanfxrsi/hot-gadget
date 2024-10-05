const allPhoneData = async(status,brandName) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`);
    const data = await response.json();

    document.getElementById('show-all-button').classList.remove('hidden');


    if(status){
        showAllPhone(data.data);
    }
    else{
        showAllPhone(data.data.slice(0,6));
    }
}

const showAllPhone = (phones) => {
    const allPhoneContainer = document.getElementById('all-phone-container');
    document.getElementById('all-phone-container').innerHTML = ""  
    phones.forEach(phone => {
        const {image,slug,phone_name,brand} = phone;
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('p-6', 'border', 'border-[#CFCFCF]', 'rounded-lg', 'w-[364px]');
        phoneCard.innerHTML = `
        <div class="w-[314px] h-[300px] bg-[#0D6EFD0D] bg-opacity-5 rounded-lg">
            <img class="w-[214px] h-[213px] 
        mx-auto pt-12" src=${image} alt="">
        </div>
        <div>
            <p class="font-bold text-2xl text-[#403F3F] mb-5 mt-6">${phone_name}</p>
            <p class="text-lg text-[#706F6F] mb-2">There are many variations of passages of available, but the majority have suffered</p>
            <p class="font-bold text-2xl text-
        [#403F3F] mb-6">$999</p>
            <button onclick="phoneDetails('${slug}')" class="py-2 px-6 bg-[#0D6EFD] rounded-lg text-[#FFFFFF] text-xl font-semibold">Show Details</button>
        </div>
        `
        allPhoneContainer.appendChild(phoneCard)
    });
}


const handleShowAll = () => {
    allPhoneData(true);
}


const handleSearch = () => {
    const searchInput = document.getElementById('search-input').value;
    document.getElementById('spinner').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden');
        allPhoneData(true,searchInput)
    },3000)
}

allPhoneData()

const phoneDetails = async(slug) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    const data = await response.json();
    console.log(data.data)
}
