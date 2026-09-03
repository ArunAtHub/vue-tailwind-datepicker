(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-300:oklch(82.8% .111 230.318);--color-sky-400:oklch(74.6% .16 232.661);--color-sky-500:oklch(68.5% .169 237.323);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-bold:700;--tracking-wide:.025em;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-vtd-primary-300:var(--color-sky-300);--color-vtd-primary-500:var(--color-sky-500);--color-vtd-primary-600:var(--color-sky-600);--color-vtd-primary-700:var(--color-sky-700);--color-vtd-secondary-50:var(--color-gray-50);--color-vtd-secondary-100:var(--color-gray-100);--color-vtd-secondary-300:var(--color-gray-300);--color-vtd-secondary-400:var(--color-gray-400);--color-vtd-secondary-500:var(--color-gray-500);--color-vtd-secondary-700:var(--color-gray-700);--color-vtd-secondary-800:var(--color-gray-800);--color-vtd-dark-blue:#1e3a8a;--color-vtd-medium-gray:#f4f1ea;--color-vtd-light-gray:#bcb9b9;--color-vtd-orange:#f70;--color-vtd-blue:#0061ff}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-3{top:calc(var(--spacing)*3)}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.right-3{right:calc(var(--spacing)*3)}.right-auto{right:auto}.-left-2{left:calc(var(--spacing)*-2)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-50{z-index:50}.order-last{order:9999}.col-span-7{grid-column:span 7/span 7}.mx-2{margin-inline:calc(var(--spacing)*2)}.my-1{margin-block:calc(var(--spacing)*1)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-5{height:calc(var(--spacing)*5)}.h-\\[2\\.25rem\\]{height:2.25rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-1\\/2{width:50%}.w-5{width:calc(var(--spacing)*5)}.w-\\[2\\.25rem\\]{width:2.25rem}.w-full{width:100%}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-2\\/4{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-3{--tw-translate-y:calc(var(--spacing)*3);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-4{gap:calc(var(--spacing)*4)}.gap-\\[6px\\]{gap:6px}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-x-reverse)))}.gap-y-0{row-gap:calc(var(--spacing)*0)}.gap-y-0\\.5{row-gap:calc(var(--spacing)*.5)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-l-md{border-top-left-radius:var(--radius-md);border-bottom-left-radius:var(--radius-md)}.rounded-r-md{border-top-right-radius:var(--radius-md);border-bottom-right-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-solid{--tw-border-style:solid;border-style:solid}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-black\\/\\[\\.1\\]{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/\\[\\.1\\]{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-transparent{border-color:#0000}.border-vtd-orange{border-color:var(--color-vtd-orange)}.border-vtd-secondary-300{border-color:var(--color-vtd-secondary-300)}.bg-black{background-color:var(--color-black)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-vtd-dark-blue{background-color:var(--color-vtd-dark-blue)}.bg-vtd-dark-blue\\/10{background-color:#1e3a8a1a}@supports (color:color-mix(in lab,red,red)){.bg-vtd-dark-blue\\/10{background-color:color-mix(in oklab,var(--color-vtd-dark-blue)10%,transparent)}}.bg-vtd-medium-gray{background-color:var(--color-vtd-medium-gray)}.bg-vtd-primary-600{background-color:var(--color-vtd-primary-600)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-10{padding:calc(var(--spacing)*10)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-0\\.5{padding-inline:calc(var(--spacing)*.5)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-12{padding-right:calc(var(--spacing)*12)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-\\[8px\\]{font-size:8px}.leading-6{--tw-leading:calc(var(--spacing)*6);line-height:calc(var(--spacing)*6)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-vtd-blue{color:var(--color-vtd-blue)}.text-vtd-dark-blue{color:var(--color-vtd-dark-blue)}.text-vtd-light-gray{color:var(--color-vtd-light-gray)}.text-vtd-orange{color:var(--color-vtd-orange)}.text-vtd-primary-600{color:var(--color-vtd-primary-600)}.text-vtd-secondary-400{color:var(--color-vtd-secondary-400)}.text-vtd-secondary-700{color:var(--color-vtd-secondary-700)}.text-white{color:var(--color-white)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.placeholder-vtd-secondary-400::placeholder{color:var(--color-vtd-secondary-400)}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow-\\[0_2px_8px_0_\\#BEBEBE26\\]{--tw-shadow:0 2px 8px 0 var(--tw-shadow-color,#bebebe26);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:bg-vtd-medium-gray:hover{background-color:var(--color-vtd-medium-gray)}.hover\\:bg-vtd-secondary-50:hover{background-color:var(--color-vtd-secondary-50)}.hover\\:bg-vtd-secondary-100:hover{background-color:var(--color-vtd-secondary-100)}.hover\\:text-vtd-blue:hover{color:var(--color-vtd-blue)}.hover\\:text-vtd-primary-700:hover{color:var(--color-vtd-primary-700)}}.focus\\:border-vtd-primary-300:focus{border-color:var(--color-vtd-primary-300)}.focus\\:bg-vtd-medium-gray:focus{background-color:var(--color-vtd-medium-gray)}.focus\\:text-vtd-primary-600:focus{color:var(--color-vtd-primary-600)}.focus\\:ring:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-3:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:#ff77001a}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:color-mix(in oklab,var(--color-vtd-orange)10%,transparent)}}.focus\\:ring-vtd-primary-500:focus{--tw-ring-color:var(--color-vtd-primary-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:text-vtd-light-gray:disabled{color:var(--color-vtd-light-gray)}@media (min-width:40rem){.sm\\:relative{position:relative}.sm\\:static{position:static}.sm\\:z-auto{z-index:auto}.sm\\:order-0{order:0}.sm\\:mx-1{margin-inline:calc(var(--spacing)*1)}.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:mt-1{margin-top:calc(var(--spacing)*1)}.sm\\:mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.sm\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.sm\\:mb-1\\.5{margin-bottom:calc(var(--spacing)*1.5)}.sm\\:ml-3{margin-left:calc(var(--spacing)*3)}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:w-auto{width:auto}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:overflow-visible{overflow:visible}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:border{border-style:var(--tw-border-style);border-width:1px}.sm\\:border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.sm\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.sm\\:px-2{padding-inline:calc(var(--spacing)*2)}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:py-4{padding-block:calc(var(--spacing)*4)}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.sm\\:shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media (min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:64rem){.lg\\:mx-0{margin-inline:calc(var(--spacing)*0)}.lg\\:mr-1{margin-right:calc(var(--spacing)*1)}.lg\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:w-80{width:calc(var(--spacing)*80)}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.lg\\:border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.lg\\:p-6{padding:calc(var(--spacing)*6)}.lg\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}@media (prefers-color-scheme:dark){.dark\\:border-vtd-secondary-700,.dark\\:border-vtd-secondary-700\\/\\[1\\]{border-color:var(--color-vtd-secondary-700)}.dark\\:bg-vtd-secondary-800{background-color:var(--color-vtd-secondary-800)}.dark\\:text-vtd-secondary-100{color:var(--color-vtd-secondary-100)}.dark\\:placeholder-vtd-secondary-500::placeholder{color:var(--color-vtd-secondary-500)}.dark\\:ring-offset-vtd-secondary-800{--tw-ring-offset-color:var(--color-vtd-secondary-800)}.dark\\:focus\\:border-vtd-primary-500:focus{border-color:var(--color-vtd-primary-500)}}}.vtd-datepicker-overlay.open:before{opacity:.5;display:block}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}')),document.head.appendChild(r)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as xt from "vue";
import { watchEffect as je, ref as q, computed as oe, onMounted as ot, cloneVNode as gn, h as pe, Fragment as xe, defineComponent as ue, inject as Se, provide as re, getCurrentInstance as bn, watch as Ze, onUnmounted as tt, Teleport as wn, reactive as ut, shallowRef as xn, openBlock as Z, createElementBlock as J, createElementVNode as D, withDirectives as he, vShow as Oe, toDisplayString as ne, renderList as Xe, unref as le, createCommentVNode as $e, createVNode as fe, TransitionGroup as jn, withCtx as Fe, normalizeClass as Ne, Transition as Yt, nextTick as Ke, isProxy as kn, createBlock as Ge, renderSlot as jt, mergeProps as $n, withModifiers as kt, vModelText as _n, vModelCheckbox as Qe } from "vue";
var $t;
let Mn = Symbol("headlessui.useid"), Sn = 0;
const Re = ($t = xt.useId) != null ? $t : function() {
  return xt.inject(Mn, () => `${++Sn}`)();
};
function H(e) {
  var n;
  if (e == null || e.value == null)
    return null;
  let a = (n = e.value.$el) != null ? n : e.value;
  return a instanceof Node ? a : null;
}
function De(e, n, ...a) {
  if (e in n) {
    let r = n[e];
    return typeof r == "function" ? r(...a) : r;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, De), t;
}
var Dn = Object.defineProperty, Tn = (e, n, a) => n in e ? Dn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, _t = (e, n, a) => (Tn(e, typeof n != "symbol" ? n + "" : n, a), a);
let On = class {
  constructor() {
    _t(this, "current", this.detect()), _t(this, "currentId", 0);
  }
  set(n) {
    this.current !== n && (this.currentId = 0, this.current = n);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, at = new On();
function Ce(e) {
  if (at.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = H(e);
    if (n)
      return n.ownerDocument;
  }
  return document;
}
let it = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var _e = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(_e || {}), nt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(nt || {}), Pn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Pn || {});
function st(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(it)).sort((n, a) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var pt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(pt || {});
function Et(e, n = 0) {
  var a;
  return e === ((a = Ce(e)) == null ? void 0 : a.body) ? !1 : De(n, { 0() {
    return e.matches(it);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(it))
        return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
var Cn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Cn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let Vn = ["textarea", "input"].join(",");
function An(e) {
  var n, a;
  return (a = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Vn)) != null ? a : !1;
}
function Yn(e, n = (a) => a) {
  return e.slice().sort((a, t) => {
    let r = n(a), m = n(t);
    if (r === null || m === null)
      return 0;
    let l = r.compareDocumentPosition(m);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ye(e, n, { sorted: a = !0, relativeTo: t = null, skipElements: r = [] } = {}) {
  var m;
  let l = (m = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? m : document, o = Array.isArray(e) ? a ? Yn(e) : e : st(e);
  r.length > 0 && o.length > 1 && (o = o.filter((E) => !r.includes(E))), t = t ?? l.activeElement;
  let k = (() => {
    if (n & 5)
      return 1;
    if (n & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), y = (() => {
    if (n & 1)
      return 0;
    if (n & 2)
      return Math.max(0, o.indexOf(t)) - 1;
    if (n & 4)
      return Math.max(0, o.indexOf(t)) + 1;
    if (n & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), g = n & 32 ? { preventScroll: !0 } : {}, b = 0, j = o.length, T;
  do {
    if (b >= j || b + j <= 0)
      return 0;
    let E = y + b;
    if (n & 16)
      E = (E + j) % j;
    else {
      if (E < 0)
        return 3;
      if (E >= j)
        return 1;
    }
    T = o[E], T == null || T.focus(g), b += k;
  } while (T !== l.activeElement);
  return n & 6 && An(T) && T.select(), 2;
}
function En() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ln() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Bn() {
  return En() || Ln();
}
function et(e, n, a) {
  at.isServer || je((t) => {
    document.addEventListener(e, n, a), t(() => document.removeEventListener(e, n, a));
  });
}
function Lt(e, n, a) {
  at.isServer || je((t) => {
    window.addEventListener(e, n, a), t(() => window.removeEventListener(e, n, a));
  });
}
function Fn(e, n, a = oe(() => !0)) {
  function t(m, l) {
    if (!a.value || m.defaultPrevented)
      return;
    let o = l(m);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let k = function y(g) {
      return typeof g == "function" ? y(g()) : Array.isArray(g) || g instanceof Set ? g : [g];
    }(e);
    for (let y of k) {
      if (y === null)
        continue;
      let g = y instanceof HTMLElement ? y : H(y);
      if (g != null && g.contains(o) || m.composed && m.composedPath().includes(g))
        return;
    }
    return !Et(o, pt.Loose) && o.tabIndex !== -1 && m.preventDefault(), n(m, o);
  }
  let r = q(null);
  et("pointerdown", (m) => {
    var l, o;
    a.value && (r.value = ((o = (l = m.composedPath) == null ? void 0 : l.call(m)) == null ? void 0 : o[0]) || m.target);
  }, !0), et("mousedown", (m) => {
    var l, o;
    a.value && (r.value = ((o = (l = m.composedPath) == null ? void 0 : l.call(m)) == null ? void 0 : o[0]) || m.target);
  }, !0), et("click", (m) => {
    Bn() || r.value && (t(m, () => r.value), r.value = null);
  }, !0), et("touchend", (m) => t(m, () => m.target instanceof HTMLElement ? m.target : null), !0), Lt("blur", (m) => t(m, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Mt(e, n) {
  if (e)
    return e;
  let a = n ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function Nn(e, n) {
  let a = q(Mt(e.value.type, e.value.as));
  return ot(() => {
    a.value = Mt(e.value.type, e.value.as);
  }), je(() => {
    var t;
    a.value || H(n) && H(n) instanceof HTMLButtonElement && !((t = H(n)) != null && t.hasAttribute("type")) && (a.value = "button");
  }), a;
}
var qe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qe || {}), Rn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Rn || {});
function Te({ visible: e = !0, features: n = 0, ourProps: a, theirProps: t, ...r }) {
  var m;
  let l = Ft(t, a), o = Object.assign(r, { props: l });
  if (e || n & 2 && l.static)
    return lt(o);
  if (n & 1) {
    let k = (m = l.unmount) == null || m ? 0 : 1;
    return De(k, { 0() {
      return null;
    }, 1() {
      return lt({ ...r, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return lt(o);
}
function lt({ props: e, attrs: n, slots: a, slot: t, name: r }) {
  var m, l;
  let { as: o, ...k } = In(e, ["unmount", "static"]), y = (m = a.default) == null ? void 0 : m.call(a, t), g = {};
  if (t) {
    let b = !1, j = [];
    for (let [T, E] of Object.entries(t))
      typeof E == "boolean" && (b = !0), E === !0 && j.push(T);
    b && (g["data-headlessui-state"] = j.join(" "));
  }
  if (o === "template") {
    if (y = Bt(y ?? []), Object.keys(k).length > 0 || Object.keys(n).length > 0) {
      let [b, ...j] = y ?? [];
      if (!Wn(b) || j.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(k).concat(Object.keys(n)).map((N) => N.trim()).filter((N, P, L) => L.indexOf(N) === P).sort((N, P) => N.localeCompare(P)).map((N) => `  - ${N}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((N) => `  - ${N}`).join(`
`)].join(`
`));
      let T = Ft((l = b.props) != null ? l : {}, k, g), E = gn(b, T, !0);
      for (let N in T)
        N.startsWith("on") && (E.props || (E.props = {}), E.props[N] = T[N]);
      return E;
    }
    return Array.isArray(y) && y.length === 1 ? y[0] : y;
  }
  return pe(o, Object.assign({}, k, g), { default: () => y });
}
function Bt(e) {
  return e.flatMap((n) => n.type === xe ? Bt(n.children) : [n]);
}
function Ft(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let n = {}, a = {};
  for (let t of e)
    for (let r in t)
      r.startsWith("on") && typeof t[r] == "function" ? (a[r] != null || (a[r] = []), a[r].push(t[r])) : n[r] = t[r];
  if (n.disabled || n["aria-disabled"])
    return Object.assign(n, Object.fromEntries(Object.keys(a).map((t) => [t, void 0])));
  for (let t in a)
    Object.assign(n, { [t](r, ...m) {
      let l = a[t];
      for (let o of l) {
        if (r instanceof Event && r.defaultPrevented)
          return;
        o(r, ...m);
      }
    } });
  return n;
}
function In(e, n = []) {
  let a = Object.assign({}, e);
  for (let t of n)
    t in a && delete a[t];
  return a;
}
function Wn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Ie = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ie || {});
let Je = ue({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: a }) {
  return () => {
    var t;
    let { features: r, ...m } = e, l = { "aria-hidden": (r & 2) === 2 ? !0 : (t = m["aria-hidden"]) != null ? t : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return Te({ ourProps: l, theirProps: m, slot: {}, attrs: a, slots: n, name: "Hidden" });
  };
} }), Nt = Symbol("Context");
var Ee = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ee || {});
function Rt() {
  return Se(Nt, null);
}
function Hn(e) {
  re(Nt, e);
}
var Pe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Pe || {});
function Un(e, n, a, t) {
  at.isServer || je((r) => {
    e = e ?? window, e.addEventListener(n, a, t), r(() => e.removeEventListener(n, a, t));
  });
}
var Me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Me || {});
function It() {
  let e = q(0);
  return Lt("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function zn({ defaultContainers: e = [], portals: n, mainTreeNodeRef: a } = {}) {
  let t = q(null), r = Ce(t);
  function m() {
    var l, o, k;
    let y = [];
    for (let g of e)
      g !== null && (g instanceof HTMLElement ? y.push(g) : "value" in g && g.value instanceof HTMLElement && y.push(g.value));
    if (n != null && n.value)
      for (let g of n.value)
        y.push(g);
    for (let g of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : [])
      g !== document.body && g !== document.head && g instanceof HTMLElement && g.id !== "headlessui-portal-root" && (g.contains(H(t)) || g.contains((k = (o = H(t)) == null ? void 0 : o.getRootNode()) == null ? void 0 : k.host) || y.some((b) => g.contains(b)) || y.push(g));
    return y;
  }
  return { resolveContainers: m, contains(l) {
    return m().some((o) => o.contains(l));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return a != null ? null : pe(Je, { features: Ie.Hidden, ref: t });
  } };
}
function Kn() {
  let e = q(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return pe(Je, { features: Ie.Hidden, ref: e });
  } };
}
let Wt = Symbol("ForcePortalRootContext");
function Gn() {
  return Se(Wt, !1);
}
ue({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: a }) {
  return re(Wt, e.force), () => {
    let { force: t, ...r } = e;
    return Te({ theirProps: r, ourProps: {}, slot: {}, slots: n, attrs: a, name: "ForcePortalRoot" });
  };
} });
function Zn(e) {
  let n = Ce(e);
  if (!n) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let a = n.getElementById("headlessui-portal-root");
  if (a)
    return a;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const dt = /* @__PURE__ */ new WeakMap();
function qn(e) {
  var n;
  return (n = dt.get(e)) != null ? n : 0;
}
function St(e, n) {
  let a = n(qn(e));
  return a <= 0 ? dt.delete(e) : dt.set(e, a), a;
}
ue({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: a }) {
  let t = q(null), r = oe(() => Ce(t)), m = Gn(), l = Se(Ht, null), o = q(m === !0 || l == null ? Zn(t.value) : l.resolveTarget());
  o.value && St(o.value, (j) => j + 1);
  let k = q(!1);
  ot(() => {
    k.value = !0;
  }), je(() => {
    m || l != null && (o.value = l.resolveTarget());
  });
  let y = Se(ct, null), g = !1, b = bn();
  return Ze(t, () => {
    if (g || !y)
      return;
    let j = H(t);
    j && (tt(y.register(j), b), g = !0);
  }), tt(() => {
    var j, T;
    let E = (j = r.value) == null ? void 0 : j.getElementById("headlessui-portal-root");
    !E || o.value !== E || St(o.value, (N) => N - 1) || o.value.children.length > 0 || (T = o.value.parentElement) == null || T.removeChild(o.value);
  }), () => {
    if (!k.value || o.value === null)
      return null;
    let j = { ref: t, "data-headlessui-portal": "" };
    return pe(wn, { to: o.value }, Te({ ourProps: j, theirProps: e, slot: {}, attrs: a, slots: n, name: "Portal" }));
  };
} });
let ct = Symbol("PortalParentContext");
function Jn() {
  let e = Se(ct, null), n = q([]);
  function a(m) {
    return n.value.push(m), e && e.register(m), () => t(m);
  }
  function t(m) {
    let l = n.value.indexOf(m);
    l !== -1 && n.value.splice(l, 1), e && e.unregister(m);
  }
  let r = { register: a, unregister: t, portals: n };
  return [n, ue({ name: "PortalWrapper", setup(m, { slots: l }) {
    return re(ct, r), () => {
      var o;
      return (o = l.default) == null ? void 0 : o.call(l);
    };
  } })];
}
let Ht = Symbol("PortalGroupContext");
ue({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: a }) {
  let t = ut({ resolveTarget() {
    return e.target;
  } });
  return re(Ht, t), () => {
    let { target: r, ...m } = e;
    return Te({ theirProps: m, ourProps: {}, slot: {}, attrs: n, slots: a, name: "PortalGroup" });
  };
} });
var Xn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Xn || {});
let Ut = Symbol("PopoverContext");
function rt(e) {
  let n = Se(Ut, null);
  if (n === null) {
    let a = new Error(`<${e} /> is missing a parent <${Zt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, rt), a;
  }
  return n;
}
let zt = Symbol("PopoverGroupContext");
function Kt() {
  return Se(zt, null);
}
let Gt = Symbol("PopoverPanelContext");
function Qn() {
  return Se(Gt, null);
}
let Zt = ue({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: a, expose: t }) {
  var r;
  let m = q(null);
  t({ el: m, $el: m });
  let l = q(1), o = q(null), k = q(null), y = q(null), g = q(null), b = oe(() => Ce(m)), j = oe(() => {
    var _, w;
    if (!H(o) || !H(g))
      return !1;
    for (let G of document.querySelectorAll("body > *"))
      if (Number(G == null ? void 0 : G.contains(H(o))) ^ Number(G == null ? void 0 : G.contains(H(g))))
        return !0;
    let p = st(), f = p.indexOf(H(o)), Y = (f + p.length - 1) % p.length, B = (f + 1) % p.length, h = p[Y], s = p[B];
    return !((_ = H(g)) != null && _.contains(h)) && !((w = H(g)) != null && w.contains(s));
  }), T = { popoverState: l, buttonId: q(null), panelId: q(null), panel: g, button: o, isPortalled: j, beforePanelSentinel: k, afterPanelSentinel: y, togglePopover() {
    l.value = De(l.value, { 0: 1, 1: 0 });
  }, closePopover() {
    l.value !== 1 && (l.value = 1);
  }, close(_) {
    T.closePopover();
    let w = (() => _ ? _ instanceof HTMLElement ? _ : _.value instanceof HTMLElement ? H(_) : H(T.button) : H(T.button))();
    w == null || w.focus();
  } };
  re(Ut, T), Hn(oe(() => De(l.value, { 0: Ee.Open, 1: Ee.Closed })));
  let E = { buttonId: T.buttonId, panelId: T.panelId, close() {
    T.closePopover();
  } }, N = Kt(), P = N == null ? void 0 : N.registerPopover, [L, F] = Jn(), V = zn({ mainTreeNodeRef: N == null ? void 0 : N.mainTreeNodeRef, portals: L, defaultContainers: [o, g] });
  function W() {
    var _, w, p, f;
    return (f = N == null ? void 0 : N.isFocusWithinPopoverGroup()) != null ? f : ((_ = b.value) == null ? void 0 : _.activeElement) && (((w = H(o)) == null ? void 0 : w.contains(b.value.activeElement)) || ((p = H(g)) == null ? void 0 : p.contains(b.value.activeElement)));
  }
  return je(() => P == null ? void 0 : P(E)), Un((r = b.value) == null ? void 0 : r.defaultView, "focus", (_) => {
    var w, p;
    _.target !== window && _.target instanceof HTMLElement && l.value === 0 && (W() || o && g && (V.contains(_.target) || (w = H(T.beforePanelSentinel)) != null && w.contains(_.target) || (p = H(T.afterPanelSentinel)) != null && p.contains(_.target) || T.closePopover()));
  }, !0), Fn(V.resolveContainers, (_, w) => {
    var p;
    T.closePopover(), Et(w, pt.Loose) || (_.preventDefault(), (p = H(o)) == null || p.focus());
  }, oe(() => l.value === 0)), () => {
    let _ = { open: l.value === 0, close: T.close };
    return pe(xe, [pe(F, {}, () => Te({ theirProps: { ...e, ...a }, ourProps: { ref: m }, slot: _, slots: n, attrs: a, name: "Popover" })), pe(V.MainTreeNode)]);
  };
} }), eo = ue({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: a, expose: t }) {
  var r;
  let m = (r = e.id) != null ? r : `headlessui-popover-button-${Re()}`, l = rt("PopoverButton"), o = oe(() => Ce(l.button));
  t({ el: l.button, $el: l.button }), ot(() => {
    l.buttonId.value = m;
  }), tt(() => {
    l.buttonId.value = null;
  });
  let k = Kt(), y = k == null ? void 0 : k.closeOthers, g = Qn(), b = oe(() => g === null ? !1 : g.value === l.panelId.value), j = q(null), T = `headlessui-focus-sentinel-${Re()}`;
  b.value || je(() => {
    l.button.value = H(j);
  });
  let E = Nn(oe(() => ({ as: e.as, type: n.type })), j);
  function N(_) {
    var w, p, f, Y, B;
    if (b.value) {
      if (l.popoverState.value === 1)
        return;
      switch (_.key) {
        case Pe.Space:
        case Pe.Enter:
          _.preventDefault(), (p = (w = _.target).click) == null || p.call(w), l.closePopover(), (f = H(l.button)) == null || f.focus();
          break;
      }
    } else
      switch (_.key) {
        case Pe.Space:
        case Pe.Enter:
          _.preventDefault(), _.stopPropagation(), l.popoverState.value === 1 && (y == null || y(l.buttonId.value)), l.togglePopover();
          break;
        case Pe.Escape:
          if (l.popoverState.value !== 0)
            return y == null ? void 0 : y(l.buttonId.value);
          if (!H(l.button) || (Y = o.value) != null && Y.activeElement && !((B = H(l.button)) != null && B.contains(o.value.activeElement)))
            return;
          _.preventDefault(), _.stopPropagation(), l.closePopover();
          break;
      }
  }
  function P(_) {
    b.value || _.key === Pe.Space && _.preventDefault();
  }
  function L(_) {
    var w, p;
    e.disabled || (b.value ? (l.closePopover(), (w = H(l.button)) == null || w.focus()) : (_.preventDefault(), _.stopPropagation(), l.popoverState.value === 1 && (y == null || y(l.buttonId.value)), l.togglePopover(), (p = H(l.button)) == null || p.focus()));
  }
  function F(_) {
    _.preventDefault(), _.stopPropagation();
  }
  let V = It();
  function W() {
    let _ = H(l.panel);
    if (!_)
      return;
    function w() {
      De(V.value, { [Me.Forwards]: () => Ye(_, _e.First), [Me.Backwards]: () => Ye(_, _e.Last) }) === nt.Error && Ye(st().filter((p) => p.dataset.headlessuiFocusGuard !== "true"), De(V.value, { [Me.Forwards]: _e.Next, [Me.Backwards]: _e.Previous }), { relativeTo: H(l.button) });
    }
    w();
  }
  return () => {
    let _ = l.popoverState.value === 0, w = { open: _ }, { ...p } = e, f = b.value ? { ref: j, type: E.value, onKeydown: N, onClick: L } : { ref: j, id: m, type: E.value, "aria-expanded": l.popoverState.value === 0, "aria-controls": H(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: N, onKeyup: P, onClick: L, onMousedown: F };
    return pe(xe, [Te({ ourProps: f, theirProps: { ...n, ...p }, slot: w, attrs: n, slots: a, name: "PopoverButton" }), _ && !b.value && l.isPortalled.value && pe(Je, { id: T, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: W })]);
  };
} }), to = ue({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: a }) {
  let t = rt("PopoverOverlay"), r = `headlessui-popover-overlay-${Re()}`, m = Rt(), l = oe(() => m !== null ? (m.value & Ee.Open) === Ee.Open : t.popoverState.value === 0);
  function o() {
    t.closePopover();
  }
  return () => {
    let k = { open: t.popoverState.value === 0 };
    return Te({ ourProps: { id: r, "aria-hidden": !0, onClick: o }, theirProps: e, slot: k, attrs: n, slots: a, features: qe.RenderStrategy | qe.Static, visible: l.value, name: "PopoverOverlay" });
  };
} }), no = ue({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: a, expose: t }) {
  var r;
  let m = (r = e.id) != null ? r : `headlessui-popover-panel-${Re()}`, { focus: l } = e, o = rt("PopoverPanel"), k = oe(() => Ce(o.panel)), y = `headlessui-focus-sentinel-before-${Re()}`, g = `headlessui-focus-sentinel-after-${Re()}`;
  t({ el: o.panel, $el: o.panel }), ot(() => {
    o.panelId.value = m;
  }), tt(() => {
    o.panelId.value = null;
  }), re(Gt, o.panelId), je(() => {
    var F, V;
    if (!l || o.popoverState.value !== 0 || !o.panel)
      return;
    let W = (F = k.value) == null ? void 0 : F.activeElement;
    (V = H(o.panel)) != null && V.contains(W) || Ye(H(o.panel), _e.First);
  });
  let b = Rt(), j = oe(() => b !== null ? (b.value & Ee.Open) === Ee.Open : o.popoverState.value === 0);
  function T(F) {
    var V, W;
    switch (F.key) {
      case Pe.Escape:
        if (o.popoverState.value !== 0 || !H(o.panel) || k.value && !((V = H(o.panel)) != null && V.contains(k.value.activeElement)))
          return;
        F.preventDefault(), F.stopPropagation(), o.closePopover(), (W = H(o.button)) == null || W.focus();
        break;
    }
  }
  function E(F) {
    var V, W, _, w, p;
    let f = F.relatedTarget;
    f && H(o.panel) && ((V = H(o.panel)) != null && V.contains(f) || (o.closePopover(), ((_ = (W = H(o.beforePanelSentinel)) == null ? void 0 : W.contains) != null && _.call(W, f) || (p = (w = H(o.afterPanelSentinel)) == null ? void 0 : w.contains) != null && p.call(w, f)) && f.focus({ preventScroll: !0 })));
  }
  let N = It();
  function P() {
    let F = H(o.panel);
    if (!F)
      return;
    function V() {
      De(N.value, { [Me.Forwards]: () => {
        var W;
        Ye(F, _e.First) === nt.Error && ((W = H(o.afterPanelSentinel)) == null || W.focus());
      }, [Me.Backwards]: () => {
        var W;
        (W = H(o.button)) == null || W.focus({ preventScroll: !0 });
      } });
    }
    V();
  }
  function L() {
    let F = H(o.panel);
    if (!F)
      return;
    function V() {
      De(N.value, { [Me.Forwards]: () => {
        let W = H(o.button), _ = H(o.panel);
        if (!W)
          return;
        let w = st(), p = w.indexOf(W), f = w.slice(0, p + 1), Y = [...w.slice(p + 1), ...f];
        for (let B of Y.slice())
          if (B.dataset.headlessuiFocusGuard === "true" || _ != null && _.contains(B)) {
            let h = Y.indexOf(B);
            h !== -1 && Y.splice(h, 1);
          }
        Ye(Y, _e.First, { sorted: !1 });
      }, [Me.Backwards]: () => {
        var W;
        Ye(F, _e.Previous) === nt.Error && ((W = H(o.button)) == null || W.focus());
      } });
    }
    V();
  }
  return () => {
    let F = { open: o.popoverState.value === 0, close: o.close }, { focus: V, ...W } = e, _ = { ref: o.panel, id: m, onKeydown: T, onFocusout: l && o.popoverState.value === 0 ? E : void 0, tabIndex: -1 };
    return Te({ ourProps: _, theirProps: { ...n, ...W }, attrs: n, slot: F, slots: { ...a, default: (...w) => {
      var p;
      return [pe(xe, [j.value && o.isPortalled.value && pe(Je, { id: y, ref: o.beforePanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: P }), (p = a.default) == null ? void 0 : p.call(a, ...w), j.value && o.isPortalled.value && pe(Je, { id: g, ref: o.afterPanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: L })])];
    } }, features: qe.RenderStrategy | qe.Static, visible: j.value, name: "PopoverPanel" });
  };
} });
ue({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: a, expose: t }) {
  let r = q(null), m = xn([]), l = oe(() => Ce(r)), o = Kn();
  t({ el: r, $el: r });
  function k(j) {
    let T = m.value.indexOf(j);
    T !== -1 && m.value.splice(T, 1);
  }
  function y(j) {
    return m.value.push(j), () => {
      k(j);
    };
  }
  function g() {
    var j;
    let T = l.value;
    if (!T)
      return !1;
    let E = T.activeElement;
    return (j = H(r)) != null && j.contains(E) ? !0 : m.value.some((N) => {
      var P, L;
      return ((P = T.getElementById(N.buttonId.value)) == null ? void 0 : P.contains(E)) || ((L = T.getElementById(N.panelId.value)) == null ? void 0 : L.contains(E));
    });
  }
  function b(j) {
    for (let T of m.value)
      T.buttonId.value !== j && T.close();
  }
  return re(zt, { registerPopover: y, unregisterPopover: k, isFocusWithinPopoverGroup: g, closeOthers: b, mainTreeNodeRef: o.mainTreeNodeRef }), () => pe(xe, [Te({ ourProps: { ref: r }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: a, name: "PopoverGroup" }), pe(o.MainTreeNode)]);
} });
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ae(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qt = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    var a = 1e3, t = 6e4, r = 36e5, m = "millisecond", l = "second", o = "minute", k = "hour", y = "day", g = "week", b = "month", j = "quarter", T = "year", E = "date", N = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, F = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var M = ["th", "st", "nd", "rd"], $ = C % 100;
      return "[" + C + (M[($ - 20) % 10] || M[$] || M[0]) + "]";
    } }, V = function(C, M, $) {
      var O = String(C);
      return !O || O.length >= M ? C : "" + Array(M + 1 - O.length).join($) + C;
    }, W = { s: V, z: function(C) {
      var M = -C.utcOffset(), $ = Math.abs(M), O = Math.floor($ / 60), S = $ % 60;
      return (M <= 0 ? "+" : "-") + V(O, 2, "0") + ":" + V(S, 2, "0");
    }, m: function C(M, $) {
      if (M.date() < $.date())
        return -C($, M);
      var O = 12 * ($.year() - M.year()) + ($.month() - M.month()), S = M.clone().add(O, b), I = $ - S < 0, U = M.clone().add(O + (I ? -1 : 1), b);
      return +(-(O + ($ - S) / (I ? S - U : U - S)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: b, y: T, w: g, d: y, D: E, h: k, m: o, s: l, ms: m, Q: j }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, _ = "en", w = {};
    w[_] = F;
    var p = "$isDayjsObject", f = function(C) {
      return C instanceof s || !(!C || !C[p]);
    }, Y = function C(M, $, O) {
      var S;
      if (!M)
        return _;
      if (typeof M == "string") {
        var I = M.toLowerCase();
        w[I] && (S = I), $ && (w[I] = $, S = I);
        var U = M.split("-");
        if (!S && U.length > 1)
          return C(U[0]);
      } else {
        var R = M.name;
        w[R] = M, S = R;
      }
      return !O && S && (_ = S), S || !O && _;
    }, B = function(C, M) {
      if (f(C))
        return C.clone();
      var $ = typeof M == "object" ? M : {};
      return $.date = C, $.args = arguments, new s($);
    }, h = W;
    h.l = Y, h.i = f, h.w = function(C, M) {
      return B(C, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var s = function() {
      function C($) {
        this.$L = Y($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[p] = !0;
      }
      var M = C.prototype;
      return M.parse = function($) {
        this.$d = function(O) {
          var S = O.date, I = O.utc;
          if (S === null)
            return /* @__PURE__ */ new Date(NaN);
          if (h.u(S))
            return /* @__PURE__ */ new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var U = S.match(P);
            if (U) {
              var R = U[2] - 1 || 0, X = (U[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(U[1], R, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, X)) : new Date(U[1], R, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, X);
            }
          }
          return new Date(S);
        }($), this.init();
      }, M.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, M.$utils = function() {
        return h;
      }, M.isValid = function() {
        return this.$d.toString() !== N;
      }, M.isSame = function($, O) {
        var S = B($);
        return this.startOf(O) <= S && S <= this.endOf(O);
      }, M.isAfter = function($, O) {
        return B($) < this.startOf(O);
      }, M.isBefore = function($, O) {
        return this.endOf(O) < B($);
      }, M.$g = function($, O, S) {
        return h.u($) ? this[O] : this.set(S, $);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function($, O) {
        var S = this, I = !!h.u(O) || O, U = h.p($), R = function(ve, ae) {
          var me = h.w(S.$u ? Date.UTC(S.$y, ae, ve) : new Date(S.$y, ae, ve), S);
          return I ? me : me.endOf(y);
        }, X = function(ve, ae) {
          return h.w(S.toDate()[ve].apply(S.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)), S);
        }, Q = this.$W, te = this.$M, ie = this.$D, ce = "set" + (this.$u ? "UTC" : "");
        switch (U) {
          case T:
            return I ? R(1, 0) : R(31, 11);
          case b:
            return I ? R(1, te) : R(0, te + 1);
          case g:
            var ge = this.$locale().weekStart || 0, ke = (Q < ge ? Q + 7 : Q) - ge;
            return R(I ? ie - ke : ie + (6 - ke), te);
          case y:
          case E:
            return X(ce + "Hours", 0);
          case k:
            return X(ce + "Minutes", 1);
          case o:
            return X(ce + "Seconds", 2);
          case l:
            return X(ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function($) {
        return this.startOf($, !1);
      }, M.$set = function($, O) {
        var S, I = h.p($), U = "set" + (this.$u ? "UTC" : ""), R = (S = {}, S[y] = U + "Date", S[E] = U + "Date", S[b] = U + "Month", S[T] = U + "FullYear", S[k] = U + "Hours", S[o] = U + "Minutes", S[l] = U + "Seconds", S[m] = U + "Milliseconds", S)[I], X = I === y ? this.$D + (O - this.$W) : O;
        if (I === b || I === T) {
          var Q = this.clone().set(E, 1);
          Q.$d[R](X), Q.init(), this.$d = Q.set(E, Math.min(this.$D, Q.daysInMonth())).$d;
        } else
          R && this.$d[R](X);
        return this.init(), this;
      }, M.set = function($, O) {
        return this.clone().$set($, O);
      }, M.get = function($) {
        return this[h.p($)]();
      }, M.add = function($, O) {
        var S, I = this;
        $ = Number($);
        var U = h.p(O), R = function(te) {
          var ie = B(I);
          return h.w(ie.date(ie.date() + Math.round(te * $)), I);
        };
        if (U === b)
          return this.set(b, this.$M + $);
        if (U === T)
          return this.set(T, this.$y + $);
        if (U === y)
          return R(1);
        if (U === g)
          return R(7);
        var X = (S = {}, S[o] = t, S[k] = r, S[l] = a, S)[U] || 1, Q = this.$d.getTime() + $ * X;
        return h.w(Q, this);
      }, M.subtract = function($, O) {
        return this.add(-1 * $, O);
      }, M.format = function($) {
        var O = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || N;
        var I = $ || "YYYY-MM-DDTHH:mm:ssZ", U = h.z(this), R = this.$H, X = this.$m, Q = this.$M, te = S.weekdays, ie = S.months, ce = S.meridiem, ge = function(ae, me, ye, de) {
          return ae && (ae[me] || ae(O, I)) || ye[me].slice(0, de);
        }, ke = function(ae) {
          return h.s(R % 12 || 12, ae, "0");
        }, ve = ce || function(ae, me, ye) {
          var de = ae < 12 ? "AM" : "PM";
          return ye ? de.toLowerCase() : de;
        };
        return I.replace(L, function(ae, me) {
          return me || function(ye) {
            switch (ye) {
              case "YY":
                return String(O.$y).slice(-2);
              case "YYYY":
                return h.s(O.$y, 4, "0");
              case "M":
                return Q + 1;
              case "MM":
                return h.s(Q + 1, 2, "0");
              case "MMM":
                return ge(S.monthsShort, Q, ie, 3);
              case "MMMM":
                return ge(ie, Q);
              case "D":
                return O.$D;
              case "DD":
                return h.s(O.$D, 2, "0");
              case "d":
                return String(O.$W);
              case "dd":
                return ge(S.weekdaysMin, O.$W, te, 2);
              case "ddd":
                return ge(S.weekdaysShort, O.$W, te, 3);
              case "dddd":
                return te[O.$W];
              case "H":
                return String(R);
              case "HH":
                return h.s(R, 2, "0");
              case "h":
                return ke(1);
              case "hh":
                return ke(2);
              case "a":
                return ve(R, X, !0);
              case "A":
                return ve(R, X, !1);
              case "m":
                return String(X);
              case "mm":
                return h.s(X, 2, "0");
              case "s":
                return String(O.$s);
              case "ss":
                return h.s(O.$s, 2, "0");
              case "SSS":
                return h.s(O.$ms, 3, "0");
              case "Z":
                return U;
            }
            return null;
          }(ae) || U.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function($, O, S) {
        var I, U = this, R = h.p(O), X = B($), Q = (X.utcOffset() - this.utcOffset()) * t, te = this - X, ie = function() {
          return h.m(U, X);
        };
        switch (R) {
          case T:
            I = ie() / 12;
            break;
          case b:
            I = ie();
            break;
          case j:
            I = ie() / 3;
            break;
          case g:
            I = (te - Q) / 6048e5;
            break;
          case y:
            I = (te - Q) / 864e5;
            break;
          case k:
            I = te / r;
            break;
          case o:
            I = te / t;
            break;
          case l:
            I = te / a;
            break;
          default:
            I = te;
        }
        return S ? I : h.a(I);
      }, M.daysInMonth = function() {
        return this.endOf(b).$D;
      }, M.$locale = function() {
        return w[this.$L];
      }, M.locale = function($, O) {
        if (!$)
          return this.$L;
        var S = this.clone(), I = Y($, O, !0);
        return I && (S.$L = I), S;
      }, M.clone = function() {
        return h.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), G = s.prototype;
    return B.prototype = G, [["$ms", m], ["$s", l], ["$m", o], ["$H", k], ["$W", y], ["$M", b], ["$y", T], ["$D", E]].forEach(function(C) {
      G[C[1]] = function(M) {
        return this.$g(M, C[0], C[1]);
      };
    }), B.extend = function(C, M) {
      return C.$i || (C(M, s, B), C.$i = !0), B;
    }, B.locale = Y, B.isDayjs = f, B.unix = function(C) {
      return B(1e3 * C);
    }, B.en = w[_], B.Ls = w, B.p = {}, B;
  });
})(qt);
var oo = qt.exports;
const c = /* @__PURE__ */ Ae(oo);
var Jt = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    return function(a, t, r) {
      var m = t.prototype, l = function(b) {
        return b && (b.indexOf ? b : b.s);
      }, o = function(b, j, T, E, N) {
        var P = b.name ? b : b.$locale(), L = l(P[j]), F = l(P[T]), V = L || F.map(function(_) {
          return _.slice(0, E);
        });
        if (!N)
          return V;
        var W = P.weekStart;
        return V.map(function(_, w) {
          return V[(w + (W || 0)) % 7];
        });
      }, k = function() {
        return r.Ls[r.locale()];
      }, y = function(b, j) {
        return b.formats[j] || function(T) {
          return T.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, N, P) {
            return N || P.slice(1);
          });
        }(b.formats[j.toUpperCase()]);
      }, g = function() {
        var b = this;
        return { months: function(j) {
          return j ? j.format("MMMM") : o(b, "months");
        }, monthsShort: function(j) {
          return j ? j.format("MMM") : o(b, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return b.$locale().weekStart || 0;
        }, weekdays: function(j) {
          return j ? j.format("dddd") : o(b, "weekdays");
        }, weekdaysMin: function(j) {
          return j ? j.format("dd") : o(b, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(j) {
          return j ? j.format("ddd") : o(b, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(j) {
          return y(b.$locale(), j);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      m.localeData = function() {
        return g.bind(this)();
      }, r.localeData = function() {
        var b = k();
        return { firstDayOfWeek: function() {
          return b.weekStart || 0;
        }, weekdays: function() {
          return r.weekdays();
        }, weekdaysShort: function() {
          return r.weekdaysShort();
        }, weekdaysMin: function() {
          return r.weekdaysMin();
        }, months: function() {
          return r.months();
        }, monthsShort: function() {
          return r.monthsShort();
        }, longDateFormat: function(j) {
          return y(b, j);
        }, meridiem: b.meridiem, ordinal: b.ordinal };
      }, r.months = function() {
        return o(k(), "months");
      }, r.monthsShort = function() {
        return o(k(), "monthsShort", "months", 3);
      }, r.weekdays = function(b) {
        return o(k(), "weekdays", null, null, b);
      }, r.weekdaysShort = function(b) {
        return o(k(), "weekdaysShort", "weekdays", 3, b);
      }, r.weekdaysMin = function(b) {
        return o(k(), "weekdaysMin", "weekdays", 2, b);
      };
    };
  });
})(Jt);
var ao = Jt.exports;
const so = /* @__PURE__ */ Ae(ao);
var Xt = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, r, m) {
      var l = r.prototype, o = l.format;
      m.en.formats = a, l.format = function(k) {
        k === void 0 && (k = "YYYY-MM-DDTHH:mm:ssZ");
        var y = this.$locale().formats, g = function(b, j) {
          return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(T, E, N) {
            var P = N && N.toUpperCase();
            return E || j[N] || a[N] || j[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, F, V) {
              return F || V.slice(1);
            });
          });
        }(k, y === void 0 ? {} : y);
        return o.call(this, g);
      };
    };
  });
})(Xt);
var ro = Xt.exports;
const lo = /* @__PURE__ */ Ae(ro);
var Qt = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d/, m = /\d\d/, l = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, k = {}, y = function(P) {
      return (P = +P) + (P > 68 ? 1900 : 2e3);
    }, g = function(P) {
      return function(L) {
        this[P] = +L;
      };
    }, b = [/[+-]\d\d:?(\d\d)?|Z/, function(P) {
      (this.zone || (this.zone = {})).offset = function(L) {
        if (!L || L === "Z")
          return 0;
        var F = L.match(/([+-]|\d\d)/g), V = 60 * F[1] + (+F[2] || 0);
        return V === 0 ? 0 : F[0] === "+" ? -V : V;
      }(P);
    }], j = function(P) {
      var L = k[P];
      return L && (L.indexOf ? L : L.s.concat(L.f));
    }, T = function(P, L) {
      var F, V = k.meridiem;
      if (V) {
        for (var W = 1; W <= 24; W += 1)
          if (P.indexOf(V(W, 0, L)) > -1) {
            F = W > 12;
            break;
          }
      } else
        F = P === (L ? "pm" : "PM");
      return F;
    }, E = { A: [o, function(P) {
      this.afternoon = T(P, !1);
    }], a: [o, function(P) {
      this.afternoon = T(P, !0);
    }], Q: [r, function(P) {
      this.month = 3 * (P - 1) + 1;
    }], S: [r, function(P) {
      this.milliseconds = 100 * +P;
    }], SS: [m, function(P) {
      this.milliseconds = 10 * +P;
    }], SSS: [/\d{3}/, function(P) {
      this.milliseconds = +P;
    }], s: [l, g("seconds")], ss: [l, g("seconds")], m: [l, g("minutes")], mm: [l, g("minutes")], H: [l, g("hours")], h: [l, g("hours")], HH: [l, g("hours")], hh: [l, g("hours")], D: [l, g("day")], DD: [m, g("day")], Do: [o, function(P) {
      var L = k.ordinal, F = P.match(/\d+/);
      if (this.day = F[0], L)
        for (var V = 1; V <= 31; V += 1)
          L(V).replace(/\[|\]/g, "") === P && (this.day = V);
    }], w: [l, g("week")], ww: [m, g("week")], M: [l, g("month")], MM: [m, g("month")], MMM: [o, function(P) {
      var L = j("months"), F = (j("monthsShort") || L.map(function(V) {
        return V.slice(0, 3);
      })).indexOf(P) + 1;
      if (F < 1)
        throw new Error();
      this.month = F % 12 || F;
    }], MMMM: [o, function(P) {
      var L = j("months").indexOf(P) + 1;
      if (L < 1)
        throw new Error();
      this.month = L % 12 || L;
    }], Y: [/[+-]?\d+/, g("year")], YY: [m, function(P) {
      this.year = y(P);
    }], YYYY: [/\d{4}/, g("year")], Z: b, ZZ: b };
    function N(P) {
      var L, F;
      L = P, F = k && k.formats;
      for (var V = (P = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, h, s) {
        var G = s && s.toUpperCase();
        return h || F[s] || a[s] || F[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(C, M, $) {
          return M || $.slice(1);
        });
      })).match(t), W = V.length, _ = 0; _ < W; _ += 1) {
        var w = V[_], p = E[w], f = p && p[0], Y = p && p[1];
        V[_] = Y ? { regex: f, parser: Y } : w.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var h = {}, s = 0, G = 0; s < W; s += 1) {
          var C = V[s];
          if (typeof C == "string")
            G += C.length;
          else {
            var M = C.regex, $ = C.parser, O = B.slice(G), S = M.exec(O)[0];
            $.call(h, S), B = B.replace(S, "");
          }
        }
        return function(I) {
          var U = I.afternoon;
          if (U !== void 0) {
            var R = I.hours;
            U ? R < 12 && (I.hours += 12) : R === 12 && (I.hours = 0), delete I.afternoon;
          }
        }(h), h;
      };
    }
    return function(P, L, F) {
      F.p.customParseFormat = !0, P && P.parseTwoDigitYear && (y = P.parseTwoDigitYear);
      var V = L.prototype, W = V.parse;
      V.parse = function(_) {
        var w = _.date, p = _.utc, f = _.args;
        this.$u = p;
        var Y = f[1];
        if (typeof Y == "string") {
          var B = f[2] === !0, h = f[3] === !0, s = B || h, G = f[2];
          h && (G = f[2]), k = this.$locale(), !B && G && (k = F.Ls[G]), this.$d = function(O, S, I, U) {
            try {
              if (["x", "X"].indexOf(S) > -1)
                return new Date((S === "X" ? 1e3 : 1) * O);
              var R = N(S)(O), X = R.year, Q = R.month, te = R.day, ie = R.hours, ce = R.minutes, ge = R.seconds, ke = R.milliseconds, ve = R.zone, ae = R.week, me = /* @__PURE__ */ new Date(), ye = te || (X || Q ? 1 : me.getDate()), de = X || me.getFullYear(), Le = 0;
              X && !Q || (Le = Q > 0 ? Q - 1 : me.getMonth());
              var Be, We = ie || 0, He = ce || 0, Ue = ge || 0, ze = ke || 0;
              return ve ? new Date(Date.UTC(de, Le, ye, We, He, Ue, ze + 60 * ve.offset * 1e3)) : I ? new Date(Date.UTC(de, Le, ye, We, He, Ue, ze)) : (Be = new Date(de, Le, ye, We, He, Ue, ze), ae && (Be = U(Be).week(ae).toDate()), Be);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(w, Y, p, F), this.init(), G && G !== !0 && (this.$L = this.locale(G).$L), s && w != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), k = {};
        } else if (Y instanceof Array)
          for (var C = Y.length, M = 1; M <= C; M += 1) {
            f[1] = Y[M - 1];
            var $ = F.apply(this, f);
            if ($.isValid()) {
              this.$d = $.$d, this.$L = $.$L, this.init();
              break;
            }
            M === C && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          W.call(this, _);
      };
    };
  });
})(Qt);
var uo = Qt.exports;
const io = /* @__PURE__ */ Ae(uo);
var en = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    return function(a, t, r) {
      t.prototype.isToday = function() {
        var m = "YYYY-MM-DD", l = r();
        return this.format(m) === l.format(m);
      };
    };
  });
})(en);
var co = en.exports;
const mo = /* @__PURE__ */ Ae(co);
var tn = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    return function(a, t, r) {
      t.prototype.isBetween = function(m, l, o, k) {
        var y = r(m), g = r(l), b = (k = k || "()")[0] === "(", j = k[1] === ")";
        return (b ? this.isAfter(y, o) : !this.isBefore(y, o)) && (j ? this.isBefore(g, o) : !this.isAfter(g, o)) || (b ? this.isBefore(y, o) : !this.isAfter(y, o)) && (j ? this.isAfter(g, o) : !this.isBefore(g, o));
      };
    };
  });
})(tn);
var fo = tn.exports;
const po = /* @__PURE__ */ Ae(fo);
var nn = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    var a, t, r = 1e3, m = 6e4, l = 36e5, o = 864e5, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = 31536e6, g = 2628e6, b = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, j = { years: y, months: g, days: o, hours: l, minutes: m, seconds: r, milliseconds: 1, weeks: 6048e5 }, T = function(w) {
      return w instanceof W;
    }, E = function(w, p, f) {
      return new W(w, f, p.$l);
    }, N = function(w) {
      return t.p(w) + "s";
    }, P = function(w) {
      return w < 0;
    }, L = function(w) {
      return P(w) ? Math.ceil(w) : Math.floor(w);
    }, F = function(w) {
      return Math.abs(w);
    }, V = function(w, p) {
      return w ? P(w) ? { negative: !0, format: "" + F(w) + p } : { negative: !1, format: "" + w + p } : { negative: !1, format: "" };
    }, W = function() {
      function w(f, Y, B) {
        var h = this;
        if (this.$d = {}, this.$l = B, f === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), Y)
          return E(f * j[N(Y)], this);
        if (typeof f == "number")
          return this.$ms = f, this.parseFromMilliseconds(), this;
        if (typeof f == "object")
          return Object.keys(f).forEach(function(C) {
            h.$d[N(C)] = f[C];
          }), this.calMilliseconds(), this;
        if (typeof f == "string") {
          var s = f.match(b);
          if (s) {
            var G = s.slice(2).map(function(C) {
              return C != null ? Number(C) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = w.prototype;
      return p.calMilliseconds = function() {
        var f = this;
        this.$ms = Object.keys(this.$d).reduce(function(Y, B) {
          return Y + (f.$d[B] || 0) * j[B];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var f = this.$ms;
        this.$d.years = L(f / y), f %= y, this.$d.months = L(f / g), f %= g, this.$d.days = L(f / o), f %= o, this.$d.hours = L(f / l), f %= l, this.$d.minutes = L(f / m), f %= m, this.$d.seconds = L(f / r), f %= r, this.$d.milliseconds = f;
      }, p.toISOString = function() {
        var f = V(this.$d.years, "Y"), Y = V(this.$d.months, "M"), B = +this.$d.days || 0;
        this.$d.weeks && (B += 7 * this.$d.weeks);
        var h = V(B, "D"), s = V(this.$d.hours, "H"), G = V(this.$d.minutes, "M"), C = this.$d.seconds || 0;
        this.$d.milliseconds && (C += this.$d.milliseconds / 1e3, C = Math.round(1e3 * C) / 1e3);
        var M = V(C, "S"), $ = f.negative || Y.negative || h.negative || s.negative || G.negative || M.negative, O = s.format || G.format || M.format ? "T" : "", S = ($ ? "-" : "") + "P" + f.format + Y.format + h.format + O + s.format + G.format + M.format;
        return S === "P" || S === "-P" ? "P0D" : S;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(f) {
        var Y = f || "YYYY-MM-DDTHH:mm:ss", B = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return Y.replace(k, function(h, s) {
          return s || String(B[h]);
        });
      }, p.as = function(f) {
        return this.$ms / j[N(f)];
      }, p.get = function(f) {
        var Y = this.$ms, B = N(f);
        return B === "milliseconds" ? Y %= 1e3 : Y = B === "weeks" ? L(Y / j[B]) : this.$d[B], Y || 0;
      }, p.add = function(f, Y, B) {
        var h;
        return h = Y ? f * j[N(Y)] : T(f) ? f.$ms : E(f, this).$ms, E(this.$ms + h * (B ? -1 : 1), this);
      }, p.subtract = function(f, Y) {
        return this.add(f, Y, !0);
      }, p.locale = function(f) {
        var Y = this.clone();
        return Y.$l = f, Y;
      }, p.clone = function() {
        return E(this.$ms, this);
      }, p.humanize = function(f) {
        return a().add(this.$ms, "ms").locale(this.$l).fromNow(!f);
      }, p.valueOf = function() {
        return this.asMilliseconds();
      }, p.milliseconds = function() {
        return this.get("milliseconds");
      }, p.asMilliseconds = function() {
        return this.as("milliseconds");
      }, p.seconds = function() {
        return this.get("seconds");
      }, p.asSeconds = function() {
        return this.as("seconds");
      }, p.minutes = function() {
        return this.get("minutes");
      }, p.asMinutes = function() {
        return this.as("minutes");
      }, p.hours = function() {
        return this.get("hours");
      }, p.asHours = function() {
        return this.as("hours");
      }, p.days = function() {
        return this.get("days");
      }, p.asDays = function() {
        return this.as("days");
      }, p.weeks = function() {
        return this.get("weeks");
      }, p.asWeeks = function() {
        return this.as("weeks");
      }, p.months = function() {
        return this.get("months");
      }, p.asMonths = function() {
        return this.as("months");
      }, p.years = function() {
        return this.get("years");
      }, p.asYears = function() {
        return this.as("years");
      }, w;
    }(), _ = function(w, p, f) {
      return w.add(p.years() * f, "y").add(p.months() * f, "M").add(p.days() * f, "d").add(p.hours() * f, "h").add(p.minutes() * f, "m").add(p.seconds() * f, "s").add(p.milliseconds() * f, "ms");
    };
    return function(w, p, f) {
      a = f, t = f().$utils(), f.duration = function(h, s) {
        var G = f.locale();
        return E(h, { $l: G }, s);
      }, f.isDuration = T;
      var Y = p.prototype.add, B = p.prototype.subtract;
      p.prototype.add = function(h, s) {
        return T(h) ? _(this, h, 1) : Y.bind(this)(h, s);
      }, p.prototype.subtract = function(h, s) {
        return T(h) ? _(this, h, -1) : B.bind(this)(h, s);
      };
    };
  });
})(nn);
var ho = nn.exports;
const vo = /* @__PURE__ */ Ae(ho);
var on = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    var a = "week", t = "year";
    return function(r, m, l) {
      var o = m.prototype;
      o.week = function(k) {
        if (k === void 0 && (k = null), k !== null)
          return this.add(7 * (k - this.week()), "day");
        var y = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var g = l(this).startOf(t).add(1, t).date(y), b = l(this).endOf(a);
          if (g.isBefore(b))
            return 1;
        }
        var j = l(this).startOf(t).date(y).startOf(a).subtract(1, "millisecond"), T = this.diff(j, a, !0);
        return T < 0 ? l(this).startOf("week").week() : Math.ceil(T);
      }, o.weeks = function(k) {
        return k === void 0 && (k = null), this.week(k);
      };
    };
  });
})(on);
var yo = on.exports;
const go = /* @__PURE__ */ Ae(yo);
function be(e, n) {
  const a = Se(e, n);
  if (!a)
    throw new Error(`Could not resolve ${e.description}`);
  return a;
}
const Dt = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../node_modules/dayjs/esm/locale/af.js": () => import("./af-3f5e3754.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/am.js": () => import("./am-bc833d79.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-dz.js": () => import("./ar-dz-2b677c27.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-iq.js": () => import("./ar-iq-9280b179.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-kw.js": () => import("./ar-kw-06673fb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ly.js": () => import("./ar-ly-b364c556.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ma.js": () => import("./ar-ma-e9b96f88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-sa.js": () => import("./ar-sa-920b6966.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-tn.js": () => import("./ar-tn-5d2ebe87.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar.js": () => import("./ar-2a82d0f4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/az.js": () => import("./az-659b56f9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/be.js": () => import("./be-8c0cc01b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bg.js": () => import("./bg-406145d9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bi.js": () => import("./bi-951682c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bm.js": () => import("./bm-9d7e855b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn-bd.js": () => import("./bn-bd-087a7a1c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn.js": () => import("./bn-0c0acd44.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bo.js": () => import("./bo-19632568.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/br.js": () => import("./br-5a3443b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bs.js": () => import("./bs-ad641200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ca.js": () => import("./ca-035ea682.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cs.js": () => import("./cs-debeec9e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cv.js": () => import("./cv-dcf48c54.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cy.js": () => import("./cy-daa2e33d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/da.js": () => import("./da-3c1144ee.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-at.js": () => import("./de-at-5acf665a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-ch.js": () => import("./de-ch-6b981a67.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de.js": () => import("./de-77586bc3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/dv.js": () => import("./dv-65849a7f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/el.js": () => import("./el-ae4ad393.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-au.js": () => import("./en-au-a066127b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ca.js": () => import("./en-ca-c5437740.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-gb.js": () => import("./en-gb-c2cc134a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ie.js": () => import("./en-ie-d3ac9ac2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-il.js": () => import("./en-il-6dd24280.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-in.js": () => import("./en-in-2f2879f3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-nz.js": () => import("./en-nz-c996ce95.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-sg.js": () => import("./en-sg-278f7244.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-tt.js": () => import("./en-tt-dcca6678.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en.js": () => import("./en-4402d6fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eo.js": () => import("./eo-2b962c7e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-do.js": () => import("./es-do-e5ec18dc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-mx.js": () => import("./es-mx-0b0fdda9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-pr.js": () => import("./es-pr-ecf92870.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-us.js": () => import("./es-us-9a974819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es.js": () => import("./es-542d397d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/et.js": () => import("./et-cc745c6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eu.js": () => import("./eu-1819a0bf.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fa.js": () => import("./fa-759da5ca.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fi.js": () => import("./fi-48c34162.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fo.js": () => import("./fo-1a56e22a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ca.js": () => import("./fr-ca-a08d1ab6.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ch.js": () => import("./fr-ch-9e54ac3f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr.js": () => import("./fr-34da226b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fy.js": () => import("./fy-32e86ec3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ga.js": () => import("./ga-e14bb9af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gd.js": () => import("./gd-525324a8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gl.js": () => import("./gl-ecd4c576.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gom-latn.js": () => import("./gom-latn-0de894a4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gu.js": () => import("./gu-f8a9ff06.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/he.js": () => import("./he-c3d5738f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hi.js": () => import("./hi-06d9d378.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hr.js": () => import("./hr-df6e22c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ht.js": () => import("./ht-560ce1fa.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hu.js": () => import("./hu-36659a19.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hy-am.js": () => import("./hy-am-ec1e6b6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/id.js": () => import("./id-e83ede43.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/is.js": () => import("./is-112d618e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it-ch.js": () => import("./it-ch-74dc20fb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it.js": () => import("./it-68978c39.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ja.js": () => import("./ja-81ac0bce.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/jv.js": () => import("./jv-eb80b191.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ka.js": () => import("./ka-408178cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kk.js": () => import("./kk-7182d80c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/km.js": () => import("./km-c8d90f37.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kn.js": () => import("./kn-1ef13da8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ko.js": () => import("./ko-d74dbac1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ku.js": () => import("./ku-217c312b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ky.js": () => import("./ky-9beeab3e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lb.js": () => import("./lb-bbb0769c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lo.js": () => import("./lo-c0a222fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lt.js": () => import("./lt-7733040c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lv.js": () => import("./lv-8456bf8c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/me.js": () => import("./me-60049fb4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mi.js": () => import("./mi-a00211ea.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mk.js": () => import("./mk-750f2eb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ml.js": () => import("./ml-3d864495.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mn.js": () => import("./mn-c3b569a5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mr.js": () => import("./mr-caa70638.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms-my.js": () => import("./ms-my-9edfd210.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms.js": () => import("./ms-8a0b04c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mt.js": () => import("./mt-5924bb24.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/my.js": () => import("./my-7ec0e79b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nb.js": () => import("./nb-55474232.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ne.js": () => import("./ne-28b71d4d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl-be.js": () => import("./nl-be-ab2f9375.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl.js": () => import("./nl-f2df7562.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nn.js": () => import("./nn-ae0c69b8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/oc-lnc.js": () => import("./oc-lnc-e86add7d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pa-in.js": () => import("./pa-in-58db4e88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pl.js": () => import("./pl-6123f464.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt-br.js": () => import("./pt-br-72da3648.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt.js": () => import("./pt-6d21f766.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rn.js": () => import("./rn-fe91690b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ro.js": () => import("./ro-f0333df1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ru.js": () => import("./ru-8092165f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rw.js": () => import("./rw-8e49f17e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sd.js": () => import("./sd-f5f464cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/se.js": () => import("./se-d0247819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/si.js": () => import("./si-23229411.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sk.js": () => import("./sk-2ae651e5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sl.js": () => import("./sl-d651cb86.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sq.js": () => import("./sq-851e451a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr-cyrl.js": () => import("./sr-cyrl-150c337e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr.js": () => import("./sr-26ffbdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ss.js": () => import("./ss-70c27ddd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv-fi.js": () => import("./sv-fi-53a8b8bd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv.js": () => import("./sv-bf43bdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sw.js": () => import("./sw-3c86b419.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ta.js": () => import("./ta-dde447c0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/te.js": () => import("./te-d039e67a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tet.js": () => import("./tet-2478e8c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tg.js": () => import("./tg-374d7196.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/th.js": () => import("./th-cfb73f82.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tk.js": () => import("./tk-6502e590.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tl-ph.js": () => import("./tl-ph-f36e80af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tlh.js": () => import("./tlh-6d81a812.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tr.js": () => import("./tr-1608d107.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzl.js": () => import("./tzl-e019f0a0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm-latn.js": () => import("./tzm-latn-4a3fedcb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm.js": () => import("./tzm-9a26d476.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ug-cn.js": () => import("./ug-cn-7370b4b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uk.js": () => import("./uk-f2be452c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ur.js": () => import("./ur-5e01f781.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz-latn.js": () => import("./uz-latn-ec9b852e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz.js": () => import("./uz-f44d7936.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/vi.js": () => import("./vi-8106a30d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/x-pseudo.js": () => import("./x-pseudo-20ac0200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/yo.js": () => import("./yo-45cb4db7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-cn.js": () => import("./zh-cn-7af2941c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-hk.js": () => import("./zh-hk-e8e3af02.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-tw.js": () => import("./zh-tw-58dac95d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh.js": () => import("./zh-26803c4f.js").then((e) => e.default) })).map(
    ([e, n]) => {
      var a;
      return [(a = e.match(/([\w-]*)\.js$/)) == null ? void 0 : a[1], n];
    }
  )
), mt = {
  today: "Today",
  tomorrow: "Tomorrow",
  thisWeekend: "Weekend",
  thisWeek: "Week",
  currentMonth: "Month",
  thisYear: "Year"
}, ft = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  night: "Night"
}, bo = {
  en: mt,
  "en-gb": mt,
  nl: {
    today: "Vandaag",
    tomorrow: "Morgen",
    thisWeekend: "Weekend",
    thisWeek: "Week",
    currentMonth: "Maand",
    thisYear: "Jaar"
  },
  fr: {
    today: "Aujourd'hui",
    tomorrow: "Demain",
    thisWeekend: "Week-end",
    thisWeek: "Semaine",
    currentMonth: "Mois",
    thisYear: "Année"
  }
}, wo = {
  en: ft,
  "en-gb": ft,
  nl: {
    morning: "Ochtend",
    afternoon: "Middag",
    evening: "Avond",
    night: "Nacht"
  },
  fr: {
    morning: "Matin",
    afternoon: "Après-midi",
    evening: "Soir",
    night: "Nuit"
  }
}, xo = {
  en: "Clear",
  "en-gb": "Clear",
  nl: "Wissen",
  fr: "Effacer"
};
function ht(e) {
  const n = String(e || "en").toLowerCase();
  return n.startsWith("nl") ? "nl" : n.startsWith("fr") ? "fr" : n === "en-gb" || n.startsWith("en-gb") ? "en-gb" : "en";
}
function we(e, n) {
  return e && e.trim() ? e : n;
}
function jo(e, n) {
  const a = bo[ht(e)] || mt;
  return {
    today: we(n == null ? void 0 : n.today, a.today),
    tomorrow: we(n == null ? void 0 : n.tomorrow, a.tomorrow),
    thisWeekend: we(n == null ? void 0 : n.thisWeekend, a.thisWeekend),
    thisWeek: we(n == null ? void 0 : n.thisWeek, a.thisWeek),
    currentMonth: we(n == null ? void 0 : n.currentMonth, a.currentMonth),
    thisYear: we(n == null ? void 0 : n.thisYear, a.thisYear)
  };
}
function ko(e, n) {
  const a = wo[ht(e)] || ft;
  return {
    morning: we(n == null ? void 0 : n.morning, a.morning),
    afternoon: we(n == null ? void 0 : n.afternoon, a.afternoon),
    evening: we(n == null ? void 0 : n.evening, a.evening),
    night: we(n == null ? void 0 : n.night, a.night)
  };
}
function $o(e, n) {
  return we(n, xo[ht(e)] || "Clear");
}
const _o = { class: "flex justify-between items-center px-2 py-1.5" }, Mo = { class: "shrink-0" }, So = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Do = ["d"], To = { class: "px-1.5 space-x-1.5 flex flex-1" }, Oo = { class: "flex-1 flex rounded-md" }, Po = ["textContent"], Co = { class: "flex-1 flex rounded-md" }, Vo = ["textContent"], Ao = { class: "shrink-0" }, Yo = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Eo = ["d"], Tt = /* @__PURE__ */ ue({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (n, a) => (Z(), J("div", _o, [
      D("div", Mo, [
        he(D("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: a[0] || (a[0] = (t) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
        }, [
          (Z(), J("svg", So, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
            }, null, 8, Do)
          ]))
        ], 512), [
          [Oe, e.panel.calendar || e.panel.year]
        ])
      ]),
      D("div", To, [
        D("span", Oo, [
          D("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: a[1] || (a[1] = (t) => e.calendar.openMonth()),
            textContent: ne(e.calendar.month)
          }, null, 8, Po)
        ]),
        D("span", Co, [
          D("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: a[2] || (a[2] = (t) => e.calendar.openYear()),
            textContent: ne(e.calendar.year)
          }, null, 8, Vo)
        ])
      ]),
      D("div", Ao, [
        he(D("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: a[3] || (a[3] = (t) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
        }, [
          (Z(), J("svg", Yo, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
            }, null, 8, Eo)
          ]))
        ], 512), [
          [Oe, e.panel.calendar || e.panel.year]
        ])
      ])
    ]));
  }
}), an = Symbol("isBetweenRange"), sn = Symbol(
  "betweenRangeClasses"
), rn = Symbol("datepickerClasses"), ln = Symbol("atMouseOver"), un = Symbol("setToToday"), dn = Symbol("setToTomorrow"), cn = Symbol("setToThisWeekend"), mn = Symbol("setToThisWeek"), fn = Symbol("setToThisMonth"), pn = Symbol("setToThisYear"), hn = Symbol("setToCustomShortcut"), Lo = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/10 order-last sm:order-0 dark:border-vtd-secondary-700 sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0 sm:w-auto",
  style: { display: "flex" }
}, Bo = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0",
  style: { display: "flex", "flex-direction": "column", "justify-content": "space-around" }
}, Fo = ["onClick", "textContent"], No = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0",
  style: { display: "flex", "flex-direction": "column", "justify-content": "space-around" }
}, Ot = /* @__PURE__ */ ue({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const n = e, a = be(un), t = be(dn), r = be(cn), m = be(mn), l = be(fn), o = be(pn), k = be(hn), y = oe(() => typeof n.shortcuts == "function" ? n.shortcuts() : !1);
    return (g, b) => n.asRange && n.asSingle || n.asRange && !n.asSingle ? (Z(), J("div", Lo, [
      y.value ? (Z(), J("ol", Bo, [
        (Z(!0), J(xe, null, Xe(y.value, (j, T) => (Z(), J("li", { key: T }, [
          D("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: (E) => le(k)(j, e.close),
            textContent: ne(j.label)
          }, null, 8, Fo)
        ]))), 128))
      ])) : (Z(), J("ol", No, [
        D("li", null, [
          D("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[0] || (b[0] = (j) => le(a)(e.close))
          }, ne(n.i18n.today), 1)
        ]),
        D("li", null, [
          D("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[1] || (b[1] = (j) => le(t)(e.close))
          }, ne(n.i18n.tomorrow), 1)
        ]),
        D("li", null, [
          D("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[2] || (b[2] = (j) => le(r)(e.close))
          }, ne(n.i18n.thisWeekend), 1)
        ]),
        D("li", null, [
          D("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[3] || (b[3] = (j) => le(m)(e.close))
          }, ne(n.i18n.thisWeek), 1)
        ]),
        D("li", null, [
          D("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[4] || (b[4] = (j) => le(l)(e.close))
          }, ne(n.i18n.currentMonth), 1)
        ]),
        D("li", null, [
          D("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[5] || (b[5] = (j) => le(o)(e.close))
          }, ne(n.i18n.thisYear), 1)
        ])
      ]))
    ])) : $e("", !0);
  }
}), Ro = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, Io = {
  key: 0,
  class: "col-span-7 border-b relative"
}, Wo = { class: "absolute -left-2 top-1/2 -translate-y-2/4 bg-white text-[8px] pr-2 text-vtd-secondary-400" }, Ho = ["data-tooltip"], Uo = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], Pt = /* @__PURE__ */ ue({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: n }) {
    const a = n, t = be(an), r = be(sn), m = be(rn), l = be(ln);
    return (o, k) => (Z(), J("div", Ro, [
      fe(jn, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Fe(() => [
          (Z(!0), J(xe, null, Xe(e.calendar.date(), (y, g) => (Z(), J(xe, { key: g }, [
            g % 7 === 0 && e.weekNumber ? (Z(), J("div", Io, [
              D("span", Wo, ne(y.week()), 1)
            ])) : $e("", !0),
            D("div", {
              class: Ne(["relative", { "vtd-tooltip": e.asRange && y.duration() }]),
              "data-tooltip": `${y.duration()}`
            }, [
              fe(Yt, {
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "enter-active-class": "transition-opacity ease-out duration-200",
                "leave-active-class": "transition-opacity ease-in duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: Fe(() => [
                  le(t)(y) || y.hovered() ? (Z(), J("span", {
                    key: 0,
                    class: Ne(["absolute bg-vtd-dark-blue/10", le(r)(y)])
                  }, null, 2)) : $e("", !0)
                ]),
                _: 2
              }, 1024),
              D("button", {
                type: "button",
                class: Ne(["vtd-datepicker-date relative w-[2.25rem] h-[2.25rem] flex justify-center items-center text-sm font-medium", [
                  le(m)(y),
                  e.asRange ? "transition-all" : "transition-colors"
                ]]),
                disabled: y.disabled || y.inRange(),
                "data-date": y.toDate(),
                onClick: (b) => a("updateDate", y),
                onMouseenter: (b) => le(l)(y),
                onFocusin: (b) => le(l)(y),
                textContent: ne(y.date())
              }, null, 42, Uo)
            ], 10, Ho)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), zo = { class: "flex flex-wrap" }, Ko = { class: "flex rounded-md mt-1.5" }, Go = ["onClick", "textContent"], Ct = /* @__PURE__ */ ue({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: n }) {
    const a = n;
    return (t, r) => (Z(), J("div", zo, [
      (Z(!0), J(xe, null, Xe(e.years, (m, l) => (Z(), J("div", {
        key: l,
        class: "w-1/2 px-0.5"
      }, [
        D("span", Ko, [
          D("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (o) => a("updateYear", m),
            textContent: ne(m)
          }, null, 8, Go)
        ])
      ]))), 128))
    ]));
  }
}), Zo = { class: "grid grid-cols-7 py-2 mt-0.5" }, qo = ["textContent"], Vt = /* @__PURE__ */ ue({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (n, a) => (Z(), J("div", Zo, [
      (Z(!0), J(xe, null, Xe(e.weeks, (t, r) => (Z(), J("div", {
        key: r,
        class: "text-vtd-dark-blue text-sm lg:text-md tracking-wide font-bold text-center cursor-default"
      }, [
        D("span", {
          textContent: ne(t)
        }, null, 8, qo)
      ]))), 128))
    ]));
  }
}), Jo = { class: "flex flex-wrap mt-1.5" }, Xo = { class: "flex rounded-md mt-1.5" }, Qo = ["onClick", "textContent"], At = /* @__PURE__ */ ue({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: n }) {
    const a = n;
    return (t, r) => (Z(), J("div", Jo, [
      (Z(!0), J(xe, null, Xe(e.months, (m, l) => (Z(), J("div", {
        key: l,
        class: "w-1/2 px-0.5"
      }, [
        D("span", Xo, [
          D("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (o) => a("updateMonth", l),
            textContent: ne(m)
          }, null, 8, Qo)
        ])
      ]))), 128))
    ]));
  }
});
function ea() {
  const e = (o) => {
    const k = [], y = o.localeData().firstDayOfWeek();
    for (let g = 0; g <= o.date(0 - y).day(); g++)
      k.push(o.date(0).subtract(g, "day"));
    return k.sort((g, b) => g.date() - b.date());
  };
  return {
    usePreviousDate: e,
    useCurrentDate: (o) => Array.from(
      {
        length: o.daysInMonth()
      },
      (k, y) => o.date(y + 1)
    ),
    useNextDate: (o) => {
      const k = [];
      for (let y = 1; y <= 42 - (e(o).length + o.daysInMonth()); y++)
        k.push(o.date(y).month(o.month()).add(1, "month"));
      return k;
    },
    useDisableDate: (o, { disableDate: k }) => typeof k == "function" ? k(o.toDate()) : !1,
    useBetweenRange: (o, { previous: k, next: y }) => {
      const g = k.isAfter(y, "date") ? "(]" : "[)";
      return !!(o.isBetween(k, y, "date", g) && !o.off);
    },
    useToValueFromString: (o, { formatter: k }) => o.format(k.date),
    useToValueFromArray: ({ previous: o, next: k }, {
      formatter: y,
      separator: g
    }) => `${o.format(y.date)}${g}${k.format(
      y.date
    )}`
  };
}
function ta() {
  return {
    useVisibleViewport: (n) => {
      if (n) {
        const { right: a } = n.getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth;
        return a > t;
      } else
        return null;
    }
  };
}
const na = ["disabled", "placeholder"], oa = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, aa = ["disabled"], sa = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ra = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, la = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, ua = ["onClick"], ia = { class: "flex flex-wrap lg:flex-nowrap" }, da = { class: "relative p-1 w-full" }, ca = { class: "relative w-full lg:w-80" }, ma = { class: "px-0.5 sm:px-2" }, fa = { key: 0 }, pa = { class: "pt-4 border-t border-black/[.1]" }, ha = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex justify-end gap-4" }, va = {
  for: "check-morning",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, ya = ["onChange"], ga = {
  for: "check-afternoon",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, ba = ["onChange"], wa = {
  for: "check-evening",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, xa = ["onChange"], ja = {
  for: "check-night",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, ka = ["onChange"], $a = { class: "mt-4 sm:flex sm:flex-row-reverse" }, _a = ["onClick", "textContent"], Ma = {
  key: 1,
  class: "sm:hidden"
}, Sa = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Da = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Ta = ["onClick", "textContent"], Oa = {
  key: 1,
  class: "flex"
}, Pa = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, Ca = { class: "flex flex-wrap lg:flex-nowrap" }, Va = { class: "relative p-1 w-full" }, Aa = { class: "relative w-full lg:w-80" }, Ya = { class: "px-0.5 sm:px-2" }, Ea = { key: 0 }, La = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Ba = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Fa = ["textContent"], Na = /* @__PURE__ */ ue({
  __name: "VueTailwindDatePicker",
  props: {
    noInput: { type: Boolean },
    overlay: { type: Boolean },
    asSingle: { type: Boolean },
    useRange: { type: Boolean },
    placeholder: { default: "" },
    i18n: { default: "en" },
    inputClasses: { default: "" },
    disabled: { type: Boolean, default: !1 },
    disableInRange: { type: Boolean, default: !1 },
    disableDate: { type: [Boolean, Function], default: !1 },
    autoApply: { type: Boolean, default: !0 },
    shortcuts: { type: [Boolean, Function], default: !0 },
    separator: { default: " ~ " },
    formatter: { default: () => ({
      date: "YYYY-MM-DD HH:mm:ss",
      month: "MMM"
    }) },
    startFrom: { default: () => /* @__PURE__ */ new Date() },
    weekdaysSize: { default: "short" },
    weekNumber: { type: Boolean, default: !1 },
    options: { default: () => ({
      shortcuts: {},
      footer: {
        apply: "Apply",
        cancel: ""
      },
      session: {}
    }) },
    modelValue: { default: () => [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] },
    sessionValue: { default: () => ({
      morning: !1,
      afternoon: !1,
      evening: !1,
      night: !1
    }) }
  },
  emits: ["update:modelValue", "update:sessionValue", "selectMonth", "selectYear", "selectRightMonth", "selectRightYear", "clickPrev", "clickNext", "clickRightPrev", "clickRightNext"],
  setup(e, { expose: n, emit: a }) {
    var yt, gt, bt, wt;
    const t = e, r = a, m = ut({
      morning: ((yt = t.sessionValue) == null ? void 0 : yt.morning) || !1,
      afternoon: ((gt = t.sessionValue) == null ? void 0 : gt.afternoon) || !1,
      evening: ((bt = t.sessionValue) == null ? void 0 : bt.evening) || !1,
      night: ((wt = t.sessionValue) == null ? void 0 : wt.night) || !1
    });
    Ze(m, (d) => {
      r("update:sessionValue", { ...d });
    }, { deep: !0 }), Ze(() => t.sessionValue, (d) => {
      d && (m.morning = d.morning, m.afternoon = d.afternoon, m.evening = d.evening, m.night = d.night);
    }, { deep: !0 });
    const l = oe(
      () => {
        var d;
        return jo(t.i18n, (d = t.options) == null ? void 0 : d.shortcuts);
      }
    ), o = oe(
      () => {
        var d;
        return ko(t.i18n, (d = t.options) == null ? void 0 : d.session);
      }
    ), k = oe(
      () => {
        var d, u;
        return $o(t.i18n, (u = (d = t.options) == null ? void 0 : d.footer) == null ? void 0 : u.cancel);
      }
    ), {
      useCurrentDate: y,
      useDisableDate: g,
      useBetweenRange: b,
      useNextDate: j,
      usePreviousDate: T,
      useToValueFromArray: E,
      useToValueFromString: N
    } = ea(), { useVisibleViewport: P } = ta();
    c.extend(so), c.extend(lo), c.extend(io), c.extend(mo), c.extend(po), c.extend(vo), c.extend(go);
    const L = q(null), F = q(null), V = q(null), W = q(""), _ = q(null), w = q(""), p = q([]), f = q([]), Y = q(null), B = q(null), h = ut({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), s = q({
      previous: c(),
      next: c().add(1, "month"),
      year: {
        previous: c().year(),
        next: c().year()
      },
      weeks: t.weekdaysSize === "min" ? c.weekdaysMin() : c.weekdaysShort(),
      months: t.formatter.month === "MMM" ? c.monthsShort() : c.months()
    });
    function G() {
      m.morning = !1, m.afternoon = !1, m.evening = !1, m.night = !1;
    }
    function C(d) {
      const u = c().format(t.formatter.date), v = c().format(t.formatter.date);
      de(u, v), G(), d && d();
    }
    const M = oe(() => s.value.weeks), $ = oe(() => s.value.months), O = oe(() => {
      const { previous: d, next: u, year: v } = le(s);
      return {
        previous: {
          date: () => T(d).concat(y(d)).concat(j(d)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: d.month() === i.month(),
            off: d.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: g(i, t) && !X(i),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return d.month() !== i.month();
            },
            hovered: () => R() && p.value.length > 1 ? (i.isBetween(
              p.value[0],
              p.value[1],
              "date",
              "()"
            ) || i.isBetween(
              p.value[1],
              p.value[0],
              "date",
              "(]"
            )) && d.month() === i.month() : !1,
            duration: () => !1
          }), i)),
          month: d && d.format(t.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (i, x) => v.previous + x
          ),
          onPrevious: () => {
            s.value.previous = d.subtract(1, "month"), r("clickPrev", s.value.previous);
          },
          onNext: () => {
            s.value.previous = d.add(1, "month"), d.diff(u, "month") === -1 && (s.value.next = u.add(1, "month")), r("clickNext", s.value.previous);
          },
          onPreviousYear: () => {
            s.value.year.previous = s.value.year.previous - 12;
          },
          onNextYear: () => {
            s.value.year.previous = s.value.year.previous + 12;
          },
          openMonth: () => {
            h.previous.month = !h.previous.month, h.previous.year = !1, h.previous.calendar = !h.previous.month;
          },
          setMonth: (i) => {
            s.value.previous = d.month(i), h.previous.month = !h.previous.month, h.previous.year = !1, h.previous.calendar = !h.previous.month, r("selectMonth", s.value.previous), Ke(() => {
              (s.value.next.isSame(s.value.previous, "month") || s.value.next.isBefore(s.value.previous)) && (s.value.next = s.value.previous.add(1, "month")), s.value.year.next = s.value.next.year();
            });
          },
          openYear: () => {
            h.previous.year = !h.previous.year, h.previous.month = !1, h.previous.calendar = !h.previous.year;
          },
          setYear: (i) => {
            s.value.previous = d.year(i), h.previous.year = !h.previous.year, h.previous.calendar = !h.previous.year, r("selectYear", s.value.previous), Ke(() => {
              (s.value.next.isSame(s.value.previous, "month") || s.value.next.isBefore(s.value.previous)) && (s.value.next = s.value.previous.add(1, "month")), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year();
            });
          }
        },
        next: {
          date: () => T(u).concat(y(u)).concat(j(u)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: u.month() === i.month(),
            off: u.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: g(i, t) && !X(i),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return u.month() !== i.month();
            },
            hovered: () => p.value.length > 1 ? (i.isBetween(
              p.value[0],
              p.value[1],
              "date",
              "()"
            ) || i.isBetween(
              p.value[1],
              p.value[0],
              "date",
              "(]"
            )) && u.month() === i.month() : !1,
            duration: () => !1
          }), i)),
          month: u && u.format(t.formatter.month),
          year: u && u.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (i, x) => v.next + x
          ),
          onPrevious: () => {
            s.value.next = u.subtract(1, "month"), u.diff(d, "month") === 1 && (s.value.previous = d.subtract(1, "month")), r("clickRightPrev", s.value.next);
          },
          onNext: () => {
            s.value.next = u.add(1, "month"), r("clickRightNext", s.value.next);
          },
          onPreviousYear: () => {
            s.value.year.next = s.value.year.next - 12;
          },
          onNextYear: () => {
            s.value.year.next = s.value.year.next + 12;
          },
          openMonth: () => {
            h.next.month = !h.next.month, h.next.year = !1, h.next.calendar = !h.next.month;
          },
          setMonth: (i) => {
            s.value.next = u.month(i), h.next.month = !h.next.month, h.next.year = !1, h.next.calendar = !h.next.month, r("selectRightMonth", s.value.next), Ke(() => {
              (s.value.previous.isSame(s.value.next, "month") || s.value.previous.isAfter(s.value.next)) && (s.value.previous = s.value.next.subtract(
                1,
                "month"
              )), s.value.year.previous = s.value.previous.year();
            });
          },
          openYear: () => {
            h.next.year = !h.next.year, h.next.month = !1, h.next.calendar = !h.next.year;
          },
          setYear: (i) => {
            s.value.next = u.year(i), h.next.year = !h.next.year, h.next.month = !1, h.next.calendar = !h.next.year, r("selectRightYear", s.value.next), Ke(() => {
              (s.value.previous.isSame(s.value.next, "month") || s.value.previous.isAfter(s.value.next)) && (s.value.previous = s.value.next.subtract(
                1,
                "month"
              )), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year();
            });
          }
        }
      };
    }), S = q(!1);
    setTimeout(() => {
      S.value = !0;
    }, 250);
    function I() {
      return c().localeData().firstDayOfWeek();
    }
    function U(d) {
      const u = [...d], v = u.shift();
      return [...u, v];
    }
    function R() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function X(d) {
      if (t.disableInRange || typeof t.disableDate == "function" || w.value === "")
        return !1;
      let u, v;
      if (Array.isArray(t.modelValue)) {
        const [i, x] = t.modelValue;
        u = i, v = x;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [i, x] = Object.values(t.modelValue);
          u = i, v = x;
        }
      } else {
        const [i, x] = t.modelValue.split(t.separator);
        u = i, v = x;
      }
      return d.isBetween(
        c(u, t.formatter.date, !0),
        c(v, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function Q() {
      Y.value = null, B.value = null, p.value = [], _.value = null;
    }
    function te() {
      if (w.value = "", Array.isArray(t.modelValue))
        r("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const d = {}, [u, v] = Object.keys(t.modelValue);
        d[u] = "", d[v] = "", r("update:modelValue", d);
      } else
        r("update:modelValue", "");
      f.value = [], F.value && F.value.focus();
    }
    function ie() {
      if (R()) {
        const [d, u] = w.value.split(t.separator), [v, i] = [
          c(d, t.formatter.date, !0),
          c(u, t.formatter.date, !0)
        ];
        if (v.isValid() && i.isValid())
          if (ce(v), ce(i), Array.isArray(t.modelValue))
            r("update:modelValue", [d, u]);
          else if (typeof t.modelValue == "object") {
            const x = {}, [A, K] = Object.keys(t.modelValue);
            x[A] = d, x[K] = u, r("update:modelValue", x);
          } else
            r(
              "update:modelValue",
              E(
                {
                  previous: v,
                  next: i
                },
                t
              )
            );
      } else {
        const d = c(w.value, t.formatter.date, !0);
        if (d.isValid())
          if (ce(d), Array.isArray(t.modelValue))
            r("update:modelValue", [w.value]);
          else if (typeof t.modelValue == "object") {
            const u = {}, [v] = Object.keys(t.modelValue);
            u[v] = w.value, r("update:modelValue", u);
          } else
            r("update:modelValue", w.value);
      }
    }
    function ce(d, u) {
      if (R())
        if (Y.value)
          if (B.value = d, t.autoApply) {
            d.isBefore(Y.value) ? w.value = E(
              {
                previous: d,
                next: Y.value
              },
              t
            ) : w.value = E(
              {
                previous: Y.value,
                next: d
              },
              t
            );
            const [v, i] = w.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              r("update:modelValue", [
                c(v, t.formatter.date, !0).format(t.formatter.date),
                c(i, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const x = {}, [A, K] = Object.keys(t.modelValue);
              x[A] = v, x[K] = i, r("update:modelValue", x);
            } else
              r(
                "update:modelValue",
                E(
                  {
                    previous: c(v, t.formatter.date, !0),
                    next: c(i, t.formatter.date, !0)
                  },
                  t
                )
              );
            u && u(), f.value = [], c(v, t.formatter.date, !0).isSame(
              c(i, t.formatter.date, !0),
              "month"
            ) || (s.value.previous = c(v, t.formatter.date, !0), s.value.next = c(i, t.formatter.date, !0)), Q();
          } else {
            Y.value.isAfter(d, "month") ? f.value = [d, Y.value] : f.value = [Y.value, d];
            const [v, i] = f.value;
            v.isSame(i, "month") || (s.value.previous = v, s.value.next = i);
            const x = v.format(t.formatter.date), A = i.format(t.formatter.date);
            ye(x, A), Q(), u && u();
          }
        else
          f.value = [], Y.value = d, _.value = d, p.value.push(d), f.value.push(d), s.value.previous = d, s.value.next.isSame(d, "month") && (s.value.previous = s.value.next, s.value.next = d.add(1, "month"));
      else if (t.autoApply) {
        if (w.value = N(d, t), Array.isArray(t.modelValue))
          r("update:modelValue", [w.value]);
        else if (typeof t.modelValue == "object") {
          const v = {}, [i] = Object.keys(t.modelValue);
          v[i] = w.value, r("update:modelValue", v);
        } else
          r("update:modelValue", w.value);
        u && u(), f.value = [], Q();
      } else
        f.value = [d], Q();
    }
    function ge(d) {
      if (!R())
        return !1;
      if (Y.value)
        p.value = [Y.value, d];
      else
        return p.value = [], !1;
    }
    function ke(d) {
      if (Y.value && t.autoApply)
        return !1;
      let u, v;
      if (p.value.length > 1) {
        const [i, x] = p.value;
        u = c(i, t.formatter.date, !0), v = c(x, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [i, x] = t.modelValue;
          u = i && c(i, t.formatter.date, !0), v = x && c(x, t.formatter.date, !0);
        } else {
          const [i, x] = f.value;
          u = c(i, t.formatter.date, !0), v = c(x, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [i, x] = Object.values(t.modelValue);
            u = i && c(i, t.formatter.date, !0), v = x && c(x, t.formatter.date, !0);
          }
        } else {
          const [i, x] = f.value;
          u = c(i, t.formatter.date, !0), v = c(x, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [i, x] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        u = i && c(i, t.formatter.date, !0), v = x && c(x, t.formatter.date, !0);
      } else {
        const [i, x] = f.value;
        u = c(i, t.formatter.date, !0), v = c(x, t.formatter.date, !0);
      }
      return u && v ? b(d, {
        previous: u,
        next: v
      }) : !1;
    }
    function ve(d) {
      const { today: u, active: v, off: i, disabled: x } = d;
      let A, K, se;
      if (R())
        if (Array.isArray(t.modelValue))
          if (_.value) {
            const [z, ee] = p.value;
            K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, ee] = t.modelValue;
            K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
          } else {
            const [z, ee] = f.value;
            K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (_.value) {
            const [z, ee] = p.value;
            K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, ee] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
          } else {
            const [z, ee] = f.value;
            K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
          }
        else if (_.value) {
          const [z, ee] = p.value;
          K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [z, ee] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
        } else {
          const [z, ee] = f.value;
          K = z && c(z, t.formatter.date, !0), se = ee && c(ee, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [z] = t.modelValue;
            K = c(z, t.formatter.date, !0);
          }
        } else {
          const [z] = f.value;
          K = z && c(z, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [z] = Object.values(t.modelValue);
            K = c(z, t.formatter.date, !0);
          }
        } else {
          const [z] = f.value;
          K = z && c(z, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [z] = t.modelValue.split(t.separator);
          K = c(z, t.formatter.date, !0);
        }
      } else {
        const [z] = f.value;
        K = z && c(z, t.formatter.date, !0);
      }
      return v && (A = u ? "text-vtd-dark-blue bg-vtd-medium-gray rounded-md" : x ? "text-vtd-light-gray font-normal disabled:text-vtd-light-gray disabled:cursor-not-allowed" : (K && se && d.isBetween(K, se, "date", "()"), "text-vtd-dark-blue")), i && (A = "text-vtd-dark-blue disabled:cursor-not-allowed"), K && se && !i ? (d.isSame(K, "date") && (A = se.isAfter(K, "date") ? "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed", K.isSame(se, "date") && (A = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed")), d.isSame(se, "date") && (A = se.isAfter(K, "date") ? "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed", K.isSame(se, "date") && (A = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"))) : K && d.isSame(K, "date") && !i && (A = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"), A;
    }
    function ae(d) {
      let u, v, i;
      if (u = "", !R())
        return u;
      if (Array.isArray(t.modelValue))
        if (p.value.length > 1) {
          const [x, A] = p.value;
          v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [x, A] = t.modelValue;
          v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
        } else {
          const [x, A] = f.value;
          v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (p.value.length > 1) {
          const [x, A] = p.value;
          v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [x, A] = Object.values(t.modelValue);
            v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
          }
        } else {
          const [x, A] = f.value;
          v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
        }
      else if (p.value.length > 1) {
        const [x, A] = p.value;
        v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [x, A] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
      } else {
        const [x, A] = f.value;
        v = x && c(x, t.formatter.date, !0), i = A && c(A, t.formatter.date, !0);
      }
      return v && i && (d.isSame(v, "date") ? (i.isBefore(v) && (u += " rounded-r-md inset-0"), v.isBefore(i) && (u += " rounded-l-md inset-0")) : d.isSame(i, "date") ? (i.isBefore(v) && (u += " rounded-l-md inset-0"), v.isBefore(i) && (u += " rounded-r-md inset-0")) : u += " inset-0"), u;
    }
    function me(d, u) {
      s.value.previous = c(d, t.formatter.date, !0), s.value.next = c(u, t.formatter.date, !0), (c.duration(s.value.next.diff(s.value.previous)).get("months") === 2 || c.duration(s.value.next.diff(s.value.previous)).get("months") === 1 && c.duration(s.value.next.diff(s.value.previous)).get("days") === 7) && (s.value.next = s.value.next.subtract(1, "month")), (s.value.next.isSame(s.value.previous, "month") || s.value.next.isBefore(s.value.previous)) && (s.value.next = s.value.previous.add(1, "month"));
    }
    function ye(d, u) {
      if (Array.isArray(t.modelValue))
        r("update:modelValue", [d, u]);
      else if (typeof t.modelValue == "object") {
        const v = {}, [i, x] = Object.keys(t.modelValue);
        v[i] = d, v[x] = u, r("update:modelValue", v);
      } else
        r(
          "update:modelValue",
          E(
            {
              previous: c(d, t.formatter.date, !0),
              next: c(u, t.formatter.date, !0)
            },
            t
          )
        );
      w.value = `${d}${t.separator}${u}`;
    }
    function de(d, u) {
      if (R())
        ye(d, u), f.value = [
          c(d, t.formatter.date, !0),
          c(u, t.formatter.date, !0)
        ];
      else {
        if (Array.isArray(t.modelValue))
          r("update:modelValue", [d]);
        else if (typeof t.modelValue == "object") {
          const v = {}, [i] = Object.keys(t.modelValue);
          v[i] = d, r("update:modelValue", v);
        } else
          r("update:modelValue", d);
        w.value = d, f.value = [
          c(d, t.formatter.date, !0),
          c(u, t.formatter.date, !0)
        ];
      }
      me(d, u);
    }
    function Le(d) {
      const u = c(), i = (6 - u.day() + 7) % 7, x = u.add(i, "day"), A = x.add(1, "day"), K = x.format(t.formatter.date), se = A.format(t.formatter.date);
      de(K, se), d && d();
    }
    function Be(d) {
      const u = c(), v = u.day(), i = u.subtract(v, "day"), x = i.add(6, "day"), A = i.format(t.formatter.date), K = x.format(t.formatter.date);
      de(A, K), d && d();
    }
    function We(d) {
      const u = c().add(1, "day").format(t.formatter.date), v = c().add(1, "day").format(t.formatter.date);
      de(u, v), d && d();
    }
    function He(d) {
      const u = c().date(1).format(t.formatter.date), v = c().date(c().daysInMonth()).format(t.formatter.date);
      de(u, v), d && d();
    }
    function Ue(d) {
      const u = c(), v = u.startOf("year"), i = u.endOf("year"), x = v.format(t.formatter.date), A = i.format(t.formatter.date);
      de(x, A), d && d();
    }
    function ze(d, u) {
      const [v, i] = d.atClick(), x = c(v).format(t.formatter.date), A = c(i).format(t.formatter.date);
      de(x, A), u && u();
    }
    Ze(
      () => f.value,
      (d) => {
        d.length > 0 && (h.previous.calendar = !0, h.previous.month = !1, h.previous.year = !1, h.next.calendar = !0, h.next.month = !1, h.next.year = !1);
      }
    ), je(() => {
      t.placeholder ? W.value = t.placeholder : R() ? W.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : W.value = t.formatter.date;
    }), c.locale(t.i18n), Ze(() => t.i18n, () => c.locale(t.i18n)), je(() => {
      const d = t.i18n, u = t.modelValue;
      Ke(async () => {
        if (d in Dt) {
          const A = await Dt[d]();
          c.locale(A, void 0, !0), c.locale(d);
        }
        let v, i;
        if (R()) {
          if (Array.isArray(u)) {
            if (u.length > 0) {
              const [A, K] = u;
              v = c(A, t.formatter.date, !0), i = c(K, t.formatter.date, !0);
            }
          } else if (typeof u == "object") {
            if (!kn(u))
              try {
                Object.keys(u);
              } catch {
                console.warn(
                  "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                  "font-style: italic; color: #42b883;",
                  ", but you pass it undefined or null."
                ), console.warn(
                  "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                  "font-style: italic; color: #42b883;",
                  ", but you can replace manually."
                ), r("update:modelValue", {
                  startDate: "",
                  endDate: ""
                });
              }
            if (u) {
              const [A, K] = Object.values(u);
              v = A && c(A, t.formatter.date, !0), i = K && c(K, t.formatter.date, !0);
            }
          } else if (u) {
            const [A, K] = u.split(t.separator);
            v = c(A, t.formatter.date, !0), i = c(K, t.formatter.date, !0);
          }
          v && i ? (w.value = E(
            {
              previous: v,
              next: i
            },
            t
          ), i.isBefore(v, "month") ? (s.value.previous = i, s.value.next = v, s.value.year.previous = i.year(), s.value.year.next = v.year()) : i.isSame(v, "month") ? (s.value.previous = v, s.value.next = i.add(1, "month"), s.value.year.previous = v.year(), s.value.year.next = v.add(1, "year").year()) : (s.value.previous = v, s.value.next = i, s.value.year.previous = v.year(), s.value.year.next = i.year()), t.autoApply || (f.value = [v, i])) : (s.value.previous = c(t.startFrom), s.value.next = c(t.startFrom).add(1, "month"), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year());
        } else {
          if (Array.isArray(u)) {
            if (u.length > 0) {
              const [A] = u;
              v = c(A, t.formatter.date, !0);
            }
          } else if (typeof u == "object") {
            if (u) {
              const [A] = Object.values(u);
              v = c(A, t.formatter.date, !0);
            }
          } else if (u.length) {
            const [A] = u.split(t.separator);
            v = c(A, t.formatter.date, !0);
          }
          v && v.isValid() ? (w.value = N(v, t), s.value.previous = v, s.value.next = v.add(1, "month"), s.value.year.previous = v.year(), s.value.year.next = v.add(1, "year").year(), t.autoApply || (f.value = [v])) : (s.value.previous = c(t.startFrom), s.value.next = c(t.startFrom).add(1, "month"), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year());
        }
        const x = t.weekdaysSize === "min" ? c.weekdaysMin() : c.weekdaysShort();
        s.value.weeks = I() ? U(x) : x, s.value.months = t.formatter.month === "MMM" ? c.monthsShort() : c.months();
      });
    });
    function vt(d) {
      return d && V.value === null && (V.value = P(L.value)), d && V.value ? "place-right" : "place-left";
    }
    function yn(d) {
      return d && V.value === null && (V.value = P(L.value)), V.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return re(an, ke), re(sn, ae), re(rn, ve), re(ln, ge), re(un, C), re(cn, Le), re(mn, Be), re(dn, We), re(fn, He), re(pn, Ue), re(hn, ze), n({ clearPicker: te, resetSessionData: G }), (d, u) => t.noInput ? S.value ? (Z(), J("div", Oa, [
      D("div", Pa, [
        D("div", Ca, [
          t.shortcuts ? (Z(), Ge(Ot, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": R(),
            "as-single": t.asSingle,
            i18n: l.value
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : $e("", !0),
          D("div", Va, [
            D("div", Aa, [
              fe(Tt, {
                panel: h.previous,
                calendar: O.value.previous
              }, null, 8, ["panel", "calendar"]),
              D("div", Ya, [
                he(fe(At, {
                  months: $.value,
                  onUpdateMonth: O.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [Oe, h.previous.month]
                ]),
                he(fe(Ct, {
                  years: O.value.previous.years(),
                  onUpdateYear: O.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [Oe, h.previous.year]
                ]),
                he(D("div", null, [
                  fe(Vt, { weeks: M.value }, null, 8, ["weeks"]),
                  fe(Pt, {
                    calendar: O.value.previous,
                    weeks: M.value,
                    "as-range": R(),
                    "week-number": e.weekNumber,
                    onUpdateDate: u[7] || (u[7] = (v) => ce(v))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [Oe, h.previous.calendar]
                ])
              ])
            ])
          ])
        ]),
        t.autoApply ? $e("", !0) : (Z(), J("div", Ea, [
          D("div", La, [
            D("div", Ba, [
              D("button", {
                type: "button",
                class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                onClick: u[8] || (u[8] = (v) => C()),
                textContent: ne(k.value)
              }, null, 8, Fa)
            ])
          ])
        ]))
      ])
    ])) : $e("", !0) : (Z(), Ge(le(Zt), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Fe(({ open: v }) => [
        t.overlay && !t.disabled ? (Z(), Ge(le(to), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : $e("", !0),
        fe(le(eo), {
          as: "label",
          class: "relative block"
        }, {
          default: Fe(() => [
            jt(d.$slots, "default", {
              value: w.value,
              placeholder: W.value,
              clear: te
            }, () => [
              he(D("input", $n({
                ref_key: "VtdInputRef",
                ref: F
              }, d.$attrs, {
                "onUpdate:modelValue": u[0] || (u[0] = (i) => w.value = i),
                type: "text",
                class: ["relative block w-full", [
                  t.disabled ? "cursor-default opacity-50" : "opacity-100",
                  e.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: t.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: W.value,
                onKeyup: kt(ie, ["stop"]),
                onKeydown: u[1] || (u[1] = kt(() => {
                }, ["stop"]))
              }), null, 16, na), [
                [_n, w.value]
              ]),
              D("div", oa, [
                D("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: Ne([
                    t.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: u[2] || (u[2] = (i) => {
                    var x;
                    return t.disabled ? !1 : w.value ? te() : (x = F.value) == null ? void 0 : x.focus();
                  })
                }, [
                  jt(d.$slots, "inputIcon", { value: w.value }, () => [
                    (Z(), J("svg", sa, [
                      w.value ? (Z(), J("path", ra)) : (Z(), J("path", la))
                    ]))
                  ])
                ], 10, aa)
              ])
            ])
          ]),
          _: 3
        }),
        fe(Yt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Fe(() => [
            t.disabled ? $e("", !0) : (Z(), Ge(le(no), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Fe(({ close: i }) => [
                D("div", {
                  class: Ne(["absolute z-50 top-full sm:mt-2.5", yn(v)])
                }, [
                  D("div", {
                    ref_key: "VtdRef",
                    ref: L,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    D("div", {
                      class: Ne(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 lg:p-6 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", vt(v)])
                    }, [
                      D("div", {
                        onClick: (x) => i(),
                        class: "text-vtd-orange absolute cursor-pointer top-3 right-3"
                      }, [...u[9] || (u[9] = [
                        D("svg", {
                          class: "w-5 h-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          D("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M6 6l12 12M18 6l-12 12"
                          })
                        ], -1)
                      ])], 8, ua),
                      D("div", ia, [
                        t.shortcuts ? (Z(), Ge(Ot, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": R(),
                          "as-single": t.asSingle,
                          i18n: l.value,
                          close: i
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : $e("", !0),
                        D("div", da, [
                          D("div", ca, [
                            fe(Tt, {
                              panel: h.previous,
                              calendar: O.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            D("div", ma, [
                              he(fe(At, {
                                months: $.value,
                                onUpdateMonth: O.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [Oe, h.previous.month]
                              ]),
                              he(fe(Ct, {
                                years: O.value.previous.years(),
                                onUpdateYear: O.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [Oe, h.previous.year]
                              ]),
                              he(D("div", null, [
                                fe(Vt, { weeks: M.value }, null, 8, ["weeks"]),
                                fe(Pt, {
                                  calendar: O.value.previous,
                                  weeks: M.value,
                                  "as-range": R(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (x) => ce(x, i)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [Oe, h.previous.calendar]
                              ])
                            ])
                          ])
                        ])
                      ]),
                      t.autoApply ? (Z(), J("div", Ma, [
                        D("div", Sa, [
                          D("div", Da, [
                            D("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (x) => i(),
                              textContent: ne(k.value)
                            }, null, 8, Ta)
                          ])
                        ])
                      ])) : (Z(), J("div", fa, [
                        D("div", pa, [
                          D("div", ha, [
                            D("label", va, [
                              he(D("input", {
                                type: "checkbox",
                                name: "morning",
                                id: "check-morning",
                                "onUpdate:modelValue": u[3] || (u[3] = (x) => m.morning = x),
                                onChange: (x) => i()
                              }, null, 40, ya), [
                                [Qe, m.morning]
                              ]),
                              D("span", null, ne(o.value.morning), 1)
                            ]),
                            D("label", ga, [
                              he(D("input", {
                                type: "checkbox",
                                name: "afternoon",
                                id: "check-afternoon",
                                "onUpdate:modelValue": u[4] || (u[4] = (x) => m.afternoon = x),
                                onChange: (x) => i()
                              }, null, 40, ba), [
                                [Qe, m.afternoon]
                              ]),
                              D("span", null, ne(o.value.afternoon), 1)
                            ]),
                            D("label", wa, [
                              he(D("input", {
                                type: "checkbox",
                                name: "evening",
                                id: "check-evening",
                                "onUpdate:modelValue": u[5] || (u[5] = (x) => m.evening = x),
                                onChange: (x) => i()
                              }, null, 40, xa), [
                                [Qe, m.evening]
                              ]),
                              D("span", null, ne(o.value.evening), 1)
                            ]),
                            D("label", ja, [
                              he(D("input", {
                                type: "checkbox",
                                name: "night",
                                id: "check-night",
                                "onUpdate:modelValue": u[6] || (u[6] = (x) => m.night = x),
                                onChange: (x) => i()
                              }, null, 40, ka), [
                                [Qe, m.night]
                              ]),
                              D("span", null, ne(o.value.night), 1)
                            ])
                          ]),
                          D("div", $a, [
                            D("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full cursor-pointer px-4 py-2 text-vtd-blue bg-white inline-flex justify-center rounded-md border border-vtd-orange text-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              onClick: (x) => C(i),
                              textContent: ne(k.value)
                            }, null, 8, _a)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
});
const vn = /* @__PURE__ */ (() => {
  const e = Na;
  return e.install = (n) => {
    n.component("VueTailwindDatepicker", e);
  }, e;
})(), Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Ra).forEach(([e, n]) => {
  e !== "default" && (vn[e] = n);
});
export {
  vn as default
};
