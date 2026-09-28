echo """

IMAGES ARE NOT FOR REDISTRIBUTION
!!! DON'T RIGHT-CLICK THESE IMAGES PLEASE !!!

"""

export STATIC_URL=https://dhstatic.hum.uu.nl/digital-atlas
mkdir -p public/img
cd public/img
rm *
curl --fail "$STATIC_URL/images.zip" -O
unzip images.zip
