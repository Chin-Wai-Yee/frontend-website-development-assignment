import './css/Ethinicity.css';
import React from 'react';
import TitleBoxWithBackground from './reuseComponent/TitleBoxWithBackground';
import Typography from '@mui/material/Typography';
import image1 from './images/ethnicity/malay.jpeg';
import image2 from './images/ethnicity/chinese.jpeg';
import image3 from './images/ethnicity/indian.jpg';
import image4 from './images/ethnicity/orangAsli.jpeg';
import ethnicityBackground from './images/ethnicity/background2.jpg';

function Ethinicity() {
  return (
    <div>
      <TitleBoxWithBackground background={ethnicityBackground}>
        <Typography variant='h2' textAlign='center'>
          Ethinicity in Malaysia
        </Typography>
      </TitleBoxWithBackground>

      <section class="ethicsContent">
        <div class="container">


          <br /> <br />


          <div class="row">
            <div class="col-md-4">
              <img src={image1} alt="dragon dragon roar" class="img-fluid custom-image" />
            </div>
            <div class="col-md-8">
              <h2>Malay</h2>
              <p>
                The Malay ethnicity is a diverse and vibrant group with a rich cultural heritage originating
                from the Malay Peninsula, parts of Sumatra, and coastal Borneo. Malays are predominantly Muslim
                and have a unique blend of traditions, beliefs, and practices that reflect their historical and
                cultural influences from various civilizations, including Indian, Chinese, Arab, and indigenous
                Malay cultures. The Malay language, Bahasa Melayu, is a key element of their identity and is
                spoken by the majority of Malays, along with various regional dialects. Traditional Malay customs,
                such as the adat (customary laws), traditional clothing like the baju kurung, and cultural practices
                like silat (a traditional martial art) and dikir barat (a form of traditional Malay choral singing),
                are integral to their cultural identity. Additionally, Malays have a strong sense of community and
                hospitality, often expressed through the practice of gotong-royong (mutual aid) and the observance
                of traditional ceremonies and festivals like Hari Raya Aidilfitri and Hari Raya Aidiladha.
              </p>
            </div>
          </div>
          <br /> <br />

          <div class="row">
            <div class="col-md-4">
              <img src={image2} alt="dragon dragon roar" class="img-fluid custom-image" />
            </div>
            <div class="col-md-8">
              <h2>Chinese</h2>
              <p>

                The Chinese community in Malaysia is one of the country's largest ethnic groups, comprising
                about 23% of the population. Most Malaysian Chinese are descendants of Chinese immigrants
                who arrived in Malaysia during the 19th and early 20th centuries. They have diverse cultural
                backgrounds, originating from various regions in China such as Guangdong, Fujian, and Hainan.
                Despite their diverse origins, Malaysian Chinese have assimilated into a unique Malaysian-Chinese
                culture over generations, blending Chinese traditions with Malaysian customs. They have made
                significant contributions to Malaysia's economy, culture, and society, and continue to play an integral
                role in the country's multicultural fabric.
              </p>
            </div>
          </div>

          <br /> <br />

          <div class="row">
            <div class="col-md-4">
              <img src={image3} alt="dragon dragon roar" class="img-fluid custom-image" />
            </div>
            <div class="col-md-8">
              <h2>Indian</h2>
              <p>
                The Indian community in Malaysia is a diverse group with roots tracing back to
                the colonial era when Indian laborers were brought to the country by the British
                to work on plantations. Today, the Indian community in Malaysia is composed of
                various ethnic groups, including Tamil, Malayalee, Telugu, Punjabi, and others,
                each with its own distinct culture, language, and traditions. The Indian community
                has made significant contributions to Malaysia's cultural and economic landscape,
                particularly in areas such as cuisine, music, dance, and trade. Despite facing challenges
                related to integration and cultural preservation, the Indian community continues to play
                a vibrant and integral role in Malaysia's multicultural society.
              </p>
            </div>
          </div>
          <br /> <br />

          <div class="row">
            <div class="col-md-4">
              <img src={image4} alt="dragon dragon roar" class="img-fluid custom-image" />
            </div>
            <div class="col-md-8">
              <h2>Orang Asli</h2>
              <p>
                The Orang Asli are the indigenous people of Peninsular Malaysia, comprising several ethnic
                groups each with its own language, culture, and traditions. They are believed to be among
                the earliest inhabitants of the region, with a lifestyle deeply rooted in the forests and
                jungles. The Orang Asli are traditionally animists, with a spiritual belief system closely
                tied to nature. They have faced challenges such as land encroachment, cultural assimilation,
                and limited access to education and healthcare. Efforts are being made to preserve their
                cultural heritage and improve their living conditions, recognizing their unique status and
                contributions to Malaysia's cultural diversity.

              </p>
            </div>
          </div>
          <br /> <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Ethinicity;
