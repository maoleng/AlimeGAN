import argparse
import torch
import requests
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument('-s', '--source', type=str, help='Image url')
source = parser.parse_args().source

model = torch.hub.load("bryandlee/animegan2-pytorch:main", "generator", device='cpu').eval()
face2paint = torch.hub.load("bryandlee/animegan2-pytorch:main", "face2paint", size=512)
img = Image.open(source).convert("RGB")
out = face2paint(model, img)

out.save('result.png')