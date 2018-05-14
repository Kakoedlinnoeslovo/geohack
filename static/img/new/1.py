import numpy as np
import cv2
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--image')
args = parser.parse_args()

path = args.image

img = cv2.imread(path, cv2.IMREAD_COLOR)
shape = img.shape
img = np.concatenate([img[:,0:500].T, img.T, img[:,2300 : ].T], axis=1).T
img = np.concatenate([img[:,0:500].T, img.T, img[:,2300 : ].T], axis=1).T
img = np.concatenate([img[:,0:500].T, img.T, img[:,2300 : ].T], axis=1).T
img = np.concatenate([img[:,0:500].T, img.T, img[:,2300 : ].T], axis=1).T
img = cv2.resize(img, shape[:2])
cv2.imwrite(path, img)

