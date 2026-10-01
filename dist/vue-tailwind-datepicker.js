(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-300:oklch(82.8% .111 230.318);--color-sky-400:oklch(74.6% .16 232.661);--color-sky-500:oklch(68.5% .169 237.323);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-normal:400;--font-weight-medium:500;--font-weight-bold:700;--tracking-wide:.025em;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-vtd-primary-300:var(--color-sky-300);--color-vtd-primary-500:var(--color-sky-500);--color-vtd-primary-600:var(--color-sky-600);--color-vtd-primary-700:var(--color-sky-700);--color-vtd-secondary-50:var(--color-gray-50);--color-vtd-secondary-100:var(--color-gray-100);--color-vtd-secondary-300:var(--color-gray-300);--color-vtd-secondary-400:var(--color-gray-400);--color-vtd-secondary-500:var(--color-gray-500);--color-vtd-secondary-700:var(--color-gray-700);--color-vtd-secondary-800:var(--color-gray-800);--color-vtd-dark-blue:#1e3a8a;--color-vtd-medium-gray:#f4f1ea;--color-vtd-light-gray:#bcb9b9;--color-vtd-orange:#f70;--color-vtd-blue:#0061ff}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-3{top:calc(var(--spacing)*3)}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.right-3{right:calc(var(--spacing)*3)}.right-auto{right:auto}.-left-2{left:calc(var(--spacing)*-2)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-50{z-index:50}.order-last{order:9999}.col-span-7{grid-column:span 7/span 7}.mx-2{margin-inline:calc(var(--spacing)*2)}.my-0{margin-block:calc(var(--spacing)*0)}.my-1{margin-block:calc(var(--spacing)*1)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-1\\/2{width:50%}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-full{width:100%}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-2\\/4{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-3{--tw-translate-y:calc(var(--spacing)*3);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-4{gap:calc(var(--spacing)*4)}.gap-\\[6px\\]{gap:6px}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-x-reverse)))}.gap-y-0{row-gap:calc(var(--spacing)*0)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-l-md{border-top-left-radius:var(--radius-md);border-bottom-left-radius:var(--radius-md)}.rounded-r-md{border-top-right-radius:var(--radius-md);border-bottom-right-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-solid{--tw-border-style:solid;border-style:solid}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-black\\/\\[\\.1\\]{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/\\[\\.1\\]{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-transparent{border-color:#0000}.border-vtd-orange{border-color:var(--color-vtd-orange)}.border-vtd-secondary-300{border-color:var(--color-vtd-secondary-300)}.bg-black{background-color:var(--color-black)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-vtd-dark-blue{background-color:var(--color-vtd-dark-blue)}.bg-vtd-dark-blue\\/10{background-color:#1e3a8a1a}@supports (color:color-mix(in lab,red,red)){.bg-vtd-dark-blue\\/10{background-color:color-mix(in oklab,var(--color-vtd-dark-blue)10%,transparent)}}.bg-vtd-medium-gray{background-color:var(--color-vtd-medium-gray)}.bg-vtd-primary-600{background-color:var(--color-vtd-primary-600)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-10{padding:calc(var(--spacing)*10)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-0\\.5{padding-inline:calc(var(--spacing)*.5)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-12{padding-right:calc(var(--spacing)*12)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[8px\\]{font-size:8px}.leading-6{--tw-leading:calc(var(--spacing)*6);line-height:calc(var(--spacing)*6)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-vtd-blue{color:var(--color-vtd-blue)}.text-vtd-dark-blue{color:var(--color-vtd-dark-blue)}.text-vtd-light-gray{color:var(--color-vtd-light-gray)}.text-vtd-orange{color:var(--color-vtd-orange)}.text-vtd-primary-600{color:var(--color-vtd-primary-600)}.text-vtd-secondary-400{color:var(--color-vtd-secondary-400)}.text-vtd-secondary-700{color:var(--color-vtd-secondary-700)}.text-white{color:var(--color-white)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.placeholder-vtd-secondary-400::placeholder{color:var(--color-vtd-secondary-400)}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow-\\[0_2px_8px_0_\\#BEBEBE26\\]{--tw-shadow:0 2px 8px 0 var(--tw-shadow-color,#bebebe26);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:bg-vtd-medium-gray:hover{background-color:var(--color-vtd-medium-gray)}.hover\\:bg-vtd-secondary-50:hover{background-color:var(--color-vtd-secondary-50)}.hover\\:bg-vtd-secondary-100:hover{background-color:var(--color-vtd-secondary-100)}.hover\\:text-vtd-blue:hover{color:var(--color-vtd-blue)}.hover\\:text-vtd-primary-700:hover{color:var(--color-vtd-primary-700)}}.focus\\:border-vtd-primary-300:focus{border-color:var(--color-vtd-primary-300)}.focus\\:bg-vtd-medium-gray:focus{background-color:var(--color-vtd-medium-gray)}.focus\\:text-vtd-primary-600:focus{color:var(--color-vtd-primary-600)}.focus\\:ring:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-3:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:#ff77001a}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-vtd-orange\\/10:focus{--tw-ring-color:color-mix(in oklab,var(--color-vtd-orange)10%,transparent)}}.focus\\:ring-vtd-primary-500:focus{--tw-ring-color:var(--color-vtd-primary-500)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:text-vtd-light-gray:disabled{color:var(--color-vtd-light-gray)}@media (min-width:40rem){.sm\\:relative{position:relative}.sm\\:static{position:static}.sm\\:z-auto{z-index:auto}.sm\\:order-0{order:0}.sm\\:mx-1{margin-inline:calc(var(--spacing)*1)}.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:mt-1{margin-top:calc(var(--spacing)*1)}.sm\\:mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.sm\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.sm\\:mb-1\\.5{margin-bottom:calc(var(--spacing)*1.5)}.sm\\:ml-3{margin-left:calc(var(--spacing)*3)}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:w-auto{width:auto}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:overflow-visible{overflow:visible}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:border{border-style:var(--tw-border-style);border-width:1px}.sm\\:border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.sm\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.sm\\:shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media (min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:64rem){.lg\\:mx-0{margin-inline:calc(var(--spacing)*0)}.lg\\:mr-1{margin-right:calc(var(--spacing)*1)}.lg\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:h-\\[2rem\\]{height:2rem}.lg\\:w-60{width:calc(var(--spacing)*60)}.lg\\:w-\\[2rem\\]{width:2rem}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:items-start{align-items:flex-start}.lg\\:border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.lg\\:border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.lg\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.lg\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}@media (prefers-color-scheme:dark){.dark\\:border-vtd-secondary-700,.dark\\:border-vtd-secondary-700\\/\\[1\\]{border-color:var(--color-vtd-secondary-700)}.dark\\:bg-vtd-secondary-800{background-color:var(--color-vtd-secondary-800)}.dark\\:text-vtd-secondary-100{color:var(--color-vtd-secondary-100)}.dark\\:placeholder-vtd-secondary-500::placeholder{color:var(--color-vtd-secondary-500)}.dark\\:ring-offset-vtd-secondary-800{--tw-ring-offset-color:var(--color-vtd-secondary-800)}.dark\\:focus\\:border-vtd-primary-500:focus{border-color:var(--color-vtd-primary-500)}}}.vtd-datepicker-overlay.open:before{opacity:.5;display:block}.vtd-datepicker{background-color:#fff!important}.vtd-calendars{flex-wrap:wrap;align-items:flex-start;gap:.25rem;display:flex}.vtd-month-panel{width:100%;min-width:0}.vtd-month-panel--next{display:none!important}@media (min-width:1024px){.vtd-datepicker{width:max-content!important;max-width:none!important}.vtd-calendars{gap:.75rem;flex-wrap:nowrap!important}.vtd-month-panel,.vtd-month-panel--next{flex:0 0 15rem!important;width:15rem!important;display:block!important}}.vtd-datepicker .bg-vtd-medium-gray,.vtd-datepicker button.bg-vtd-medium-gray,.vtd-datepicker .bg-vtd-dark-blue\\/10,.vtd-datepicker [class*="bg-vtd-dark-blue/10"]{background-color:#ffedd5!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}')),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as Mt from "vue";
import { watchEffect as $e, ref as q, computed as ae, onMounted as ut, cloneVNode as gn, h as he, Fragment as ke, defineComponent as de, inject as De, provide as ue, getCurrentInstance as bn, watch as Ze, onUnmounted as rt, Teleport as xn, reactive as ft, shallowRef as wn, openBlock as Z, createElementBlock as J, createElementVNode as T, withDirectives as le, vShow as ve, toDisplayString as oe, renderList as Xe, unref as ie, createCommentVNode as xe, createVNode as te, TransitionGroup as jn, withCtx as Fe, normalizeClass as Ne, Transition as At, nextTick as Ke, isProxy as kn, createBlock as Ge, renderSlot as St, mergeProps as $n, withModifiers as Dt, vModelText as _n, vModelCheckbox as Qe } from "vue";
var Tt;
let Mn = Symbol("headlessui.useid"), Sn = 0;
const Re = (Tt = Mt.useId) != null ? Tt : function() {
  return Mt.inject(Mn, () => `${++Sn}`)();
};
function H(e) {
  var n;
  if (e == null || e.value == null)
    return null;
  let a = (n = e.value.$el) != null ? n : e.value;
  return a instanceof Node ? a : null;
}
function Te(e, n, ...a) {
  if (e in n) {
    let r = n[e];
    return typeof r == "function" ? r(...a) : r;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, Te), t;
}
var Dn = Object.defineProperty, Tn = (e, n, a) => n in e ? Dn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a, Ot = (e, n, a) => (Tn(e, typeof n != "symbol" ? n + "" : n, a), a);
let On = class {
  constructor() {
    Ot(this, "current", this.detect()), Ot(this, "currentId", 0);
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
}, it = new On();
function Ce(e) {
  if (it.isServer)
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
let pt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Me = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Me || {}), lt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(lt || {}), Pn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Pn || {});
function dt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(pt)).sort((n, a) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var bt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(bt || {});
function Et(e, n = 0) {
  var a;
  return e === ((a = Ce(e)) == null ? void 0 : a.body) ? !1 : Te(n, { 0() {
    return e.matches(pt);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(pt))
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
function Yn(e) {
  var n, a;
  return (a = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Vn)) != null ? a : !1;
}
function An(e, n = (a) => a) {
  return e.slice().sort((a, t) => {
    let r = n(a), m = n(t);
    if (r === null || m === null)
      return 0;
    let l = r.compareDocumentPosition(m);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ae(e, n, { sorted: a = !0, relativeTo: t = null, skipElements: r = [] } = {}) {
  var m;
  let l = (m = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? m : document, o = Array.isArray(e) ? a ? An(e) : e : dt(e);
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
  })(), g = n & 32 ? { preventScroll: !0 } : {}, b = 0, j = o.length, O;
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
    O = o[E], O == null || O.focus(g), b += k;
  } while (O !== l.activeElement);
  return n & 6 && Yn(O) && O.select(), 2;
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
  it.isServer || $e((t) => {
    document.addEventListener(e, n, a), t(() => document.removeEventListener(e, n, a));
  });
}
function Lt(e, n, a) {
  it.isServer || $e((t) => {
    window.addEventListener(e, n, a), t(() => window.removeEventListener(e, n, a));
  });
}
function Fn(e, n, a = ae(() => !0)) {
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
    return !Et(o, bt.Loose) && o.tabIndex !== -1 && m.preventDefault(), n(m, o);
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
function Pt(e, n) {
  if (e)
    return e;
  let a = n ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function Nn(e, n) {
  let a = q(Pt(e.value.type, e.value.as));
  return ut(() => {
    a.value = Pt(e.value.type, e.value.as);
  }), $e(() => {
    var t;
    a.value || H(n) && H(n) instanceof HTMLButtonElement && !((t = H(n)) != null && t.hasAttribute("type")) && (a.value = "button");
  }), a;
}
var qe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qe || {}), Rn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Rn || {});
function Oe({ visible: e = !0, features: n = 0, ourProps: a, theirProps: t, ...r }) {
  var m;
  let l = Ft(t, a), o = Object.assign(r, { props: l });
  if (e || n & 2 && l.static)
    return mt(o);
  if (n & 1) {
    let k = (m = l.unmount) == null || m ? 0 : 1;
    return Te(k, { 0() {
      return null;
    }, 1() {
      return mt({ ...r, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return mt(o);
}
function mt({ props: e, attrs: n, slots: a, slot: t, name: r }) {
  var m, l;
  let { as: o, ...k } = In(e, ["unmount", "static"]), y = (m = a.default) == null ? void 0 : m.call(a, t), g = {};
  if (t) {
    let b = !1, j = [];
    for (let [O, E] of Object.entries(t))
      typeof E == "boolean" && (b = !0), E === !0 && j.push(O);
    b && (g["data-headlessui-state"] = j.join(" "));
  }
  if (o === "template") {
    if (y = Bt(y ?? []), Object.keys(k).length > 0 || Object.keys(n).length > 0) {
      let [b, ...j] = y ?? [];
      if (!Wn(b) || j.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(k).concat(Object.keys(n)).map((R) => R.trim()).filter((R, P, L) => L.indexOf(R) === P).sort((R, P) => R.localeCompare(P)).map((R) => `  - ${R}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((R) => `  - ${R}`).join(`
`)].join(`
`));
      let O = Ft((l = b.props) != null ? l : {}, k, g), E = gn(b, O, !0);
      for (let R in O)
        R.startsWith("on") && (E.props || (E.props = {}), E.props[R] = O[R]);
      return E;
    }
    return Array.isArray(y) && y.length === 1 ? y[0] : y;
  }
  return he(o, Object.assign({}, k, g), { default: () => y });
}
function Bt(e) {
  return e.flatMap((n) => n.type === ke ? Bt(n.children) : [n]);
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
let Je = de({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: a }) {
  return () => {
    var t;
    let { features: r, ...m } = e, l = { "aria-hidden": (r & 2) === 2 ? !0 : (t = m["aria-hidden"]) != null ? t : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return Oe({ ourProps: l, theirProps: m, slot: {}, attrs: a, slots: n, name: "Hidden" });
  };
} }), Nt = Symbol("Context");
var Ee = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ee || {});
function Rt() {
  return De(Nt, null);
}
function Hn(e) {
  ue(Nt, e);
}
var Pe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Pe || {});
function Un(e, n, a, t) {
  it.isServer || $e((r) => {
    e = e ?? window, e.addEventListener(n, a, t), r(() => e.removeEventListener(n, a, t));
  });
}
var Se = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Se || {});
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
    return a != null ? null : he(Je, { features: Ie.Hidden, ref: t });
  } };
}
function Kn() {
  let e = q(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return he(Je, { features: Ie.Hidden, ref: e });
  } };
}
let Wt = Symbol("ForcePortalRootContext");
function Gn() {
  return De(Wt, !1);
}
de({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: a }) {
  return ue(Wt, e.force), () => {
    let { force: t, ...r } = e;
    return Oe({ theirProps: r, ourProps: {}, slot: {}, slots: n, attrs: a, name: "ForcePortalRoot" });
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
const vt = /* @__PURE__ */ new WeakMap();
function qn(e) {
  var n;
  return (n = vt.get(e)) != null ? n : 0;
}
function Ct(e, n) {
  let a = n(qn(e));
  return a <= 0 ? vt.delete(e) : vt.set(e, a), a;
}
de({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: a }) {
  let t = q(null), r = ae(() => Ce(t)), m = Gn(), l = De(Ht, null), o = q(m === !0 || l == null ? Zn(t.value) : l.resolveTarget());
  o.value && Ct(o.value, (j) => j + 1);
  let k = q(!1);
  ut(() => {
    k.value = !0;
  }), $e(() => {
    m || l != null && (o.value = l.resolveTarget());
  });
  let y = De(ht, null), g = !1, b = bn();
  return Ze(t, () => {
    if (g || !y)
      return;
    let j = H(t);
    j && (rt(y.register(j), b), g = !0);
  }), rt(() => {
    var j, O;
    let E = (j = r.value) == null ? void 0 : j.getElementById("headlessui-portal-root");
    !E || o.value !== E || Ct(o.value, (R) => R - 1) || o.value.children.length > 0 || (O = o.value.parentElement) == null || O.removeChild(o.value);
  }), () => {
    if (!k.value || o.value === null)
      return null;
    let j = { ref: t, "data-headlessui-portal": "" };
    return he(xn, { to: o.value }, Oe({ ourProps: j, theirProps: e, slot: {}, attrs: a, slots: n, name: "Portal" }));
  };
} });
let ht = Symbol("PortalParentContext");
function Jn() {
  let e = De(ht, null), n = q([]);
  function a(m) {
    return n.value.push(m), e && e.register(m), () => t(m);
  }
  function t(m) {
    let l = n.value.indexOf(m);
    l !== -1 && n.value.splice(l, 1), e && e.unregister(m);
  }
  let r = { register: a, unregister: t, portals: n };
  return [n, de({ name: "PortalWrapper", setup(m, { slots: l }) {
    return ue(ht, r), () => {
      var o;
      return (o = l.default) == null ? void 0 : o.call(l);
    };
  } })];
}
let Ht = Symbol("PortalGroupContext");
de({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: a }) {
  let t = ft({ resolveTarget() {
    return e.target;
  } });
  return ue(Ht, t), () => {
    let { target: r, ...m } = e;
    return Oe({ theirProps: m, ourProps: {}, slot: {}, attrs: n, slots: a, name: "PortalGroup" });
  };
} });
var Xn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Xn || {});
let Ut = Symbol("PopoverContext");
function ct(e) {
  let n = De(Ut, null);
  if (n === null) {
    let a = new Error(`<${e} /> is missing a parent <${Zt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, ct), a;
  }
  return n;
}
let zt = Symbol("PopoverGroupContext");
function Kt() {
  return De(zt, null);
}
let Gt = Symbol("PopoverPanelContext");
function Qn() {
  return De(Gt, null);
}
let Zt = de({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: a, expose: t }) {
  var r;
  let m = q(null);
  t({ el: m, $el: m });
  let l = q(1), o = q(null), k = q(null), y = q(null), g = q(null), b = ae(() => Ce(m)), j = ae(() => {
    var M, w;
    if (!H(o) || !H(g))
      return !1;
    for (let G of document.querySelectorAll("body > *"))
      if (Number(G == null ? void 0 : G.contains(H(o))) ^ Number(G == null ? void 0 : G.contains(H(g))))
        return !0;
    let v = dt(), p = v.indexOf(H(o)), A = (p + v.length - 1) % v.length, B = (p + 1) % v.length, f = v[A], s = v[B];
    return !((M = H(g)) != null && M.contains(f)) && !((w = H(g)) != null && w.contains(s));
  }), O = { popoverState: l, buttonId: q(null), panelId: q(null), panel: g, button: o, isPortalled: j, beforePanelSentinel: k, afterPanelSentinel: y, togglePopover() {
    l.value = Te(l.value, { 0: 1, 1: 0 });
  }, closePopover() {
    l.value !== 1 && (l.value = 1);
  }, close(M) {
    O.closePopover();
    let w = (() => M ? M instanceof HTMLElement ? M : M.value instanceof HTMLElement ? H(M) : H(O.button) : H(O.button))();
    w == null || w.focus();
  } };
  ue(Ut, O), Hn(ae(() => Te(l.value, { 0: Ee.Open, 1: Ee.Closed })));
  let E = { buttonId: O.buttonId, panelId: O.panelId, close() {
    O.closePopover();
  } }, R = Kt(), P = R == null ? void 0 : R.registerPopover, [L, N] = Jn(), V = zn({ mainTreeNodeRef: R == null ? void 0 : R.mainTreeNodeRef, portals: L, defaultContainers: [o, g] });
  function W() {
    var M, w, v, p;
    return (p = R == null ? void 0 : R.isFocusWithinPopoverGroup()) != null ? p : ((M = b.value) == null ? void 0 : M.activeElement) && (((w = H(o)) == null ? void 0 : w.contains(b.value.activeElement)) || ((v = H(g)) == null ? void 0 : v.contains(b.value.activeElement)));
  }
  return $e(() => P == null ? void 0 : P(E)), Un((r = b.value) == null ? void 0 : r.defaultView, "focus", (M) => {
    var w, v;
    M.target !== window && M.target instanceof HTMLElement && l.value === 0 && (W() || o && g && (V.contains(M.target) || (w = H(O.beforePanelSentinel)) != null && w.contains(M.target) || (v = H(O.afterPanelSentinel)) != null && v.contains(M.target) || O.closePopover()));
  }, !0), Fn(V.resolveContainers, (M, w) => {
    var v;
    O.closePopover(), Et(w, bt.Loose) || (M.preventDefault(), (v = H(o)) == null || v.focus());
  }, ae(() => l.value === 0)), () => {
    let M = { open: l.value === 0, close: O.close };
    return he(ke, [he(N, {}, () => Oe({ theirProps: { ...e, ...a }, ourProps: { ref: m }, slot: M, slots: n, attrs: a, name: "Popover" })), he(V.MainTreeNode)]);
  };
} }), eo = de({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: a, expose: t }) {
  var r;
  let m = (r = e.id) != null ? r : `headlessui-popover-button-${Re()}`, l = ct("PopoverButton"), o = ae(() => Ce(l.button));
  t({ el: l.button, $el: l.button }), ut(() => {
    l.buttonId.value = m;
  }), rt(() => {
    l.buttonId.value = null;
  });
  let k = Kt(), y = k == null ? void 0 : k.closeOthers, g = Qn(), b = ae(() => g === null ? !1 : g.value === l.panelId.value), j = q(null), O = `headlessui-focus-sentinel-${Re()}`;
  b.value || $e(() => {
    l.button.value = H(j);
  });
  let E = Nn(ae(() => ({ as: e.as, type: n.type })), j);
  function R(M) {
    var w, v, p, A, B;
    if (b.value) {
      if (l.popoverState.value === 1)
        return;
      switch (M.key) {
        case Pe.Space:
        case Pe.Enter:
          M.preventDefault(), (v = (w = M.target).click) == null || v.call(w), l.closePopover(), (p = H(l.button)) == null || p.focus();
          break;
      }
    } else
      switch (M.key) {
        case Pe.Space:
        case Pe.Enter:
          M.preventDefault(), M.stopPropagation(), l.popoverState.value === 1 && (y == null || y(l.buttonId.value)), l.togglePopover();
          break;
        case Pe.Escape:
          if (l.popoverState.value !== 0)
            return y == null ? void 0 : y(l.buttonId.value);
          if (!H(l.button) || (A = o.value) != null && A.activeElement && !((B = H(l.button)) != null && B.contains(o.value.activeElement)))
            return;
          M.preventDefault(), M.stopPropagation(), l.closePopover();
          break;
      }
  }
  function P(M) {
    b.value || M.key === Pe.Space && M.preventDefault();
  }
  function L(M) {
    var w, v;
    e.disabled || (b.value ? (l.closePopover(), (w = H(l.button)) == null || w.focus()) : (M.preventDefault(), M.stopPropagation(), l.popoverState.value === 1 && (y == null || y(l.buttonId.value)), l.togglePopover(), (v = H(l.button)) == null || v.focus()));
  }
  function N(M) {
    M.preventDefault(), M.stopPropagation();
  }
  let V = It();
  function W() {
    let M = H(l.panel);
    if (!M)
      return;
    function w() {
      Te(V.value, { [Se.Forwards]: () => Ae(M, Me.First), [Se.Backwards]: () => Ae(M, Me.Last) }) === lt.Error && Ae(dt().filter((v) => v.dataset.headlessuiFocusGuard !== "true"), Te(V.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(l.button) });
    }
    w();
  }
  return () => {
    let M = l.popoverState.value === 0, w = { open: M }, { ...v } = e, p = b.value ? { ref: j, type: E.value, onKeydown: R, onClick: L } : { ref: j, id: m, type: E.value, "aria-expanded": l.popoverState.value === 0, "aria-controls": H(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: R, onKeyup: P, onClick: L, onMousedown: N };
    return he(ke, [Oe({ ourProps: p, theirProps: { ...n, ...v }, slot: w, attrs: n, slots: a, name: "PopoverButton" }), M && !b.value && l.isPortalled.value && he(Je, { id: O, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: W })]);
  };
} }), to = de({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: a }) {
  let t = ct("PopoverOverlay"), r = `headlessui-popover-overlay-${Re()}`, m = Rt(), l = ae(() => m !== null ? (m.value & Ee.Open) === Ee.Open : t.popoverState.value === 0);
  function o() {
    t.closePopover();
  }
  return () => {
    let k = { open: t.popoverState.value === 0 };
    return Oe({ ourProps: { id: r, "aria-hidden": !0, onClick: o }, theirProps: e, slot: k, attrs: n, slots: a, features: qe.RenderStrategy | qe.Static, visible: l.value, name: "PopoverOverlay" });
  };
} }), no = de({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: a, expose: t }) {
  var r;
  let m = (r = e.id) != null ? r : `headlessui-popover-panel-${Re()}`, { focus: l } = e, o = ct("PopoverPanel"), k = ae(() => Ce(o.panel)), y = `headlessui-focus-sentinel-before-${Re()}`, g = `headlessui-focus-sentinel-after-${Re()}`;
  t({ el: o.panel, $el: o.panel }), ut(() => {
    o.panelId.value = m;
  }), rt(() => {
    o.panelId.value = null;
  }), ue(Gt, o.panelId), $e(() => {
    var N, V;
    if (!l || o.popoverState.value !== 0 || !o.panel)
      return;
    let W = (N = k.value) == null ? void 0 : N.activeElement;
    (V = H(o.panel)) != null && V.contains(W) || Ae(H(o.panel), Me.First);
  });
  let b = Rt(), j = ae(() => b !== null ? (b.value & Ee.Open) === Ee.Open : o.popoverState.value === 0);
  function O(N) {
    var V, W;
    switch (N.key) {
      case Pe.Escape:
        if (o.popoverState.value !== 0 || !H(o.panel) || k.value && !((V = H(o.panel)) != null && V.contains(k.value.activeElement)))
          return;
        N.preventDefault(), N.stopPropagation(), o.closePopover(), (W = H(o.button)) == null || W.focus();
        break;
    }
  }
  function E(N) {
    var V, W, M, w, v;
    let p = N.relatedTarget;
    p && H(o.panel) && ((V = H(o.panel)) != null && V.contains(p) || (o.closePopover(), ((M = (W = H(o.beforePanelSentinel)) == null ? void 0 : W.contains) != null && M.call(W, p) || (v = (w = H(o.afterPanelSentinel)) == null ? void 0 : w.contains) != null && v.call(w, p)) && p.focus({ preventScroll: !0 })));
  }
  let R = It();
  function P() {
    let N = H(o.panel);
    if (!N)
      return;
    function V() {
      Te(R.value, { [Se.Forwards]: () => {
        var W;
        Ae(N, Me.First) === lt.Error && ((W = H(o.afterPanelSentinel)) == null || W.focus());
      }, [Se.Backwards]: () => {
        var W;
        (W = H(o.button)) == null || W.focus({ preventScroll: !0 });
      } });
    }
    V();
  }
  function L() {
    let N = H(o.panel);
    if (!N)
      return;
    function V() {
      Te(R.value, { [Se.Forwards]: () => {
        let W = H(o.button), M = H(o.panel);
        if (!W)
          return;
        let w = dt(), v = w.indexOf(W), p = w.slice(0, v + 1), A = [...w.slice(v + 1), ...p];
        for (let B of A.slice())
          if (B.dataset.headlessuiFocusGuard === "true" || M != null && M.contains(B)) {
            let f = A.indexOf(B);
            f !== -1 && A.splice(f, 1);
          }
        Ae(A, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var W;
        Ae(N, Me.Previous) === lt.Error && ((W = H(o.button)) == null || W.focus());
      } });
    }
    V();
  }
  return () => {
    let N = { open: o.popoverState.value === 0, close: o.close }, { focus: V, ...W } = e, M = { ref: o.panel, id: m, onKeydown: O, onFocusout: l && o.popoverState.value === 0 ? E : void 0, tabIndex: -1 };
    return Oe({ ourProps: M, theirProps: { ...n, ...W }, attrs: n, slot: N, slots: { ...a, default: (...w) => {
      var v;
      return [he(ke, [j.value && o.isPortalled.value && he(Je, { id: y, ref: o.beforePanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: P }), (v = a.default) == null ? void 0 : v.call(a, ...w), j.value && o.isPortalled.value && he(Je, { id: g, ref: o.afterPanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: L })])];
    } }, features: qe.RenderStrategy | qe.Static, visible: j.value, name: "PopoverPanel" });
  };
} });
de({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: a, expose: t }) {
  let r = q(null), m = wn([]), l = ae(() => Ce(r)), o = Kn();
  t({ el: r, $el: r });
  function k(j) {
    let O = m.value.indexOf(j);
    O !== -1 && m.value.splice(O, 1);
  }
  function y(j) {
    return m.value.push(j), () => {
      k(j);
    };
  }
  function g() {
    var j;
    let O = l.value;
    if (!O)
      return !1;
    let E = O.activeElement;
    return (j = H(r)) != null && j.contains(E) ? !0 : m.value.some((R) => {
      var P, L;
      return ((P = O.getElementById(R.buttonId.value)) == null ? void 0 : P.contains(E)) || ((L = O.getElementById(R.panelId.value)) == null ? void 0 : L.contains(E));
    });
  }
  function b(j) {
    for (let O of m.value)
      O.buttonId.value !== j && O.close();
  }
  return ue(zt, { registerPopover: y, unregisterPopover: k, isFocusWithinPopoverGroup: g, closeOthers: b, mainTreeNodeRef: o.mainTreeNodeRef }), () => he(ke, [Oe({ ourProps: { ref: r }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: a, name: "PopoverGroup" }), he(o.MainTreeNode)]);
} });
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qt = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    var a = 1e3, t = 6e4, r = 36e5, m = "millisecond", l = "second", o = "minute", k = "hour", y = "day", g = "week", b = "month", j = "quarter", O = "year", E = "date", R = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, N = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var $ = ["th", "st", "nd", "rd"], _ = C % 100;
      return "[" + C + ($[(_ - 20) % 10] || $[_] || $[0]) + "]";
    } }, V = function(C, $, _) {
      var S = String(C);
      return !S || S.length >= $ ? C : "" + Array($ + 1 - S.length).join(_) + C;
    }, W = { s: V, z: function(C) {
      var $ = -C.utcOffset(), _ = Math.abs($), S = Math.floor(_ / 60), D = _ % 60;
      return ($ <= 0 ? "+" : "-") + V(S, 2, "0") + ":" + V(D, 2, "0");
    }, m: function C($, _) {
      if ($.date() < _.date())
        return -C(_, $);
      var S = 12 * (_.year() - $.year()) + (_.month() - $.month()), D = $.clone().add(S, b), I = _ - D < 0, U = $.clone().add(S + (I ? -1 : 1), b);
      return +(-(S + (_ - D) / (I ? D - U : U - D)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: b, y: O, w: g, d: y, D: E, h: k, m: o, s: l, ms: m, Q: j }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, M = "en", w = {};
    w[M] = N;
    var v = "$isDayjsObject", p = function(C) {
      return C instanceof s || !(!C || !C[v]);
    }, A = function C($, _, S) {
      var D;
      if (!$)
        return M;
      if (typeof $ == "string") {
        var I = $.toLowerCase();
        w[I] && (D = I), _ && (w[I] = _, D = I);
        var U = $.split("-");
        if (!D && U.length > 1)
          return C(U[0]);
      } else {
        var F = $.name;
        w[F] = $, D = F;
      }
      return !S && D && (M = D), D || !S && M;
    }, B = function(C, $) {
      if (p(C))
        return C.clone();
      var _ = typeof $ == "object" ? $ : {};
      return _.date = C, _.args = arguments, new s(_);
    }, f = W;
    f.l = A, f.i = p, f.w = function(C, $) {
      return B(C, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var s = function() {
      function C(_) {
        this.$L = A(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[v] = !0;
      }
      var $ = C.prototype;
      return $.parse = function(_) {
        this.$d = function(S) {
          var D = S.date, I = S.utc;
          if (D === null)
            return /* @__PURE__ */ new Date(NaN);
          if (f.u(D))
            return /* @__PURE__ */ new Date();
          if (D instanceof Date)
            return new Date(D);
          if (typeof D == "string" && !/Z$/i.test(D)) {
            var U = D.match(P);
            if (U) {
              var F = U[2] - 1 || 0, X = (U[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(U[1], F, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, X)) : new Date(U[1], F, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, X);
            }
          }
          return new Date(D);
        }(_), this.init();
      }, $.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, $.$utils = function() {
        return f;
      }, $.isValid = function() {
        return this.$d.toString() !== R;
      }, $.isSame = function(_, S) {
        var D = B(_);
        return this.startOf(S) <= D && D <= this.endOf(S);
      }, $.isAfter = function(_, S) {
        return B(_) < this.startOf(S);
      }, $.isBefore = function(_, S) {
        return this.endOf(S) < B(_);
      }, $.$g = function(_, S, D) {
        return f.u(_) ? this[S] : this.set(D, _);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(_, S) {
        var D = this, I = !!f.u(S) || S, U = f.p(_), F = function(ye, se) {
          var pe = f.w(D.$u ? Date.UTC(D.$y, se, ye) : new Date(D.$y, se, ye), D);
          return I ? pe : pe.endOf(y);
        }, X = function(ye, se) {
          return f.w(D.toDate()[ye].apply(D.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(se)), D);
        }, Q = this.$W, ne = this.$M, ce = this.$D, me = "set" + (this.$u ? "UTC" : "");
        switch (U) {
          case O:
            return I ? F(1, 0) : F(31, 11);
          case b:
            return I ? F(1, ne) : F(0, ne + 1);
          case g:
            var be = this.$locale().weekStart || 0, _e = (Q < be ? Q + 7 : Q) - be;
            return F(I ? ce - _e : ce + (6 - _e), ne);
          case y:
          case E:
            return X(me + "Hours", 0);
          case k:
            return X(me + "Minutes", 1);
          case o:
            return X(me + "Seconds", 2);
          case l:
            return X(me + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(_) {
        return this.startOf(_, !1);
      }, $.$set = function(_, S) {
        var D, I = f.p(_), U = "set" + (this.$u ? "UTC" : ""), F = (D = {}, D[y] = U + "Date", D[E] = U + "Date", D[b] = U + "Month", D[O] = U + "FullYear", D[k] = U + "Hours", D[o] = U + "Minutes", D[l] = U + "Seconds", D[m] = U + "Milliseconds", D)[I], X = I === y ? this.$D + (S - this.$W) : S;
        if (I === b || I === O) {
          var Q = this.clone().set(E, 1);
          Q.$d[F](X), Q.init(), this.$d = Q.set(E, Math.min(this.$D, Q.daysInMonth())).$d;
        } else
          F && this.$d[F](X);
        return this.init(), this;
      }, $.set = function(_, S) {
        return this.clone().$set(_, S);
      }, $.get = function(_) {
        return this[f.p(_)]();
      }, $.add = function(_, S) {
        var D, I = this;
        _ = Number(_);
        var U = f.p(S), F = function(ne) {
          var ce = B(I);
          return f.w(ce.date(ce.date() + Math.round(ne * _)), I);
        };
        if (U === b)
          return this.set(b, this.$M + _);
        if (U === O)
          return this.set(O, this.$y + _);
        if (U === y)
          return F(1);
        if (U === g)
          return F(7);
        var X = (D = {}, D[o] = t, D[k] = r, D[l] = a, D)[U] || 1, Q = this.$d.getTime() + _ * X;
        return f.w(Q, this);
      }, $.subtract = function(_, S) {
        return this.add(-1 * _, S);
      }, $.format = function(_) {
        var S = this, D = this.$locale();
        if (!this.isValid())
          return D.invalidDate || R;
        var I = _ || "YYYY-MM-DDTHH:mm:ssZ", U = f.z(this), F = this.$H, X = this.$m, Q = this.$M, ne = D.weekdays, ce = D.months, me = D.meridiem, be = function(se, pe, ge, fe) {
          return se && (se[pe] || se(S, I)) || ge[pe].slice(0, fe);
        }, _e = function(se) {
          return f.s(F % 12 || 12, se, "0");
        }, ye = me || function(se, pe, ge) {
          var fe = se < 12 ? "AM" : "PM";
          return ge ? fe.toLowerCase() : fe;
        };
        return I.replace(L, function(se, pe) {
          return pe || function(ge) {
            switch (ge) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return f.s(S.$y, 4, "0");
              case "M":
                return Q + 1;
              case "MM":
                return f.s(Q + 1, 2, "0");
              case "MMM":
                return be(D.monthsShort, Q, ce, 3);
              case "MMMM":
                return be(ce, Q);
              case "D":
                return S.$D;
              case "DD":
                return f.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return be(D.weekdaysMin, S.$W, ne, 2);
              case "ddd":
                return be(D.weekdaysShort, S.$W, ne, 3);
              case "dddd":
                return ne[S.$W];
              case "H":
                return String(F);
              case "HH":
                return f.s(F, 2, "0");
              case "h":
                return _e(1);
              case "hh":
                return _e(2);
              case "a":
                return ye(F, X, !0);
              case "A":
                return ye(F, X, !1);
              case "m":
                return String(X);
              case "mm":
                return f.s(X, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return f.s(S.$s, 2, "0");
              case "SSS":
                return f.s(S.$ms, 3, "0");
              case "Z":
                return U;
            }
            return null;
          }(se) || U.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(_, S, D) {
        var I, U = this, F = f.p(S), X = B(_), Q = (X.utcOffset() - this.utcOffset()) * t, ne = this - X, ce = function() {
          return f.m(U, X);
        };
        switch (F) {
          case O:
            I = ce() / 12;
            break;
          case b:
            I = ce();
            break;
          case j:
            I = ce() / 3;
            break;
          case g:
            I = (ne - Q) / 6048e5;
            break;
          case y:
            I = (ne - Q) / 864e5;
            break;
          case k:
            I = ne / r;
            break;
          case o:
            I = ne / t;
            break;
          case l:
            I = ne / a;
            break;
          default:
            I = ne;
        }
        return D ? I : f.a(I);
      }, $.daysInMonth = function() {
        return this.endOf(b).$D;
      }, $.$locale = function() {
        return w[this.$L];
      }, $.locale = function(_, S) {
        if (!_)
          return this.$L;
        var D = this.clone(), I = A(_, S, !0);
        return I && (D.$L = I), D;
      }, $.clone = function() {
        return f.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), G = s.prototype;
    return B.prototype = G, [["$ms", m], ["$s", l], ["$m", o], ["$H", k], ["$W", y], ["$M", b], ["$y", O], ["$D", E]].forEach(function(C) {
      G[C[1]] = function($) {
        return this.$g($, C[0], C[1]);
      };
    }), B.extend = function(C, $) {
      return C.$i || (C($, s, B), C.$i = !0), B;
    }, B.locale = A, B.isDayjs = p, B.unix = function(C) {
      return B(1e3 * C);
    }, B.en = w[M], B.Ls = w, B.p = {}, B;
  });
})(qt);
var oo = qt.exports;
const c = /* @__PURE__ */ Ye(oo);
var Jt = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    return function(a, t, r) {
      var m = t.prototype, l = function(b) {
        return b && (b.indexOf ? b : b.s);
      }, o = function(b, j, O, E, R) {
        var P = b.name ? b : b.$locale(), L = l(P[j]), N = l(P[O]), V = L || N.map(function(M) {
          return M.slice(0, E);
        });
        if (!R)
          return V;
        var W = P.weekStart;
        return V.map(function(M, w) {
          return V[(w + (W || 0)) % 7];
        });
      }, k = function() {
        return r.Ls[r.locale()];
      }, y = function(b, j) {
        return b.formats[j] || function(O) {
          return O.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, R, P) {
            return R || P.slice(1);
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
const so = /* @__PURE__ */ Ye(ao);
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
          return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, E, R) {
            var P = R && R.toUpperCase();
            return E || j[R] || a[R] || j[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, N, V) {
              return N || V.slice(1);
            });
          });
        }(k, y === void 0 ? {} : y);
        return o.call(this, g);
      };
    };
  });
})(Xt);
var ro = Xt.exports;
const lo = /* @__PURE__ */ Ye(ro);
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
        var N = L.match(/([+-]|\d\d)/g), V = 60 * N[1] + (+N[2] || 0);
        return V === 0 ? 0 : N[0] === "+" ? -V : V;
      }(P);
    }], j = function(P) {
      var L = k[P];
      return L && (L.indexOf ? L : L.s.concat(L.f));
    }, O = function(P, L) {
      var N, V = k.meridiem;
      if (V) {
        for (var W = 1; W <= 24; W += 1)
          if (P.indexOf(V(W, 0, L)) > -1) {
            N = W > 12;
            break;
          }
      } else
        N = P === (L ? "pm" : "PM");
      return N;
    }, E = { A: [o, function(P) {
      this.afternoon = O(P, !1);
    }], a: [o, function(P) {
      this.afternoon = O(P, !0);
    }], Q: [r, function(P) {
      this.month = 3 * (P - 1) + 1;
    }], S: [r, function(P) {
      this.milliseconds = 100 * +P;
    }], SS: [m, function(P) {
      this.milliseconds = 10 * +P;
    }], SSS: [/\d{3}/, function(P) {
      this.milliseconds = +P;
    }], s: [l, g("seconds")], ss: [l, g("seconds")], m: [l, g("minutes")], mm: [l, g("minutes")], H: [l, g("hours")], h: [l, g("hours")], HH: [l, g("hours")], hh: [l, g("hours")], D: [l, g("day")], DD: [m, g("day")], Do: [o, function(P) {
      var L = k.ordinal, N = P.match(/\d+/);
      if (this.day = N[0], L)
        for (var V = 1; V <= 31; V += 1)
          L(V).replace(/\[|\]/g, "") === P && (this.day = V);
    }], w: [l, g("week")], ww: [m, g("week")], M: [l, g("month")], MM: [m, g("month")], MMM: [o, function(P) {
      var L = j("months"), N = (j("monthsShort") || L.map(function(V) {
        return V.slice(0, 3);
      })).indexOf(P) + 1;
      if (N < 1)
        throw new Error();
      this.month = N % 12 || N;
    }], MMMM: [o, function(P) {
      var L = j("months").indexOf(P) + 1;
      if (L < 1)
        throw new Error();
      this.month = L % 12 || L;
    }], Y: [/[+-]?\d+/, g("year")], YY: [m, function(P) {
      this.year = y(P);
    }], YYYY: [/\d{4}/, g("year")], Z: b, ZZ: b };
    function R(P) {
      var L, N;
      L = P, N = k && k.formats;
      for (var V = (P = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, f, s) {
        var G = s && s.toUpperCase();
        return f || N[s] || a[s] || N[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(C, $, _) {
          return $ || _.slice(1);
        });
      })).match(t), W = V.length, M = 0; M < W; M += 1) {
        var w = V[M], v = E[w], p = v && v[0], A = v && v[1];
        V[M] = A ? { regex: p, parser: A } : w.replace(/^\[|\]$/g, "");
      }
      return function(B) {
        for (var f = {}, s = 0, G = 0; s < W; s += 1) {
          var C = V[s];
          if (typeof C == "string")
            G += C.length;
          else {
            var $ = C.regex, _ = C.parser, S = B.slice(G), D = $.exec(S)[0];
            _.call(f, D), B = B.replace(D, "");
          }
        }
        return function(I) {
          var U = I.afternoon;
          if (U !== void 0) {
            var F = I.hours;
            U ? F < 12 && (I.hours += 12) : F === 12 && (I.hours = 0), delete I.afternoon;
          }
        }(f), f;
      };
    }
    return function(P, L, N) {
      N.p.customParseFormat = !0, P && P.parseTwoDigitYear && (y = P.parseTwoDigitYear);
      var V = L.prototype, W = V.parse;
      V.parse = function(M) {
        var w = M.date, v = M.utc, p = M.args;
        this.$u = v;
        var A = p[1];
        if (typeof A == "string") {
          var B = p[2] === !0, f = p[3] === !0, s = B || f, G = p[2];
          f && (G = p[2]), k = this.$locale(), !B && G && (k = N.Ls[G]), this.$d = function(S, D, I, U) {
            try {
              if (["x", "X"].indexOf(D) > -1)
                return new Date((D === "X" ? 1e3 : 1) * S);
              var F = R(D)(S), X = F.year, Q = F.month, ne = F.day, ce = F.hours, me = F.minutes, be = F.seconds, _e = F.milliseconds, ye = F.zone, se = F.week, pe = /* @__PURE__ */ new Date(), ge = ne || (X || Q ? 1 : pe.getDate()), fe = X || pe.getFullYear(), Le = 0;
              X && !Q || (Le = Q > 0 ? Q - 1 : pe.getMonth());
              var Be, We = ce || 0, He = me || 0, Ue = be || 0, ze = _e || 0;
              return ye ? new Date(Date.UTC(fe, Le, ge, We, He, Ue, ze + 60 * ye.offset * 1e3)) : I ? new Date(Date.UTC(fe, Le, ge, We, He, Ue, ze)) : (Be = new Date(fe, Le, ge, We, He, Ue, ze), se && (Be = U(Be).week(se).toDate()), Be);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(w, A, v, N), this.init(), G && G !== !0 && (this.$L = this.locale(G).$L), s && w != this.format(A) && (this.$d = /* @__PURE__ */ new Date("")), k = {};
        } else if (A instanceof Array)
          for (var C = A.length, $ = 1; $ <= C; $ += 1) {
            p[1] = A[$ - 1];
            var _ = N.apply(this, p);
            if (_.isValid()) {
              this.$d = _.$d, this.$L = _.$L, this.init();
              break;
            }
            $ === C && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          W.call(this, M);
      };
    };
  });
})(Qt);
var uo = Qt.exports;
const io = /* @__PURE__ */ Ye(uo);
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
const mo = /* @__PURE__ */ Ye(co);
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
const po = /* @__PURE__ */ Ye(fo);
var nn = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(Ve, function() {
    var a, t, r = 1e3, m = 6e4, l = 36e5, o = 864e5, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = 31536e6, g = 2628e6, b = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, j = { years: y, months: g, days: o, hours: l, minutes: m, seconds: r, milliseconds: 1, weeks: 6048e5 }, O = function(w) {
      return w instanceof W;
    }, E = function(w, v, p) {
      return new W(w, p, v.$l);
    }, R = function(w) {
      return t.p(w) + "s";
    }, P = function(w) {
      return w < 0;
    }, L = function(w) {
      return P(w) ? Math.ceil(w) : Math.floor(w);
    }, N = function(w) {
      return Math.abs(w);
    }, V = function(w, v) {
      return w ? P(w) ? { negative: !0, format: "" + N(w) + v } : { negative: !1, format: "" + w + v } : { negative: !1, format: "" };
    }, W = function() {
      function w(p, A, B) {
        var f = this;
        if (this.$d = {}, this.$l = B, p === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), A)
          return E(p * j[R(A)], this);
        if (typeof p == "number")
          return this.$ms = p, this.parseFromMilliseconds(), this;
        if (typeof p == "object")
          return Object.keys(p).forEach(function(C) {
            f.$d[R(C)] = p[C];
          }), this.calMilliseconds(), this;
        if (typeof p == "string") {
          var s = p.match(b);
          if (s) {
            var G = s.slice(2).map(function(C) {
              return C != null ? Number(C) : 0;
            });
            return this.$d.years = G[0], this.$d.months = G[1], this.$d.weeks = G[2], this.$d.days = G[3], this.$d.hours = G[4], this.$d.minutes = G[5], this.$d.seconds = G[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var v = w.prototype;
      return v.calMilliseconds = function() {
        var p = this;
        this.$ms = Object.keys(this.$d).reduce(function(A, B) {
          return A + (p.$d[B] || 0) * j[B];
        }, 0);
      }, v.parseFromMilliseconds = function() {
        var p = this.$ms;
        this.$d.years = L(p / y), p %= y, this.$d.months = L(p / g), p %= g, this.$d.days = L(p / o), p %= o, this.$d.hours = L(p / l), p %= l, this.$d.minutes = L(p / m), p %= m, this.$d.seconds = L(p / r), p %= r, this.$d.milliseconds = p;
      }, v.toISOString = function() {
        var p = V(this.$d.years, "Y"), A = V(this.$d.months, "M"), B = +this.$d.days || 0;
        this.$d.weeks && (B += 7 * this.$d.weeks);
        var f = V(B, "D"), s = V(this.$d.hours, "H"), G = V(this.$d.minutes, "M"), C = this.$d.seconds || 0;
        this.$d.milliseconds && (C += this.$d.milliseconds / 1e3, C = Math.round(1e3 * C) / 1e3);
        var $ = V(C, "S"), _ = p.negative || A.negative || f.negative || s.negative || G.negative || $.negative, S = s.format || G.format || $.format ? "T" : "", D = (_ ? "-" : "") + "P" + p.format + A.format + f.format + S + s.format + G.format + $.format;
        return D === "P" || D === "-P" ? "P0D" : D;
      }, v.toJSON = function() {
        return this.toISOString();
      }, v.format = function(p) {
        var A = p || "YYYY-MM-DDTHH:mm:ss", B = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return A.replace(k, function(f, s) {
          return s || String(B[f]);
        });
      }, v.as = function(p) {
        return this.$ms / j[R(p)];
      }, v.get = function(p) {
        var A = this.$ms, B = R(p);
        return B === "milliseconds" ? A %= 1e3 : A = B === "weeks" ? L(A / j[B]) : this.$d[B], A || 0;
      }, v.add = function(p, A, B) {
        var f;
        return f = A ? p * j[R(A)] : O(p) ? p.$ms : E(p, this).$ms, E(this.$ms + f * (B ? -1 : 1), this);
      }, v.subtract = function(p, A) {
        return this.add(p, A, !0);
      }, v.locale = function(p) {
        var A = this.clone();
        return A.$l = p, A;
      }, v.clone = function() {
        return E(this.$ms, this);
      }, v.humanize = function(p) {
        return a().add(this.$ms, "ms").locale(this.$l).fromNow(!p);
      }, v.valueOf = function() {
        return this.asMilliseconds();
      }, v.milliseconds = function() {
        return this.get("milliseconds");
      }, v.asMilliseconds = function() {
        return this.as("milliseconds");
      }, v.seconds = function() {
        return this.get("seconds");
      }, v.asSeconds = function() {
        return this.as("seconds");
      }, v.minutes = function() {
        return this.get("minutes");
      }, v.asMinutes = function() {
        return this.as("minutes");
      }, v.hours = function() {
        return this.get("hours");
      }, v.asHours = function() {
        return this.as("hours");
      }, v.days = function() {
        return this.get("days");
      }, v.asDays = function() {
        return this.as("days");
      }, v.weeks = function() {
        return this.get("weeks");
      }, v.asWeeks = function() {
        return this.as("weeks");
      }, v.months = function() {
        return this.get("months");
      }, v.asMonths = function() {
        return this.as("months");
      }, v.years = function() {
        return this.get("years");
      }, v.asYears = function() {
        return this.as("years");
      }, w;
    }(), M = function(w, v, p) {
      return w.add(v.years() * p, "y").add(v.months() * p, "M").add(v.days() * p, "d").add(v.hours() * p, "h").add(v.minutes() * p, "m").add(v.seconds() * p, "s").add(v.milliseconds() * p, "ms");
    };
    return function(w, v, p) {
      a = p, t = p().$utils(), p.duration = function(f, s) {
        var G = p.locale();
        return E(f, { $l: G }, s);
      }, p.isDuration = O;
      var A = v.prototype.add, B = v.prototype.subtract;
      v.prototype.add = function(f, s) {
        return O(f) ? M(this, f, 1) : A.bind(this)(f, s);
      }, v.prototype.subtract = function(f, s) {
        return O(f) ? M(this, f, -1) : B.bind(this)(f, s);
      };
    };
  });
})(nn);
var vo = nn.exports;
const ho = /* @__PURE__ */ Ye(vo);
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
        var j = l(this).startOf(t).date(y).startOf(a).subtract(1, "millisecond"), O = this.diff(j, a, !0);
        return O < 0 ? l(this).startOf("week").week() : Math.ceil(O);
      }, o.weeks = function(k) {
        return k === void 0 && (k = null), this.week(k);
      };
    };
  });
})(on);
var yo = on.exports;
const go = /* @__PURE__ */ Ye(yo);
function we(e, n) {
  const a = De(e, n);
  if (!a)
    throw new Error(`Could not resolve ${e.description}`);
  return a;
}
const Vt = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../node_modules/dayjs/esm/locale/af.js": () => import("./af-3f5e3754.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/am.js": () => import("./am-bc833d79.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-dz.js": () => import("./ar-dz-2b677c27.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-iq.js": () => import("./ar-iq-9280b179.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-kw.js": () => import("./ar-kw-06673fb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ly.js": () => import("./ar-ly-b364c556.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ma.js": () => import("./ar-ma-e9b96f88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-sa.js": () => import("./ar-sa-920b6966.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-tn.js": () => import("./ar-tn-5d2ebe87.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar.js": () => import("./ar-2a82d0f4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/az.js": () => import("./az-659b56f9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/be.js": () => import("./be-8c0cc01b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bg.js": () => import("./bg-406145d9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bi.js": () => import("./bi-951682c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bm.js": () => import("./bm-9d7e855b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn-bd.js": () => import("./bn-bd-087a7a1c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn.js": () => import("./bn-0c0acd44.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bo.js": () => import("./bo-19632568.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/br.js": () => import("./br-5a3443b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bs.js": () => import("./bs-ad641200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ca.js": () => import("./ca-035ea682.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cs.js": () => import("./cs-debeec9e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cv.js": () => import("./cv-dcf48c54.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cy.js": () => import("./cy-daa2e33d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/da.js": () => import("./da-3c1144ee.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-at.js": () => import("./de-at-5acf665a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-ch.js": () => import("./de-ch-6b981a67.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de.js": () => import("./de-77586bc3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/dv.js": () => import("./dv-65849a7f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/el.js": () => import("./el-ae4ad393.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-au.js": () => import("./en-au-a066127b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ca.js": () => import("./en-ca-c5437740.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-gb.js": () => import("./en-gb-c2cc134a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ie.js": () => import("./en-ie-d3ac9ac2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-il.js": () => import("./en-il-6dd24280.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-in.js": () => import("./en-in-2f2879f3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-nz.js": () => import("./en-nz-c996ce95.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-sg.js": () => import("./en-sg-278f7244.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-tt.js": () => import("./en-tt-dcca6678.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en.js": () => import("./en-4402d6fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eo.js": () => import("./eo-2b962c7e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-do.js": () => import("./es-do-e5ec18dc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-mx.js": () => import("./es-mx-0b0fdda9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-pr.js": () => import("./es-pr-ecf92870.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-us.js": () => import("./es-us-9a974819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es.js": () => import("./es-542d397d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/et.js": () => import("./et-cc745c6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eu.js": () => import("./eu-1819a0bf.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fa.js": () => import("./fa-759da5ca.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fi.js": () => import("./fi-48c34162.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fo.js": () => import("./fo-1a56e22a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ca.js": () => import("./fr-ca-a08d1ab6.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ch.js": () => import("./fr-ch-9e54ac3f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr.js": () => import("./fr-34da226b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fy.js": () => import("./fy-32e86ec3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ga.js": () => import("./ga-e14bb9af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gd.js": () => import("./gd-525324a8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gl.js": () => import("./gl-ecd4c576.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gom-latn.js": () => import("./gom-latn-0de894a4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gu.js": () => import("./gu-f8a9ff06.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/he.js": () => import("./he-c3d5738f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hi.js": () => import("./hi-06d9d378.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hr.js": () => import("./hr-df6e22c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ht.js": () => import("./ht-560ce1fa.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hu.js": () => import("./hu-36659a19.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hy-am.js": () => import("./hy-am-ec1e6b6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/id.js": () => import("./id-e83ede43.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/is.js": () => import("./is-112d618e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it-ch.js": () => import("./it-ch-74dc20fb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it.js": () => import("./it-68978c39.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ja.js": () => import("./ja-81ac0bce.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/jv.js": () => import("./jv-eb80b191.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ka.js": () => import("./ka-408178cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kk.js": () => import("./kk-7182d80c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/km.js": () => import("./km-c8d90f37.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kn.js": () => import("./kn-1ef13da8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ko.js": () => import("./ko-d74dbac1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ku.js": () => import("./ku-217c312b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ky.js": () => import("./ky-9beeab3e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lb.js": () => import("./lb-bbb0769c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lo.js": () => import("./lo-c0a222fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lt.js": () => import("./lt-7733040c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lv.js": () => import("./lv-8456bf8c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/me.js": () => import("./me-60049fb4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mi.js": () => import("./mi-a00211ea.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mk.js": () => import("./mk-750f2eb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ml.js": () => import("./ml-3d864495.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mn.js": () => import("./mn-c3b569a5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mr.js": () => import("./mr-caa70638.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms-my.js": () => import("./ms-my-9edfd210.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms.js": () => import("./ms-8a0b04c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mt.js": () => import("./mt-5924bb24.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/my.js": () => import("./my-7ec0e79b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nb.js": () => import("./nb-55474232.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ne.js": () => import("./ne-28b71d4d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl-be.js": () => import("./nl-be-ab2f9375.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl.js": () => import("./nl-f2df7562.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nn.js": () => import("./nn-ae0c69b8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/oc-lnc.js": () => import("./oc-lnc-e86add7d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pa-in.js": () => import("./pa-in-58db4e88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pl.js": () => import("./pl-6123f464.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt-br.js": () => import("./pt-br-72da3648.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt.js": () => import("./pt-6d21f766.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rn.js": () => import("./rn-fe91690b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ro.js": () => import("./ro-f0333df1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ru.js": () => import("./ru-8092165f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rw.js": () => import("./rw-8e49f17e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sd.js": () => import("./sd-f5f464cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/se.js": () => import("./se-d0247819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/si.js": () => import("./si-23229411.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sk.js": () => import("./sk-2ae651e5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sl.js": () => import("./sl-d651cb86.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sq.js": () => import("./sq-851e451a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr-cyrl.js": () => import("./sr-cyrl-150c337e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr.js": () => import("./sr-26ffbdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ss.js": () => import("./ss-70c27ddd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv-fi.js": () => import("./sv-fi-53a8b8bd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv.js": () => import("./sv-bf43bdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sw.js": () => import("./sw-3c86b419.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ta.js": () => import("./ta-dde447c0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/te.js": () => import("./te-d039e67a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tet.js": () => import("./tet-2478e8c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tg.js": () => import("./tg-374d7196.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/th.js": () => import("./th-cfb73f82.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tk.js": () => import("./tk-6502e590.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tl-ph.js": () => import("./tl-ph-f36e80af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tlh.js": () => import("./tlh-6d81a812.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tr.js": () => import("./tr-1608d107.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzl.js": () => import("./tzl-e019f0a0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm-latn.js": () => import("./tzm-latn-4a3fedcb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm.js": () => import("./tzm-9a26d476.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ug-cn.js": () => import("./ug-cn-7370b4b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uk.js": () => import("./uk-f2be452c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ur.js": () => import("./ur-5e01f781.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz-latn.js": () => import("./uz-latn-ec9b852e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz.js": () => import("./uz-f44d7936.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/vi.js": () => import("./vi-8106a30d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/x-pseudo.js": () => import("./x-pseudo-20ac0200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/yo.js": () => import("./yo-45cb4db7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-cn.js": () => import("./zh-cn-7af2941c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-hk.js": () => import("./zh-hk-e8e3af02.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-tw.js": () => import("./zh-tw-58dac95d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh.js": () => import("./zh-26803c4f.js").then((e) => e.default) })).map(
    ([e, n]) => {
      var a;
      return [(a = e.match(/([\w-]*)\.js$/)) == null ? void 0 : a[1], n];
    }
  )
), yt = {
  today: "Today",
  tomorrow: "Tomorrow",
  thisWeekend: "Weekend",
  thisWeek: "Week",
  currentMonth: "Month",
  thisYear: "Year"
}, gt = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  night: "Night"
}, bo = {
  en: yt,
  "en-gb": yt,
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
}, xo = {
  en: gt,
  "en-gb": gt,
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
}, wo = {
  en: "Clear",
  "en-gb": "Clear",
  nl: "Wissen",
  fr: "Effacer"
};
function xt(e) {
  const n = String(e || "en").toLowerCase();
  return n.startsWith("nl") ? "nl" : n.startsWith("fr") ? "fr" : n === "en-gb" || n.startsWith("en-gb") ? "en-gb" : "en";
}
function je(e, n) {
  return e && e.trim() ? e : n;
}
function jo(e, n) {
  const a = bo[xt(e)] || yt;
  return {
    today: je(n == null ? void 0 : n.today, a.today),
    tomorrow: je(n == null ? void 0 : n.tomorrow, a.tomorrow),
    thisWeekend: je(n == null ? void 0 : n.thisWeekend, a.thisWeekend),
    thisWeek: je(n == null ? void 0 : n.thisWeek, a.thisWeek),
    currentMonth: je(n == null ? void 0 : n.currentMonth, a.currentMonth),
    thisYear: je(n == null ? void 0 : n.thisYear, a.thisYear)
  };
}
function ko(e, n) {
  const a = xo[xt(e)] || gt;
  return {
    morning: je(n == null ? void 0 : n.morning, a.morning),
    afternoon: je(n == null ? void 0 : n.afternoon, a.afternoon),
    evening: je(n == null ? void 0 : n.evening, a.evening),
    night: je(n == null ? void 0 : n.night, a.night)
  };
}
function $o(e, n) {
  return je(n, wo[xt(e)] || "Clear");
}
const _o = { class: "flex justify-between items-center px-1 py-1" }, Mo = { class: "shrink-0" }, So = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Do = ["d"], To = { class: "px-1.5 space-x-1.5 flex flex-1" }, Oo = { class: "flex-1 flex rounded-md" }, Po = ["textContent"], Co = { class: "flex-1 flex rounded-md" }, Vo = ["textContent"], Yo = { class: "shrink-0" }, Ao = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Eo = ["d"], tt = /* @__PURE__ */ de({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (n, a) => (Z(), J("div", _o, [
      T("div", Mo, [
        le(T("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: a[0] || (a[0] = (t) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
        }, [
          (Z(), J("svg", So, [
            T("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
            }, null, 8, Do)
          ]))
        ], 512), [
          [ve, e.panel.calendar || e.panel.year]
        ])
      ]),
      T("div", To, [
        T("span", Oo, [
          T("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: a[1] || (a[1] = (t) => e.calendar.openMonth()),
            textContent: oe(e.calendar.month)
          }, null, 8, Po)
        ]),
        T("span", Co, [
          T("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-sm text-vtd-blue font-medium border border-vtd-orange focus:ring-3 focus:ring-vtd-orange/10 focus:outline-hidden",
            onClick: a[2] || (a[2] = (t) => e.calendar.openYear()),
            textContent: oe(e.calendar.year)
          }, null, 8, Vo)
        ])
      ]),
      T("div", Yo, [
        le(T("button", {
          type: "button",
          class: "p-1.5 cursor-pointer rounded-full bg-white text-vtd-blue shadow-[0_2px_8px_0_#BEBEBE26]",
          onClick: a[3] || (a[3] = (t) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
        }, [
          (Z(), J("svg", Ao, [
            T("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: e.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
            }, null, 8, Eo)
          ]))
        ], 512), [
          [ve, e.panel.calendar || e.panel.year]
        ])
      ])
    ]));
  }
}), an = Symbol("isBetweenRange"), sn = Symbol(
  "betweenRangeClasses"
), rn = Symbol("datepickerClasses"), ln = Symbol("atMouseOver"), un = Symbol("setToToday"), dn = Symbol("setToTomorrow"), cn = Symbol("setToThisWeekend"), mn = Symbol("setToThisWeek"), fn = Symbol("setToThisMonth"), pn = Symbol("setToThisYear"), vn = Symbol("setToCustomShortcut"), Lo = {
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
}, Yt = /* @__PURE__ */ de({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const n = e, a = we(un), t = we(dn), r = we(cn), m = we(mn), l = we(fn), o = we(pn), k = we(vn), y = ae(() => typeof n.shortcuts == "function" ? n.shortcuts() : !1);
    return (g, b) => n.asRange && n.asSingle || n.asRange && !n.asSingle ? (Z(), J("div", Lo, [
      y.value ? (Z(), J("ol", Bo, [
        (Z(!0), J(ke, null, Xe(y.value, (j, O) => (Z(), J("li", { key: O }, [
          T("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: (E) => ie(k)(j, e.close),
            textContent: oe(j.label)
          }, null, 8, Fo)
        ]))), 128))
      ])) : (Z(), J("ol", No, [
        T("li", null, [
          T("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[0] || (b[0] = (j) => ie(a)(e.close))
          }, oe(n.i18n.today), 1)
        ]),
        T("li", null, [
          T("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[1] || (b[1] = (j) => ie(t)(e.close))
          }, oe(n.i18n.tomorrow), 1)
        ]),
        T("li", null, [
          T("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[2] || (b[2] = (j) => ie(r)(e.close))
          }, oe(n.i18n.thisWeekend), 1)
        ]),
        T("li", null, [
          T("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[3] || (b[3] = (j) => ie(m)(e.close))
          }, oe(n.i18n.thisWeek), 1)
        ]),
        T("li", null, [
          T("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[4] || (b[4] = (j) => ie(l)(e.close))
          }, oe(n.i18n.currentMonth), 1)
        ]),
        T("li", null, [
          T("button", {
            type: "button",
            class: "vtd-shortcuts text-center block text-sm px-5 py-2 sm:leading-4 whitespace-nowrap rounded-sm text-vtd-dark-blue transition-colors hover:bg-vtd-medium-gray focus:bg-vtd-medium-gray",
            onClick: b[5] || (b[5] = (j) => ie(o)(e.close))
          }, oe(n.i18n.thisYear), 1)
        ])
      ]))
    ])) : xe("", !0);
  }
}), Ro = { class: "grid grid-cols-7 gap-y-0 my-0" }, Io = {
  key: 0,
  class: "col-span-7 border-b relative"
}, Wo = { class: "absolute -left-2 top-1/2 -translate-y-2/4 bg-white text-[8px] pr-2 text-vtd-secondary-400" }, Ho = ["data-tooltip"], Uo = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], nt = /* @__PURE__ */ de({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: n }) {
    const a = n, t = we(an), r = we(sn), m = we(rn), l = we(ln);
    return (o, k) => (Z(), J("div", Ro, [
      te(jn, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Fe(() => [
          (Z(!0), J(ke, null, Xe(e.calendar.date(), (y, g) => (Z(), J(ke, { key: g }, [
            g % 7 === 0 && e.weekNumber ? (Z(), J("div", Io, [
              T("span", Wo, oe(y.week()), 1)
            ])) : xe("", !0),
            T("div", {
              class: Ne(["relative", { "vtd-tooltip": e.asRange && y.duration() }]),
              "data-tooltip": `${y.duration()}`
            }, [
              te(At, {
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "enter-active-class": "transition-opacity ease-out duration-200",
                "leave-active-class": "transition-opacity ease-in duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: Fe(() => [
                  ie(t)(y) || y.hovered() ? (Z(), J("span", {
                    key: 0,
                    class: Ne(["absolute bg-vtd-dark-blue/10", ie(r)(y)])
                  }, null, 2)) : xe("", !0)
                ]),
                _: 2
              }, 1024),
              T("button", {
                type: "button",
                class: Ne(["vtd-datepicker-date relative w-8 h-8 lg:w-[2rem] lg:h-[2rem] flex justify-center items-center text-xs lg:text-sm font-medium", [
                  ie(m)(y),
                  e.asRange ? "transition-all" : "transition-colors"
                ]]),
                disabled: y.disabled || y.inRange(),
                "data-date": y.toDate(),
                onClick: (b) => a("updateDate", y),
                onMouseenter: (b) => ie(l)(y),
                onFocusin: (b) => ie(l)(y),
                textContent: oe(y.date())
              }, null, 42, Uo)
            ], 10, Ho)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), zo = { class: "flex flex-wrap" }, Ko = { class: "flex rounded-md mt-1.5" }, Go = ["onClick", "textContent"], ot = /* @__PURE__ */ de({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: n }) {
    const a = n;
    return (t, r) => (Z(), J("div", zo, [
      (Z(!0), J(ke, null, Xe(e.years, (m, l) => (Z(), J("div", {
        key: l,
        class: "w-1/2 px-0.5"
      }, [
        T("span", Ko, [
          T("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (o) => a("updateYear", m),
            textContent: oe(m)
          }, null, 8, Go)
        ])
      ]))), 128))
    ]));
  }
}), Zo = { class: "grid grid-cols-7 py-1 mt-0" }, qo = ["textContent"], at = /* @__PURE__ */ de({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (n, a) => (Z(), J("div", Zo, [
      (Z(!0), J(ke, null, Xe(e.weeks, (t, r) => (Z(), J("div", {
        key: r,
        class: "text-vtd-dark-blue text-xs lg:text-sm tracking-wide font-bold text-center cursor-default"
      }, [
        T("span", {
          textContent: oe(t)
        }, null, 8, qo)
      ]))), 128))
    ]));
  }
}), Jo = { class: "flex flex-wrap mt-1.5" }, Xo = { class: "flex rounded-md mt-1.5" }, Qo = ["onClick", "textContent"], st = /* @__PURE__ */ de({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: n }) {
    const a = n;
    return (t, r) => (Z(), J("div", Jo, [
      (Z(!0), J(ke, null, Xe(e.months, (m, l) => (Z(), J("div", {
        key: l,
        class: "w-1/2 px-0.5"
      }, [
        T("span", Xo, [
          T("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-sm cursor-pointer tracking-wide text-vtd-dark-blue transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-blue",
            onClick: (o) => a("updateMonth", l),
            textContent: oe(m)
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
}, ua = ["onClick"], ia = { class: "vtd-calendars" }, da = { class: "vtd-month-panel" }, ca = { class: "px-0.5" }, ma = {
  key: 1,
  class: "vtd-month-panel vtd-month-panel--next"
}, fa = { class: "px-0.5" }, pa = { key: 0 }, va = { class: "pt-2 border-t border-black/[.1]" }, ha = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex justify-end gap-4" }, ya = {
  for: "check-morning",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, ga = ["onChange"], ba = {
  for: "check-afternoon",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, xa = ["onChange"], wa = {
  for: "check-evening",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, ja = ["onChange"], ka = {
  for: "check-night",
  class: "item clickable text-vtd-blue text-sm cursor-pointer rounded-md border border-vtd-orange py-2 px-4 flex items-center gap-[6px]"
}, $a = ["onChange"], _a = { class: "mt-4 sm:flex sm:flex-row-reverse" }, Ma = ["onClick", "textContent"], Sa = {
  key: 1,
  class: "sm:hidden"
}, Da = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Ta = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Oa = ["onClick", "textContent"], Pa = {
  key: 1,
  class: "flex"
}, Ca = { class: "vtd-datepicker bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, Va = { class: "vtd-calendars" }, Ya = { class: "vtd-month-panel" }, Aa = { class: "px-0.5" }, Ea = {
  key: 1,
  class: "vtd-month-panel vtd-month-panel--next"
}, La = { class: "px-0.5" }, Ba = { key: 0 }, Fa = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, Na = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Ra = ["textContent"], Ia = /* @__PURE__ */ de({
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
    var jt, kt, $t, _t;
    const t = e, r = a, m = ft({
      morning: ((jt = t.sessionValue) == null ? void 0 : jt.morning) || !1,
      afternoon: ((kt = t.sessionValue) == null ? void 0 : kt.afternoon) || !1,
      evening: (($t = t.sessionValue) == null ? void 0 : $t.evening) || !1,
      night: ((_t = t.sessionValue) == null ? void 0 : _t.night) || !1
    });
    Ze(m, (d) => {
      r("update:sessionValue", { ...d });
    }, { deep: !0 }), Ze(() => t.sessionValue, (d) => {
      d && (m.morning = d.morning, m.afternoon = d.afternoon, m.evening = d.evening, m.night = d.night);
    }, { deep: !0 });
    const l = ae(
      () => {
        var d;
        return jo(t.i18n, (d = t.options) == null ? void 0 : d.shortcuts);
      }
    ), o = ae(
      () => {
        var d;
        return ko(t.i18n, (d = t.options) == null ? void 0 : d.session);
      }
    ), k = ae(
      () => {
        var d, u;
        return $o(t.i18n, (u = (d = t.options) == null ? void 0 : d.footer) == null ? void 0 : u.cancel);
      }
    ), {
      useCurrentDate: y,
      useDisableDate: g,
      useBetweenRange: b,
      useNextDate: j,
      usePreviousDate: O,
      useToValueFromArray: E,
      useToValueFromString: R
    } = ea(), { useVisibleViewport: P } = ta();
    c.extend(so), c.extend(lo), c.extend(io), c.extend(mo), c.extend(po), c.extend(ho), c.extend(go);
    const L = q(null), N = q(null), V = q(null), W = q(""), M = q(null), w = q(""), v = q([]), p = q([]), A = q(null), B = q(null), f = ft({
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
      const u = c().format(t.formatter.date), h = c().format(t.formatter.date);
      fe(u, h), G(), d && d();
    }
    const $ = ae(() => s.value.weeks), _ = ae(() => s.value.months), S = ae(() => {
      const { previous: d, next: u, year: h } = ie(s);
      return {
        previous: {
          date: () => O(d).concat(y(d)).concat(j(d)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: d.month() === i.month(),
            off: d.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: g(i, t) && !X(i),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return d.month() !== i.month();
            },
            hovered: () => F() && v.value.length > 1 ? (i.isBetween(
              v.value[0],
              v.value[1],
              "date",
              "()"
            ) || i.isBetween(
              v.value[1],
              v.value[0],
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
            (i, x) => h.previous + x
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
            f.previous.month = !f.previous.month, f.previous.year = !1, f.previous.calendar = !f.previous.month;
          },
          setMonth: (i) => {
            s.value.previous = d.month(i), f.previous.month = !f.previous.month, f.previous.year = !1, f.previous.calendar = !f.previous.month, r("selectMonth", s.value.previous), Ke(() => {
              (s.value.next.isSame(s.value.previous, "month") || s.value.next.isBefore(s.value.previous)) && (s.value.next = s.value.previous.add(1, "month")), s.value.year.next = s.value.next.year();
            });
          },
          openYear: () => {
            f.previous.year = !f.previous.year, f.previous.month = !1, f.previous.calendar = !f.previous.year;
          },
          setYear: (i) => {
            s.value.previous = d.year(i), f.previous.year = !f.previous.year, f.previous.calendar = !f.previous.year, r("selectYear", s.value.previous), Ke(() => {
              (s.value.next.isSame(s.value.previous, "month") || s.value.next.isBefore(s.value.previous)) && (s.value.next = s.value.previous.add(1, "month")), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year();
            });
          }
        },
        next: {
          date: () => O(u).concat(y(u)).concat(j(u)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: u.month() === i.month(),
            off: u.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: g(i, t) && !X(i),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return u.month() !== i.month();
            },
            hovered: () => v.value.length > 1 ? (i.isBetween(
              v.value[0],
              v.value[1],
              "date",
              "()"
            ) || i.isBetween(
              v.value[1],
              v.value[0],
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
            (i, x) => h.next + x
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
            f.next.month = !f.next.month, f.next.year = !1, f.next.calendar = !f.next.month;
          },
          setMonth: (i) => {
            s.value.next = u.month(i), f.next.month = !f.next.month, f.next.year = !1, f.next.calendar = !f.next.month, r("selectRightMonth", s.value.next), Ke(() => {
              (s.value.previous.isSame(s.value.next, "month") || s.value.previous.isAfter(s.value.next)) && (s.value.previous = s.value.next.subtract(
                1,
                "month"
              )), s.value.year.previous = s.value.previous.year();
            });
          },
          openYear: () => {
            f.next.year = !f.next.year, f.next.month = !1, f.next.calendar = !f.next.year;
          },
          setYear: (i) => {
            s.value.next = u.year(i), f.next.year = !f.next.year, f.next.month = !1, f.next.calendar = !f.next.year, r("selectRightYear", s.value.next), Ke(() => {
              (s.value.previous.isSame(s.value.next, "month") || s.value.previous.isAfter(s.value.next)) && (s.value.previous = s.value.next.subtract(
                1,
                "month"
              )), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year();
            });
          }
        }
      };
    }), D = q(!1);
    setTimeout(() => {
      D.value = !0;
    }, 250);
    function I() {
      return c().localeData().firstDayOfWeek();
    }
    function U(d) {
      const u = [...d], h = u.shift();
      return [...u, h];
    }
    function F() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function X(d) {
      if (t.disableInRange || typeof t.disableDate == "function" || w.value === "")
        return !1;
      let u, h;
      if (Array.isArray(t.modelValue)) {
        const [i, x] = t.modelValue;
        u = i, h = x;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [i, x] = Object.values(t.modelValue);
          u = i, h = x;
        }
      } else {
        const [i, x] = t.modelValue.split(t.separator);
        u = i, h = x;
      }
      return d.isBetween(
        c(u, t.formatter.date, !0),
        c(h, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function Q() {
      A.value = null, B.value = null, v.value = [], M.value = null;
    }
    function ne() {
      if (w.value = "", Array.isArray(t.modelValue))
        r("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const d = {}, [u, h] = Object.keys(t.modelValue);
        d[u] = "", d[h] = "", r("update:modelValue", d);
      } else
        r("update:modelValue", "");
      p.value = [], N.value && N.value.focus();
    }
    function ce() {
      if (F()) {
        const [d, u] = w.value.split(t.separator), [h, i] = [
          c(d, t.formatter.date, !0),
          c(u, t.formatter.date, !0)
        ];
        if (h.isValid() && i.isValid())
          if (me(h), me(i), Array.isArray(t.modelValue))
            r("update:modelValue", [d, u]);
          else if (typeof t.modelValue == "object") {
            const x = {}, [Y, K] = Object.keys(t.modelValue);
            x[Y] = d, x[K] = u, r("update:modelValue", x);
          } else
            r(
              "update:modelValue",
              E(
                {
                  previous: h,
                  next: i
                },
                t
              )
            );
      } else {
        const d = c(w.value, t.formatter.date, !0);
        if (d.isValid())
          if (me(d), Array.isArray(t.modelValue))
            r("update:modelValue", [w.value]);
          else if (typeof t.modelValue == "object") {
            const u = {}, [h] = Object.keys(t.modelValue);
            u[h] = w.value, r("update:modelValue", u);
          } else
            r("update:modelValue", w.value);
      }
    }
    function me(d, u) {
      if (F())
        if (A.value)
          if (B.value = d, t.autoApply) {
            d.isBefore(A.value) ? w.value = E(
              {
                previous: d,
                next: A.value
              },
              t
            ) : w.value = E(
              {
                previous: A.value,
                next: d
              },
              t
            );
            const [h, i] = w.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              r("update:modelValue", [
                c(h, t.formatter.date, !0).format(t.formatter.date),
                c(i, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const x = {}, [Y, K] = Object.keys(t.modelValue);
              x[Y] = h, x[K] = i, r("update:modelValue", x);
            } else
              r(
                "update:modelValue",
                E(
                  {
                    previous: c(h, t.formatter.date, !0),
                    next: c(i, t.formatter.date, !0)
                  },
                  t
                )
              );
            u && u(), p.value = [], c(h, t.formatter.date, !0).isSame(
              c(i, t.formatter.date, !0),
              "month"
            ) || (s.value.previous = c(h, t.formatter.date, !0), s.value.next = c(i, t.formatter.date, !0)), Q();
          } else {
            A.value.isAfter(d, "month") ? p.value = [d, A.value] : p.value = [A.value, d];
            const [h, i] = p.value;
            h.isSame(i, "month") || (s.value.previous = h, s.value.next = i);
            const x = h.format(t.formatter.date), Y = i.format(t.formatter.date);
            ge(x, Y), Q(), u && u();
          }
        else
          p.value = [], A.value = d, M.value = d, v.value.push(d), p.value.push(d), s.value.previous = d, s.value.next.isSame(d, "month") && (s.value.previous = s.value.next, s.value.next = d.add(1, "month"));
      else if (t.autoApply) {
        if (w.value = R(d, t), Array.isArray(t.modelValue))
          r("update:modelValue", [w.value]);
        else if (typeof t.modelValue == "object") {
          const h = {}, [i] = Object.keys(t.modelValue);
          h[i] = w.value, r("update:modelValue", h);
        } else
          r("update:modelValue", w.value);
        u && u(), p.value = [], Q();
      } else
        p.value = [d], Q();
    }
    function be(d) {
      if (!F())
        return !1;
      if (A.value)
        v.value = [A.value, d];
      else
        return v.value = [], !1;
    }
    function _e(d) {
      if (A.value && t.autoApply)
        return !1;
      let u, h;
      if (v.value.length > 1) {
        const [i, x] = v.value;
        u = c(i, t.formatter.date, !0), h = c(x, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [i, x] = t.modelValue;
          u = i && c(i, t.formatter.date, !0), h = x && c(x, t.formatter.date, !0);
        } else {
          const [i, x] = p.value;
          u = c(i, t.formatter.date, !0), h = c(x, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [i, x] = Object.values(t.modelValue);
            u = i && c(i, t.formatter.date, !0), h = x && c(x, t.formatter.date, !0);
          }
        } else {
          const [i, x] = p.value;
          u = c(i, t.formatter.date, !0), h = c(x, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [i, x] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        u = i && c(i, t.formatter.date, !0), h = x && c(x, t.formatter.date, !0);
      } else {
        const [i, x] = p.value;
        u = c(i, t.formatter.date, !0), h = c(x, t.formatter.date, !0);
      }
      return u && h ? b(d, {
        previous: u,
        next: h
      }) : !1;
    }
    function ye(d) {
      const { today: u, active: h, off: i, disabled: x } = d;
      let Y, K, re;
      if (F())
        if (Array.isArray(t.modelValue))
          if (M.value) {
            const [z, ee] = v.value;
            K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, ee] = t.modelValue;
            K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
          } else {
            const [z, ee] = p.value;
            K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (M.value) {
            const [z, ee] = v.value;
            K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, ee] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
          } else {
            const [z, ee] = p.value;
            K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
          }
        else if (M.value) {
          const [z, ee] = v.value;
          K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [z, ee] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
        } else {
          const [z, ee] = p.value;
          K = z && c(z, t.formatter.date, !0), re = ee && c(ee, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [z] = t.modelValue;
            K = c(z, t.formatter.date, !0);
          }
        } else {
          const [z] = p.value;
          K = z && c(z, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [z] = Object.values(t.modelValue);
            K = c(z, t.formatter.date, !0);
          }
        } else {
          const [z] = p.value;
          K = z && c(z, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [z] = t.modelValue.split(t.separator);
          K = c(z, t.formatter.date, !0);
        }
      } else {
        const [z] = p.value;
        K = z && c(z, t.formatter.date, !0);
      }
      return h && (Y = u ? "text-vtd-dark-blue bg-vtd-medium-gray rounded-md" : x ? "text-vtd-light-gray font-normal disabled:text-vtd-light-gray disabled:cursor-not-allowed" : (K && re && d.isBetween(K, re, "date", "()"), "text-vtd-dark-blue")), i && (Y = "text-vtd-dark-blue disabled:cursor-not-allowed"), K && re && !i ? (d.isSame(K, "date") && (Y = re.isAfter(K, "date") ? "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed", K.isSame(re, "date") && (Y = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed")), d.isSame(re, "date") && (Y = re.isAfter(K, "date") ? "bg-vtd-dark-blue text-white rounded-r-md disabled:cursor-not-allowed" : "bg-vtd-dark-blue text-white rounded-l-md disabled:cursor-not-allowed", K.isSame(re, "date") && (Y = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"))) : K && d.isSame(K, "date") && !i && (Y = "bg-vtd-dark-blue text-white rounded-md disabled:cursor-not-allowed"), Y;
    }
    function se(d) {
      let u, h, i;
      if (u = "", !F())
        return u;
      if (Array.isArray(t.modelValue))
        if (v.value.length > 1) {
          const [x, Y] = v.value;
          h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [x, Y] = t.modelValue;
          h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
        } else {
          const [x, Y] = p.value;
          h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (v.value.length > 1) {
          const [x, Y] = v.value;
          h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [x, Y] = Object.values(t.modelValue);
            h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
          }
        } else {
          const [x, Y] = p.value;
          h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
        }
      else if (v.value.length > 1) {
        const [x, Y] = v.value;
        h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [x, Y] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
      } else {
        const [x, Y] = p.value;
        h = x && c(x, t.formatter.date, !0), i = Y && c(Y, t.formatter.date, !0);
      }
      return h && i && (d.isSame(h, "date") ? (i.isBefore(h) && (u += " rounded-r-md inset-0"), h.isBefore(i) && (u += " rounded-l-md inset-0")) : d.isSame(i, "date") ? (i.isBefore(h) && (u += " rounded-l-md inset-0"), h.isBefore(i) && (u += " rounded-r-md inset-0")) : u += " inset-0"), u;
    }
    function pe(d, u) {
      s.value.previous = c(d, t.formatter.date, !0), s.value.next = c(u, t.formatter.date, !0), (c.duration(s.value.next.diff(s.value.previous)).get("months") === 2 || c.duration(s.value.next.diff(s.value.previous)).get("months") === 1 && c.duration(s.value.next.diff(s.value.previous)).get("days") === 7) && (s.value.next = s.value.next.subtract(1, "month")), (s.value.next.isSame(s.value.previous, "month") || s.value.next.isBefore(s.value.previous)) && (s.value.next = s.value.previous.add(1, "month"));
    }
    function ge(d, u) {
      if (Array.isArray(t.modelValue))
        r("update:modelValue", [d, u]);
      else if (typeof t.modelValue == "object") {
        const h = {}, [i, x] = Object.keys(t.modelValue);
        h[i] = d, h[x] = u, r("update:modelValue", h);
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
    function fe(d, u) {
      if (F())
        ge(d, u), p.value = [
          c(d, t.formatter.date, !0),
          c(u, t.formatter.date, !0)
        ];
      else {
        if (Array.isArray(t.modelValue))
          r("update:modelValue", [d]);
        else if (typeof t.modelValue == "object") {
          const h = {}, [i] = Object.keys(t.modelValue);
          h[i] = d, r("update:modelValue", h);
        } else
          r("update:modelValue", d);
        w.value = d, p.value = [
          c(d, t.formatter.date, !0),
          c(u, t.formatter.date, !0)
        ];
      }
      pe(d, u);
    }
    function Le(d) {
      const u = c(), i = (6 - u.day() + 7) % 7, x = u.add(i, "day"), Y = x.add(1, "day"), K = x.format(t.formatter.date), re = Y.format(t.formatter.date);
      fe(K, re), d && d();
    }
    function Be(d) {
      const u = c(), h = u.day(), i = u.subtract(h, "day"), x = i.add(6, "day"), Y = i.format(t.formatter.date), K = x.format(t.formatter.date);
      fe(Y, K), d && d();
    }
    function We(d) {
      const u = c().add(1, "day").format(t.formatter.date), h = c().add(1, "day").format(t.formatter.date);
      fe(u, h), d && d();
    }
    function He(d) {
      const u = c().date(1).format(t.formatter.date), h = c().date(c().daysInMonth()).format(t.formatter.date);
      fe(u, h), d && d();
    }
    function Ue(d) {
      const u = c(), h = u.startOf("year"), i = u.endOf("year"), x = h.format(t.formatter.date), Y = i.format(t.formatter.date);
      fe(x, Y), d && d();
    }
    function ze(d, u) {
      const [h, i] = d.atClick(), x = c(h).format(t.formatter.date), Y = c(i).format(t.formatter.date);
      fe(x, Y), u && u();
    }
    Ze(
      () => p.value,
      (d) => {
        d.length > 0 && (f.previous.calendar = !0, f.previous.month = !1, f.previous.year = !1, f.next.calendar = !0, f.next.month = !1, f.next.year = !1);
      }
    ), $e(() => {
      t.placeholder ? W.value = t.placeholder : F() ? W.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : W.value = t.formatter.date;
    }), c.locale(t.i18n), Ze(() => t.i18n, () => c.locale(t.i18n)), $e(() => {
      const d = t.i18n, u = t.modelValue;
      Ke(async () => {
        if (d in Vt) {
          const Y = await Vt[d]();
          c.locale(Y, void 0, !0), c.locale(d);
        }
        let h, i;
        if (F()) {
          if (Array.isArray(u)) {
            if (u.length > 0) {
              const [Y, K] = u;
              h = c(Y, t.formatter.date, !0), i = c(K, t.formatter.date, !0);
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
              const [Y, K] = Object.values(u);
              h = Y && c(Y, t.formatter.date, !0), i = K && c(K, t.formatter.date, !0);
            }
          } else if (u) {
            const [Y, K] = u.split(t.separator);
            h = c(Y, t.formatter.date, !0), i = c(K, t.formatter.date, !0);
          }
          h && i ? (w.value = E(
            {
              previous: h,
              next: i
            },
            t
          ), i.isBefore(h, "month") ? (s.value.previous = i, s.value.next = h, s.value.year.previous = i.year(), s.value.year.next = h.year()) : i.isSame(h, "month") ? (s.value.previous = h, s.value.next = i.add(1, "month"), s.value.year.previous = h.year(), s.value.year.next = h.add(1, "year").year()) : (s.value.previous = h, s.value.next = i, s.value.year.previous = h.year(), s.value.year.next = i.year()), t.autoApply || (p.value = [h, i])) : (s.value.previous = c(t.startFrom), s.value.next = c(t.startFrom).add(1, "month"), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year());
        } else {
          if (Array.isArray(u)) {
            if (u.length > 0) {
              const [Y] = u;
              h = c(Y, t.formatter.date, !0);
            }
          } else if (typeof u == "object") {
            if (u) {
              const [Y] = Object.values(u);
              h = c(Y, t.formatter.date, !0);
            }
          } else if (u.length) {
            const [Y] = u.split(t.separator);
            h = c(Y, t.formatter.date, !0);
          }
          h && h.isValid() ? (w.value = R(h, t), s.value.previous = h, s.value.next = h.add(1, "month"), s.value.year.previous = h.year(), s.value.year.next = h.add(1, "year").year(), t.autoApply || (p.value = [h])) : (s.value.previous = c(t.startFrom), s.value.next = c(t.startFrom).add(1, "month"), s.value.year.previous = s.value.previous.year(), s.value.year.next = s.value.next.year());
        }
        const x = t.weekdaysSize === "min" ? c.weekdaysMin() : c.weekdaysShort();
        s.value.weeks = I() ? U(x) : x, s.value.months = t.formatter.month === "MMM" ? c.monthsShort() : c.months();
      });
    });
    function wt(d) {
      return d && V.value === null && (V.value = P(L.value)), d && V.value ? "place-right" : "place-left";
    }
    function yn(d) {
      return d && V.value === null && (V.value = P(L.value)), V.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return ue(an, _e), ue(sn, se), ue(rn, ye), ue(ln, be), ue(un, C), ue(cn, Le), ue(mn, Be), ue(dn, We), ue(fn, He), ue(pn, Ue), ue(vn, ze), n({ clearPicker: ne, resetSessionData: G }), (d, u) => t.noInput ? D.value ? (Z(), J("div", Pa, [
      T("div", Ca, [
        T("div", Va, [
          t.shortcuts ? (Z(), Ge(Yt, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": F(),
            "as-single": t.asSingle,
            i18n: l.value
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : xe("", !0),
          T("div", Ya, [
            te(tt, {
              panel: f.previous,
              calendar: S.value.previous
            }, null, 8, ["panel", "calendar"]),
            T("div", Aa, [
              le(te(st, {
                months: _.value,
                onUpdateMonth: S.value.previous.setMonth
              }, null, 8, ["months", "onUpdateMonth"]), [
                [ve, f.previous.month]
              ]),
              le(te(ot, {
                years: S.value.previous.years(),
                onUpdateYear: S.value.previous.setYear
              }, null, 8, ["years", "onUpdateYear"]), [
                [ve, f.previous.year]
              ]),
              le(T("div", null, [
                te(at, { weeks: $.value }, null, 8, ["weeks"]),
                te(nt, {
                  calendar: S.value.previous,
                  weeks: $.value,
                  "as-range": F(),
                  "week-number": e.weekNumber,
                  onUpdateDate: u[7] || (u[7] = (h) => me(h))
                }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
              ], 512), [
                [ve, f.previous.calendar]
              ])
            ])
          ]),
          F() && !t.asSingle ? (Z(), J("div", Ea, [
            te(tt, {
              panel: f.next,
              calendar: S.value.next
            }, null, 8, ["panel", "calendar"]),
            T("div", La, [
              le(te(st, {
                months: _.value,
                onUpdateMonth: S.value.next.setMonth
              }, null, 8, ["months", "onUpdateMonth"]), [
                [ve, f.next.month]
              ]),
              le(te(ot, {
                years: S.value.next.years(),
                onUpdateYear: S.value.next.setYear
              }, null, 8, ["years", "onUpdateYear"]), [
                [ve, f.next.year]
              ]),
              le(T("div", null, [
                te(at, { weeks: $.value }, null, 8, ["weeks"]),
                te(nt, {
                  calendar: S.value.next,
                  weeks: $.value,
                  "as-range": F(),
                  "week-number": e.weekNumber,
                  onUpdateDate: u[8] || (u[8] = (h) => me(h))
                }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
              ], 512), [
                [ve, f.next.calendar]
              ])
            ])
          ])) : xe("", !0)
        ]),
        t.autoApply ? xe("", !0) : (Z(), J("div", Ba, [
          T("div", Fa, [
            T("div", Na, [
              T("button", {
                type: "button",
                class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                onClick: u[9] || (u[9] = (h) => C()),
                textContent: oe(k.value)
              }, null, 8, Ra)
            ])
          ])
        ]))
      ])
    ])) : xe("", !0) : (Z(), Ge(ie(Zt), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Fe(({ open: h }) => [
        t.overlay && !t.disabled ? (Z(), Ge(ie(to), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : xe("", !0),
        te(ie(eo), {
          as: "label",
          class: "relative block"
        }, {
          default: Fe(() => [
            St(d.$slots, "default", {
              value: w.value,
              placeholder: W.value,
              clear: ne
            }, () => [
              le(T("input", $n({
                ref_key: "VtdInputRef",
                ref: N
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
                onKeyup: Dt(ce, ["stop"]),
                onKeydown: u[1] || (u[1] = Dt(() => {
                }, ["stop"]))
              }), null, 16, na), [
                [_n, w.value]
              ]),
              T("div", oa, [
                T("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: Ne([
                    t.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"
                  ]),
                  onClick: u[2] || (u[2] = (i) => {
                    var x;
                    return t.disabled ? !1 : w.value ? ne() : (x = N.value) == null ? void 0 : x.focus();
                  })
                }, [
                  St(d.$slots, "inputIcon", { value: w.value }, () => [
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
        te(At, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Fe(() => [
            t.disabled ? xe("", !0) : (Z(), Ge(ie(no), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Fe(({ close: i }) => [
                T("div", {
                  class: Ne(["absolute z-50 top-full sm:mt-2.5", yn(h)])
                }, [
                  T("div", {
                    ref_key: "VtdRef",
                    ref: L,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    T("div", {
                      class: Ne(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", wt(h)])
                    }, [
                      T("div", {
                        onClick: (x) => i(),
                        class: "text-vtd-orange absolute cursor-pointer top-3 right-3"
                      }, [...u[10] || (u[10] = [
                        T("svg", {
                          class: "w-5 h-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          T("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M6 6l12 12M18 6l-12 12"
                          })
                        ], -1)
                      ])], 8, ua),
                      T("div", ia, [
                        t.shortcuts ? (Z(), Ge(Yt, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": F(),
                          "as-single": t.asSingle,
                          i18n: l.value,
                          close: i
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : xe("", !0),
                        T("div", da, [
                          te(tt, {
                            panel: f.previous,
                            calendar: S.value.previous
                          }, null, 8, ["panel", "calendar"]),
                          T("div", ca, [
                            le(te(st, {
                              months: _.value,
                              onUpdateMonth: S.value.previous.setMonth
                            }, null, 8, ["months", "onUpdateMonth"]), [
                              [ve, f.previous.month]
                            ]),
                            le(te(ot, {
                              years: S.value.previous.years(),
                              onUpdateYear: S.value.previous.setYear
                            }, null, 8, ["years", "onUpdateYear"]), [
                              [ve, f.previous.year]
                            ]),
                            le(T("div", null, [
                              te(at, { weeks: $.value }, null, 8, ["weeks"]),
                              te(nt, {
                                calendar: S.value.previous,
                                weeks: $.value,
                                "as-range": F(),
                                "week-number": e.weekNumber,
                                onUpdateDate: (x) => me(x, i)
                              }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                            ], 512), [
                              [ve, f.previous.calendar]
                            ])
                          ])
                        ]),
                        F() && !t.asSingle ? (Z(), J("div", ma, [
                          te(tt, {
                            panel: f.next,
                            calendar: S.value.next
                          }, null, 8, ["panel", "calendar"]),
                          T("div", fa, [
                            le(te(st, {
                              months: _.value,
                              onUpdateMonth: S.value.next.setMonth
                            }, null, 8, ["months", "onUpdateMonth"]), [
                              [ve, f.next.month]
                            ]),
                            le(te(ot, {
                              years: S.value.next.years(),
                              onUpdateYear: S.value.next.setYear
                            }, null, 8, ["years", "onUpdateYear"]), [
                              [ve, f.next.year]
                            ]),
                            le(T("div", null, [
                              te(at, { weeks: $.value }, null, 8, ["weeks"]),
                              te(nt, {
                                calendar: S.value.next,
                                weeks: $.value,
                                "as-range": F(),
                                "week-number": e.weekNumber,
                                onUpdateDate: (x) => me(x, i)
                              }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                            ], 512), [
                              [ve, f.next.calendar]
                            ])
                          ])
                        ])) : xe("", !0)
                      ]),
                      t.autoApply ? (Z(), J("div", Sa, [
                        T("div", Da, [
                          T("div", Ta, [
                            T("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              onClick: (x) => i(),
                              textContent: oe(k.value)
                            }, null, 8, Oa)
                          ])
                        ])
                      ])) : (Z(), J("div", pa, [
                        T("div", va, [
                          T("div", ha, [
                            T("label", ya, [
                              le(T("input", {
                                type: "checkbox",
                                name: "morning",
                                id: "check-morning",
                                "onUpdate:modelValue": u[3] || (u[3] = (x) => m.morning = x),
                                onChange: (x) => i()
                              }, null, 40, ga), [
                                [Qe, m.morning]
                              ]),
                              T("span", null, oe(o.value.morning), 1)
                            ]),
                            T("label", ba, [
                              le(T("input", {
                                type: "checkbox",
                                name: "afternoon",
                                id: "check-afternoon",
                                "onUpdate:modelValue": u[4] || (u[4] = (x) => m.afternoon = x),
                                onChange: (x) => i()
                              }, null, 40, xa), [
                                [Qe, m.afternoon]
                              ]),
                              T("span", null, oe(o.value.afternoon), 1)
                            ]),
                            T("label", wa, [
                              le(T("input", {
                                type: "checkbox",
                                name: "evening",
                                id: "check-evening",
                                "onUpdate:modelValue": u[5] || (u[5] = (x) => m.evening = x),
                                onChange: (x) => i()
                              }, null, 40, ja), [
                                [Qe, m.evening]
                              ]),
                              T("span", null, oe(o.value.evening), 1)
                            ]),
                            T("label", ka, [
                              le(T("input", {
                                type: "checkbox",
                                name: "night",
                                id: "check-night",
                                "onUpdate:modelValue": u[6] || (u[6] = (x) => m.night = x),
                                onChange: (x) => i()
                              }, null, 40, $a), [
                                [Qe, m.night]
                              ]),
                              T("span", null, oe(o.value.night), 1)
                            ])
                          ]),
                          T("div", _a, [
                            T("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full cursor-pointer px-4 py-2 text-vtd-blue bg-white inline-flex justify-center rounded-md border border-vtd-orange text-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              onClick: (x) => C(i),
                              textContent: oe(k.value)
                            }, null, 8, Ma)
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
const hn = /* @__PURE__ */ (() => {
  const e = Ia;
  return e.install = (n) => {
    n.component("VueTailwindDatepicker", e);
  }, e;
})(), Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Wa).forEach(([e, n]) => {
  e !== "default" && (hn[e] = n);
});
export {
  hn as default
};
