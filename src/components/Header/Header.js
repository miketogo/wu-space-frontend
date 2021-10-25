import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'


function Header(props) {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <svg className="header__logo-svg" viewBox="0 0 134 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_291:2947)">
            <path d="M24.093 36.9331C24.093 28.3925 22.6915 25.5653 21.1809 25.0381C19.9369 24.5109 18.8448 23.4087 22.4809 22.6501C25.0453 22.1151 26.0879 32.3201 26.1323 36.9331V61.3159C26.1323 66.0607 27.8117 74.7594 32.9299 74.7594C38.0481 74.7594 39.8608 65.9728 39.8608 61.3159V14H41.9934V61.3159C42.1267 66.7636 40.2873 77 32.9299 77C25.5725 77 24.093 66.9833 24.093 61.3159V36.9331Z" fill="#E2C99F" />
            <path d="M82.0104 77.1329C82.0104 66.7325 82 77.2692 82 68.6289L82.1497 68.3976C83.2348 66.4865 84.9312 58.8339 85.0222 59.2816C85.1175 59.7505 86.6649 58.2363 85.9667 62.5006C85.9667 62.5006 84.8665 69.7528 84.8665 77.1329C84.8665 84.5129 87.2186 90.7333 94.3869 90.7333C101.555 90.7333 104.015 82.9761 104.015 77.0353V40L107 42.3813V77.0353C107 82.7275 104.691 93 94.3869 93C84.0825 93 82.0104 82.8664 82.0104 77.1329Z" fill="white" />
            <path d="M40.0976 62.5303C39.9628 67.9736 41.2789 78 48.7192 78C55.41 78 57.3865 69.8647 59.3811 62.5303C60.7774 57.3958 63.5266 50.7941 67 45.8759L61.0864 44.8354C59.5232 46.9861 55.8405 51.6017 53.9407 62.2391C52.6701 72.308 50.7229 75.3893 48.3888 75.4982C43.213 75.4982 42.1128 67.2176 42.1128 62.5645L42.1727 13L40 13.4279L40.0976 62.5303Z" fill="#E2C99F" />
            <path fillRule="evenodd" clipRule="evenodd" d="M117.001 73.5228C115.797 78.9993 113.106 83.1564 109.519 86.5009C106.181 89.9755 102.268 92.4051 98.1599 93.8392C94.1002 95.2731 89.9761 95.558 86.2936 95.1878C82.6007 94.7959 79.3063 93.7685 76.6198 92.4061C76.1735 92.2051 75.7573 91.9609 75.3512 91.7226C75.1344 91.5954 74.9206 91.4699 74.7065 91.3536C74.601 91.2921 74.4954 91.2322 74.3905 91.1727C74.1943 91.0614 74.0004 90.9515 73.8134 90.8346C73.5795 90.6686 73.3489 90.5053 73.1221 90.3447L73.1194 90.3428L72.9991 90.2576C72.8145 90.1242 72.631 89.9953 72.4504 89.8683C72.1144 89.6321 71.7883 89.4029 71.4831 89.1651C71.0321 88.7743 70.6026 88.4017 70.1947 88.0473C69.587 87.5618 69.0962 87.0342 68.6502 86.5547C68.4783 86.3699 68.3131 86.1923 68.1503 86.027C68.0509 85.9179 67.9512 85.8146 67.8542 85.7142C67.6767 85.5305 67.5085 85.3563 67.3686 85.1737C67.2612 85.0353 67.1587 84.9031 67.0611 84.7774C66.961 84.6485 66.8662 84.5263 66.7768 84.4109C66.0721 83.504 65.6966 83.019 65.6966 83.019C65.6966 83.019 66.1087 83.4714 66.8807 84.3197C67.073 84.5306 67.288 84.7669 67.5241 85.0263C67.6749 85.194 67.8543 85.3521 68.0431 85.5186C68.1479 85.611 68.2556 85.7059 68.3629 85.8064C68.538 85.9579 68.7158 86.121 68.9005 86.2903C69.374 86.7244 69.8922 87.1995 70.5235 87.6254C70.9469 87.9376 71.3936 88.2667 71.8622 88.6111C72.1733 88.8156 72.5039 89.0099 72.8433 89.2095C73.0323 89.3205 73.224 89.4332 73.4166 89.5502C73.5567 89.6336 73.6982 89.7178 73.8412 89.803C73.974 89.8821 74.1082 89.962 74.2437 90.0427C74.4343 90.1414 74.6317 90.2327 74.8315 90.3252C74.9354 90.3733 75.04 90.4216 75.1445 90.4715C75.3638 90.5682 75.5824 90.6739 75.8034 90.7807C76.2059 90.9753 76.6166 91.1739 77.0545 91.3294C79.7197 92.4199 82.9114 93.123 86.3646 93.1995C89.8101 93.2567 93.5516 92.6699 97.0842 91.07C100.567 89.5286 103.96 86.9959 106.57 83.7607C109.131 80.6844 110.974 76.8122 111.833 72.7354L111.811 72.7298L111.93 72.2182L112.077 71.5019L112.218 70.6947L112.311 70.0798L112.406 69.297L112.497 68.3063L112.547 67.3426L112.569 66.2388L112.544 65.1524L112.462 63.8605L112.318 62.5795L112.185 61.6688L111.963 60.4859L111.728 59.4771L111.348 58.0827L111.062 57.2025L110.739 56.2836L110.39 55.4043L109.907 54.3102L109.422 53.3248L108.946 52.4399L108.483 51.6488L107.782 50.5455L106.985 49.4199L106.229 48.4531L105.736 47.863L105.194 47.2615L104.512 46.5405L103.798 45.8444L103.084 45.1902L102.095 44.3657L101.071 43.5743L100.148 42.9371L99.4243 42.4731L98.5055 41.9248L97.1802 41.2139L95.3029 40.3584L92.9779 39.5221L89.4692 38.7211L86.2468 38.3661L82.3712 38.5802L80.7349 38.8334L79.7599 39.0334L79.0164 39.206L78.1934 39.4292L77.391 39.6662L76.7501 39.8811L76.2211 40.07L75.4555 40.3647L74.8198 40.6332L73.9305 41.0427L73.1925 41.4145L72.4457 41.8174L71.7983 42.1918L71.0517 42.6648L70.4617 43.0616L69.5331 43.7263L67.7118 45.2166L66.8082 46.1048L66.8034 46.1096L66.156 46.7744L66.153 46.7775L65.5586 47.4048L64.9858 48.0493L64.4881 48.6876L63.5585 49.987L62.9046 51.0003L62.005 52.538L61.4808 53.5559L60.6914 55.3605L60.3315 56.4294L59.6495 57.9388C59.4935 58.5014 59.2919 59.4598 58.6812 60.0604C58.0582 60.6731 55.6937 66.6441 54.5545 66.333C53.3816 66.0128 54.3516 59.5091 54.1889 58.5486C54.0283 57.6009 54.1881 56.5786 54.3806 55.9249L54.382 55.9203L55.0363 53.92L55.0372 53.9173L55.4726 52.6242L56.4241 50.449L57.0606 49.213L58.1377 47.3719L58.9255 46.1512L60.0388 44.595L60.6477 43.8141L61.3447 43.0298L62.0561 42.2791L62.0591 42.2759L62.8359 41.4784L63.9286 40.4044L66.1155 38.6148L67.2355 37.8132L67.9502 37.3325L68.8457 36.7653L69.629 36.3123L70.5299 35.8263L71.4146 35.3806L72.483 34.8888L73.2519 34.564L74.1752 34.2086L74.8487 33.9148L75.503 33.6594L76.4884 33.366L77.5038 33.1109L78.348 32.8987L79.5184 32.6393L80.4898 32.4674C80.4898 32.4674 81.1081 32.367 81.5118 32.3259C81.9922 32.2769 82.2641 32.2623 82.7464 32.2376C83.2287 32.2129 83.4436 32.2074 83.8907 32.1999C84.3504 32.1922 84.6083 32.1923 85.0679 32.1998C85.5209 32.2072 85.7753 32.2086 86.2274 32.2373C86.609 32.2614 87.2089 32.313 87.2089 32.313C87.2089 32.313 87.797 32.378 88.1778 32.4121C88.5586 32.4462 88.7721 32.4654 89.153 32.4995C89.5338 32.5337 89.7707 32.5759 90.1486 32.6344C90.5655 32.699 91.1813 32.8274 91.1813 32.8274L92.2344 33.0678L93.2876 33.3082L94.3248 33.62L97.1251 34.5797L99.4041 35.5867L100.999 36.4425L102.105 37.1024L102.978 37.6617L104.09 38.4301L105.323 39.382L106.51 40.3723L107.372 41.1617L108.231 41.9997L109.054 42.8687L109.705 43.5912L110.301 44.3056L111.209 45.4671L112.168 46.8218L113.012 48.1481L113.57 49.1031L114.143 50.1685L114.727 51.3548L115.308 52.6705L115.729 53.7326L116.119 54.8407L116.463 55.8988L116.919 57.5718L117.202 58.789L117.469 60.2126L117.63 61.3119L117.803 62.8506L117.902 64.4051L117.932 65.7154L117.905 67.0431L117.844 68.2041L117.735 69.3958L117.621 70.3396L117.508 71.0862L117.339 72.052L117.161 72.9198L117.019 73.5275L117.001 73.5228ZM116.411 73.3105L116.538 72.7654L116.712 71.92L116.878 70.9676L116.988 70.2416L117.1 69.3177L117.207 68.1486L117.266 67.0112L117.293 65.7086L117.263 64.4263L117.166 62.9017L116.996 61.3901L116.839 60.3152L116.577 58.9192L116.3 57.7285L115.851 56.0833L115.514 55.0444L115.132 53.9601L114.721 52.922L114.151 51.6309L113.578 50.468L113.017 49.4237L112.47 48.4898L111.643 47.1879L110.702 45.8595L109.81 44.7188L109.229 44.022L108.589 43.3121L107.783 42.4613L106.941 41.6398L106.098 40.8676L104.932 39.8948L103.723 38.9609L102.634 38.2087L101.779 37.661L100.695 37.014L99.1309 36.175L96.9155 35.1655L94.1712 34.1783L90.0313 33.2332L86.2274 32.8142L81.6544 33.0668L79.7227 33.3657L78.5721 33.6017L77.6944 33.8055L76.7234 34.0688L75.7766 34.3485L75.0231 34.6011L75.0174 34.6031L74.3958 34.8251L73.4925 35.1728L72.7419 35.4898L71.6925 35.973L70.8216 36.4118L69.9403 36.8872L69.1762 37.3292L68.2948 37.8875L67.5985 38.3558L66.5025 39.1403L64.3536 40.8988L63.2815 41.9526L62.5175 42.7371L62.5144 42.7403L61.8131 43.4805L61.1365 44.2418L60.5484 44.9961L59.4517 46.5289L58.68 47.7249L57.6188 49.5388L56.9997 50.7409L56.068 52.8709L55.6427 54.1342L55.6418 54.1368L54.9914 56.125C54.8176 56.7173 54.6806 57.63 54.8186 58.4443C54.9548 59.2479 55.1848 59.8292 56.0324 60.0607C56.9137 60.3013 57.738 60.0756 58.2355 59.5864C58.7335 59.0966 59.051 58.4219 59.1906 57.9393L59.1891 57.9388L59.7257 56.2135L60.096 55.1138L60.9052 53.264L61.4469 52.2123L62.3623 50.6474L63.0322 49.6092L63.9786 48.2865L64.497 47.6216L65.0902 46.9541L65.6946 46.3163L65.6976 46.3132L66.3577 45.6354L67.2868 44.7222L69.1461 43.2008L70.0986 42.519L70.707 42.1098L71.4679 41.6279L72.1342 41.2425L72.9008 40.829L73.6526 40.4503L74.5609 40.0321L75.215 39.7559L76.0005 39.4535L76.5419 39.2603L77.1962 39.041L78.0195 38.7977L78.8568 38.5708L79.6232 38.3928L80.6171 38.1891L82.2986 37.9288L86.2564 37.7103L89.5661 38.0748L93.1474 38.8924L95.5332 39.7506L97.4533 40.6256L98.81 41.3533L99.7502 41.9144L100.492 42.39L101.438 43.0435L102.486 43.853L103.496 44.6949L104.229 45.3663L104.959 46.0789L105.659 46.8182L106.212 47.4321L106.719 48.04L107.492 49.0274L108.307 50.1794L109.024 51.3071L109.5 52.1193L109.987 53.0253L110.484 54.034L110.977 55.1528L111.335 56.0562L111.667 56.9989L111.959 57.8982L112.347 59.3204L112.588 60.3557L112.815 61.5662L112.952 62.5012L113.099 63.8094L113.183 65.1312L113.208 66.2456L113.185 67.3745L113.134 68.3619L113.041 69.3751L112.945 70.1778L112.848 70.8134L112.705 71.6339L116.411 73.3105Z" fill="#E2C99F" />
            <path d="M116.411 73.3105L116.538 72.7654L116.712 71.92L116.878 70.9676L116.988 70.2416L117.1 69.3177L117.207 68.1486L117.266 67.0112L117.293 65.7086L117.263 64.4263L117.166 62.9017L116.996 61.3901L116.839 60.3152L116.577 58.9192L116.3 57.7285L115.851 56.0833L115.514 55.0444L115.132 53.9601L114.721 52.922L114.151 51.6309L113.578 50.468L113.017 49.4237L112.47 48.4898L111.643 47.1879L110.702 45.8595L109.81 44.7188L109.229 44.022L108.589 43.3121L107.783 42.4613L106.941 41.6398L106.098 40.8676L104.932 39.8948L103.723 38.9609L102.634 38.2087L101.779 37.661L100.695 37.014L99.1309 36.175L96.9155 35.1655L94.1712 34.1783L90.0313 33.2332L86.2274 32.8142L81.6544 33.0668L79.7227 33.3657L78.5721 33.6017L77.6944 33.8055L76.7234 34.0688L75.7766 34.3485L75.0231 34.6011L75.0174 34.6031L74.3958 34.8251L73.4925 35.1728L72.7419 35.4898L71.6925 35.973L70.8216 36.4118L69.9403 36.8872L69.1762 37.3292L68.2948 37.8875L67.5985 38.3558L66.5025 39.1403L64.3536 40.8988L63.2815 41.9526L62.5175 42.7371L62.5144 42.7403L61.8131 43.4805L61.1365 44.2418L60.5484 44.9961L59.4517 46.5289L58.68 47.7249L57.6188 49.5388L56.9997 50.7409L56.068 52.8709L55.6427 54.1342L55.6418 54.1368L54.9914 56.125C54.8176 56.7173 54.6806 57.63 54.8186 58.4443C54.9548 59.2479 55.1848 59.8292 56.0324 60.0607C56.9137 60.3013 57.738 60.0756 58.2355 59.5864C58.7335 59.0966 59.051 58.4219 59.1906 57.9393L59.1891 57.9388L59.7257 56.2135L60.096 55.1138L60.9052 53.264L61.4469 52.2123L62.3623 50.6474L63.0322 49.6092L63.9786 48.2865L64.497 47.6216L65.0902 46.9541L65.6946 46.3163L65.6976 46.3132L66.3577 45.6354L67.2868 44.7222L69.1461 43.2008L70.0986 42.519L70.707 42.1098L71.4679 41.6279L72.1342 41.2425L72.9008 40.829L73.6526 40.4503L74.5609 40.0321L75.215 39.7559L76.0005 39.4535L76.5419 39.2603L77.1962 39.041L78.0195 38.7977L78.8568 38.5708L79.6232 38.3928L80.6171 38.1891L82.2986 37.9288L86.2564 37.7103L89.5661 38.0748L93.1474 38.8924L95.5332 39.7506L97.4533 40.6256L98.81 41.3533L99.7502 41.9144L100.492 42.39L101.438 43.0435L102.486 43.853L103.496 44.6949L104.229 45.3663L104.959 46.0789L105.659 46.8182L106.212 47.4321L106.719 48.04L107.492 49.0274L108.307 50.1794L109.024 51.3071L109.5 52.1193L109.987 53.0253L110.484 54.034L110.977 55.1528L111.335 56.0562L111.667 56.9989L111.959 57.8982L112.347 59.3204L112.588 60.3557L112.815 61.5662L112.952 62.5012L113.099 63.8094L113.183 65.1312L113.208 66.2456L113.185 67.3745L113.134 68.3619L113.041 69.3751L112.945 70.1778L112.848 70.8134L112.705 71.6339L116.411 73.3105Z" fill="#E2C99F" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.3896 27.1995C20.2372 21.3251 24.1115 17.4225 29.1609 14.5672C33.9555 11.5009 39.142 9.76241 44.2907 9.19785C49.3832 8.62111 54.2464 9.35828 58.4233 10.7218C62.6066 12.1123 66.1589 14.1182 68.917 16.3462C69.3819 16.6878 69.8004 17.0704 70.2088 17.4437C70.4267 17.6429 70.6418 17.8395 70.8595 18.0258C70.9657 18.1224 71.0724 18.2171 71.1784 18.3111C71.3768 18.4872 71.5727 18.6611 71.7589 18.8411C71.9865 19.0885 72.2109 19.3321 72.4316 19.5717L72.4343 19.5746L72.5513 19.7016C72.7304 19.8996 72.9092 20.0924 73.0853 20.2821C73.4128 20.635 73.7307 20.9776 74.022 21.3244C74.4422 21.8814 74.8421 22.4124 75.2217 22.9172C75.7987 23.6215 76.2288 24.3432 76.6196 24.9992C76.7702 25.2519 76.915 25.4949 77.0601 25.7233C77.1467 25.872 77.2351 26.0142 77.3211 26.1525C77.4785 26.4055 77.6277 26.6454 77.7417 26.8874C77.8297 27.0713 77.9138 27.2469 77.9937 27.4138C78.0758 27.5851 78.1535 27.7474 78.2268 27.9006C78.8048 29.1056 79.1123 29.7496 79.1123 29.7496C79.1123 29.7496 78.7536 29.133 78.082 27.9769C77.9147 27.6895 77.7276 27.3675 77.5222 27.014C77.3915 26.7859 77.2251 26.5613 77.05 26.3248C76.9528 26.1936 76.853 26.0588 76.755 25.9178C76.5918 25.7018 76.4285 25.472 76.259 25.2334C75.8243 24.6217 75.3485 23.9522 74.7284 23.3093C74.3195 22.848 73.8881 22.3618 73.4353 21.8526C73.1282 21.5419 72.7959 21.2375 72.4547 20.9251C72.2647 20.7512 72.0721 20.5747 71.8794 20.3932C71.7388 20.2631 71.5969 20.1316 71.4534 19.9987C71.3202 19.8753 71.1856 19.7507 71.0496 19.6248C70.8545 19.4644 70.6495 19.3106 70.4421 19.1549C70.3342 19.0739 70.2256 18.9925 70.1174 18.9093C69.8885 18.7438 69.6627 18.5684 69.4344 18.391C69.0186 18.068 68.5944 17.7384 68.1272 17.4503C65.322 15.5347 61.8029 13.9214 57.8144 12.9485C53.8297 11.9993 49.3309 11.7012 44.8063 12.6007C40.3551 13.447 35.7459 15.4356 31.859 18.4183C28.0709 21.2341 24.9069 25.1332 22.8302 29.5158L22.8543 29.5278L22.5806 30.0749L22.2201 30.8458L21.8431 31.7211L21.5714 32.3913L21.2545 33.251L20.8869 34.3462L20.5735 35.4215L20.2552 36.6621L19.9966 37.8951L19.7496 39.3749L19.578 40.8583L19.4913 41.9207L19.4355 43.3132L19.4409 44.5125L19.5133 46.1846L19.6125 47.2518L19.7445 48.3724L19.9163 49.4547L20.1871 50.8141L20.4895 52.0513L20.8075 53.1725L21.1354 54.1847L21.6577 55.6105L22.285 57.086L22.9067 58.3718L23.3219 59.1644L23.7919 59.9827L24.3934 60.972L25.0373 61.9412L25.6936 62.8633L26.6229 64.048L27.6026 65.2046L28.5047 66.1609L29.2225 66.8707L30.1439 67.7257L31.4942 68.8686L33.4471 70.3165L35.9247 71.8578L39.7859 73.663L43.4328 74.8911L47.9886 75.6444L49.9551 75.7786L51.14 75.8032L52.0489 75.7991L53.0634 75.7584L54.0576 75.6968L54.8585 75.6187L55.5227 75.5412L56.4894 75.405L57.2985 75.2651L58.4393 75.0311L59.3945 74.8007L60.3682 74.5376L61.2188 74.281L62.2108 73.9387L63.0008 73.6421L64.2548 73.1301L66.7637 71.9149L68.0478 71.1441L68.0548 71.1398L68.9823 70.5555L68.9867 70.5527L69.8427 69.997L70.6784 69.4164L71.4251 68.8234L72.8483 67.595L73.8758 66.6187L75.3272 65.1135L76.2053 64.0988L77.5995 62.2638L78.3003 61.1493L79.3399 59.4064C79.67 58.8111 80.3096 57.9946 81.1775 57.4733C82.063 56.9414 83.1992 56.7135 84.4393 57.3572C85.7161 58.02 86.0577 59.2073 85.9924 60.3336C85.9279 61.445 85.4717 62.5582 85.0751 63.2468L85.0722 63.2517L83.783 65.3422L83.7813 65.345L82.9334 66.6933L81.253 68.905L80.1867 70.1371L78.4489 71.9394L77.2111 73.1155L75.5066 74.5867L74.5931 75.3122L73.5762 76.0187L72.5517 76.6837L72.5473 76.6865L71.4344 77.3875L69.8815 78.3197L66.8689 79.7788L65.3564 80.3964L64.3994 80.7557L63.2097 81.1661L62.1805 81.4766L61.0058 81.794L59.8608 82.07L58.4903 82.3511L57.5117 82.5204L56.3458 82.6846L55.5464 82.7778L54.5843 82.8715L53.3852 82.9459L52.1705 82.9945C52.1705 82.9945 51.4997 83.0022 51.0698 82.9994C50.5147 82.9957 50.2034 82.9912 49.6486 82.9698C48.7193 82.934 48.1983 82.8977 47.2727 82.8077C45.1166 82.5982 43.8981 82.4416 41.8005 81.9028C40.0425 81.4512 39.0828 81.09 37.3967 80.4199C35.5392 79.6815 34.5067 79.2242 32.761 78.2525C31.5595 77.5837 29.7717 76.3929 29.7717 76.3929L27.4226 74.6513L25.7971 73.2754L24.6882 72.2465L23.823 71.3909L22.7353 70.2378L21.5568 68.8465L20.4406 67.4235L19.6486 66.3108L18.8735 65.1442L18.1485 63.9517L17.5841 62.9689L17.0815 62.0092L16.3346 60.4647L15.5795 58.6887L14.9517 56.9747L14.556 55.753L14.173 54.4029L13.809 52.9135L13.4834 51.2789L13.2758 49.9715L13.1166 48.6203L12.9975 47.3373L12.9106 45.3312L12.9041 43.884L12.9712 42.2082L13.0759 40.9258L13.2821 39.1439L13.5793 37.3635L13.8873 35.8992L14.274 34.3841L14.6953 33.251L15.2439 31.7211L15.5855 31.0489L16.0465 30.0749L16.6936 28.82L17.0389 28.0291L17.3263 27.3279L17.3896 27.1995ZM19.0618 24.1591L12.0062 37.3636L13.2751 27.3214L13.258 27.3027L13.2378 27.2856L13.2145 27.2743L13.1922 27.2643H13.1656L13.1408 27.2684L13.1134 27.2786L13.0902 27.2856L13.0713 27.2941L13.0455 27.3063L13.0238 27.3214L13.0071 27.3376L12.9868 27.3584L12.9693 27.382L12.9512 27.4057L12.9381 27.427L12.8284 27.6372L12.6756 27.91L12.5385 28.2219L12.3857 28.6L12.1591 29.1994L11.8632 30.3768L11.5899 31.5883L11.3431 32.7282L10.9674 34.1921L10.6622 35.6476L10.3707 37.3938L10.1682 39.1442L10.0658 40.3982L10 42.0416L10.0064 43.4572L10.0918 45.43L10.2089 46.6898L10.3646 48.012L10.5675 49.2897L10.887 50.8938L11.2439 52.3539L11.6192 53.6771L12.0063 54.8719L12.6225 56.5544L13.3629 58.2957L14.0965 59.8128L14.5867 60.7487L15.1415 61.7146L15.8512 62.882L16.6111 64.0257L17.3858 65.1141L18.4823 66.512L19.6385 67.8769L20.7032 69.0056L21.5504 69.8435L22.6378 70.8524L24.2314 72.2012L26.5359 73.9099L29.4604 75.7291L34.0162 77.8591L38.3212 79.3088L43.6968 80.1977L46.0184 80.3561L47.4167 80.3851L48.4895 80.3803L49.6864 80.3323L50.8597 80.2596L51.8012 80.1678L51.8084 80.1671L52.5888 80.076L53.7295 79.9153L54.6848 79.7501L56.0309 79.474L57.1581 79.2021L58.3071 78.8916L59.3113 78.5887L60.4823 78.1845L61.4145 77.8346L62.8947 77.2302L65.8549 75.7964L67.3785 74.8818L68.4732 74.1921L68.4776 74.1894L69.4876 73.5337L70.4748 72.8478L71.3572 72.1471L73.0362 70.6979L74.2488 69.5457L75.9609 67.7701L76.9979 66.5717L78.6435 64.406L79.4717 63.0888L79.4735 63.086L80.7549 61.0082C81.1775 60.3336 81.6313 59.5866 81.6867 58.6318C81.7414 57.6894 81.3471 56.6529 80.4245 56.174C79.4651 55.676 78.6124 55.8423 77.9053 56.267C77.1975 56.6922 76.6503 57.3725 76.3605 57.8815L76.3621 57.8825L75.2824 59.6927L74.5612 60.8393L73.1321 62.7202L72.2248 63.7686L70.7477 65.3005L69.6951 66.3007L68.2463 67.5512L67.4685 68.1689L66.603 68.7702L65.7326 69.3352L65.7282 69.338L64.7825 69.9337L63.4621 70.7263L60.9008 71.9668L59.6145 72.4921L58.7999 72.7979L57.789 73.1466L56.9134 73.4107L55.914 73.6808L54.9411 73.9153L53.7759 74.1543L52.9433 74.2983L51.9514 74.4381L51.2718 74.5172L50.4541 74.5969L49.4339 74.6601L48.4018 74.7014L47.465 74.7056L46.2572 74.6805L44.2363 74.5426L39.5839 73.7732L35.8382 72.5119L31.8971 70.6693L29.3547 69.0877L27.3573 67.6068L25.975 66.4368L25.0321 65.5619L24.2963 64.8343L23.3713 63.8536L22.3692 62.6707L21.4202 61.4608L20.7466 60.5145L20.0875 59.5224L19.4708 58.508L18.9911 57.6728L18.5635 56.8563L17.9285 55.5431L17.2865 54.033L16.7527 52.5756L16.4161 51.5365L16.0904 50.3885L15.7809 49.122L15.504 47.7321L15.3274 46.6201L15.192 45.4706L15.0908 44.3801L15.017 42.6746L15.0114 41.4438L15.0685 40.0188L15.1575 38.9281L15.3328 37.4131L15.4371 36.6621L15.5855 35.6476L15.8213 34.733L16.1763 33.251L16.5631 32.1489L16.943 31.0489L17.3263 29.9828L17.9552 28.5958L18.5357 26.6124L19.0618 24.1591Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_291:2947">
              <rect width="134" height="102" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div onClick={props.handleMenuOpenClick} className="header__burger">
        <svg className="header__burger-svg" viewBox="0 0 63 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H63V5.25H0V0Z" fill="white" />
          <path d="M0 22.75H42V28H0V22.75Z" fill="white" />
        </svg>
      </div>
      <nav className="header__nav">
        <NavLink exact to="/" className="header__nav-link" activeClassName="header__nav-link_active">
          Главная
        </NavLink>
        <NavLink exact to="/services" className="header__nav-link" activeClassName="header__nav-link_active">
          Услуги
        </NavLink>
        <NavLink to="/contacts" className="header__nav-link" activeClassName="header__nav-link_active">
          контакты
        </NavLink>
        <NavLink to="/account" className="header__nav-link" activeClassName="header__nav-link_active">
          Личный кабинет
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;