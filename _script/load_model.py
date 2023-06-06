import torch

def generator(pretrained=True, device="cpu"):
    from model import Generator
    known = {
        name: f"weights/{name}.pt"
        for name in [
            'celeba_distill', 'face_paint_512_v1', 'face_paint_512_v2', 'paprika'
        ]
    }

    device = torch.device(device)
    model = Generator().to(device)

    if type(pretrained) == str:
        model_path = known.get(pretrained, pretrained)
        pretrained = True
    else:
        model_path = known.get('face_paint_512_v2')

    if pretrained is True:
        state_dict = torch.load(model_path, map_location=device)
        model.load_state_dict(state_dict)

    return model


def face2paint(device="cpu", size=512, side_by_side=False):
    from PIL import Image
    from torchvision.transforms.functional import to_tensor, to_pil_image

    def face2paint(
        model: torch.nn.Module,
        img: Image.Image,
        size: int = size,
        side_by_side: bool = side_by_side,
        device: str = device,
    ) -> Image.Image:
        w, h = img.size
        s = min(w, h)
        img = img.crop(((w - s) // 2, (h - s) // 2, (w + s) // 2, (h + s) // 2))
        img = img.resize((size, size), Image.LANCZOS)

        with torch.no_grad():
            input = to_tensor(img).unsqueeze(0) * 2 - 1
            output = model(input.to(device)).cpu()[0]

            if side_by_side:
                output = torch.cat([input[0], output], dim=2)

            output = (output * 0.5 + 0.5).clip(0, 1)

        return to_pil_image(output)

    return face2paint

