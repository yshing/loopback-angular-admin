# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box     = "ubuntu/trusty64"
  config.vm.box_url = "https://vagrantcloud.com/ubuntu/boxes/trusty64/versions/14.04/providers/virtualbox.box"

  config.vm.network :private_network, ip: "192.168.50.3"

  config.vm.synced_folder "./", "/srv/loopback-angular-admin/"

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", 1024]
    vb.customize ["modifyvm", :id, "--vtxvpid", "off"]
    vb.customize ["modifyvm", :id, "--cpus", "1"]
  end

  config.vm.provision :ansible do |ansible|
    ansible.playbook = "ansible-playbooks/main.yml"
    # ansible.verbose = 'vvvv'
  end
end
