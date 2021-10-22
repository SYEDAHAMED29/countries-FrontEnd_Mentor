module.exports = {
   purge: ['./src/**/*.jsx',
           './src/**/*.js'],
   darkMode: "class", // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            "custom-darkblue": "	#202c37",
            "custom-blue": "#2b3945",
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
