#!/bin/bash

git add .

echo "coment pls!!!"

read comment

git commit -m "$comment"

git push
