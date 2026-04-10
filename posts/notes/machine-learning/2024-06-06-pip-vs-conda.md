---
date: '2024-06-06'
title: 'Pip vs Conda'
---

- **Conda installs binary packages, which means the packages include compiled code**. This can make the installation process faster and more reliable, especially for packages with complex dependencies. Pip, by contrast, often installs packages from source, which means the code is compiled during the installation process.Aug 8, 2023

- Conda is a packaging tool and installer that aims to do more than what `pip` does; handle library dependencies _outside_ of the Python packages as well as the Python packages themselves. Conda also creates a virtual environment, like `virtualenv` does.


Install = build + copy to system path (with tracking by package manager)

- Building means compiling the source code to binary in a sandbox location where it won't affect your system if something goes wrong, like a `build` subdirectory inside the source code directory.

- Install means copying the built binaries from the `build` subdirectory to a place in your system path, where they become easily accessible. This is rarely done by a straight copy command, and it's often done by some package manager that can track the files created and easily uninstall them later.