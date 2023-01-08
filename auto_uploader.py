# ------------------------------------------------------------------------------------------
# Simple python script to automatically build and send plugin to idevice on editing files
# - openssh need to be installed on idevice
# - config your ip/user/password/plugin_dir/plugin_name first
# ------------------------------------------------------------------------------------------
# by https://github.com/m4fn3

import os
import paramiko
import scp
import time
import threading
from http.server import HTTPServer, CGIHTTPRequestHandler, SimpleHTTPRequestHandler
from watchdog.events import PatternMatchingEventHandler
from watchdog.observers import Observer

# ***** config *****************************
# HTTP
port = 80
# SSH
# ssh_ip = "192.168.11.7"
ssh_ip = "192.168.11.17"  # iphone7
user = "root"
password = "alpine"
# plugin_dir = "/var/mobile/Containers/Data/Application/67B6DA71-D282-4C83-A7C8-17C0BF6CB9E1/Documents/Plugins/"
plugin_dir = "/var/mobile/Containers/Data/Application/8518D615-0D41-4766-BE03-1D8862DF036D/Documents/Plugins/"  # iphone7
plugin_name = "AddonManager"


class HTTPHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_my_headers()
        SimpleHTTPRequestHandler.end_headers(self)

    def send_my_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")


def http_server():
    # http server
    httpd = HTTPServer(("", port), HTTPHandler)
    httpd.serve_forever()


def connect_ssh():
    def on_modified(event):
        filepath = event.src_path
        filename = filepath.split("\\")[-1]
        if filepath.startswith(r".\src") and ("~" not in filename and "." in filename):
            os.system("npm run build")  # build
            client.put(f"./dist/{plugin_name}.js", plugin_dir)  # make sure that plugin name and file name is the same or you will face weird bugs
            ssh.exec_command(f"rm {plugin_dir}{plugin_name}.js.disable")  # remove disable stat if exists

    # ssh connection
    with paramiko.SSHClient() as ssh:
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(ssh_ip, port=22, username=user, password=password)
        client = scp.SCPClient(ssh.get_transport())

        # watch file editing
        event_handler = PatternMatchingEventHandler(["*"])
        event_handler.on_modified = on_modified
        observer = Observer()
        observer.schedule(event_handler, ".", recursive=True)
        observer.start()
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            observer.stop()
        observer.join()


if __name__ == "__main__":
    thread = threading.Thread(target=http_server)
    thread.setDaemon(True)
    thread.start()
    connect_ssh()
