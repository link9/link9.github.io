var variantData;
var sortAscending = true;
var titles = ['Variant',
             'Chrom',
             'Position',
             'Ref.',
             'Alt.',
             'Type',
             'Variant Function',
             'Individuals',
             'Avg. Read Depth']

variantData = 
[["chr1:11169676 C \/ T","chr1",11169676,"C","T","SNP","intron_variant",1,556],["chr1:11174331 T \/ C","chr1",11174331,"T","C","SNP","intron_variant",5,254],["chr1:11181327 C \/ T","chr1",11181327,"C","T","SNP","synonymous_variant",1,616],["chr1:11181457 G \/ T","chr1",11181457,"G","T","SNP","intron_variant",1,558],["chr1:11181993 C \/ T","chr1",11181993,"C","T","SNP","intron_variant",1,41],["chr1:11186897 A \/ G","chr1",11186897,"A","G","SNP","intron_variant",1,620],["chr1:11187153 T \/ C","chr1",11187153,"T","C","SNP","missense_variant",1,1229],["chr1:11190546 C \/ A","chr1",11190546,"C","A","SNP","intron_variant",2,305],["chr1:11190646 G \/ A","chr1",11190646,"G","A","SNP","synonymous_variant",1,473],["chr1:11194347 C \/ A","chr1",11194347,"C","A","SNP","intron_variant",1,65],["chr1:11199768 T \/ A","chr1",11199768,"T","A","SNP","intron_variant",3,120],["chr1:11199770 G \/ A","chr1",11199770,"G","A","SNP","intron_variant",5,122],["chr1:11199772 A \/ G","chr1",11199772,"A","G","SNP","intron_variant",1,147],["chr1:11205058 C \/ T","chr1",11205058,"C","T","SNP","synonymous_variant",10,698],["chr1:11206690 A \/ T","chr1",11206690,"A","T","SNP","intron_variant",1,665],["chr1:11259601 G \/ C","chr1",11259601,"G","C","SNP","missense_variant",1,495],["chr1:11264828 A \/ C","chr1",11264828,"A","C","SNP","intron_variant",1,346],["chr1:11273418 T \/ G","chr1",11273418,"T","G","SNP","intron_variant",1,675],["chr1:11288758 G \/ A","chr1",11288758,"G","A","SNP","synonymous_variant",10,445],["chr1:11290951 G \/ A","chr1",11290951,"G","A","SNP","intron_variant",1,253],["chr1:11298640 C \/ T","chr1",11298640,"C","T","SNP","synonymous_variant",1,104],["chr1:11301714 A \/ G","chr1",11301714,"A","G","SNP","synonymous_variant",10,285],["chr1:11303153 C \/ A","chr1",11303153,"C","A","SNP","intron_variant",1,359],["chr1:11303383 T \/ C","chr1",11303383,"T","C","SNP","intron_variant",2,151],["chr1:11319475 G \/ A","chr1",11319475,"G","A","SNP","5_prime_UTR_variant",1,342],["chr1:115252402 T \/ C","chr1",115252402,"T","C","SNP","intron_variant",2,310],["chr1:156785617 G \/ A","chr1",156785617,"G","A","SNP","intragenic_variant",10,330],["chr1:156834136 C \/ T","chr1",156834136,"C","T","SNP","intron_variant",1,63],["chr1:156834269 G \/ T","chr1",156834269,"G","T","SNP","intron_variant",2,154],["chr1:156834547 C \/ T","chr1",156834547,"C","T","SNP","synonymous_variant",1,55],["chr1:156836683 TG \/ T","chr1",156836683,"TG","T","DEL","intron_variant",1,113],["chr1:156837846 A \/ G","chr1",156837846,"A","G","SNP","intron_variant",1,63],["chr1:156837956 G \/ A","chr1",156837956,"G","A","SNP","synonymous_variant",1,47],["chr1:156841379 G \/ T","chr1",156841379,"G","T","SNP","intron_variant",1,202],["chr1:156844967 A \/ T","chr1",156844967,"A","T","SNP","intron_variant",2,885]]
;


var table = d3.select('#variantTable').append('table');

var headers = table.append('thead').append('tr')
               .selectAll('th')
               .data(titles).enter()
               .append('th')
               .html(function (d) {
                    return '<a href="#">'+d+'</a>';
                })
               .on('click', function (d, i) {
                    
                   if (sortAscending) {
                     rows.sort(function(a, b) { return d3.ascending(a[i], b[i]); });
                     sortAscending = false;
                   } else {
                     rows.sort(function(a, b) { return d3.descending(a[i], b[i]); });
                     sortAscending = true;
                   }

               });

var rows = table.append('tbody').selectAll('tr')
           .data(variantData).enter()
           .append('tr');

rows.selectAll('td')
    .data(function(d) {
        return d;
    }).enter()
    .append('td')
    .text(function (d) {
        return d;
    });


