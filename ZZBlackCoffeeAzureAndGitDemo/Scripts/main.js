function ViewModel() {
    this.players = [
        { position: "Forward", number: "21", image: "/images/21.jpg", name: "Angelo Henriquez" },
        { position: "Goalkeeper", number: "01", image: "/images/01.jpg", name: "David de Gea" },
        { position: "Goalkeeper", number: "40", image: "/images/40.jpg", name: "Ben Amos" },
        { position: "Defender", number: "03", image: "/images/03.jpg", name: "Patrice Evra" },
        { position: "Midfielder", number: "08", image: "/images/08.jpg", name: "Anderson" },
        { position: "Midfielder", number: "33", image: "/images/33.jpg", name: "Bebe" },
        { position: "Defender", number: "28", image: "/images/28.jpg", name: "Alexander Butner" },
        { position: "Defender", number: "30", image: "/images/30.jpg", name: "Guillermo Varela" },
        { position: "Midfielder", number: "31", image: "/images/31.jpg", name: "Marouane Fellaini" },
        { position: "Midfielder", number: "16", image: "/images/16.jpg", name: "Michael Carrick" },
        { position: "Midfielder", number: "26", image: "/images/26.jpg", name: "Shinji Kagawa" },
        { position: "Midfielder", number: "32", image: "/images/32.jpg", name: "Nick Powell" },
        { position: "Midfielder", number: "23", image: "/images/23.jpg", name: "Tom Cleverley" },
        { position: "Defender", number: "06", image: "/images/06.jpg", name: "Jonny Evans" },
        { position: "Defender", number: "22", image: "/images/22.jpg", name: "Fabio" },
        { position: "Defender", number: "05", image: "/images/05.jpg", name: "Rio Ferdinand" },
        { position: "Midfielder", number: "24", image: "/images/24.jpg", name: "Darren Fletcher" },
        { position: "Midfielder", number: "11", image: "/images/11.jpg", name: "Ryan Giggs" },
        { position: "Midfielder", number: "34", image: "/images/34.jpg", name: "Larnell Cole" },
        { position: "Goalkeeper", number: "13", image: "/images/13.jpg", name: "Anders Lindegaard" },
        { position: "Forward", number: "14", image: "/images/14.jpg", name: "Javier Hernandez" },
        { position: "Midfielder", number: "35", image: "/images/35.jpg", name: "Jesse Lingard" },
        { position: "Defender", number: "38", image: "/images/38.jpg", name: "Michael Keane" },
        { position: "Goalkeeper", number: "50", image: "/images/50.jpg", name: "Sam Johnstone" },
        { position: "Forward", number: "27", image: "/images/27.jpg", name: "Federico Macheda" },
        { position: "Midfielder", number: "44", image: "/images/44.jpg", name: "Adnan Januzaj" },
        { position: "Midfielder", number: "17", image: "/images/17.jpg", name: "Nani" },
        { position: "Midfielder", number: "29", image: "/images/29.jpg", name: "Wilfried Zaha" },
        { position: "Defender", number: "02", image: "/images/02.jpg", name: "Rafael" },
        { position: "Forward", number: "10", image: "/images/10.jpg", name: "Wayne Rooney" },
        { position: "Midfielder", number: "18", image: "/images/18.jpg", name: "Ashley Young" },
        { position: "Defender", number: "12", image: "/images/12.jpg", name: "Chris Smalling" },
        { position: "Defender", number: "04", image: "/images/04.jpg", name: "Phil Jones" },
        { position: "Midfielder", number: "25", image: "/images/25.jpg", name: "Antonio Valencia" },
        { position: "Forward", number: "20", image: "/images/20.jpg", name: "Robin van Persie" },
        { position: "Defender", number: "15", image: "/images/15.jpg", name: "Nemanja Vidic" },
        { position: "Forward", number: "19", image: "/images/19.jpg", name: "Danny Welbeck" }
    ];

    this.selectedProducts = ko.observable();
    this.resetSelectedProducts = function () { this.selectedProducts(null); }
}

ko.applyBindings(new ViewModel());

$(document).ready(function () {

    var $container = $('.products');
    $container.isotope({
        itemSelector: '.product',
        layoutMode: 'masonry',
        getSortData: {
            category: function ($elem) { return $elem.attr('data-category'); },
            name: function ($elem) { return $elem.find('.name').text(); },
            sku: function ($elem) { return $elem.find('.sku').text(); }
        }
    }, function ($items) {
        var id = this.attr('id');
        var len = $items.length;
        console.log('Isotope has filtered for ' + len + ' items in #' + id);
    });
    $('#player-sorting a').click(function () {
        var sortName = $(this).attr('href').slice(1);
        console.log(sortName);
        $container.isotope({ sortBy: sortName, sortAscending: true });
        return false;
    });
    $('#player-filtering a').on('click', function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });

    // Inline popups
    $('#inline-popups').magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // Image popups
    $('.image-link').magnificPopup({
        //delegate: 'a',
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-3d-unfold'; //this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });


    // Hinge effect popup
    $('a.hinge').magnificPopup({
        mainClass: 'mfp-with-fade',
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
            beforeClose: function () {
                this.content.addClass('hinge');
            },
            close: function () {
                this.content.removeClass('hinge');
            }
        },
        midClick: true
    });
});
