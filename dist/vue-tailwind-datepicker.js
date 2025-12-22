(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-300:oklch(82.8% .111 230.318);--color-sky-400:oklch(74.6% .16 232.661);--color-sky-500:oklch(68.5% .169 237.323);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-bold:700;--tracking-wide:.025em;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-vtd-primary-300:var(--color-sky-300);--color-vtd-primary-500:var(--color-sky-500);--color-vtd-primary-600:var(--color-sky-600);--color-vtd-primary-700:var(--color-sky-700);--color-vtd-secondary-50:var(--color-gray-50);--color-vtd-secondary-100:var(--color-gray-100);--color-vtd-secondary-300:var(--color-gray-300);--color-vtd-secondary-400:var(--color-gray-400);--color-vtd-secondary-500:var(--color-gray-500);--color-vtd-secondary-700:var(--color-gray-700);--color-vtd-secondary-800:var(--color-gray-800);--color-vtd-dark-blue:#1e3a8a;--color-vtd-medium-gray:#f4f1ea;--color-vtd-light-gray:#bcb9b9;--color-vtd-orange:#f70;--color-vtd-blue:#0061ff}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-3{top:calc(var(--spacing)*3)}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.right-3{right:calc(var(--spacing)*3)}.right-auto{right:auto}.-left-2{left:calc(var(--spacing)*-2)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-50{z-index:50}.order-last{order:9999}.col-span-7{grid-column:span 7/span 7}.mx-2{margin-inline:calc(var(--spacing)*2)}.my-1{margin-block:calc(var(--spacing)*1)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-5{height:calc(var(--spacing)*5)}.h-\\[2\\.25rem\\]{height:2.25rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-1\\/2{width:50%}.w-5{width:calc(var(--spacing)*5)}.w-\\[2\\.25rem\\]{width:2.25rem}.w-full{width:100%}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-2\\/4{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-3{--tw-translate-y:calc(var(--spacing)*3);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-4{gap:calc(var(--spacing)*4)}.gap-\\[6px\\]{gap:6px}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-x-reverse)))}.gap-y-0{row-gap:calc(var(--spacing)*0)}.gap-y-0\\.5{row-gap:calc(var(--spacing)*.5)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-l-md{border-top-left-radius:var(--radius-md);border-bottom-left-radius:var(--radius-md)}.rounded-r-md{border-top-right-radius:var(--radius-md);border-bottom-right-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-solid{--tw-border-style:solid;border-style:solid}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-black\\/\\[\\.1\\]{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/\\[\\.1\\]{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-transparent{border-color:#0000}.border-vtd-orange{border-color:var(--color-vtd-orange)}.border-vtd-secondary-300{border-color:var(--color-vtd-secondary-300)}.bg-black{background-color:var(--color-black)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-vtd-dark-blue{background-color:var(--color-vtd-dark-blue)}.bg-vtd-dark-blue\\/10{background-color:#1e3a8a1a}@supports (color:color-mix(in lab,red,red)){.bg-vtd-dark-blue\\/10{background-color:color-mix(in oklab,var(--color-vtd-dark-blue)10%,transparent)}}.bg-vtd-medium-gray{background-color:var(--color-vtd-medium-gray)}.bg-vtd-primary-600{background-color:var(--color-vtd-primary-600)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-10{padding:calc(var(--spacing)*10)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-0\\.5{padding-inline:calc(var(--spacing)*.5)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-12{padding-right:calc(var(--spacing)*12)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-\\[8px\\]{font-size:8px}.leading-6{--tw-leading:calc(var(--spacing)*6);line-height:calc(var(--spacing)*6)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-vtd-blue{color:var(--color-vtd-blue)}.text-vtd-dark-blue{color:var(--color-vtd-dark-blue)}.text-vtd-light-gray{color:var(--color-vtd-light-gray)}.text-vtd-orange{color:var(--color-vtd-orange)}.text-vtd-primary-600{color:var(--color-vtd-primary-600)}.text-vtd-secondary-400{color:var(--color-vtd-secondary-400)}.text-vtd-secondary-700{color:var(--color-vtd-secondary-700)}.text-white{color:var(--color-white)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.placeholder-vtd-secondary-400::placeholder{color:var(--color-vtd-secondary-400)}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow-\\[0_2px_8px_0_\\#BEBEBE26\\]{--tw-shadow:0 2px 8px 0 var(--tw-shadow-color,#bebebe26);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:bg-vtd-medium-gray:hover{background-color:var(--color-vtd-medium-gray)}.hover\\:bg-vtd-primary-700:hover{background-color:var(--color-vtd-primary-700)}.hover\\:bg-vtd-secondary-50:hover{background-color:var(--color-vtd-secondary-50)}.hover\\:bg-vtd-secondary-100:hover{background-color:var(--color-vtd-secondary-100)}.hover\\:text-vtd-blue:hover{color:var(--color-vtd-blue)}.hover\\:text-vtd-primary-700:hover{color:var(--color-vtd-primary-700)}}.focus\\:border-vtd-primary-300:focus{border-color:var(--color-vtd-primary-300)}.focus\\:bg-vtd-medium-gray:focus{background-color:var(--color-vtd-medium-gray)}.focus\\:text-vtd-primary-600:focus{color:var(--color-vtd-primary-600)}.focus\\:ring:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-3:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:#ff77001a}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:color-mix(in oklab,var(--color-vtd-orange)10%,transparent)}}.focus\\:ring-vtd-primary-500:focus{--tw-ring-color:var(--color-vtd-primary-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:text-vtd-light-gray:disabled{color:var(--color-vtd-light-gray)}@media (min-width:40rem){.sm\\:relative{position:relative}.sm\\:static{position:static}.sm\\:z-auto{z-index:auto}.sm\\:order-0{order:0}.sm\\:mx-1{margin-inline:calc(var(--spacing)*1)}.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:mt-1{margin-top:calc(var(--spacing)*1)}.sm\\:mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.sm\\:mr-2{margin-right:calc(var(--spacing)*2)}.sm\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.sm\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.sm\\:mb-1\\.5{margin-bottom:calc(var(--spacing)*1.5)}.sm\\:ml-2{margin-left:calc(var(--spacing)*2)}.sm\\:ml-3{margin-left:calc(var(--spacing)*3)}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:w-auto{width:auto}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:flex-nowrap{flex-wrap:nowrap}.sm\\:overflow-visible{overflow:visible}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:border{border-style:var(--tw-border-style);border-width:1px}.sm\\:border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.sm\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.sm\\:px-2{padding-inline:calc(var(--spacing)*2)}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:py-4{padding-block:calc(var(--spacing)*4)}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.sm\\:shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media (min-width:48rem){.md\\:w-1\\/2{width:50%}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:64rem){.lg\\:mx-0{margin-inline:calc(var(--spacing)*0)}.lg\\:mr-1{margin-right:calc(var(--spacing)*1)}.lg\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:w-80{width:calc(var(--spacing)*80)}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.lg\\:border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.lg\\:p-6{padding:calc(var(--spacing)*6)}.lg\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}@media (prefers-color-scheme:dark){.dark\\:border-vtd-secondary-700,.dark\\:border-vtd-secondary-700\\/\\[1\\]{border-color:var(--color-vtd-secondary-700)}.dark\\:bg-vtd-secondary-800{background-color:var(--color-vtd-secondary-800)}.dark\\:text-vtd-secondary-100{color:var(--color-vtd-secondary-100)}.dark\\:placeholder-vtd-secondary-500::placeholder{color:var(--color-vtd-secondary-500)}.dark\\:ring-offset-vtd-secondary-800{--tw-ring-offset-color:var(--color-vtd-secondary-800)}.dark\\:focus\\:border-vtd-primary-500:focus{border-color:var(--color-vtd-primary-500)}}}.vtd-datepicker-overlay.open:before{opacity:.5;display:block}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}')),document.head.appendChild(r)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as wt from "vue";
import { watchEffect as ke, ref as X, computed as ie, onMounted as ut, cloneVNode as co, h as pe, Fragment as xe, defineComponent as de, inject as De, provide as se, getCurrentInstance as mo, watch as Ze, onUnmounted as st, Teleport as fo, reactive as pt, shallowRef as po, openBlock as Z, createElementBlock as q, createElementVNode as D, withDirectives as re, vShow as fe, toDisplayString as le, renderList as Xe, withModifiers as _e, unref as ue, createCommentVNode as ve, createVNode as oe, TransitionGroup as vo, withCtx as Re, normalizeClass as Pe, Transition as Tt, nextTick as Ke, isProxy as ho, createBlock as Ge, renderSlot as jt, mergeProps as yo, vModelText as bo, vModelCheckbox as Qe } from "vue";
var kt;
let go = Symbol("headlessui.useid"), xo = 0;
const Ie = (kt = wt.useId) != null ? kt : function() {
  return wt.inject(go, () => `${++xo}`)();
};
function H(e) {
  var a;
  if (e == null || e.value == null)
    return null;
  let l = (a = e.value.$el) != null ? a : e.value;
  return l instanceof Node ? l : null;
}
function Te(e, a, ...l) {
  if (e in a) {
    let u = a[e];
    return typeof u == "function" ? u(...l) : u;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map((u) => `"${u}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, Te), t;
}
var wo = Object.defineProperty, jo = (e, a, l) => a in e ? wo(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l, $t = (e, a, l) => (jo(e, typeof a != "symbol" ? a + "" : a, l), l);
let ko = class {
  constructor() {
    $t(this, "current", this.detect()), $t(this, "currentId", 0);
  }
  set(a) {
    this.current !== a && (this.currentId = 0, this.current = a);
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
}, it = new ko();
function Ae(e) {
  if (it.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let a = H(e);
    if (a)
      return a.ownerDocument;
  }
  return document;
}
let vt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Me = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Me || {}), lt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(lt || {}), $o = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))($o || {});
function dt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(vt)).sort((a, l) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var bt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(bt || {});
function Vt(e, a = 0) {
  var l;
  return e === ((l = Ae(e)) == null ? void 0 : l.body) ? !1 : Te(a, { 0() {
    return e.matches(vt);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(vt))
        return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
var _o = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(_o || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let Mo = ["textarea", "input"].join(",");
function So(e) {
  var a, l;
  return (l = (a = e == null ? void 0 : e.matches) == null ? void 0 : a.call(e, Mo)) != null ? l : !1;
}
function Do(e, a = (l) => l) {
  return e.slice().sort((l, t) => {
    let u = a(l), m = a(t);
    if (u === null || m === null)
      return 0;
    let i = u.compareDocumentPosition(m);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ee(e, a, { sorted: l = !0, relativeTo: t = null, skipElements: u = [] } = {}) {
  var m;
  let i = (m = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? m : document, o = Array.isArray(e) ? l ? Do(e) : e : dt(e);
  u.length > 0 && o.length > 1 && (o = o.filter((N) => !u.includes(N))), t = t ?? i.activeElement;
  let k = (() => {
    if (a & 5)
      return 1;
    if (a & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), y = (() => {
    if (a & 1)
      return 0;
    if (a & 2)
      return Math.max(0, o.indexOf(t)) - 1;
    if (a & 4)
      return Math.max(0, o.indexOf(t)) + 1;
    if (a & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), b = a & 32 ? { preventScroll: !0 } : {}, v = 0, w = o.length, O;
  do {
    if (v >= w || v + w <= 0)
      return 0;
    let N = y + v;
    if (a & 16)
      N = (N + w) % w;
    else {
      if (N < 0)
        return 3;
      if (N >= w)
        return 1;
    }
    O = o[N], O == null || O.focus(b), v += k;
  } while (O !== i.activeElement);
  return a & 6 && So(O) && O.select(), 2;
}
function To() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Vo() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Oo() {
  return To() || Vo();
}
function et(e, a, l) {
  it.isServer || ke((t) => {
    document.addEventListener(e, a, l), t(() => document.removeEventListener(e, a, l));
  });
}
function Ot(e, a, l) {
  it.isServer || ke((t) => {
    window.addEventListener(e, a, l), t(() => window.removeEventListener(e, a, l));
  });
}
function Po(e, a, l = ie(() => !0)) {
  function t(m, i) {
    if (!l.value || m.defaultPrevented)
      return;
    let o = i(m);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let k = function y(b) {
      return typeof b == "function" ? y(b()) : Array.isArray(b) || b instanceof Set ? b : [b];
    }(e);
    for (let y of k) {
      if (y === null)
        continue;
      let b = y instanceof HTMLElement ? y : H(y);
      if (b != null && b.contains(o) || m.composed && m.composedPath().includes(b))
        return;
    }
    return !Vt(o, bt.Loose) && o.tabIndex !== -1 && m.preventDefault(), a(m, o);
  }
  let u = X(null);
  et("pointerdown", (m) => {
    var i, o;
    l.value && (u.value = ((o = (i = m.composedPath) == null ? void 0 : i.call(m)) == null ? void 0 : o[0]) || m.target);
  }, !0), et("mousedown", (m) => {
    var i, o;
    l.value && (u.value = ((o = (i = m.composedPath) == null ? void 0 : i.call(m)) == null ? void 0 : o[0]) || m.target);
  }, !0), et("click", (m) => {
    Oo() || u.value && (t(m, () => u.value), u.value = null);
  }, !0), et("touchend", (m) => t(m, () => m.target instanceof HTMLElement ? m.target : null), !0), Ot("blur", (m) => t(m, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function _t(e, a) {
  if (e)
    return e;
  let l = a ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Ao(e, a) {
  let l = X(_t(e.value.type, e.value.as));
  return ut(() => {
    l.value = _t(e.value.type, e.value.as);
  }), ke(() => {
    var t;
    l.value || H(a) && H(a) instanceof HTMLButtonElement && !((t = H(a)) != null && t.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var qe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qe || {}), Co = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Co || {});
function Ve({ visible: e = !0, features: a = 0, ourProps: l, theirProps: t, ...u }) {
  var m;
  let i = At(t, l), o = Object.assign(u, { props: i });
  if (e || a & 2 && i.static)
    return ft(o);
  if (a & 1) {
    let k = (m = i.unmount) == null || m ? 0 : 1;
    return Te(k, { 0() {
      return null;
    }, 1() {
      return ft({ ...u, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ft(o);
}
function ft({ props: e, attrs: a, slots: l, slot: t, name: u }) {
  var m, i;
  let { as: o, ...k } = Yo(e, ["unmount", "static"]), y = (m = l.default) == null ? void 0 : m.call(l, t), b = {};
  if (t) {
    let v = !1, w = [];
    for (let [O, N] of Object.entries(t))
      typeof N == "boolean" && (v = !0), N === !0 && w.push(O);
    v && (b["data-headlessui-state"] = w.join(" "));
  }
  if (o === "template") {
    if (y = Pt(y ?? []), Object.keys(k).length > 0 || Object.keys(a).length > 0) {
      let [v, ...w] = y ?? [];
      if (!Eo(v) || w.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${u} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(k).concat(Object.keys(a)).map((L) => L.trim()).filter((L, V, E) => E.indexOf(L) === V).sort((L, V) => L.localeCompare(V)).map((L) => `  - ${L}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((L) => `  - ${L}`).join(`
`)].join(`
`));
      let O = At((i = v.props) != null ? i : {}, k, b), N = co(v, O, !0);
      for (let L in O)
        L.startsWith("on") && (N.props || (N.props = {}), N.props[L] = O[L]);
      return N;
    }
    return Array.isArray(y) && y.length === 1 ? y[0] : y;
  }
  return pe(o, Object.assign({}, k, b), { default: () => y });
}
function Pt(e) {
  return e.flatMap((a) => a.type === xe ? Pt(a.children) : [a]);
}
function At(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let a = {}, l = {};
  for (let t of e)
    for (let u in t)
      u.startsWith("on") && typeof t[u] == "function" ? (l[u] != null || (l[u] = []), l[u].push(t[u])) : a[u] = t[u];
  if (a.disabled || a["aria-disabled"])
    return Object.assign(a, Object.fromEntries(Object.keys(l).map((t) => [t, void 0])));
  for (let t in l)
    Object.assign(a, { [t](u, ...m) {
      let i = l[t];
      for (let o of i) {
        if (u instanceof Event && u.defaultPrevented)
          return;
        o(u, ...m);
      }
    } });
  return a;
}
function Yo(e, a = []) {
  let l = Object.assign({}, e);
  for (let t of a)
    t in l && delete l[t];
  return l;
}
function Eo(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var He = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(He || {});
let Je = de({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: a, attrs: l }) {
  return () => {
    var t;
    let { features: u, ...m } = e, i = { "aria-hidden": (u & 2) === 2 ? !0 : (t = m["aria-hidden"]) != null ? t : void 0, hidden: (u & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(u & 4) === 4 && (u & 2) !== 2 && { display: "none" } } };
    return Ve({ ourProps: i, theirProps: m, slot: {}, attrs: l, slots: a, name: "Hidden" });
  };
} }), Ct = Symbol("Context");
var Fe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Fe || {});
function Yt() {
  return De(Ct, null);
}
function Fo(e) {
  se(Ct, e);
}
var Oe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Oe || {});
function Bo(e, a, l, t) {
  it.isServer || ke((u) => {
    e = e ?? window, e.addEventListener(a, l, t), u(() => e.removeEventListener(a, l, t));
  });
}
var Se = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Se || {});
function Et() {
  let e = X(0);
  return Ot("keydown", (a) => {
    a.key === "Tab" && (e.value = a.shiftKey ? 1 : 0);
  }), e;
}
function Lo({ defaultContainers: e = [], portals: a, mainTreeNodeRef: l } = {}) {
  let t = X(null), u = Ae(t);
  function m() {
    var i, o, k;
    let y = [];
    for (let b of e)
      b !== null && (b instanceof HTMLElement ? y.push(b) : "value" in b && b.value instanceof HTMLElement && y.push(b.value));
    if (a != null && a.value)
      for (let b of a.value)
        y.push(b);
    for (let b of (i = u == null ? void 0 : u.querySelectorAll("html > *, body > *")) != null ? i : [])
      b !== document.body && b !== document.head && b instanceof HTMLElement && b.id !== "headlessui-portal-root" && (b.contains(H(t)) || b.contains((k = (o = H(t)) == null ? void 0 : o.getRootNode()) == null ? void 0 : k.host) || y.some((v) => b.contains(v)) || y.push(b));
    return y;
  }
  return { resolveContainers: m, contains(i) {
    return m().some((o) => o.contains(i));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return l != null ? null : pe(Je, { features: He.Hidden, ref: t });
  } };
}
function No() {
  let e = X(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return pe(Je, { features: He.Hidden, ref: e });
  } };
}
let Ft = Symbol("ForcePortalRootContext");
function Ro() {
  return De(Ft, !1);
}
de({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: a, attrs: l }) {
  return se(Ft, e.force), () => {
    let { force: t, ...u } = e;
    return Ve({ theirProps: u, ourProps: {}, slot: {}, slots: a, attrs: l, name: "ForcePortalRoot" });
  };
} });
function Io(e) {
  let a = Ae(e);
  if (!a) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let l = a.getElementById("headlessui-portal-root");
  if (l)
    return l;
  let t = a.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), a.body.appendChild(t);
}
const ht = /* @__PURE__ */ new WeakMap();
function Ho(e) {
  var a;
  return (a = ht.get(e)) != null ? a : 0;
}
function Mt(e, a) {
  let l = a(Ho(e));
  return l <= 0 ? ht.delete(e) : ht.set(e, l), l;
}
de({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: a, attrs: l }) {
  let t = X(null), u = ie(() => Ae(t)), m = Ro(), i = De(Bt, null), o = X(m === !0 || i == null ? Io(t.value) : i.resolveTarget());
  o.value && Mt(o.value, (w) => w + 1);
  let k = X(!1);
  ut(() => {
    k.value = !0;
  }), ke(() => {
    m || i != null && (o.value = i.resolveTarget());
  });
  let y = De(yt, null), b = !1, v = mo();
  return Ze(t, () => {
    if (b || !y)
      return;
    let w = H(t);
    w && (st(y.register(w), v), b = !0);
  }), st(() => {
    var w, O;
    let N = (w = u.value) == null ? void 0 : w.getElementById("headlessui-portal-root");
    !N || o.value !== N || Mt(o.value, (L) => L - 1) || o.value.children.length > 0 || (O = o.value.parentElement) == null || O.removeChild(o.value);
  }), () => {
    if (!k.value || o.value === null)
      return null;
    let w = { ref: t, "data-headlessui-portal": "" };
    return pe(fo, { to: o.value }, Ve({ ourProps: w, theirProps: e, slot: {}, attrs: l, slots: a, name: "Portal" }));
  };
} });
let yt = Symbol("PortalParentContext");
function Uo() {
  let e = De(yt, null), a = X([]);
  function l(m) {
    return a.value.push(m), e && e.register(m), () => t(m);
  }
  function t(m) {
    let i = a.value.indexOf(m);
    i !== -1 && a.value.splice(i, 1), e && e.unregister(m);
  }
  let u = { register: l, unregister: t, portals: a };
  return [a, de({ name: "PortalWrapper", setup(m, { slots: i }) {
    return se(yt, u), () => {
      var o;
      return (o = i.default) == null ? void 0 : o.call(i);
    };
  } })];
}
let Bt = Symbol("PortalGroupContext");
de({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: a, slots: l }) {
  let t = pt({ resolveTarget() {
    return e.target;
  } });
  return se(Bt, t), () => {
    let { target: u, ...m } = e;
    return Ve({ theirProps: m, ourProps: {}, slot: {}, attrs: a, slots: l, name: "PortalGroup" });
  };
} });
var Wo = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Wo || {});
let Lt = Symbol("PopoverContext");
function ct(e) {
  let a = De(Lt, null);
  if (a === null) {
    let l = new Error(`<${e} /> is missing a parent <${Ht.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, ct), l;
  }
  return a;
}
let Nt = Symbol("PopoverGroupContext");
function Rt() {
  return De(Nt, null);
}
let It = Symbol("PopoverPanelContext");
function zo() {
  return De(It, null);
}
let Ht = de({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: a, attrs: l, expose: t }) {
  var u;
  let m = X(null);
  t({ el: m, $el: m });
  let i = X(1), o = X(null), k = X(null), y = X(null), b = X(null), v = ie(() => Ae(m)), w = ie(() => {
    var h, _;
    if (!H(o) || !H(b))
      return !1;
    for (let G of document.querySelectorAll("body > *"))
      if (Number(G == null ? void 0 : G.contains(H(o))) ^ Number(G == null ? void 0 : G.contains(H(b))))
        return !0;
    let j = dt(), r = j.indexOf(H(o)), n = (r + j.length - 1) % j.length, B = (r + 1) % j.length, A = j[n], z = j[B];
    return !((h = H(b)) != null && h.contains(A)) && !((_ = H(b)) != null && _.contains(z));
  }), O = { popoverState: i, buttonId: X(null), panelId: X(null), panel: b, button: o, isPortalled: w, beforePanelSentinel: k, afterPanelSentinel: y, togglePopover() {
    i.value = Te(i.value, { 0: 1, 1: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(h) {
    O.closePopover();
    let _ = (() => h ? h instanceof HTMLElement ? h : h.value instanceof HTMLElement ? H(h) : H(O.button) : H(O.button))();
    _ == null || _.focus();
  } };
  se(Lt, O), Fo(ie(() => Te(i.value, { 0: Fe.Open, 1: Fe.Closed })));
  let N = { buttonId: O.buttonId, panelId: O.panelId, close() {
    O.closePopover();
  } }, L = Rt(), V = L == null ? void 0 : L.registerPopover, [E, F] = Uo(), $ = Lo({ mainTreeNodeRef: L == null ? void 0 : L.mainTreeNodeRef, portals: E, defaultContainers: [o, b] });
  function P() {
    var h, _, j, r;
    return (r = L == null ? void 0 : L.isFocusWithinPopoverGroup()) != null ? r : ((h = v.value) == null ? void 0 : h.activeElement) && (((_ = H(o)) == null ? void 0 : _.contains(v.value.activeElement)) || ((j = H(b)) == null ? void 0 : j.contains(v.value.activeElement)));
  }
  return ke(() => V == null ? void 0 : V(N)), Bo((u = v.value) == null ? void 0 : u.defaultView, "focus", (h) => {
    var _, j;
    h.target !== window && h.target instanceof HTMLElement && i.value === 0 && (P() || o && b && ($.contains(h.target) || (_ = H(O.beforePanelSentinel)) != null && _.contains(h.target) || (j = H(O.afterPanelSentinel)) != null && j.contains(h.target) || O.closePopover()));
  }, !0), Po($.resolveContainers, (h, _) => {
    var j;
    O.closePopover(), Vt(_, bt.Loose) || (h.preventDefault(), (j = H(o)) == null || j.focus());
  }, ie(() => i.value === 0)), () => {
    let h = { open: i.value === 0, close: O.close };
    return pe(xe, [pe(F, {}, () => Ve({ theirProps: { ...e, ...l }, ourProps: { ref: m }, slot: h, slots: a, attrs: l, name: "Popover" })), pe($.MainTreeNode)]);
  };
} }), Ko = de({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: a, slots: l, expose: t }) {
  var u;
  let m = (u = e.id) != null ? u : `headlessui-popover-button-${Ie()}`, i = ct("PopoverButton"), o = ie(() => Ae(i.button));
  t({ el: i.button, $el: i.button }), ut(() => {
    i.buttonId.value = m;
  }), st(() => {
    i.buttonId.value = null;
  });
  let k = Rt(), y = k == null ? void 0 : k.closeOthers, b = zo(), v = ie(() => b === null ? !1 : b.value === i.panelId.value), w = X(null), O = `headlessui-focus-sentinel-${Ie()}`;
  v.value || ke(() => {
    i.button.value = H(w);
  });
  let N = Ao(ie(() => ({ as: e.as, type: a.type })), w);
  function L(h) {
    var _, j, r, n, B;
    if (v.value) {
      if (i.popoverState.value === 1)
        return;
      switch (h.key) {
        case Oe.Space:
        case Oe.Enter:
          h.preventDefault(), (j = (_ = h.target).click) == null || j.call(_), i.closePopover(), (r = H(i.button)) == null || r.focus();
          break;
      }
    } else
      switch (h.key) {
        case Oe.Space:
        case Oe.Enter:
          h.preventDefault(), h.stopPropagation(), i.popoverState.value === 1 && (y == null || y(i.buttonId.value)), i.togglePopover();
          break;
        case Oe.Escape:
          if (i.popoverState.value !== 0)
            return y == null ? void 0 : y(i.buttonId.value);
          if (!H(i.button) || (n = o.value) != null && n.activeElement && !((B = H(i.button)) != null && B.contains(o.value.activeElement)))
            return;
          h.preventDefault(), h.stopPropagation(), i.closePopover();
          break;
      }
  }
  function V(h) {
    v.value || h.key === Oe.Space && h.preventDefault();
  }
  function E(h) {
    var _, j;
    e.disabled || (v.value ? (i.closePopover(), (_ = H(i.button)) == null || _.focus()) : (h.preventDefault(), h.stopPropagation(), i.popoverState.value === 1 && (y == null || y(i.buttonId.value)), i.togglePopover(), (j = H(i.button)) == null || j.focus()));
  }
  function F(h) {
    h.preventDefault(), h.stopPropagation();
  }
  let $ = Et();
  function P() {
    let h = H(i.panel);
    if (!h)
      return;
    function _() {
      Te($.value, { [Se.Forwards]: () => Ee(h, Me.First), [Se.Backwards]: () => Ee(h, Me.Last) }) === lt.Error && Ee(dt().filter((j) => j.dataset.headlessuiFocusGuard !== "true"), Te($.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(i.button) });
    }
    _();
  }
  return () => {
    let h = i.popoverState.value === 0, _ = { open: h }, { ...j } = e, r = v.value ? { ref: w, type: N.value, onKeydown: L, onClick: E } : { ref: w, id: m, type: N.value, "aria-expanded": i.popoverState.value === 0, "aria-controls": H(i.panel) ? i.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: L, onKeyup: V, onClick: E, onMousedown: F };
    return pe(xe, [Ve({ ourProps: r, theirProps: { ...a, ...j }, slot: _, attrs: a, slots: l, name: "PopoverButton" }), h && !v.value && i.isPortalled.value && pe(Je, { id: O, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: P })]);
  };
} }), Go = de({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: a, slots: l }) {
  let t = ct("PopoverOverlay"), u = `headlessui-popover-overlay-${Ie()}`, m = Yt(), i = ie(() => m !== null ? (m.value & Fe.Open) === Fe.Open : t.popoverState.value === 0);
  function o() {
    t.closePopover();
  }
  return () => {
    let k = { open: t.popoverState.value === 0 };
    return Ve({ ourProps: { id: u, "aria-hidden": !0, onClick: o }, theirProps: e, slot: k, attrs: a, slots: l, features: qe.RenderStrategy | qe.Static, visible: i.value, name: "PopoverOverlay" });
  };
} }), Zo = de({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: a, slots: l, expose: t }) {
  var u;
  let m = (u = e.id) != null ? u : `headlessui-popover-panel-${Ie()}`, { focus: i } = e, o = ct("PopoverPanel"), k = ie(() => Ae(o.panel)), y = `headlessui-focus-sentinel-before-${Ie()}`, b = `headlessui-focus-sentinel-after-${Ie()}`;
  t({ el: o.panel, $el: o.panel }), ut(() => {
    o.panelId.value = m;
  }), st(() => {
    o.panelId.value = null;
  }), se(It, o.panelId), ke(() => {
    var F, $;
    if (!i || o.popoverState.value !== 0 || !o.panel)
      return;
    let P = (F = k.value) == null ? void 0 : F.activeElement;
    ($ = H(o.panel)) != null && $.contains(P) || Ee(H(o.panel), Me.First);
  });
  let v = Yt(), w = ie(() => v !== null ? (v.value & Fe.Open) === Fe.Open : o.popoverState.value === 0);
  function O(F) {
    var $, P;
    switch (F.key) {
      case Oe.Escape:
        if (o.popoverState.value !== 0 || !H(o.panel) || k.value && !(($ = H(o.panel)) != null && $.contains(k.value.activeElement)))
          return;
        F.preventDefault(), F.stopPropagation(), o.closePopover(), (P = H(o.button)) == null || P.focus();
        break;
    }
  }
  function N(F) {
    var $, P, h, _, j;
    let r = F.relatedTarget;
    r && H(o.panel) && (($ = H(o.panel)) != null && $.contains(r) || (o.closePopover(), ((h = (P = H(o.beforePanelSentinel)) == null ? void 0 : P.contains) != null && h.call(P, r) || (j = (_ = H(o.afterPanelSentinel)) == null ? void 0 : _.contains) != null && j.call(_, r)) && r.focus({ preventScroll: !0 })));
  }
  let L = Et();
  function V() {
    let F = H(o.panel);
    if (!F)
      return;
    function $() {
      Te(L.value, { [Se.Forwards]: () => {
        var P;
        Ee(F, Me.First) === lt.Error && ((P = H(o.afterPanelSentinel)) == null || P.focus());
      }, [Se.Backwards]: () => {
        var P;
        (P = H(o.button)) == null || P.focus({ preventScroll: !0 });
      } });
    }
    $();
  }
  function E() {
    let F = H(o.panel);
    if (!F)
      return;
    function $() {
      Te(L.value, { [Se.Forwards]: () => {
        let P = H(o.button), h = H(o.panel);
        if (!P)
          return;
        let _ = dt(), j = _.indexOf(P), r = _.slice(0, j + 1), n = [..._.slice(j + 1), ...r];
        for (let B of n.slice())
          if (B.dataset.headlessuiFocusGuard === "true" || h != null && h.contains(B)) {
            let A = n.indexOf(B);
            A !== -1 && n.splice(A, 1);
          }
        Ee(n, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var P;
        Ee(F, Me.Previous) === lt.Error && ((P = H(o.button)) == null || P.focus());
      } });
    }
    $();
  }
  return () => {
    let F = { open: o.popoverState.value === 0, close: o.close }, { focus: $, ...P } = e, h = { ref: o.panel, id: m, onKeydown: O, onFocusout: i && o.popoverState.value === 0 ? N : void 0, tabIndex: -1 };
    return Ve({ ourProps: h, theirProps: { ...a, ...P }, attrs: a, slot: F, slots: { ...l, default: (..._) => {
      var j;
      return [pe(xe, [w.value && o.isPortalled.value && pe(Je, { id: y, ref: o.beforePanelSentinel, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: V }), (j = l.default) == null ? void 0 : j.call(l, ..._), w.value && o.isPortalled.value && pe(Je, { id: b, ref: o.afterPanelSentinel, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: E })])];
    } }, features: qe.RenderStrategy | qe.Static, visible: w.value, name: "PopoverPanel" });
  };
} });
de({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: a, slots: l, expose: t }) {
  let u = X(null), m = po([]), i = ie(() => Ae(u)), o = No();
  t({ el: u, $el: u });
  function k(w) {
    let O = m.value.indexOf(w);
    O !== -1 && m.value.splice(O, 1);
  }
  function y(w) {
    return m.value.push(w), () => {
      k(w);
    };
  }
  function b() {
    var w;
    let O = i.value;
    if (!O)
      return !1;
    let N = O.activeElement;
    return (w = H(u)) != null && w.contains(N) ? !0 : m.value.some((L) => {
      var V, E;
      return ((V = O.getElementById(L.buttonId.value)) == null ? void 0 : V.contains(N)) || ((E = O.getElementById(L.panelId.value)) == null ? void 0 : E.contains(N));
    });
  }
  function v(w) {
    for (let O of m.value)
      O.buttonId.value !== w && O.close();
  }
  return se(Nt, { registerPopover: y, unregisterPopover: k, isFocusWithinPopoverGroup: b, closeOthers: v, mainTreeNodeRef: o.mainTreeNodeRef }), () => pe(xe, [Ve({ ourProps: { ref: u }, theirProps: { ...e, ...a }, slot: {}, attrs: a, slots: l, name: "PopoverGroup" }), pe(o.MainTreeNode)]);
} });
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ut = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    var l = 1e3, t = 6e4, u = 36e5, m = "millisecond", i = "second", o = "minute", k = "hour", y = "day", b = "week", v = "month", w = "quarter", O = "year", N = "date", L = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, F = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(M) {
      var T = ["th", "st", "nd", "rd"], S = M % 100;
      return "[" + M + (T[(S - 20) % 10] || T[S] || T[0]) + "]";
    } }, $ = function(M, T, S) {
      var Y = String(M);
      return !Y || Y.length >= T ? M : "" + Array(T + 1 - Y.length).join(S) + M;
    }, P = { s: $, z: function(M) {
      var T = -M.utcOffset(), S = Math.abs(T), Y = Math.floor(S / 60), g = S % 60;
      return (T <= 0 ? "+" : "-") + $(Y, 2, "0") + ":" + $(g, 2, "0");
    }, m: function M(T, S) {
      if (T.date() < S.date())
        return -M(S, T);
      var Y = 12 * (S.year() - T.year()) + (S.month() - T.month()), g = T.clone().add(Y, v), R = S - g < 0, I = T.clone().add(Y + (R ? -1 : 1), v);
      return +(-(Y + (S - g) / (R ? g - I : I - g)) || 0);
    }, a: function(M) {
      return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
    }, p: function(M) {
      return { M: v, y: O, w: b, d: y, D: N, h: k, m: o, s: i, ms: m, Q: w }[M] || String(M || "").toLowerCase().replace(/s$/, "");
    }, u: function(M) {
      return M === void 0;
    } }, h = "en", _ = {};
    _[h] = F;
    var j = "$isDayjsObject", r = function(M) {
      return M instanceof z || !(!M || !M[j]);
    }, n = function M(T, S, Y) {
      var g;
      if (!T)
        return h;
      if (typeof T == "string") {
        var R = T.toLowerCase();
        _[R] && (g = R), S && (_[R] = S, g = R);
        var I = T.split("-");
        if (!g && I.length > 1)
          return M(I[0]);
      } else {
        var U = T.name;
        _[U] = T, g = U;
      }
      return !Y && g && (h = g), g || !Y && h;
    }, B = function(M, T) {
      if (r(M))
        return M.clone();
      var S = typeof T == "object" ? T : {};
      return S.date = M, S.args = arguments, new z(S);
    }, A = P;
    A.l = n, A.i = r, A.w = function(M, T) {
      return B(M, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var z = function() {
      function M(S) {
        this.$L = n(S.locale, null, !0), this.parse(S), this.$x = this.$x || S.x || {}, this[j] = !0;
      }
      var T = M.prototype;
      return T.parse = function(S) {
        this.$d = function(Y) {
          var g = Y.date, R = Y.utc;
          if (g === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(g))
            return /* @__PURE__ */ new Date();
          if (g instanceof Date)
            return new Date(g);
          if (typeof g == "string" && !/Z$/i.test(g)) {
            var I = g.match(V);
            if (I) {
              var U = I[2] - 1 || 0, Q = (I[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(I[1], U, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, Q)) : new Date(I[1], U, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, Q);
            }
          }
          return new Date(g);
        }(S), this.init();
      }, T.init = function() {
        var S = this.$d;
        this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
      }, T.$utils = function() {
        return A;
      }, T.isValid = function() {
        return this.$d.toString() !== L;
      }, T.isSame = function(S, Y) {
        var g = B(S);
        return this.startOf(Y) <= g && g <= this.endOf(Y);
      }, T.isAfter = function(S, Y) {
        return B(S) < this.startOf(Y);
      }, T.isBefore = function(S, Y) {
        return this.endOf(Y) < B(S);
      }, T.$g = function(S, Y, g) {
        return A.u(S) ? this[Y] : this.set(g, S);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(S, Y) {
        var g = this, R = !!A.u(Y) || Y, I = A.p(S), U = function(he, te) {
          var me = A.w(g.$u ? Date.UTC(g.$y, te, he) : new Date(g.$y, te, he), g);
          return R ? me : me.endOf(y);
        }, Q = function(he, te) {
          return A.w(g.toDate()[he].apply(g.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), g);
        }, J = this.$W, ne = this.$M, ce = this.$D, we = "set" + (this.$u ? "UTC" : "");
        switch (I) {
          case O:
            return R ? U(1, 0) : U(31, 11);
          case v:
            return R ? U(1, ne) : U(0, ne + 1);
          case b:
            var ye = this.$locale().weekStart || 0, $e = (J < ye ? J + 7 : J) - ye;
            return U(R ? ce - $e : ce + (6 - $e), ne);
          case y:
          case N:
            return Q(we + "Hours", 0);
          case k:
            return Q(we + "Minutes", 1);
          case o:
            return Q(we + "Seconds", 2);
          case i:
            return Q(we + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, T.endOf = function(S) {
        return this.startOf(S, !1);
      }, T.$set = function(S, Y) {
        var g, R = A.p(S), I = "set" + (this.$u ? "UTC" : ""), U = (g = {}, g[y] = I + "Date", g[N] = I + "Date", g[v] = I + "Month", g[O] = I + "FullYear", g[k] = I + "Hours", g[o] = I + "Minutes", g[i] = I + "Seconds", g[m] = I + "Milliseconds", g)[R], Q = R === y ? this.$D + (Y - this.$W) : Y;
        if (R === v || R === O) {
          var J = this.clone().set(N, 1);
          J.$d[U](Q), J.init(), this.$d = J.set(N, Math.min(this.$D, J.daysInMonth())).$d;
        } else
          U && this.$d[U](Q);
        return this.init(), this;
      }, T.set = function(S, Y) {
        return this.clone().$set(S, Y);
      }, T.get = function(S) {
        return this[A.p(S)]();
      }, T.add = function(S, Y) {
        var g, R = this;
        S = Number(S);
        var I = A.p(Y), U = function(ne) {
          var ce = B(R);
          return A.w(ce.date(ce.date() + Math.round(ne * S)), R);
        };
        if (I === v)
          return this.set(v, this.$M + S);
        if (I === O)
          return this.set(O, this.$y + S);
        if (I === y)
          return U(1);
        if (I === b)
          return U(7);
        var Q = (g = {}, g[o] = t, g[k] = u, g[i] = l, g)[I] || 1, J = this.$d.getTime() + S * Q;
        return A.w(J, this);
      }, T.subtract = function(S, Y) {
        return this.add(-1 * S, Y);
      }, T.format = function(S) {
        var Y = this, g = this.$locale();
        if (!this.isValid())
          return g.invalidDate || L;
        var R = S || "YYYY-MM-DDTHH:mm:ssZ", I = A.z(this), U = this.$H, Q = this.$m, J = this.$M, ne = g.weekdays, ce = g.months, we = g.meridiem, ye = function(te, me, be, je) {
          return te && (te[me] || te(Y, R)) || be[me].slice(0, je);
        }, $e = function(te) {
          return A.s(U % 12 || 12, te, "0");
        }, he = we || function(te, me, be) {
          var je = te < 12 ? "AM" : "PM";
          return be ? je.toLowerCase() : je;
        };
        return R.replace(E, function(te, me) {
          return me || function(be) {
            switch (be) {
              case "YY":
                return String(Y.$y).slice(-2);
              case "YYYY":
                return A.s(Y.$y, 4, "0");
              case "M":
                return J + 1;
              case "MM":
                return A.s(J + 1, 2, "0");
              case "MMM":
                return ye(g.monthsShort, J, ce, 3);
              case "MMMM":
                return ye(ce, J);
              case "D":
                return Y.$D;
              case "DD":
                return A.s(Y.$D, 2, "0");
              case "d":
                return String(Y.$W);
              case "dd":
                return ye(g.weekdaysMin, Y.$W, ne, 2);
              case "ddd":
                return ye(g.weekdaysShort, Y.$W, ne, 3);
              case "dddd":
                return ne[Y.$W];
              case "H":
                return String(U);
              case "HH":
                return A.s(U, 2, "0");
              case "h":
                return $e(1);
              case "hh":
                return $e(2);
              case "a":
                return he(U, Q, !0);
              case "A":
                return he(U, Q, !1);
              case "m":
                return String(Q);
              case "mm":
                return A.s(Q, 2, "0");
              case "s":
                return String(Y.$s);
              case "ss":
                return A.s(Y.$s, 2, "0");
              case "SSS":
                return A.s(Y.$ms, 3, "0");
              case "Z":
                return I;
            }
            return null;
          }(te) || I.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(S, Y, g) {
        var R, I = this, U = A.p(Y), Q = B(S), J = (Q.utcOffset() - this.utcOffset()) * t, ne = this - Q, ce = function() {
          return A.m(I, Q);
        };
        switch (U) {
          case O:
            R = ce() / 12;
            break;
          case v:
            R = ce();
            break;
          case w:
            R = ce() / 3;
            break;
          case b:
            R = (ne - J) / 6048e5;
            break;
          case y:
            R = (ne - J) / 864e5;
            break;
          case k:
            R = ne / u;
            break;
          case o:
            R = ne / t;
            break;
          case i:
            R = ne / l;
            break;
          default:
            R = ne;
        }
        return g ? R : A.a(R);
      }, T.daysInMonth = function() {
        return this.endOf(v).$D;
      }, T.$locale = function() {
        return _[this.$L];
      }, T.locale = function(S, Y) {
        if (!S)
          return this.$L;
        var g = this.clone(), R = n(S, Y, !0);
        return R && (g.$L = R), g;
      }, T.clone = function() {
        return A.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, M;
    }(), G = z.prototype;
    return B.prototype = G, [["$ms", m], ["$s", i], ["$m", o], ["$H", k], ["$W", y], ["$M", v], ["$y", O], ["$D", N]].forEach(function(M) {
      G[M[1]] = function(T) {
        return this.$g(T, M[0], M[1]);
      };
    }), B.extend = function(M, T) {
      return M.$i || (M(T, z, B), M.$i = !0), B;
    }, B.locale = n, B.isDayjs = r, B.unix = function(M) {
      return B(1e3 * M);
    }, B.en = _[h], B.Ls = _, B.p = {}, B;
  });
})(Ut);
var qo = Ut.exports;
const c = /* @__PURE__ */ Ye(qo);
var Wt = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    return function(l, t, u) {
      var m = t.prototype, i = function(v) {
        return v && (v.indexOf ? v : v.s);
      }, o = function(v, w, O, N, L) {
        var V = v.name ? v : v.$locale(), E = i(V[w]), F = i(V[O]), $ = E || F.map(function(h) {
          return h.slice(0, N);
        });
        if (!L)
          return $;
        var P = V.weekStart;
        return $.map(function(h, _) {
          return $[(_ + (P || 0)) % 7];
        });
      }, k = function() {
        return u.Ls[u.locale()];
      }, y = function(v, w) {
        return v.formats[w] || function(O) {
          return O.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, L, V) {
            return L || V.slice(1);
          });
        }(v.formats[w.toUpperCase()]);
      }, b = function() {
        var v = this;
        return { months: function(w) {
          return w ? w.format("MMMM") : o(v, "months");
        }, monthsShort: function(w) {
          return w ? w.format("MMM") : o(v, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return v.$locale().weekStart || 0;
        }, weekdays: function(w) {
          return w ? w.format("dddd") : o(v, "weekdays");
        }, weekdaysMin: function(w) {
          return w ? w.format("dd") : o(v, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(w) {
          return w ? w.format("ddd") : o(v, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(w) {
          return y(v.$locale(), w);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      m.localeData = function() {
        return b.bind(this)();
      }, u.localeData = function() {
        var v = k();
        return { firstDayOfWeek: function() {
          return v.weekStart || 0;
        }, weekdays: function() {
          return u.weekdays();
        }, weekdaysShort: function() {
          return u.weekdaysShort();
        }, weekdaysMin: function() {
          return u.weekdaysMin();
        }, months: function() {
          return u.months();
        }, monthsShort: function() {
          return u.monthsShort();
        }, longDateFormat: function(w) {
          return y(v, w);
        }, meridiem: v.meridiem, ordinal: v.ordinal };
      }, u.months = function() {
        return o(k(), "months");
      }, u.monthsShort = function() {
        return o(k(), "monthsShort", "months", 3);
      }, u.weekdays = function(v) {
        return o(k(), "weekdays", null, null, v);
      }, u.weekdaysShort = function(v) {
        return o(k(), "weekdaysShort", "weekdays", 3, v);
      }, u.weekdaysMin = function(v) {
        return o(k(), "weekdaysMin", "weekdays", 2, v);
      };
    };
  });
})(Wt);
var Jo = Wt.exports;
const Xo = /* @__PURE__ */ Ye(Jo);
var zt = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    var l = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, u, m) {
      var i = u.prototype, o = i.format;
      m.en.formats = l, i.format = function(k) {
        k === void 0 && (k = "YYYY-MM-DDTHH:mm:ssZ");
        var y = this.$locale().formats, b = function(v, w) {
          return v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, N, L) {
            var V = L && L.toUpperCase();
            return N || w[L] || l[L] || w[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, F, $) {
              return F || $.slice(1);
            });
          });
        }(k, y === void 0 ? {} : y);
        return o.call(this, b);
      };
    };
  });
})(zt);
var Qo = zt.exports;
const en = /* @__PURE__ */ Ye(Qo);
var Kt = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    var l = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, u = /\d/, m = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, k = {}, y = function(V) {
      return (V = +V) + (V > 68 ? 1900 : 2e3);
    }, b = function(V) {
      return function(E) {
        this[V] = +E;
      };
    }, v = [/[+-]\d\d:?(\d\d)?|Z/, function(V) {
      (this.zone || (this.zone = {})).offset = function(E) {
        if (!E || E === "Z")
          return 0;
        var F = E.match(/([+-]|\d\d)/g), $ = 60 * F[1] + (+F[2] || 0);
        return $ === 0 ? 0 : F[0] === "+" ? -$ : $;
      }(V);
    }], w = function(V) {
      var E = k[V];
      return E && (E.indexOf ? E : E.s.concat(E.f));
    }, O = function(V, E) {
      var F, $ = k.meridiem;
      if ($) {
        for (var P = 1; P <= 24; P += 1)
          if (V.indexOf($(P, 0, E)) > -1) {
            F = P > 12;
            break;
          }
      } else
        F = V === (E ? "pm" : "PM");
      return F;
    }, N = { A: [o, function(V) {
      this.afternoon = O(V, !1);
    }], a: [o, function(V) {
      this.afternoon = O(V, !0);
    }], Q: [u, function(V) {
      this.month = 3 * (V - 1) + 1;
    }], S: [u, function(V) {
      this.milliseconds = 100 * +V;
    }], SS: [m, function(V) {
      this.milliseconds = 10 * +V;
    }], SSS: [/\d{3}/, function(V) {
      this.milliseconds = +V;
    }], s: [i, b("seconds")], ss: [i, b("seconds")], m: [i, b("minutes")], mm: [i, b("minutes")], H: [i, b("hours")], h: [i, b("hours")], HH: [i, b("hours")], hh: [i, b("hours")], D: [i, b("day")], DD: [m, b("day")], Do: [o, function(V) {
      var E = k.ordinal, F = V.match(/\d+/);
      if (this.day = F[0], E)
        for (var $ = 1; $ <= 31; $ += 1)
          E($).replace(/\[|\]/g, "") === V && (this.day = $);
    }], w: [i, b("week")], ww: [m, b("week")], M: [i, b("month")], MM: [m, b("month")], MMM: [o, function(V) {
      var E = w("months"), F = (w("monthsShort") || E.map(function($) {
        return $.slice(0, 3);
      })).indexOf(V) + 1;
      if (F < 1)
        throw new Error();
      this.month = F % 12 || F;
    }], MMMM: [o, function(V) {
      var E = w("months").indexOf(V) + 1;
      if (E < 1)
        throw new Error();
      this.month = E % 12 || E;
    }], Y: [/[+-]?\d+/, b("year")], YY: [m, function(V) {
      this.year = y(V);
    }], YYYY: [/\d{4}/, b("year")], Z: v, ZZ: v };
    function L(V) {
      var E, F;
      E = V, F = k && k.formats;
      for (var $ = (V = E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, A, z) {
        var G = z && z.toUpperCase();
        return A || F[z] || l[z] || F[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(M, T, S) {
          return T || S.slice(1);
        });
      })).match(t), P = $.length, h = 0; h < P; h += 1) {
        var _ = $[h], j = N[_], r = j && j[0], n = j && j[1];
        $[h] = n ? { regex: r, parser: n } : _.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var A = {}, z = 0, G = 0; z < P; z += 1) {
          var M = $[z];
          if (typeof M == "string")
            G += M.length;
          else {
            var T = M.regex, S = M.parser, Y = B.slice(G), g = T.exec(Y)[0];
            S.call(A, g), B = B.replace(g, "");
          }
        }
        return function(R) {
          var I = R.afternoon;
          if (I !== void 0) {
            var U = R.hours;
            I ? U < 12 && (R.hours += 12) : U === 12 && (R.hours = 0), delete R.afternoon;
          }
        }(A), A;
      };
    }
    return function(V, E, F) {
      F.p.customParseFormat = !0, V && V.parseTwoDigitYear && (y = V.parseTwoDigitYear);
      var $ = E.prototype, P = $.parse;
      $.parse = function(h) {
        var _ = h.date, j = h.utc, r = h.args;
        this.$u = j;
        var n = r[1];
        if (typeof n == "string") {
          var B = r[2] === !0, A = r[3] === !0, z = B || A, G = r[2];
          A && (G = r[2]), k = this.$locale(), !B && G && (k = F.Ls[G]), this.$d = function(Y, g, R, I) {
            try {
              if (["x", "X"].indexOf(g) > -1)
                return new Date((g === "X" ? 1e3 : 1) * Y);
              var U = L(g)(Y), Q = U.year, J = U.month, ne = U.day, ce = U.hours, we = U.minutes, ye = U.seconds, $e = U.milliseconds, he = U.zone, te = U.week, me = /* @__PURE__ */ new Date(), be = ne || (Q || J ? 1 : me.getDate()), je = Q || me.getFullYear(), Be = 0;
              Q && !J || (Be = J > 0 ? J - 1 : me.getMonth());
              var Le, Ue = ce || 0, We = we || 0, ze = ye || 0, Ne = $e || 0;
              return he ? new Date(Date.UTC(je, Be, be, Ue, We, ze, Ne + 60 * he.offset * 1e3)) : R ? new Date(Date.UTC(je, Be, be, Ue, We, ze, Ne)) : (Le = new Date(je, Be, be, Ue, We, ze, Ne), te && (Le = I(Le).week(te).toDate()), Le);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(_, n, j, F), this.init(), G && G !== !0 && (this.$L = this.locale(G).$L), z && _ != this.format(n) && (this.$d = /* @__PURE__ */ new Date("")), k = {};
        } else if (n instanceof Array)
          for (var M = n.length, T = 1; T <= M; T += 1) {
            r[1] = n[T - 1];
            var S = F.apply(this, r);
            if (S.isValid()) {
              this.$d = S.$d, this.$L = S.$L, this.init();
              break;
            }
            T === M && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          P.call(this, h);
      };
    };
  });
})(Kt);
var tn = Kt.exports;
const on = /* @__PURE__ */ Ye(tn);
var Gt = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    return function(l, t, u) {
      t.prototype.isToday = function() {
        var m = "YYYY-MM-DD", i = u();
        return this.format(m) === i.format(m);
      };
    };
  });
})(Gt);
var nn = Gt.exports;
const an = /* @__PURE__ */ Ye(nn);
var Zt = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    return function(l, t, u) {
      t.prototype.isBetween = function(m, i, o, k) {
        var y = u(m), b = u(i), v = (k = k || "()")[0] === "(", w = k[1] === ")";
        return (v ? this.isAfter(y, o) : !this.isBefore(y, o)) && (w ? this.isBefore(b, o) : !this.isAfter(b, o)) || (v ? this.isBefore(y, o) : !this.isAfter(y, o)) && (w ? this.isAfter(b, o) : !this.isBefore(b, o));
      };
    };
  });
})(Zt);
var rn = Zt.exports;
const sn = /* @__PURE__ */ Ye(rn);
var qt = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    var l, t, u = 1e3, m = 6e4, i = 36e5, o = 864e5, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = 31536e6, b = 2628e6, v = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, w = { years: y, months: b, days: o, hours: i, minutes: m, seconds: u, milliseconds: 1, weeks: 6048e5 }, O = function(_) {
      return _ instanceof P;
    }, N = function(_, j, r) {
      return new P(_, r, j.$l);
    }, L = function(_) {
      return t.p(_) + "s";
    }, V = function(_) {
      return _ < 0;
    }, E = function(_) {
      return V(_) ? Math.ceil(_) : Math.floor(_);
    }, F = function(_) {
      return Math.abs(_);
    }, $ = function(_, j) {
      return _ ? V(_) ? { negative: !0, format: "" + F(_) + j } : { negative: !1, format: "" + _ + j } : { negative: !1, format: "" };
    }, P = function() {
      function _(r, n, B) {
        var A = this;
        if (this.$d = {}, this.$l = B, r === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), n)
          return N(r * w[L(n)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(M) {
            A.$d[L(M)] = r[M];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var z = r.match(v);
          if (z) {
            var G = z.slice(2).map(function(M) {
              return M != null ? Number(M) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var j = _.prototype;
      return j.calMilliseconds = function() {
        var r = this;
        this.$ms = Object.keys(this.$d).reduce(function(n, B) {
          return n + (r.$d[B] || 0) * w[B];
        }, 0);
      }, j.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = E(r / y), r %= y, this.$d.months = E(r / b), r %= b, this.$d.days = E(r / o), r %= o, this.$d.hours = E(r / i), r %= i, this.$d.minutes = E(r / m), r %= m, this.$d.seconds = E(r / u), r %= u, this.$d.milliseconds = r;
      }, j.toISOString = function() {
        var r = $(this.$d.years, "Y"), n = $(this.$d.months, "M"), B = +this.$d.days || 0;
        this.$d.weeks && (B += 7 * this.$d.weeks);
        var A = $(B, "D"), z = $(this.$d.hours, "H"), G = $(this.$d.minutes, "M"), M = this.$d.seconds || 0;
        this.$d.milliseconds && (M += this.$d.milliseconds / 1e3, M = Math.round(1e3 * M) / 1e3);
        var T = $(M, "S"), S = r.negative || n.negative || A.negative || z.negative || G.negative || T.negative, Y = z.format || G.format || T.format ? "T" : "", g = (S ? "-" : "") + "P" + r.format + n.format + A.format + Y + z.format + G.format + T.format;
        return g === "P" || g === "-P" ? "P0D" : g;
      }, j.toJSON = function() {
        return this.toISOString();
      }, j.format = function(r) {
        var n = r || "YYYY-MM-DDTHH:mm:ss", B = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return n.replace(k, function(A, z) {
          return z || String(B[A]);
        });
      }, j.as = function(r) {
        return this.$ms / w[L(r)];
      }, j.get = function(r) {
        var n = this.$ms, B = L(r);
        return B === "milliseconds" ? n %= 1e3 : n = B === "weeks" ? E(n / w[B]) : this.$d[B], n || 0;
      }, j.add = function(r, n, B) {
        var A;
        return A = n ? r * w[L(n)] : O(r) ? r.$ms : N(r, this).$ms, N(this.$ms + A * (B ? -1 : 1), this);
      }, j.subtract = function(r, n) {
        return this.add(r, n, !0);
      }, j.locale = function(r) {
        var n = this.clone();
        return n.$l = r, n;
      }, j.clone = function() {
        return N(this.$ms, this);
      }, j.humanize = function(r) {
        return l().add(this.$ms, "ms").locale(this.$l).fromNow(!r);
      }, j.valueOf = function() {
        return this.asMilliseconds();
      }, j.milliseconds = function() {
        return this.get("milliseconds");
      }, j.asMilliseconds = function() {
        return this.as("milliseconds");
      }, j.seconds = function() {
        return this.get("seconds");
      }, j.asSeconds = function() {
        return this.as("seconds");
      }, j.minutes = function() {
        return this.get("minutes");
      }, j.asMinutes = function() {
        return this.as("minutes");
      }, j.hours = function() {
        return this.get("hours");
      }, j.asHours = function() {
        return this.as("hours");
      }, j.days = function() {
        return this.get("days");
      }, j.asDays = function() {
        return this.as("days");
      }, j.weeks = function() {
        return this.get("weeks");
      }, j.asWeeks = function() {
        return this.as("weeks");
      }, j.months = function() {
        return this.get("months");
      }, j.asMonths = function() {
        return this.as("months");
      }, j.years = function() {
        return this.get("years");
      }, j.asYears = function() {
        return this.as("years");
      }, _;
    }(), h = function(_, j, r) {
      return _.add(j.years() * r, "y").add(j.months() * r, "M").add(j.days() * r, "d").add(j.hours() * r, "h").add(j.minutes() * r, "m").add(j.seconds() * r, "s").add(j.milliseconds() * r, "ms");
    };
    return function(_, j, r) {
      l = r, t = r().$utils(), r.duration = function(A, z) {
        var G = r.locale();
        return N(A, { $l: G }, z);
      }, r.isDuration = O;
      var n = j.prototype.add, B = j.prototype.subtract;
      j.prototype.add = function(A, z) {
        return O(A) ? h(this, A, 1) : n.bind(this)(A, z);
      }, j.prototype.subtract = function(A, z) {
        return O(A) ? h(this, A, -1) : B.bind(this)(A, z);
      };
    };
  });
})(qt);
var ln = qt.exports;
const un = /* @__PURE__ */ Ye(ln);
var Jt = { exports: {} };
(function(e, a) {
  (function(l, t) {
    e.exports = t();
  })(Ce, function() {
    var l = "week", t = "year";
    return function(u, m, i) {
      var o = m.prototype;
      o.week = function(k) {
        if (k === void 0 && (k = null), k !== null)
          return this.add(7 * (k - this.week()), "day");
        var y = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var b = i(this).startOf(t).add(1, t).date(y), v = i(this).endOf(l);
          if (b.isBefore(v))
            return 1;
        }
        var w = i(this).startOf(t).date(y).startOf(l).subtract(1, "millisecond"), O = this.diff(w, l, !0);
        return O < 0 ? i(this).startOf("week").week() : Math.ceil(O);
      }, o.weeks = function(k) {
        return k === void 0 && (k = null), this.week(k);
      };
    };
  });
})(Jt);
var dn = Jt.exports;
const cn = /* @__PURE__ */ Ye(dn);
function ge(e, a) {
  const l = De(e, a);
  if (!l)
    throw new Error(`Could not resolve ${e.description}`);
  return l;
}
const St = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../node_modules/dayjs/esm/locale/af.js": () => import("./af-3f5e3754.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/am.js": () => import("./am-bc833d79.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-dz.js": () => import("./ar-dz-2b677c27.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-iq.js": () => import("./ar-iq-9280b179.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-kw.js": () => import("./ar-kw-06673fb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ly.js": () => import("./ar-ly-b364c556.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ma.js": () => import("./ar-ma-e9b96f88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-sa.js": () => import("./ar-sa-920b6966.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-tn.js": () => import("./ar-tn-5d2ebe87.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar.js": () => import("./ar-2a82d0f4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/az.js": () => import("./az-659b56f9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/be.js": () => import("./be-8c0cc01b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bg.js": () => import("./bg-406145d9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bi.js": () => import("./bi-951682c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bm.js": () => import("./bm-9d7e855b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn-bd.js": () => import("./bn-bd-087a7a1c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn.js": () => import("./bn-0c0acd44.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bo.js": () => import("./bo-19632568.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/br.js": () => import("./br-5a3443b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bs.js": () => import("./bs-ad641200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ca.js": () => import("./ca-035ea682.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cs.js": () => import("./cs-debeec9e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cv.js": () => import("./cv-dcf48c54.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cy.js": () => import("./cy-daa2e33d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/da.js": () => import("./da-3c1144ee.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-at.js": () => import("./de-at-5acf665a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-ch.js": () => import("./de-ch-6b981a67.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de.js": () => import("./de-77586bc3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/dv.js": () => import("./dv-65849a7f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/el.js": () => import("./el-ae4ad393.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-au.js": () => import("./en-au-a066127b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ca.js": () => import("./en-ca-c5437740.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-gb.js": () => import("./en-gb-c2cc134a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ie.js": () => import("./en-ie-d3ac9ac2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-il.js": () => import("./en-il-6dd24280.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-in.js": () => import("./en-in-2f2879f3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-nz.js": () => import("./en-nz-c996ce95.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-sg.js": () => import("./en-sg-278f7244.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-tt.js": () => import("./en-tt-dcca6678.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en.js": () => import("./en-4402d6fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eo.js": () => import("./eo-2b962c7e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-do.js": () => import("./es-do-e5ec18dc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-mx.js": () => import("./es-mx-0b0fdda9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-pr.js": () => import("./es-pr-ecf92870.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-us.js": () => import("./es-us-9a974819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es.js": () => import("./es-542d397d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/et.js": () => import("./et-cc745c6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eu.js": () => import("./eu-1819a0bf.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fa.js": () => import("./fa-759da5ca.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fi.js": () => import("./fi-48c34162.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fo.js": () => import("./fo-1a56e22a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ca.js": () => import("./fr-ca-a08d1ab6.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ch.js": () => import("./fr-ch-9e54ac3f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr.js": () => import("./fr-34da226b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fy.js": () => import("./fy-32e86ec3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ga.js": () => import("./ga-e14bb9af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gd.js": () => import("./gd-525324a8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gl.js": () => import("./gl-ecd4c576.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gom-latn.js": () => import("./gom-latn-0de894a4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gu.js": () => import("./gu-f8a9ff06.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/he.js": () => import("./he-c3d5738f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hi.js": () => import("./hi-06d9d378.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hr.js": () => import("./hr-df6e22c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ht.js": () => import("./ht-560ce1fa.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hu.js": () => import("./hu-36659a19.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hy-am.js": () => import("./hy-am-ec1e6b6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/id.js": () => import("./id-e83ede43.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/is.js": () => import("./is-112d618e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it-ch.js": () => import("./it-ch-74dc20fb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it.js": () => import("./it-68978c39.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ja.js": () => import("./ja-81ac0bce.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/jv.js": () => import("./jv-eb80b191.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ka.js": () => import("./ka-408178cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kk.js": () => import("./kk-7182d80c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/km.js": () => import("./km-c8d90f37.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kn.js": () => import("./kn-1ef13da8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ko.js": () => import("./ko-d74dbac1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ku.js": () => import("./ku-217c312b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ky.js": () => import("./ky-9beeab3e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lb.js": () => import("./lb-bbb0769c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lo.js": () => import("./lo-c0a222fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lt.js": () => import("./lt-7733040c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lv.js": () => import("./lv-8456bf8c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/me.js": () => import("./me-60049fb4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mi.js": () => import("./mi-a00211ea.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mk.js": () => import("./mk-750f2eb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ml.js": () => import("./ml-3d864495.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mn.js": () => import("./mn-c3b569a5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mr.js": () => import("./mr-caa70638.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms-my.js": () => import("./ms-my-9edfd210.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms.js": () => import("./ms-8a0b04c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mt.js": () => import("./mt-5924bb24.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/my.js": () => import("./my-7ec0e79b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nb.js": () => import("./nb-55474232.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ne.js": () => import("./ne-28b71d4d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl-be.js": () => import("./nl-be-ab2f9375.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl.js": () => import("./nl-f2df7562.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nn.js": () => import("./nn-ae0c69b8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/oc-lnc.js": () => import("./oc-lnc-e86add7d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pa-in.js": () => import("./pa-in-58db4e88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pl.js": () => import("./pl-6123f464.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt-br.js": () => import("./pt-br-72da3648.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt.js": () => import("./pt-6d21f766.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rn.js": () => import("./rn-fe91690b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ro.js": () => import("./ro-f0333df1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ru.js": () => import("./ru-8092165f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rw.js": () => import("./rw-8e49f17e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sd.js": () => import("./sd-f5f464cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/se.js": () => import("./se-d0247819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/si.js": () => import("./si-23229411.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sk.js": () => import("./sk-2ae651e5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sl.js": () => import("./sl-d651cb86.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sq.js": () => import("./sq-851e451a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr-cyrl.js": () => import("./sr-cyrl-150c337e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr.js": () => import("./sr-26ffbdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ss.js": () => import("./ss-70c27ddd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv-fi.js": () => import("./sv-fi-53a8b8bd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv.js": () => import("./sv-bf43bdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sw.js": () => import("./sw-3c86b419.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ta.js": () => import("./ta-dde447c0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/te.js": () => import("./te-d039e67a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tet.js": () => import("./tet-2478e8c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tg.js": () => import("./tg-374d7196.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/th.js": () => import("./th-cfb73f82.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tk.js": () => import("./tk-6502e590.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tl-ph.js": () => import("./tl-ph-f36e80af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tlh.js": () => import("./tlh-6d81a812.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tr.js": () => import("./tr-1608d107.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzl.js": () => import("./tzl-e019f0a0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm-latn.js": () => import("./tzm-latn-4a3fedcb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm.js": () => import("./tzm-9a26d476.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ug-cn.js": () => import("./ug-cn-7370b4b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uk.js": () => import("./uk-f2be452c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ur.js": () => import("./ur-5e01f781.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz-latn.js": () => import("./uz-latn-ec9b852e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz.js": () => import("./uz-f44d7936.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/vi.js": () => import("./vi-8106a30d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/x-pseudo.js": () => import("./x-pseudo-20ac0200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/yo.js": () => import("./yo-45cb4db7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-cn.js": () => import("./zh-cn-7af2941c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-hk.js": () => import("./zh-hk-e8e3af02.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-tw.js": () => import("./zh-tw-58dac95d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh.js": () => import("./zh-26803c4f.js").then((e) => e.default) })).map(
    ([e, a]) => {
      var l;
      return [(l = e.match(/([\w-]*)\.js$/)) == null ? void 0 : l[1], a];
    }
  )
), mn = { class: "flex justify-between items-center px-2 py-1.5" }, fn = { class: "shrink-0" }, pn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, vn = ["d"], hn = { class: "px-1.5 space-x-1.5 flex flex-1" }, yn = { class: "flex-1 flex rounded-md" }, bn = ["textContent"], gn = { class: "flex-1 flex rounded-md" }, xn = ["textContent"], wn = { class: "shrink-0" }, jn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, kn = ["d"], tt = /* @__PURE__ */ de({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (a, l) => (Z(), q("div", mn, [
      D("div", fn, [
        re(D("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: l[0] || (l[0] = (t) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
        }, [
          (Z(), q("svg", pn, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
            }, null, 8, vn)
          ]))
        ], 512), [
          [fe, e.panel.calendar || e.panel.year]
        ])
      ]),
      D("div", hn, [
        D("span", yn, [
          D("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: l[1] || (l[1] = (t) => e.calendar.openMonth()),
            textContent: le(e.calendar.month)
          }, null, 8, bn)
        ]),
        D("span", gn, [
          D("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: l[2] || (l[2] = (t) => e.calendar.openYear()),
            textContent: le(e.calendar.year)
          }, null, 8, xn)
        ])
      ]),
      D("div", wn, [
        re(D("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: l[3] || (l[3] = (t) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
        }, [
          (Z(), q("svg", jn, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
            }, null, 8, kn)
          ]))
        ], 512), [
          [fe, e.panel.calendar || e.panel.year]
        ])
      ])
    ]));
  }
}), Xt = Symbol("isBetweenRange"), Qt = Symbol(
  "betweenRangeClasses"
), eo = Symbol("datepickerClasses"), to = Symbol("atMouseOver"), oo = Symbol("setToToday"), no = Symbol("setToTomorrow"), ao = Symbol("setToThisWeekend"), ro = Symbol("setToThisWeek"), so = Symbol("setToThisMonth"), lo = Symbol("setToThisYear"), uo = Symbol("setToCustomShortcut"), $n = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/10 order-last sm:order-0 dark:border-vtd-secondary-700 sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0 sm:w-auto"
}, _n = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, Mn = ["onClick", "textContent"], Sn = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, Dt = /* @__PURE__ */ de({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const a = e, l = ge(oo), t = ge(no), u = ge(ao), m = ge(ro), i = ge(so), o = ge(lo), k = ge(uo), y = ie(() => typeof a.shortcuts == "function" ? a.shortcuts() : !1);
    return (b, v) => a.asRange && a.asSingle || a.asRange && !a.asSingle ? (Z(), q("div", $n, [
      y.value ? (Z(), q("ol", _n, [
        (Z(!0), q(xe, null, Xe(y.value, (w, O) => (Z(), q("li", { key: O }, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: _e((N) => ue(k)(w, e.close), ["prevent"]),
            textContent: le(w.label)
          }, null, 8, Mn)
        ]))), 128))
      ])) : (Z(), q("ol", Sn, [
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: v[0] || (v[0] = _e((w) => ue(l)(), ["prevent"]))
          }, le(a.i18n.today), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: v[1] || (v[1] = _e((w) => ue(t)(), ["prevent"]))
          }, le(a.i18n.tomorrow), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: v[2] || (v[2] = _e((w) => ue(u)(), ["prevent"]))
          }, le(a.i18n.thisWeekend), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: v[3] || (v[3] = _e((w) => ue(m)(), ["prevent"]))
          }, le(a.i18n.thisWeek), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: v[4] || (v[4] = _e((w) => ue(i)(), ["prevent"]))
          }, le(a.i18n.currentMonth), 1)
        ]),
        D("li", null, [
          D("a", {
            href: "#",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: v[5] || (v[5] = _e((w) => ue(o)(), ["prevent"]))
          }, le(a.i18n.thisYear), 1)
        ])
      ]))
    ])) : ve("", !0);
  }
}), Dn = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, Tn = {
  key: 0,
  class: "col-span-7 border-b relative"
}, Vn = { class: "absolute -left-2 top-1/2 -translate-y-2/4 bg-white text-[8px] pr-2 text-vtd-secondary-400" }, On = ["data-tooltip"], Pn = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], ot = /* @__PURE__ */ de({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: a }) {
    const l = a, t = ge(Xt), u = ge(Qt), m = ge(eo), i = ge(to);
    return (o, k) => (Z(), q("div", Dn, [
      oe(vo, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Re(() => [
          (Z(!0), q(xe, null, Xe(e.calendar.date(), (y, b) => (Z(), q(xe, { key: b }, [
            b % 7 === 0 && e.weekNumber ? (Z(), q("div", Tn, [
              D("span", Vn, le(y.week()), 1)
            ])) : ve("", !0),
            D("div", {
              class: Pe(["relative", { "vtd-tooltip": e.asRange && y.duration() }]),
              "data-tooltip": `${y.duration()}`
            }, [
              oe(Tt, {
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "enter-active-class": "transition-opacity ease-out duration-200",
                "leave-active-class": "transition-opacity ease-in duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: Re(() => [
                  ue(t)(y) || y.hovered() ? (Z(), q("span", {
                    key: 0,
                    class: Pe(["absolute bg-vtd-dark-blue/10", ue(u)(y)])
                  }, null, 2)) : ve("", !0)
                ]),
                _: 2
              }, 1024),
              D("button", {
                type: "button",
                class: Pe(["vtd-datepicker-date relative w-[2.25rem] h-[2.25rem] flex justify-center items-center text-sm font-medium", [
                  ue(m)(y),
                  e.asRange ? "transition-all" : "transition-colors"
                ]]),
                disabled: y.disabled || y.inRange(),
                "data-date": y.toDate(),
                onClick: (v) => l("updateDate", y),
                onMouseenter: (v) => ue(i)(y),
                onFocusin: (v) => ue(i)(y),
                textContent: le(y.date())
              }, null, 42, Pn)
            ], 10, On)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), An = { class: "flex flex-wrap" }, Cn = { class: "flex rounded-md mt-1.5" }, Yn = ["onClick", "textContent"], nt = /* @__PURE__ */ de({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: a }) {
    const l = a;
    return (t, u) => (Z(), q("div", An, [
      (Z(!0), q(xe, null, Xe(e.years, (m, i) => (Z(), q("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        D("span", Cn, [
          D("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (o) => l("updateYear", m),
            textContent: le(m)
          }, null, 8, Yn)
        ])
      ]))), 128))
    ]));
  }
}), En = { class: "grid grid-cols-7 py-2 mt-0.5" }, Fn = ["textContent"], at = /* @__PURE__ */ de({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (a, l) => (Z(), q("div", En, [
      (Z(!0), q(xe, null, Xe(e.weeks, (t, u) => (Z(), q("div", {
        key: u,
        class: "text-vtd-dark-blue text-sm lg:text-md tracking-wide font-bold text-center cursor-default"
      }, [
        D("span", {
          textContent: le(t)
        }, null, 8, Fn)
      ]))), 128))
    ]));
  }
}), Bn = { class: "flex flex-wrap mt-1.5" }, Ln = { class: "flex rounded-md mt-1.5" }, Nn = ["onClick", "textContent"], rt = /* @__PURE__ */ de({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: a }) {
    const l = a;
    return (t, u) => (Z(), q("div", Bn, [
      (Z(!0), q(xe, null, Xe(e.months, (m, i) => (Z(), q("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        D("span", Ln, [
          D("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (o) => l("updateMonth", i),
            textContent: le(m)
          }, null, 8, Nn)
        ])
      ]))), 128))
    ]));
  }
});
function Rn() {
  const e = (o) => {
    const k = [], y = o.localeData().firstDayOfWeek();
    for (let b = 0; b <= o.date(0 - y).day(); b++)
      k.push(o.date(0).subtract(b, "day"));
    return k.sort((b, v) => b.date() - v.date());
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
      const b = k.isAfter(y, "date") ? "(]" : "[)";
      return !!(o.isBetween(k, y, "date", b) && !o.off);
    },
    useToValueFromString: (o, { formatter: k }) => o.format(k.date),
    useToValueFromArray: ({ previous: o, next: k }, {
      formatter: y,
      separator: b
    }) => `${o.format(y.date)}${b}${k.format(
      y.date
    )}`
  };
}
function In() {
  return {
    useVisibleViewport: (a) => {
      if (a) {
        const { right: l } = a.getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth;
        return l > t;
      } else
        return null;
    }
  };
}
const Hn = ["disabled", "placeholder"], Un = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Wn = ["disabled"], zn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Kn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Gn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Zn = ["onClick"], qn = { class: "flex flex-wrap lg:flex-nowrap" }, Jn = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Xn = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Qn = { class: "px-0.5 sm:px-2" }, ea = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, ta = { class: "px-0.5 sm:px-2" }, oa = { key: 0 }, na = { class: "pt-4 border-t border-black/[.1]" }, aa = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex justify-end gap-4" }, ra = {
  for: "check-morning",
  class: "item text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, sa = {
  for: "check-afternoon",
  class: "item text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, la = {
  for: "check-evening",
  class: "item frank text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, ua = {
  for: "check-night",
  class: "item text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, ia = { class: "mt-4 sm:flex sm:flex-row-reverse" }, da = ["disabled", "onClick", "textContent"], ca = {
  key: 1,
  class: "sm:hidden"
}, ma = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, fa = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, pa = ["onClick", "textContent"], va = {
  key: 1,
  class: "flex"
}, ha = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, ya = { class: "flex flex-wrap lg:flex-nowrap" }, ba = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, ga = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, xa = { class: "px-0.5 sm:px-2" }, wa = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, ja = { class: "px-0.5 sm:px-2" }, ka = { key: 0 }, $a = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, _a = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Ma = ["disabled", "textContent"], Sa = /* @__PURE__ */ de({
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
      shortcuts: {
        today: "Today",
        tomorrow: "Tomorrow",
        thisWeekend: "This Weekend",
        thisWeek: "This Week",
        currentMonth: "This Month",
        thisYear: "This Year"
      },
      footer: {
        apply: "Apply",
        cancel: "Cancel"
      }
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
  setup(e, { expose: a, emit: l }) {
    var Ne, mt, gt, xt;
    const t = e, u = l, m = pt({
      morning: ((Ne = t.sessionValue) == null ? void 0 : Ne.morning) || !1,
      afternoon: ((mt = t.sessionValue) == null ? void 0 : mt.afternoon) || !1,
      evening: ((gt = t.sessionValue) == null ? void 0 : gt.evening) || !1,
      night: ((xt = t.sessionValue) == null ? void 0 : xt.night) || !1
    });
    Ze(m, (p) => {
      console.log("sessionData changed:", p), u("update:sessionValue", { ...p });
    }, { deep: !0 }), Ze(() => t.sessionValue, (p) => {
      p && (m.morning = p.morning, m.afternoon = p.afternoon, m.evening = p.evening, m.night = p.night);
    }, { deep: !0 });
    const {
      useCurrentDate: i,
      useDisableDate: o,
      useBetweenRange: k,
      useNextDate: y,
      usePreviousDate: b,
      useToValueFromArray: v,
      useToValueFromString: w
    } = Rn(), { useVisibleViewport: O } = In();
    c.extend(Xo), c.extend(en), c.extend(on), c.extend(an), c.extend(sn), c.extend(un), c.extend(cn);
    const N = X(null), L = X(null), V = X(null), E = X(""), F = X(null), $ = X(""), P = X([]), h = X([]), _ = X(null), j = X(null), r = pt({
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
    }), n = X({
      previous: c(),
      next: c().add(1, "month"),
      year: {
        previous: c().year(),
        next: c().year()
      },
      weeks: t.weekdaysSize === "min" ? c.weekdaysMin() : c.weekdaysShort(),
      months: t.formatter.month === "MMM" ? c.monthsShort() : c.months()
    });
    function B() {
      m.morning = !1, m.afternoon = !1, m.evening = !1, m.night = !1;
    }
    function A(p) {
      const s = c().format(t.formatter.date), f = c().format(t.formatter.date);
      te(s, f), B(), p && p();
    }
    const z = ie(() => n.value.weeks), G = ie(() => n.value.months), M = ie(() => {
      const { previous: p, next: s, year: f } = ue(n);
      return {
        previous: {
          date: () => b(p).concat(i(p)).concat(y(p)).map((d) => (Object.assign(d, {
            today: d.isToday(),
            active: p.month() === d.month(),
            off: p.month() !== d.month(),
            sunday: d.day() === 0,
            disabled: o(d, t) && !R(d),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return p.month() !== d.month();
            },
            hovered: () => g() && P.value.length > 1 ? (d.isBetween(
              P.value[0],
              P.value[1],
              "date",
              "()"
            ) || d.isBetween(
              P.value[1],
              P.value[0],
              "date",
              "(]"
            )) && p.month() === d.month() : !1,
            duration: () => !1
          }), d)),
          month: p && p.format(t.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (d, x) => f.previous + x
          ),
          onPrevious: () => {
            n.value.previous = p.subtract(1, "month"), u("clickPrev", n.value.previous);
          },
          onNext: () => {
            n.value.previous = p.add(1, "month"), p.diff(s, "month") === -1 && (n.value.next = s.add(1, "month")), u("clickNext", n.value.previous);
          },
          onPreviousYear: () => {
            n.value.year.previous = n.value.year.previous - 12;
          },
          onNextYear: () => {
            n.value.year.previous = n.value.year.previous + 12;
          },
          openMonth: () => {
            r.previous.month = !r.previous.month, r.previous.year = !1, r.previous.calendar = !r.previous.month;
          },
          setMonth: (d) => {
            n.value.previous = p.month(d), r.previous.month = !r.previous.month, r.previous.year = !1, r.previous.calendar = !r.previous.month, u("selectMonth", n.value.previous), Ke(() => {
              (n.value.next.isSame(n.value.previous, "month") || n.value.next.isBefore(n.value.previous)) && (n.value.next = n.value.previous.add(1, "month")), n.value.year.next = n.value.next.year();
            });
          },
          openYear: () => {
            r.previous.year = !r.previous.year, r.previous.month = !1, r.previous.calendar = !r.previous.year;
          },
          setYear: (d) => {
            n.value.previous = p.year(d), r.previous.year = !r.previous.year, r.previous.calendar = !r.previous.year, u("selectYear", n.value.previous), Ke(() => {
              (n.value.next.isSame(n.value.previous, "month") || n.value.next.isBefore(n.value.previous)) && (n.value.next = n.value.previous.add(1, "month")), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year();
            });
          }
        },
        next: {
          date: () => b(s).concat(i(s)).concat(y(s)).map((d) => (Object.assign(d, {
            today: d.isToday(),
            active: s.month() === d.month(),
            off: s.month() !== d.month(),
            sunday: d.day() === 0,
            disabled: o(d, t) && !R(d),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return s.month() !== d.month();
            },
            hovered: () => P.value.length > 1 ? (d.isBetween(
              P.value[0],
              P.value[1],
              "date",
              "()"
            ) || d.isBetween(
              P.value[1],
              P.value[0],
              "date",
              "(]"
            )) && s.month() === d.month() : !1,
            duration: () => !1
          }), d)),
          month: s && s.format(t.formatter.month),
          year: s && s.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (d, x) => f.next + x
          ),
          onPrevious: () => {
            n.value.next = s.subtract(1, "month"), s.diff(p, "month") === 1 && (n.value.previous = p.subtract(1, "month")), u("clickRightPrev", n.value.next);
          },
          onNext: () => {
            n.value.next = s.add(1, "month"), u("clickRightNext", n.value.next);
          },
          onPreviousYear: () => {
            n.value.year.next = n.value.year.next - 12;
          },
          onNextYear: () => {
            n.value.year.next = n.value.year.next + 12;
          },
          openMonth: () => {
            r.next.month = !r.next.month, r.next.year = !1, r.next.calendar = !r.next.month;
          },
          setMonth: (d) => {
            n.value.next = s.month(d), r.next.month = !r.next.month, r.next.year = !1, r.next.calendar = !r.next.month, u("selectRightMonth", n.value.next), Ke(() => {
              (n.value.previous.isSame(n.value.next, "month") || n.value.previous.isAfter(n.value.next)) && (n.value.previous = n.value.next.subtract(
                1,
                "month"
              )), n.value.year.previous = n.value.previous.year();
            });
          },
          openYear: () => {
            r.next.year = !r.next.year, r.next.month = !1, r.next.calendar = !r.next.year;
          },
          setYear: (d) => {
            n.value.next = s.year(d), r.next.year = !r.next.year, r.next.month = !1, r.next.calendar = !r.next.year, u("selectRightYear", n.value.next), Ke(() => {
              (n.value.previous.isSame(n.value.next, "month") || n.value.previous.isAfter(n.value.next)) && (n.value.previous = n.value.next.subtract(
                1,
                "month"
              )), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year();
            });
          }
        }
      };
    }), T = X(!1);
    setTimeout(() => {
      T.value = !0;
    }, 250);
    function S() {
      return c().localeData().firstDayOfWeek();
    }
    function Y(p) {
      const s = [...p], f = s.shift();
      return [...s, f];
    }
    function g() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function R(p) {
      if (t.disableInRange || typeof t.disableDate == "function" || $.value === "")
        return !1;
      let s, f;
      if (Array.isArray(t.modelValue)) {
        const [d, x] = t.modelValue;
        s = d, f = x;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [d, x] = Object.values(t.modelValue);
          s = d, f = x;
        }
      } else {
        const [d, x] = t.modelValue.split(t.separator);
        s = d, f = x;
      }
      return p.isBetween(
        c(s, t.formatter.date, !0),
        c(f, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function I() {
      _.value = null, j.value = null, P.value = [], F.value = null;
    }
    function U() {
      if ($.value = "", Array.isArray(t.modelValue))
        u("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const p = {}, [s, f] = Object.keys(t.modelValue);
        p[s] = "", p[f] = "", u("update:modelValue", p);
      } else
        u("update:modelValue", "");
      h.value = [], L.value && L.value.focus();
    }
    function Q() {
      if (g()) {
        const [p, s] = $.value.split(t.separator), [f, d] = [
          c(p, t.formatter.date, !0),
          c(s, t.formatter.date, !0)
        ];
        if (f.isValid() && d.isValid())
          if (J(f), J(d), Array.isArray(t.modelValue))
            u("update:modelValue", [p, s]);
          else if (typeof t.modelValue == "object") {
            const x = {}, [C, W] = Object.keys(t.modelValue);
            x[C] = p, x[W] = s, u("update:modelValue", x);
          } else
            u(
              "update:modelValue",
              v(
                {
                  previous: f,
                  next: d
                },
                t
              )
            );
      } else {
        const p = c($.value, t.formatter.date, !0);
        if (p.isValid())
          if (J(p), Array.isArray(t.modelValue))
            u("update:modelValue", [$.value]);
          else if (typeof t.modelValue == "object") {
            const s = {}, [f] = Object.keys(t.modelValue);
            s[f] = $.value, u("update:modelValue", s);
          } else
            u("update:modelValue", $.value);
      }
    }
    function J(p, s) {
      if (g())
        if (_.value)
          if (j.value = p, t.autoApply) {
            p.isBefore(_.value) ? $.value = v(
              {
                previous: p,
                next: _.value
              },
              t
            ) : $.value = v(
              {
                previous: _.value,
                next: p
              },
              t
            );
            const [f, d] = $.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              u("update:modelValue", [
                c(f, t.formatter.date, !0).format(t.formatter.date),
                c(d, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const x = {}, [C, W] = Object.keys(t.modelValue);
              x[C] = f, x[W] = d, u("update:modelValue", x);
            } else
              u(
                "update:modelValue",
                v(
                  {
                    previous: c(f, t.formatter.date, !0),
                    next: c(d, t.formatter.date, !0)
                  },
                  t
                )
              );
            s && s(), h.value = [], c(f, t.formatter.date, !0).isSame(
              c(d, t.formatter.date, !0),
              "month"
            ) || (n.value.previous = c(f, t.formatter.date, !0), n.value.next = c(d, t.formatter.date, !0)), I();
          } else {
            _.value.isAfter(p, "month") ? h.value = [p, _.value] : h.value = [_.value, p];
            const [f, d] = h.value;
            f.isSame(d, "month") || (n.value.previous = f, n.value.next = d), I();
          }
        else
          h.value = [], _.value = p, F.value = p, P.value.push(p), h.value.push(p), n.value.previous = p, n.value.next.isSame(p, "month") && (n.value.previous = n.value.next, n.value.next = p.add(1, "month"));
      else if (t.autoApply) {
        if ($.value = w(p, t), Array.isArray(t.modelValue))
          u("update:modelValue", [$.value]);
        else if (typeof t.modelValue == "object") {
          const f = {}, [d] = Object.keys(t.modelValue);
          f[d] = $.value, u("update:modelValue", f);
        } else
          u("update:modelValue", $.value);
        s && s(), h.value = [], I();
      } else
        h.value = [p], I();
    }
    function ne(p) {
      if (console.log("update:sessionValue", { ...m }), u("update:sessionValue", { ...m }), h.value.length < 1)
        return !1;
      let s;
      if (g()) {
        const [f, d] = h.value;
        d.isBefore(f) ? s = v(
          {
            previous: d,
            next: f
          },
          t
        ) : s = v(
          {
            previous: f,
            next: d
          },
          t
        );
      } else {
        const [f] = h.value;
        s = f;
      }
      if (g()) {
        const [f, d] = s.split(t.separator);
        if (Array.isArray(t.modelValue))
          u("update:modelValue", [
            c(f, t.formatter.date, !0).format(t.formatter.date),
            c(d, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (typeof t.modelValue == "object") {
          const x = {}, [C, W] = Object.keys(t.modelValue);
          x[C] = f, x[W] = d, u("update:modelValue", x);
        } else
          u(
            "update:modelValue",
            v(
              {
                previous: c(f, t.formatter.date, !0),
                next: c(d, t.formatter.date, !0)
              },
              t
            )
          );
        $.value = s;
      } else if ($.value = s.format(t.formatter.date), Array.isArray(t.modelValue))
        u("update:modelValue", [$.value]);
      else if (typeof t.modelValue == "object") {
        const f = {}, [d] = Object.keys(t.modelValue);
        f[d] = $.value, u("update:modelValue", f);
      } else
        u("update:modelValue", $.value);
      p && p();
    }
    function ce(p) {
      if (!g())
        return !1;
      if (_.value)
        P.value = [_.value, p];
      else
        return P.value = [], !1;
    }
    function we(p) {
      if (_.value && t.autoApply)
        return !1;
      let s, f;
      if (P.value.length > 1) {
        const [d, x] = P.value;
        s = c(d, t.formatter.date, !0), f = c(x, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [d, x] = t.modelValue;
          s = d && c(d, t.formatter.date, !0), f = x && c(x, t.formatter.date, !0);
        } else {
          const [d, x] = h.value;
          s = c(d, t.formatter.date, !0), f = c(x, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [d, x] = Object.values(t.modelValue);
            s = d && c(d, t.formatter.date, !0), f = x && c(x, t.formatter.date, !0);
          }
        } else {
          const [d, x] = h.value;
          s = c(d, t.formatter.date, !0), f = c(x, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [d, x] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        s = d && c(d, t.formatter.date, !0), f = x && c(x, t.formatter.date, !0);
      } else {
        const [d, x] = h.value;
        s = c(d, t.formatter.date, !0), f = c(x, t.formatter.date, !0);
      }
      return s && f ? k(p, {
        previous: s,
        next: f
      }) : !1;
    }
    function ye(p) {
      const { today: s, active: f, off: d, disabled: x } = p;
      let C, W, ae;
      if (g())
        if (Array.isArray(t.modelValue))
          if (F.value) {
            const [K, ee] = P.value;
            W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [K, ee] = t.modelValue;
            W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
          } else {
            const [K, ee] = h.value;
            W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (F.value) {
            const [K, ee] = P.value;
            W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [K, ee] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
          } else {
            const [K, ee] = h.value;
            W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
          }
        else if (F.value) {
          const [K, ee] = P.value;
          W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [K, ee] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
        } else {
          const [K, ee] = h.value;
          W = K && c(K, t.formatter.date, !0), ae = ee && c(ee, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [K] = t.modelValue;
            W = c(K, t.formatter.date, !0);
          }
        } else {
          const [K] = h.value;
          W = K && c(K, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [K] = Object.values(t.modelValue);
            W = c(K, t.formatter.date, !0);
          }
        } else {
          const [K] = h.value;
          W = K && c(K, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [K] = t.modelValue.split(t.separator);
          W = c(K, t.formatter.date, !0);
        }
      } else {
        const [K] = h.value;
        W = K && c(K, t.formatter.date, !0);
      }
      return f && (C = s ? "text-vtd-dark-blue bg-vtd-medium-gray rounded-md" : x ? "text-vtd-light-gray font-normal disabled:text-vtd-light-gray disabled:cursor-not-allowed" : (W && ae && p.isBetween(W, ae, "date", "()"), "text-vtd-dark-blue")), d && (C = "text-vtd-dark-blue disabled:cursor-not-allowed"), W && ae && !d ? (p.isSame(W, "date") && (C = ae.isAfter(W, "date") ? "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed", W.isSame(ae, "date") && (C = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed")), p.isSame(ae, "date") && (C = ae.isAfter(W, "date") ? "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed", W.isSame(ae, "date") && (C = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"))) : W && p.isSame(W, "date") && !d && (C = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"), C;
    }
    function $e(p) {
      let s, f, d;
      if (s = "", !g())
        return s;
      if (Array.isArray(t.modelValue))
        if (P.value.length > 1) {
          const [x, C] = P.value;
          f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [x, C] = t.modelValue;
          f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
        } else {
          const [x, C] = h.value;
          f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (P.value.length > 1) {
          const [x, C] = P.value;
          f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [x, C] = Object.values(t.modelValue);
            f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
          }
        } else {
          const [x, C] = h.value;
          f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
        }
      else if (P.value.length > 1) {
        const [x, C] = P.value;
        f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [x, C] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
      } else {
        const [x, C] = h.value;
        f = x && c(x, t.formatter.date, !0), d = C && c(C, t.formatter.date, !0);
      }
      return f && d && (p.isSame(f, "date") ? (d.isBefore(f) && (s += " rounded-r-md inset-0"), f.isBefore(d) && (s += " rounded-l-md inset-0")) : p.isSame(d, "date") ? (d.isBefore(f) && (s += " rounded-l-md inset-0"), f.isBefore(d) && (s += " rounded-r-md inset-0")) : s += " inset-0"), s;
    }
    function he(p, s) {
      n.value.previous = c(p, t.formatter.date, !0), n.value.next = c(s, t.formatter.date, !0), (c.duration(n.value.next.diff(n.value.previous)).get("months") === 2 || c.duration(n.value.next.diff(n.value.previous)).get("months") === 1 && c.duration(n.value.next.diff(n.value.previous)).get("days") === 7) && (n.value.next = n.value.next.subtract(1, "month")), (n.value.next.isSame(n.value.previous, "month") || n.value.next.isBefore(n.value.previous)) && (n.value.next = n.value.previous.add(1, "month"));
    }
    function te(p, s) {
      if (g())
        if (t.autoApply) {
          if (Array.isArray(t.modelValue))
            u("update:modelValue", [p, s]);
          else if (typeof t.modelValue == "object") {
            const f = {}, [d, x] = Object.keys(t.modelValue);
            f[d] = p, f[x] = s, u("update:modelValue", f);
          } else
            u(
              "update:modelValue",
              v(
                {
                  previous: c(p, t.formatter.date, !0),
                  next: c(s, t.formatter.date, !0)
                },
                t
              )
            );
          $.value = `${p}${t.separator}${s}`;
        } else
          h.value = [
            c(p, t.formatter.date, !0),
            c(s, t.formatter.date, !0)
          ];
      else if (t.autoApply) {
        if (Array.isArray(t.modelValue))
          u("update:modelValue", [p]);
        else if (typeof t.modelValue == "object") {
          const f = {}, [d] = Object.keys(t.modelValue);
          f[d] = p, u("update:modelValue", f);
        } else
          u("update:modelValue", p);
        $.value = p;
      } else
        h.value = [
          c(p, t.formatter.date, !0),
          c(s, t.formatter.date, !0)
        ];
      he(p, s);
    }
    function me(p) {
      const s = c(), d = (6 - s.day() + 7) % 7, x = s.add(d, "day"), C = x.add(1, "day"), W = x.format(t.formatter.date), ae = C.format(t.formatter.date);
      te(W, ae), p && p();
    }
    function be(p) {
      const s = c(), f = s.day(), d = s.subtract(f, "day"), x = d.add(6, "day"), C = d.format(t.formatter.date), W = x.format(t.formatter.date);
      te(C, W), p && p();
    }
    function je(p) {
      const s = c().add(1, "day").format(t.formatter.date), f = c().add(1, "day").format(t.formatter.date);
      te(s, f), p && p();
    }
    function Be(p) {
      const s = c().date(1).format(t.formatter.date), f = c().date(c().daysInMonth()).format(t.formatter.date);
      te(s, f), p && p();
    }
    function Le(p) {
      const s = c(), f = s.startOf("year"), d = s.endOf("year"), x = f.format(t.formatter.date), C = d.format(t.formatter.date);
      te(x, C), p && p();
    }
    function Ue(p, s) {
      const [f, d] = p.atClick(), x = c(f).format(t.formatter.date), C = c(d).format(t.formatter.date);
      te(x, C), s && s();
    }
    Ze(
      () => h.value,
      (p) => {
        p.length > 0 && (r.previous.calendar = !0, r.previous.month = !1, r.previous.year = !1, r.next.calendar = !0, r.next.month = !1, r.next.year = !1);
      }
    ), ke(() => {
      t.placeholder ? E.value = t.placeholder : g() ? E.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : E.value = t.formatter.date;
    }), c.locale(t.i18n), Ze(() => t.i18n, () => c.locale(t.i18n)), ke(() => {
      const p = t.i18n, s = t.modelValue;
      Ke(async () => {
        if (p in St) {
          const C = await St[p]();
          c.locale(C, void 0, !0), c.locale(p);
        }
        let f, d;
        if (g()) {
          if (Array.isArray(s)) {
            if (s.length > 0) {
              const [C, W] = s;
              f = c(C, t.formatter.date, !0), d = c(W, t.formatter.date, !0);
            }
          } else if (typeof s == "object") {
            if (!ho(s))
              try {
                Object.keys(s);
              } catch {
                console.warn(
                  "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                  "font-style: italic; color: #42b883;",
                  ", but you pass it undefined or null."
                ), console.warn(
                  "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                  "font-style: italic; color: #42b883;",
                  ", but you can replace manually."
                ), u("update:modelValue", {
                  startDate: "",
                  endDate: ""
                });
              }
            if (s) {
              const [C, W] = Object.values(s);
              f = C && c(C, t.formatter.date, !0), d = W && c(W, t.formatter.date, !0);
            }
          } else if (s) {
            const [C, W] = s.split(t.separator);
            f = c(C, t.formatter.date, !0), d = c(W, t.formatter.date, !0);
          }
          f && d ? ($.value = v(
            {
              previous: f,
              next: d
            },
            t
          ), d.isBefore(f, "month") ? (n.value.previous = d, n.value.next = f, n.value.year.previous = d.year(), n.value.year.next = f.year()) : d.isSame(f, "month") ? (n.value.previous = f, n.value.next = d.add(1, "month"), n.value.year.previous = f.year(), n.value.year.next = f.add(1, "year").year()) : (n.value.previous = f, n.value.next = d, n.value.year.previous = f.year(), n.value.year.next = d.year()), t.autoApply || (h.value = [f, d])) : (n.value.previous = c(t.startFrom), n.value.next = c(t.startFrom).add(1, "month"), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year());
        } else {
          if (Array.isArray(s)) {
            if (s.length > 0) {
              const [C] = s;
              f = c(C, t.formatter.date, !0);
            }
          } else if (typeof s == "object") {
            if (s) {
              const [C] = Object.values(s);
              f = c(C, t.formatter.date, !0);
            }
          } else if (s.length) {
            const [C] = s.split(t.separator);
            f = c(C, t.formatter.date, !0);
          }
          f && f.isValid() ? ($.value = w(f, t), n.value.previous = f, n.value.next = f.add(1, "month"), n.value.year.previous = f.year(), n.value.year.next = f.add(1, "year").year(), t.autoApply || (h.value = [f])) : (n.value.previous = c(t.startFrom), n.value.next = c(t.startFrom).add(1, "month"), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year());
        }
        const x = t.weekdaysSize === "min" ? c.weekdaysMin() : c.weekdaysShort();
        n.value.weeks = S() ? Y(x) : x, n.value.months = t.formatter.month === "MMM" ? c.monthsShort() : c.months();
      });
    });
    function We(p) {
      return p && V.value === null && (V.value = O(N.value)), p && V.value ? "place-right" : "place-left";
    }
    function ze(p) {
      return p && V.value === null && (V.value = O(N.value)), V.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return se(Xt, we), se(Qt, $e), se(eo, ye), se(to, ce), se(oo, A), se(ao, me), se(ro, be), se(no, je), se(so, Be), se(lo, Le), se(uo, Ue), a({ clearPicker: U, resetSessionData: B }), (p, s) => t.noInput ? T.value ? (Z(), q("div", va, [
      D("div", ha, [
        D("div", ya, [
          t.shortcuts ? (Z(), Ge(Dt, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": g(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : ve("", !0),
          D("div", ba, [
            g() && !t.asSingle ? (Z(), q("div", ga, [...s[17] || (s[17] = [
              D("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1)
            ])])) : ve("", !0),
            D("div", {
              class: Pe(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": g() && !t.asSingle
              }])
            }, [
              oe(tt, {
                panel: r.previous,
                calendar: M.value.previous
              }, null, 8, ["panel", "calendar"]),
              D("div", xa, [
                re(oe(rt, {
                  months: G.value,
                  onUpdateMonth: M.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [fe, r.previous.month]
                ]),
                re(oe(nt, {
                  years: M.value.previous.years(),
                  onUpdateYear: M.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [fe, r.previous.year]
                ]),
                re(D("div", null, [
                  oe(at, { weeks: z.value }, null, 8, ["weeks"]),
                  oe(ot, {
                    calendar: M.value.previous,
                    weeks: z.value,
                    "as-range": g(),
                    "week-number": e.weekNumber,
                    onUpdateDate: s[8] || (s[8] = (f) => J(f))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [fe, r.previous.calendar]
                ])
              ])
            ], 2),
            g() && !t.asSingle ? (Z(), q("div", wa, [
              oe(tt, {
                "as-prev-or-next": "",
                panel: r.next,
                calendar: M.value.next
              }, null, 8, ["panel", "calendar"]),
              D("div", ja, [
                re(oe(rt, {
                  months: G.value,
                  onUpdateMonth: M.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [fe, r.next.month]
                ]),
                re(oe(nt, {
                  "as-prev-or-next": "",
                  years: M.value.next.years(),
                  onUpdateYear: M.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [fe, r.next.year]
                ]),
                re(D("div", null, [
                  oe(at, { weeks: z.value }, null, 8, ["weeks"]),
                  oe(ot, {
                    "as-prev-or-next": "",
                    calendar: M.value.next,
                    weeks: z.value,
                    "as-range": g(),
                    "week-number": e.weekNumber,
                    onUpdateDate: s[9] || (s[9] = (f) => J(f))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [fe, r.next.calendar]
                ])
              ])
            ])) : ve("", !0)
          ])
        ]),
        t.autoApply ? ve("", !0) : (Z(), q("div", ka, [
          D("div", $a, [
            D("div", _a, [
              D("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: t.asSingle ? h.value.length < 1 : h.value.length < 2,
                onClick: s[10] || (s[10] = (f) => ne()),
                textContent: le(t.options.footer.apply)
              }, null, 8, Ma)
            ])
          ])
        ]))
      ])
    ])) : ve("", !0) : (Z(), Ge(ue(Ht), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Re(({ open: f }) => [
        t.overlay && !t.disabled ? (Z(), Ge(ue(Go), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : ve("", !0),
        oe(ue(Ko), {
          as: "label",
          class: "relative block"
        }, {
          default: Re(() => [
            jt(p.$slots, "default", {
              value: $.value,
              placeholder: E.value,
              clear: U
            }, () => [
              re(D("input", yo({
                ref_key: "VtdInputRef",
                ref: L
              }, p.$attrs, {
                "onUpdate:modelValue": s[0] || (s[0] = (d) => $.value = d),
                type: "text",
                class: ["relative block w-full", [
                  t.disabled ? "cursor-default opacity-50" : "opacity-100",
                  e.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: t.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: E.value,
                onKeyup: _e(Q, ["stop"]),
                onKeydown: s[1] || (s[1] = _e(() => {
                }, ["stop"]))
              }), null, 16, Hn), [
                [bo, $.value]
              ]),
              D("div", Un, [
                D("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: Pe([
                    t.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: s[2] || (s[2] = (d) => {
                    var x;
                    return t.disabled ? !1 : $.value ? U() : (x = L.value) == null ? void 0 : x.focus();
                  })
                }, [
                  jt(p.$slots, "inputIcon", { value: $.value }, () => [
                    (Z(), q("svg", zn, [
                      $.value ? (Z(), q("path", Kn)) : (Z(), q("path", Gn))
                    ]))
                  ])
                ], 10, Wn)
              ])
            ])
          ]),
          _: 3
        }),
        oe(Tt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Re(() => [
            t.disabled ? ve("", !0) : (Z(), Ge(ue(Zo), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Re(({ close: d }) => [
                D("div", {
                  class: Pe(["absolute z-50 top-full sm:mt-2.5", ze(f)])
                }, [
                  D("div", {
                    ref_key: "VtdRef",
                    ref: N,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    D("div", {
                      class: Pe(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 lg:p-6 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", We(f)])
                    }, [
                      D("div", {
                        onClick: (x) => d(),
                        class: "text-vtd-orange absolute cursor-pointer top-3 right-3"
                      }, [...s[11] || (s[11] = [
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
                      ])], 8, Zn),
                      D("div", qn, [
                        t.shortcuts ? (Z(), Ge(Dt, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": g(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: d
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : ve("", !0),
                        D("div", Jn, [
                          g() && !t.asSingle ? (Z(), q("div", Xn, [...s[12] || (s[12] = [
                            D("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1)
                          ])])) : ve("", !0),
                          D("div", {
                            class: Pe(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": g() && !t.asSingle,
                              "w-full": !g() && t.asSingle
                            }])
                          }, [
                            oe(tt, {
                              panel: r.previous,
                              calendar: M.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            D("div", Qn, [
                              re(oe(rt, {
                                months: G.value,
                                onUpdateMonth: M.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [fe, r.previous.month]
                              ]),
                              re(oe(nt, {
                                years: M.value.previous.years(),
                                onUpdateYear: M.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [fe, r.previous.year]
                              ]),
                              re(D("div", null, [
                                oe(at, { weeks: z.value }, null, 8, ["weeks"]),
                                oe(ot, {
                                  calendar: M.value.previous,
                                  weeks: z.value,
                                  "as-range": g(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (x) => J(x, d)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [fe, r.previous.calendar]
                              ])
                            ])
                          ], 2),
                          g() && !t.asSingle ? (Z(), q("div", ea, [
                            oe(tt, {
                              "as-prev-or-next": "",
                              panel: r.next,
                              calendar: M.value.next
                            }, null, 8, ["panel", "calendar"]),
                            D("div", ta, [
                              re(oe(rt, {
                                months: G.value,
                                onUpdateMonth: M.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [fe, r.next.month]
                              ]),
                              re(oe(nt, {
                                "as-prev-or-next": "",
                                years: M.value.next.years(),
                                onUpdateYear: M.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [fe, r.next.year]
                              ]),
                              re(D("div", null, [
                                oe(at, { weeks: z.value }, null, 8, ["weeks"]),
                                oe(ot, {
                                  "as-prev-or-next": "",
                                  calendar: M.value.next,
                                  weeks: z.value,
                                  "as-range": g(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (x) => J(x, d)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [fe, r.next.calendar]
                              ])
                            ])
                          ])) : ve("", !0)
                        ])
                      ]),
                      t.autoApply ? (Z(), q("div", ca, [
                        D("div", ma, [
                          D("div", fa, [
                            D("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (x) => d(),
                              textContent: le(t.options.footer.cancel)
                            }, null, 8, pa)
                          ])
                        ])
                      ])) : (Z(), q("div", oa, [
                        D("div", na, [
                          D("div", aa, [
                            D("label", ra, [
                              re(D("input", {
                                type: "checkbox",
                                name: "morning",
                                id: "check-morning",
                                "onUpdate:modelValue": s[3] || (s[3] = (x) => m.morning = x)
                              }, null, 512), [
                                [Qe, m.morning]
                              ]),
                              s[13] || (s[13] = D("span", null, "Show Morning", -1))
                            ]),
                            D("label", sa, [
                              re(D("input", {
                                type: "checkbox",
                                name: "afternoon",
                                id: "check-afternoon",
                                "onUpdate:modelValue": s[4] || (s[4] = (x) => m.afternoon = x)
                              }, null, 512), [
                                [Qe, m.afternoon]
                              ]),
                              s[14] || (s[14] = D("span", null, "Show Afternoon", -1))
                            ]),
                            D("label", la, [
                              re(D("input", {
                                type: "checkbox",
                                name: "evening",
                                id: "check-evening",
                                "onUpdate:modelValue": s[5] || (s[5] = (x) => m.evening = x)
                              }, null, 512), [
                                [Qe, m.evening]
                              ]),
                              s[15] || (s[15] = D("span", null, "Show Evening", -1))
                            ]),
                            D("label", ua, [
                              re(D("input", {
                                type: "checkbox",
                                name: "night",
                                id: "check-night",
                                "onUpdate:modelValue": s[6] || (s[6] = (x) => m.night = x)
                              }, null, 512), [
                                [Qe, m.night]
                              ]),
                              s[16] || (s[16] = D("span", null, "Show Night", -1))
                            ])
                          ]),
                          D("div", ia, [
                            D("button", {
                              type: "button",
                              class: "away-apply-picker w-full cursor-pointer px-4 py-2 text-vtd-blue bg-white inline-flex justify-center rounded-md border border-vtd-orange text-sm mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:cursor-not-allowed",
                              disabled: t.asSingle ? h.value.length < 1 : h.value.length < 2,
                              onClick: (x) => ne(d),
                              textContent: le(t.options.footer.apply)
                            }, null, 8, da),
                            D("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full cursor-pointer px-4 py-2 text-vtd-blue bg-white inline-flex justify-center rounded-md border border-vtd-orange text-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              onClick: s[7] || (s[7] = (x) => A()),
                              textContent: "Reset"
                            })
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
const io = /* @__PURE__ */ (() => {
  const e = Sa;
  return e.install = (a) => {
    a.component("VueTailwindDatepicker", e);
  }, e;
})(), Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Da).forEach(([e, a]) => {
  e !== "default" && (io[e] = a);
});
export {
  io as default
};
