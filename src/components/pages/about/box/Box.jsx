import React from 'react';
import './Box.scss';

const Box = () => {
    return (
        <div className='box-container'>
            <div className='box-area'>
                <div className='box box-front'>
                    <svg viewBox="0 0 284 313" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M233 155.998H275M270.947 71.1233L153.053 4.88225C146.214 1.03925 137.786 1.03925 130.947 4.88225L13.053 71.1233C6.214 74.9663 2 82.0713 2 89.7573V222.246C2 229.932 6.214 237.037 13.053 240.88L130.947 307.121C137.786 310.964 146.214 310.964 153.053 307.121L270.947 240.88C277.786 237.03 282 229.925 282 222.239V89.7573C282 82.0713 277.786 74.9663 270.947 71.1233ZM205 134.998V176.998V134.998ZM184 155.998H226H184ZM254 134.998V176.998V134.998Z" stroke-width="4" stroke-miterlimit="10" />
                        <path d="M142 71.9983C168.46 71.9983 192.925 84.2833 208.794 105.185L178.134 122.937C168.908 112.857 155.811 106.998 142 106.998C114.98 106.998 93 128.978 93 155.998C93 183.018 114.98 204.998 142 204.998C155.811 204.998 168.908 199.139 178.134 189.059L208.794 206.811C192.925 227.713 168.46 239.998 142 239.998C95.681 239.998 58 202.317 58 155.998C58 109.679 95.681 71.9983 142 71.9983Z" stroke-width="4" stroke-miterlimit="10" />
                    </svg>
                </div>
                <div className='box box-back'>
                    <svg viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 10C38.2 10 40 11.8 40 14C40 16.2 38.2 18 36 18C33.8 18 32 16.2 32 14C32 11.8 33.8 10 36 10ZM56 74C58.2 74 60 75.8 60 78C60 80.2 58.2 82 56 82C53.8 82 52 80.2 52 78C52 75.8 53.8 74 56 74Z" />
                        <path d="M46 2C30.4 2 26 9.4 26 14.2V22H46V28H14.2C8 28 2 33.2 2 46C2 58.8 8 64 14.2 64H26V54C26 49.6 29.6 46 34 46H58C62.4 46 66 42.4 66 38V14.2C66 9.2 61.6 2 46 2Z" stroke-width="1" stroke-miterlimit="10" />
                        <path d="M46 90C61.6 90 66 82.6 66 77.8V70H46V64H77.8C84 64 90 58.8 90 46C90 33.2 84 28 77.8 28H66V38C66 42.4 62.4 46 58 46H34C29.6 46 26 49.6 26 54V77.8C26 82.6 30.4 90 46 90Z" stroke-width="1" stroke-miterlimit="10" />
                    </svg>
                </div>
                <div className='box box-top'></div>
                <div className='box box-bottom'></div>
                <div className='box box-left'>
                    <svg width="300" height="319" viewBox="0 0 300 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M172.231 96.6588L171.736 96.3762L171.241 96.6575L43.3007 169.315L1.37594 97.8957L171.729 1.15014L298.1 72.9849L256.698 144.925L172.231 96.6588ZM171.721 194.432L130.354 171.451L171.726 147.446L212.14 171.189L171.721 194.432Z" stroke-width="2" />
                        <path d="M171.48 243.908L171.23 244.053V244.342V292.815L129.297 317.149V268.725V220.253L171.445 196.016L171.447 196.014L213.63 172.057V219.67L171.48 243.908ZM86.1117 146.38L85.8675 146.241L85.622 146.378L43.4324 169.816V122.196L171.23 49.62V146L128.795 170.621L86.1117 146.38ZM257.036 121.9V97.8101L298.978 73.4751L299.497 121.087L257.549 145.426L257.036 121.905V121.9Z" />
                        <path d="M86.8648 147.405L127.284 124.668L127.797 171.214L127.804 171.795L128.312 172.077L170.73 195.643V242.684L129.266 220.671L127.797 219.891V221.554V316.244L86.8648 291.481V147.405ZM255.542 98.1043L256.049 144.549L172.73 96.9389V50.4895L255.542 98.1043ZM21.7173 157.093L21.708 157.087L1 144.664V99.245L41.9324 122.492V168.927L21.7173 157.093Z" stroke-width="2" />
                    </svg>

                </div>
                <div className='box box-right'>
                    <svg viewBox="0 0 129 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81.332 76.914C80.75 76.914 80.172 76.662 79.778 76.172L77.26 73.064C76.564 72.206 76.696 70.946 77.554 70.252C78.41 69.556 79.67 69.688 80.366 70.546L82.884 73.654C83.58 74.512 83.448 75.772 82.59 76.466C82.218 76.768 81.774 76.914 81.332 76.914Z" />
                        <path d="M72.548 82.642C71.82 82.642 71.116 82.242 70.764 81.55L68.95 77.984C68.45 77 68.84 75.796 69.826 75.294C70.81 74.79 72.014 75.186 72.516 76.17L74.33 79.736C74.83 80.72 74.44 81.924 73.454 82.426C73.164 82.572 72.854 82.642 72.548 82.642Z" />
                        <path d="M62.72 86.344C61.83 86.344 61.018 85.746 60.784 84.844L59.784 80.97C59.508 79.9 60.15 78.81 61.22 78.534C62.288 78.26 63.38 78.902 63.656 79.97L64.656 83.844C64.932 84.914 64.29 86.004 63.22 86.28C63.054 86.324 62.886 86.344 62.72 86.344Z" />
                        <path d="M52.366 87.894C51.308 87.894 50.424 87.064 50.37 85.996L50.168 82C50.112 80.896 50.96 79.958 52.064 79.902C53.148 79.852 54.106 80.694 54.162 81.798L54.366 85.794C54.422 86.898 53.574 87.836 52.47 87.892C52.436 87.892 52.4 87.894 52.366 87.894Z" />
                        <path d="M49.47 96C47.432 96 45.338 95.912 43.174 95.724C26.66 94.304 14.746 88.738 7.76197 79.188C-1.87603 66.006 1.54197 50.226 1.69197 49.56C1.89997 48.648 2.70997 48 3.64397 48H89.196C89.298 48.006 93.38 48.068 96.54 45.666C94.572 42.164 91.292 33.206 99.466 20.892C99.76 20.448 100.218 20.142 100.74 20.038C101.258 19.932 101.802 20.04 102.244 20.338C102.714 20.654 112.33 27.22 111.908 36.382C116.08 35.084 122.142 35.182 128.3 40.482C128.928 41.022 129.158 41.894 128.878 42.672C128.83 42.802 124.1 55.404 108.42 54.15C105.33 61.856 89.344 96 49.47 96ZM5.33997 52C4.79597 56.086 4.09197 67.42 11.016 76.86C17.292 85.416 28.226 90.422 43.518 91.738C45.542 91.912 47.516 91.994 49.422 91.996C91.326 92 105.064 51.798 105.204 51.372C105.504 50.458 106.404 49.886 107.37 50.016C118.296 51.48 122.994 45.332 124.52 42.574C116.756 36.832 110.584 41.376 110.312 41.582C109.598 42.124 108.602 42.128 107.888 41.584C107.174 41.04 106.904 40.09 107.236 39.256C109.744 32.952 104.486 27.366 101.66 24.938C94.606 37.122 100.622 44.642 100.688 44.72C101.328 45.494 101.296 46.622 100.612 47.356C96.154 52.152 89.432 52.006 89.138 51.994L5.33997 52Z" />
                        <path d="M26 72C28.7614 72 31 69.7614 31 67C31 64.2386 28.7614 62 26 62C23.2386 62 21 64.2386 21 67C21 69.7614 23.2386 72 26 72Z" />
                        <path d="M87 32H73V2C73 0.9 72.1 0 71 0H55C53.9 0 53 0.9 53 2V16H23C21.9 16 21 16.9 21 18V32H7C5.9 32 5 32.9 5 34V50C5 51.1 5.9 52 7 52H87C88.1 52 89 51.1 89 50V34C89 32.9 88.1 32 87 32ZM21 48H9V36H21V48ZM37 48H25V36H37V48ZM53 48H41V36H53V48ZM53 32H41V26C41 24.896 40.104 24 39 24C37.896 24 37 24.896 37 26V32H25V20H53V32ZM69 48H57V36H63C64.1 36 65 35.1 65 34C65 32.9 64.1 32 63 32H57V20H69V48ZM69 16H57V4H69V16ZM85 48H73V36H85V48Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Box;