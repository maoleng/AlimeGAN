import argparse
import torch
import requests
from PIL import Image
import load_model

parser = argparse.ArgumentParser()
parser.add_argument('-s', '--source', type=str, help='Image url')
source = parser.parse_args().source

model = load_model.generator().eval()
face2paint = load_model.face2paint()
img = Image.open(source).convert("RGB")
out = face2paint(model, img)

out.save('result.png')