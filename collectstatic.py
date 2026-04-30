import shutil
import os
from pathlib import Path

_here = Path(os.path.abspath(os.path.dirname(__file__)))
build_dir = _here / 'frontend/dist'
static_dir = _here / 'static'


def clean_static():
    if os.path.isfile(static_dir):
        os.remove(static_dir)
    if os.path.isdir(static_dir):
        shutil.rmtree(static_dir)


def collect_static():
    if os.path.isdir(build_dir):
        shutil.copytree(build_dir, static_dir)

if __name__ == '__main__':
    clean_static()
    collect_static()

