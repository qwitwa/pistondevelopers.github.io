var searchIndex = {};
searchIndex['image'] = {"items":[[0,"","image","This crate provides native rust implementations of\nImage encoders and decoders and basic image manipulation\nfunctions."],[1,"Image","","A Generic representation of an image"],[11,"pixels","","",0],[11,"width","","",0],[11,"height","","",0],[11,"color","","",0],[1,"SubImage","","An immutable view into another image."],[11,"pixels","","",1],[11,"color","","",1],[11,"xoffset","","",1],[11,"yoffset","","",1],[11,"width","","",1],[11,"height","","",1],[11,"vstride","","",1],[1,"Tiles","","An iterator over nonoverlapping rectangles within an image."],[11,"image","","",2],[11,"y","","",2],[11,"x","","",2],[11,"xstride","","",2],[11,"ystride","","",2],[1,"JPEGDecoder","","The representation of a JPEG decoder"],[11,"r","","",3],[11,"qtables","","",3],[11,"dctables","","",3],[11,"actables","","",3],[11,"h","","",3],[11,"height","","",3],[11,"width","","",3],[11,"num_components","","",3],[11,"scan_components","","",3],[11,"components","","",3],[11,"mcu_row","","",3],[11,"mcu","","",3],[11,"hmax","","",3],[11,"vmax","","",3],[11,"interval","","",3],[11,"mcucount","","",3],[11,"expected_rst","","",3],[11,"row_count","","",3],[11,"decoded_rows","","",3],[11,"padded_width","","",3],[11,"state","","",3],[1,"JPEGEncoder","","The representation of a JPEG encoder"],[11,"w","","",4],[11,"components","","",4],[11,"tables","","",4],[11,"accumulator","","",4],[11,"nbits","","",4],[11,"luma_dctable","","",4],[11,"luma_actable","","",4],[11,"chroma_dctable","","",4],[11,"chroma_actable","","",4],[1,"PNGDecoder","","The representation of a PNG decoder"],[11,"z","","",5],[11,"crc","","",5],[11,"previous","","",5],[11,"state","","",5],[11,"width","","",5],[11,"height","","",5],[11,"bit_depth","","",5],[11,"colour_type","","",5],[11,"pixel_type","","",5],[11,"palette","","",5],[11,"interlace_method","","",5],[11,"chunk_length","","",5],[11,"chunk_type","","",5],[11,"bpp","","",5],[11,"rlength","","",5],[11,"decoded_rows","","",5],[1,"PNGEncoder","","The representation of a PNG encoder"],[11,"w","","",6],[11,"crc","","",6],[1,"GIFDecoder","","The Representation of a GIF decoder"],[11,"r","","",7],[11,"width","","",7],[11,"height","","",7],[11,"global_table","","",7],[11,"local_table","","",7],[11,"delay","","",7],[11,"image","","",7],[11,"global_backgroud_index","","",7],[11,"local_transparent_index","","",7],[11,"have_header","","",7],[11,"decoded_rows","","",7],[1,"WebpDecoder","","A Representaion of a Webp Image format decoder."],[11,"r","","",8],[11,"frame","","",8],[11,"have_frame","","",8],[11,"decoded_rows","","",8],[2,"ImageError","","An enumeration of Image Errors"],[12,"FormatError","","The Image is not formatted properly",9],[12,"DimensionError","","The Image's dimensions are either too small or too large",9],[12,"UnsupportedError","","The Decoder does not support this image format",9],[12,"UnsupportedColor","","The Decoder does not support this color type",9],[12,"NotEnoughData","","Not enough data was provided to the Decoder\nto decode the image",9],[12,"IoError","","An I/O Error occurred while decoding the image",9],[12,"ImageEnd","","The end of the image has been reached",9],[2,"ImageFormat","","An enumeration of supported image formats.\nNot all formats support both encoding and decoding."],[12,"PNG","","An Image in PNG Format",10],[12,"JPEG","","An Image in JPEG Format",10],[12,"GIF","","An Image in GIF Format",10],[12,"WEBP","","An Image in WEBP Format",10],[12,"PPM","","An Image in PPM Format",10],[0,"codecs","","Image Codecs"],[0,"vp8","image::codecs","An implementation of the VP8 Video Codec"],[1,"Frame","image::codecs::vp8","A Representation of the last decoded video frame"],[11,"width","","The width of the luma plane",11],[11,"height","","The height of the luma plane",11],[11,"ybuf","","The luma plane of the frame",11],[11,"keyframe","","Indicates whether this frame is a keyframe",11],[11,"version","","",11],[11,"for_display","","Indicates whether this frame is intended for display",11],[11,"pixel_type","","The pixel type of the frame as defined by Section 9.2\nof the VP8 Specification",11],[11,"filter","","",11],[11,"filter_level","","",11],[11,"sharpness_level","","",11],[1,"VP8Decoder","","VP8 Decoder\nOnly decodes keyframes"],[11,"r","","",12],[11,"b","","",12],[11,"mbwidth","","",12],[11,"mbheight","","",12],[11,"frame","","",12],[11,"segments_enabled","","",12],[11,"segments_update_map","","",12],[11,"segment","","",12],[11,"partitions","","",12],[11,"num_partitions","","",12],[11,"segment_tree_probs","","",12],[11,"token_probs","","",12],[11,"prob_intra","","",12],[11,"prob_skip_false","","",12],[11,"top","","",12],[11,"left","","",12],[11,"top_border","","",12],[11,"left_border","","",12],[10,"clone","","",11],[10,"fmt","","",11],[10,"default","","",11],[10,"new","","Create a new decoder.\nThe reader must present a raw vp8 bitstream to the decoder",12],[10,"decode_frame","","Decodes the current frame and returns a reference to it",12],[0,"jpeg","image::codecs","Decoding and Encoding of JPEG Images"],[1,"JPEGDecoder","image::codecs::jpeg","The representation of a JPEG decoder"],[11,"r","","",3],[11,"qtables","","",3],[11,"dctables","","",3],[11,"actables","","",3],[11,"h","","",3],[11,"height","","",3],[11,"width","","",3],[11,"num_components","","",3],[11,"scan_components","","",3],[11,"components","","",3],[11,"mcu_row","","",3],[11,"mcu","","",3],[11,"hmax","","",3],[11,"vmax","","",3],[11,"interval","","",3],[11,"mcucount","","",3],[11,"expected_rst","","",3],[11,"row_count","","",3],[11,"decoded_rows","","",3],[11,"padded_width","","",3],[11,"state","","",3],[1,"JPEGEncoder","","The representation of a JPEG encoder"],[11,"w","","",4],[11,"components","","",4],[11,"tables","","",4],[11,"accumulator","","",4],[11,"nbits","","",4],[11,"luma_dctable","","",4],[11,"luma_actable","","",4],[11,"chroma_dctable","","",4],[11,"chroma_actable","","",4],[1,"Component","","A representation of a JPEG component"],[11,"id","","The Component's identifier",13],[11,"h","","Horizontal sampling factor",13],[11,"v","","Vertical sampling factor",13],[11,"tq","","The quantization table selector",13],[11,"dc_table","","Index to the Huffman DC Table",13],[11,"ac_table","","Index to the AC Huffman Table",13],[11,"dc_pred","","The dc prediction of the component",13],[3,"derive_codes_and_sizes","","Given an array containing the number of codes of each code length,\nthis function generates the huffman codes lengths and their respective\ncode lengths as specified by the JPEG spec."],[5,"UNZIGZAG","","The permutation of dct coefficients."],[10,"clone","","",13],[0,"png","image::codecs","Decoding and Encoding of PNG Images"],[1,"PNGDecoder","image::codecs::png","The representation of a PNG decoder"],[11,"z","","",5],[11,"crc","","",5],[11,"previous","","",5],[11,"state","","",5],[11,"width","","",5],[11,"height","","",5],[11,"bit_depth","","",5],[11,"colour_type","","",5],[11,"pixel_type","","",5],[11,"palette","","",5],[11,"interlace_method","","",5],[11,"chunk_length","","",5],[11,"chunk_type","","",5],[11,"bpp","","",5],[11,"rlength","","",5],[11,"decoded_rows","","",5],[1,"PNGEncoder","","The representation of a PNG encoder"],[11,"w","","",6],[11,"crc","","",6],[5,"PNGSIGNATURE","",""],[0,"gif","image::codecs","Decoding of GIF Images"],[1,"GIFDecoder","image::codecs::gif","The Representation of a GIF decoder"],[11,"r","","",7],[11,"width","","",7],[11,"height","","",7],[11,"global_table","","",7],[11,"local_table","","",7],[11,"delay","","",7],[11,"image","","",7],[11,"global_backgroud_index","","",7],[11,"local_transparent_index","","",7],[11,"have_header","","",7],[11,"decoded_rows","","",7],[0,"webp","image::codecs","Decoding of Webp Images"],[1,"WebpDecoder","image::codecs::webp","A Representaion of a Webp Image format decoder."],[11,"r","","",8],[11,"frame","","",8],[11,"have_frame","","",8],[11,"decoded_rows","","",8],[0,"ppm","image::codecs","Encoding of PPM Images"],[1,"PPMEncoder","image::codecs::ppm","A representation of a PPM encoder."],[11,"w","","",14],[10,"new","","Create a new PPMEncoder from the Writer ```w```.\nThis function takes ownership of the Writer.",14],[10,"encode","","Encode the buffer ```im``` as a PPM image.\n```width``` and ```height``` are the dimensions of the buffer.\n```color``` is the buffers ColorType.",14],[0,"imaging","image","Image Processing Functions"],[0,"colortype","image::imaging","Types and methods for representing and manipulating colors"],[2,"ColorType","image::imaging::colortype","An enumeration over supported color types and their bit depths"],[12,"Grey","","Pixel is greyscale",15],[12,"RGB","","Pixel contains R, G and B channels",15],[12,"Palette","","Pixel is an index into a color palette",15],[12,"GreyA","","Pixel is greyscale with an alpha channel",15],[12,"RGBA","","Pixel is RGB with an alpha channel",15],[3,"bits_per_pixel","","Returns the number of bits contained in a pixel of ColorType c"],[3,"num_components","","Returns the number of color channels that make up this pixel"],[10,"clone","","",15],[10,"fmt","","",15],[10,"eq","","",15],[10,"ne","","",15],[0,"pixel","image::imaging","Types and functions for the representation of pixels."],[1,"Luma","image::imaging::pixel","A type to hold a grayscale pixel"],[1,"LumaA","","A type to hold a grayscale pixel with an alha channel"],[1,"Rgb","","A type to hold an RGB pixel"],[1,"Rgba","","A type to hold an RGB pixel with an alpha channel"],[6,"Pixel","","A trait that all pixels implement."],[9,"from_channels","","Construct a pixel from the 4 channels a, b, c and d.\nIf the pixel does not contain 4 channels the extra are ignored.",16],[9,"to_rgb","","Convert this pixel to RGB",16],[9,"to_rgba","","Convert this pixel to RGB with an alpha channel",16],[9,"to_luma","","Convert this pixel to luma",16],[9,"to_luma_alpha","","Convert this pixel to luma with an alpha channel",16],[9,"invert","","Invert this pixel",16],[9,"map","","Apply the function ```f``` to each channel of this pixel.\nIf there is an alpha channel it is not changed.",16],[9,"map2","","Apply the function ```f``` to each channel of this pixel and\n```other``` pairwise.",16],[9,"channels4","","Returns the channels of this pixes as a 4 tuple. If the pixel\nhas less than 4 channels the remainder is filled with the maximum value",16],[10,"fmt","","",17],[10,"clone","","",17],[10,"eq","","",17],[10,"ne","","",17],[10,"default","","",17],[10,"channel","","Returns the channels of this pixel as a tuple",17],[10,"fmt","","",18],[10,"clone","","",18],[10,"eq","","",18],[10,"ne","","",18],[10,"default","","",18],[10,"channels","","Returns the channels of this pixel as a tuple",18],[10,"alpha","","Returns the alpha channel of this pixel",18],[10,"fmt","","",19],[10,"clone","","",19],[10,"eq","","",19],[10,"ne","","",19],[10,"default","","",19],[10,"channels","","Returns the channels of this pixel as a tuple",19],[10,"fmt","","",20],[10,"clone","","",20],[10,"eq","","",20],[10,"ne","","",20],[10,"default","","",20],[10,"channels","","Returns the channels of this pixel as a tuple",20],[10,"alpha","","Returns the alpha channel of this pixel",20],[10,"from_channels","","",19],[10,"to_luma","","",19],[10,"to_luma_alpha","","",19],[10,"to_rgb","","",19],[10,"to_rgba","","",19],[10,"invert","","",19],[10,"map","","",19],[10,"map2","","",19],[10,"channels4","","",19],[10,"from_channels","","",20],[10,"to_luma","","",20],[10,"to_luma_alpha","","",20],[10,"to_rgb","","",20],[10,"to_rgba","","",20],[10,"invert","","",20],[10,"map","","",20],[10,"map2","","",20],[10,"channels4","","",20],[10,"from_channels","","",17],[10,"to_luma","","",17],[10,"to_luma_alpha","","",17],[10,"to_rgb","","",17],[10,"to_rgba","","",17],[10,"invert","","",17],[10,"map","","",17],[10,"map2","","",17],[10,"channels4","","",17],[10,"from_channels","","",18],[10,"to_luma","","",18],[10,"to_luma_alpha","","",18],[10,"to_rgb","","",18],[10,"to_rgba","","",18],[10,"invert","","",18],[10,"map","","",18],[10,"map2","","",18],[10,"channels4","","",18],[0,"sample","image::imaging","Functions and filters for the sampling of pixels."],[1,"Filter","image::imaging::sample","A Representation of a seperable filter."],[11,"kernel","","The filter's filter function.",21],[11,"support","","The window on which this filter operates.",21],[2,"FilterType","","Available Sampling Filters"],[12,"Nearest","","Nearest Neighbor",22],[12,"Triangle","","Linear Filter",22],[12,"CatmullRom","","Cubic Filter",22],[12,"Gaussian","","Gaussian Filter",22],[12,"Lanczos3","","Lanczos with window 3",22],[3,"gaussian","","The Gaussian Function.\n```r``` is the standard deviation."],[3,"lanczos3_kernel","","Calculate the lanczos kernel with a window of 3"],[3,"gaussian_kernel","","Calculate the gaussian function with a\nstandard deviation of 1.0"],[3,"catmullrom_kernel","","Calculate the Catmull-Rom cubic spline.\nAlso known as a form of BiCubic sampling in two dimensions."],[3,"triangle_kernel","","Calculate the triangle function.\nAlso known as BiLinear sampling in two dimensions."],[3,"box_kernel","","Calculate the box kernel.\nWhen applied in two dimensions with a support of 0.5\nit is equivalent to nearest neighbor sampling."],[3,"filter3x3","","Perform a 3x3 box filter on ```pixels```.\n```width``` is the width of pixels.\n```height``` is the height of pixels.\n```kernel``` is an array of the filter weights of length 9."],[3,"resize","","Resize ```pixels```.\n```width``` and ```height``` are the original dimensions.\n```nwidth``` and ```nheight``` are the new dimensions.\n```filter``` is the sampling filter to use."],[3,"blur","","Perfomrs a Gausian blur on ```pixels```\n```width``` and ```height``` are the dimensions of the buffer.\n```sigma``` is a meausure of how much to blur by."],[3,"unsharpen","","Performs an unsharpen mask on ```pixels```\n```sigma``` is the amount to blur the image by.\n```threshold``` is the threshold for the difference between\nsee https://en.wikipedia.org/wiki/Unsharp_masking#Digital_unsharp_masking"],[0,"colorops","image::imaging","Functions for altering and converting the color of pixelbufs"],[3,"grayscale","image::imaging::colorops","Convert ```pixels``` to grayscale"],[3,"invert","","Invert each pixel within ```pixels```\nThis function operates in place."],[3,"contrast","","Adjust the contrast of ```pixels```\n```contrast``` is the amount to adjust the contrast by.\nNegative values decrease the constrast and positive values increase the constrast."],[3,"brighten","","Brighten ```pixels```\n```value``` is the amount to brighten each pixel by.\nNegative values decrease the brightness and positive values increase it."],[0,"pixelbuf","image::imaging","Types and functions for working with pixels, where the colortype is not known\nat compile time."],[2,"PixelBuf","image::imaging::pixelbuf","An abstraction over a vector of pixel types"],[12,"Luma8","","Each pixel in this buffer is 8-bit Luma",23],[12,"LumaA8","","Each pixel in this buffer is 8-bit Luma with alpha",23],[12,"Rgb8","","Each pixel in this buffer is 8-bit Rgb",23],[12,"Rgba8","","Each pixel in this buffer is 8-bit Rgb with alpha",23],[10,"eq","","",23],[10,"ne","","",23],[10,"fmt","","",23],[10,"clone","","",23],[10,"as_luma8","","Convert from self to an array of 8-bit Luma pixels.",23],[10,"as_luma_alpha8","","Convert from self to an array of 8-bit Luma pixels with alpha.",23],[10,"as_rgb8","","Convert from self to an array of 8-bit RGB pixels.",23],[10,"as_rgba8","","Convert from self to an array of 8-bit RGB pixels with alpha.",23],[10,"from_bytes","","Convert from a vector of bytes to a ```PixelBuf```\nReturns the original buffer if the conversion cannot be done.",23],[10,"to_bytes","","Convert from a ```PixelBuf``` to a vector of bytes",23],[10,"len","","",23],[0,"affine","image::imaging","Functions for performing affine transformations."],[3,"rotate90","image::imaging::affine","Rotate ```pixels``` 90 degrees clockwise."],[3,"rotate180","","Rotate ```pixels``` 180 degrees clockwise."],[3,"rotate270","","Rotate ```pixels``` 270 degrees clockwise."],[3,"flip_horizontal","","Flip ```pixels``` horizontally"],[3,"flip_vertical","","Flip ```pixels``` vertically"],[4,"ImageResult","image",""],[6,"ImageDecoder","","The trait that all decoders implement"],[9,"dimensions","","Return a tuple containing the width and height of the image",24],[9,"colortype","","Return the color type of the image e.g RGB(8) (8bit RGB)",24],[9,"row_len","","Returns the length in bytes of one decoded row of the image",24],[9,"read_scanline","","Read one row from the image into buf\nReturns the row index",24],[9,"read_image","","Decode the entire image and return it as a Vector",24],[10,"load_rect","","Decode a specific region of the image, represented by the rectangle\nstarting from ```x``` and ```y``` and having ```length``` and ```width```",24]],"paths":[[1,"Image"],[1,"SubImage"],[1,"Tiles"],[1,"JPEGDecoder"],[1,"JPEGEncoder"],[1,"PNGDecoder"],[1,"PNGEncoder"],[1,"GIFDecoder"],[1,"WebpDecoder"],[2,"ImageError"],[2,"ImageFormat"],[1,"Frame"],[1,"VP8Decoder"],[1,"Component"],[1,"PPMEncoder"],[2,"ColorType"],[6,"Pixel"],[1,"Luma"],[1,"LumaA"],[1,"Rgb"],[1,"Rgba"],[1,"Filter"],[2,"FilterType"],[2,"PixelBuf"],[6,"ImageDecoder"]]};
initSearch(searchIndex);
