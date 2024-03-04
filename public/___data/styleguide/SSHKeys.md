Generate the keys on your local machine.

```bash
ssh-keygen -t rsa
```

- Save it to default location `/home/youruser/.ssh/id_rsa`.
- The public key is auto-generated: `/home/youruser/.ssh/id_rsa.pub`.
- Create a Passphrase when prompted, if wanted, in case the key is stolen.

Check the keys are there.

```bash
cd ~/.ssh
ls -la
# Public /~/local-user/.ssh/id_rsa.pub
# Private /~/local-user/.ssh/id_rsa
```

## Private Key Authentication

Copy SSH Key to Server

```bash
ssh-copy-id remote-user@remote_server

# If that doesn't work, try:
cat ~/.ssh/id_rsa.pub | ssh remote-user@remote_server "cat >> ~/.ssh/authorized_keys"

# Try Logging in Again. It will ask you for your passphrase if you created one
ssh remote-username@remote_server_ip-address

ssh remote_server
```