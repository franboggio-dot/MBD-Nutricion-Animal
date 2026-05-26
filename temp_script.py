import os, sys
with open("src/pages/PresetD.jsx", "r", encoding="utf-8") as f:
    c = f.read()
bt = chr(96)
detail = r"""TEST_RUN"""
with open("src/pages/PresetD.jsx", "w", encoding="utf-8") as f:
    f.write(c)
sys.stdout = open(1, "w", encoding="utf-8", closefd=False)
print("OK")