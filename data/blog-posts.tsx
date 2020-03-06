type BLOG_POST_DATA_PROPS = {
  [key: string]: {
    title: string;
    urlFriendlyTitle: string;
    imageUrl?: string;
    caption?: string;
    author: string;
    postedDate: string;
    videoLink?: string;
    content: string;
  };
};

const BLOG_POST_DATA: BLOG_POST_DATA_PROPS = {
  'Team-Frost-Law-Firm-joins-the-8th-annual-Walk-for-Mesothelioma-2019': {
    title:
      'Team Frost Law Firm joins the 8th annual Walk for Mesothelioma 2019',
    urlFriendlyTitle:
      'Team-Frost-Law-Firm-joins-the-8th-annual-Walk-for-Mesothelioma-2019',
    imageUrl:
      '/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+1.jpg',
    caption:
      'Team Frost Law Firm poses during the 8th Annual Mesothelioma Walk at Will Rogers State Historic Park on October 26th 2019.',
    author: 'Frost Law Firm',
    postedDate: 'October 26th, 2019',
    content:
      '<p class="py-2">The Pacific Mesothelioma Center (PMC), a division of The Pacific Heart, Lung & Blood Institute, established in 2012 holds an annual walk for mesothelioma. Team Frost Law Firm had over 15 participants this year that came out in support.</p> <p class="py-2"> Participants hiked up a mile to see a beautiful view overlooking Pacific Palisades. We received team t-shirts, yummy lunch, and the opportunity to win prizes. Prizes and raffles offered included a South African Photo Safari for Two, a Maui Deluxe Package, tickets to the Aquarium of the Pacific, and more! </p><p class="py-2"> The walk reached over its goal of $120,000. We hope to see everyone again next year. </p><p class="py-2"> The walk was held at the Will Rogers State Historic Park in Pacific Palisades, CA. </p> <div class="image pt-8"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+2.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"/> <span class="py-2 px-4 block text-xs text-black leading-tight"></span></div><div class="image"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+3.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk" /> <span class="py-2 px-4 block text-xs text-black leading-tight"></span></div><div class="image"> <img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+4.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk" /><span class="py-2 px-4 block text-xs text-black leading-tight"></span></div><div class="image"><img src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+5.jpg" alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"/><span class="py-2 px-4 block text-xs text-black leading-tight"></span> </div>',
    videoLink: ''
  },
  'Scott-featured-in-the-Keenan-Trial-Institute-Newsletter': {
    title: 'Scott featured in the Keenan Trial Institute Newsletter',
    urlFriendlyTitle: 'Scott-featured-in-the-Keenan-Trial-Institute-Newsletter',
    imageUrl: '/images/blog/keenantrialinstitute/kti-newsletter-cover.jpg',
    caption: 'Cover of Keenan Trial Institute Newsletter Volume Two Issue Two',
    author: 'Frost Law Firm',
    postedDate: 'August 16th, 2019',
    content:
      '<p className=px-4 mt-3 leading-tight tracking-wider text-lg">Check out Scott L. Frost in the Keenan Trial Institute newsletter!</p><div className="my-3"><iframe style="border: \'1px solid #777" src="https://indd.adobe.com/embed/0e8f250a-9daf-4c8f-a138-422443a0db7e?startpage=35&allowFullscreen=true" width="100%" height="600px" frameBorder="0" allowFullScreen=""></iframe></div>',
    videoLink: ''
  },
  'Neil-Patrick-Harris-gets-out-of-jury-duty-thanks-to-Scott': {
    title: 'Neil Patrick Harris gets out of jury duty thanks to Scott',
    urlFriendlyTitle:
      'Neil-Patrick-Harris-gets-out-of-jury-duty-thanks-to-Scott',
    imageUrl: '/images/blog/nph/nph-video-cover.jpg',
    author: 'Frost Law Firm',
    postedDate: 'August 16th, 2019',
    videoLink: 'https://www.youtube.com/embed/suP95tPSbUQ',
    content:
      '   <div class="video-youtube-container"><iframe\n            class="m-auto"\n            width="560"\n            height="315"\n            src="https://www.youtube.com/embed/suP95tPSbUQ"\n            frameBorder="0"\n            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n            allowfullScreen="true"\n          ></iframe></div>\n          <p class="mt-6 leading-tight tracking-wider text-lg">\n            Neil Patrick Harris was on The Late Show with James Corden and he\n            discusses his recent experience with jury duty. The \'lawyer\' he\n            refers to is actually Scott L. Frost as he was selecting his jury\n            for a trial.\n          </p>'
  }
};

export default BLOG_POST_DATA;
