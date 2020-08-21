import React from 'react'

const mockPost = {
    story:'took a trip to alaska',
    img:'https://www.google.com/search?q=alaska+images&rlz=1C1CHBF_enUS891US891&sxsrf=ALeKk02xaJMoEtaZMAmuaNMIjIk88YWefQ:1597980016660&tbm=isch&source=iu&ictx=1&fir=DkLpPlW4HMivDM%252CoWgws_Pw3F2_dM%252C_&vet=1&usg=AI4_-kSPelm-SXco2Lswf-QKj8jnUiaNAg&sa=X&ved=2ahUKEwi_4YC6q6vrAhVhiOAKHYefAYwQ9QEwAHoECAoQMA#imgrc=DkLpPlW4HMivDM'
}

const UserStoryCard = () => {
    return(
        <>
            <h3>{mockPost.story}</h3>
            <img src={mockPost.img} alt='alaska'></img>
        
        </>
    )
}

export default UserStoryCard