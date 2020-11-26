import tesserocr;
from PIL import Image;
image = Image.open('a.jpg');
print(image)
print(tesserocr.image_to_text(image))