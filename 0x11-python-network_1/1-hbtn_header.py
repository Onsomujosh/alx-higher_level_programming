#!/usr/bin/python3
"""Displays the value of the X-Request-Id header variable of a request to a given URL.
"""
import sys
import urllib.request


if __name__ == "__main__":
    url = sys.argv[1]

    request = urllib.request.Request(url)
    with urllib.request.urlopen(request) as response:
        x_request_id = response.getheader("X-Request-Id")
        print(x_request_id)
