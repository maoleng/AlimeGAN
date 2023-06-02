import torch
import base64
import cv2
import random
import os
import numpy as np
from utils import read_image, resize_image
from inference import Transformer
transformer = Transformer('hayao')

url = 'https://cdn.vox-cdn.com/thumbor/gU6znSoxGS1oNf9XCxy0xBMxFiU=/0x0:6949x4638/1200x800/filters:focal(2920x1764:4030x2874)/cdn.vox-cdn.com/uploads/chorus_image/image/59204015/shutterstock_536517334.0.jpg'
image = resize_image(read_image(url))

anime_img = (((transformer.transform(image) + 1) / 2) * 255).astype(np.uint8)
_, encoded_image = cv2.imencode('.jpg', anime_img[0])
base64_image = base64.b64encode(encoded_image).decode('utf-8')

print('data:image/png;base64,', base64_image)