# terraform import aws_key_pair.04_23_2024_key us-east-1

# Access Key
provider "aws" {
  region     = "us-east-1"
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_ACCESS_KEY
}


# Security

#resource "aws_security_group" "Personal_Website_Inbound" {
 # name        = "Personal_Website_Inbound"
 # description = "Allow inbound traffic on port 4200"
  #vpc_id      = aws_vpc.example.id  # Replace with your VPC ID

 # // Allow inbound traffic on port 4200
 # ingress {
   # from_port   = 4200
   # to_port     = 4200
   # protocol    = "tcp"
   # cidr_blocks = ["0.0.0.0/0"]  # Allow access from any IP address
 # }

#}

# Create the EC2 instance and associate it with the new security group
resource "aws_instance" "example" {
  ami           = "ami-04e5276ebb8451442"
  instance_type = "t2.micro"
  key_name      = "04_23_2024_key"
  security_groups = ["allow_ssh", "allow_outbound", "Personal_Website_Inbound" ]

  # "SSL_Group_Port_80"

  tags = {
    Name = "Personal Website"
  }

  # Optionally include user_data to run scripts at launch
  # user_data = "${file("setup.sh")}"
}

######### EIP Config

# Grab EIP from AWS
data "aws_eip" "Personal_Website_IP" {
  # Configuration to fetch the Elastic IP information
  filter {
    name   = "tag:Name"
    values = ["Personal_Website_IP"]
  }
}

resource "aws_eip_association" "Personal_Website_IP" {
  instance_id   = aws_instance.example.id
  allocation_id = data.aws_eip.Personal_Website_IP.id
}

######### Variables

variable "AWS_ACCESS_KEY_ID" {}
variable "AWS_SECRET_ACCESS_KEY" {}
# variable "EC2_SSH" {}



######### Outputs
# Natural instance IP. Disable when using elastic
#output "ec2_instance_ip" {
  #value = aws_instance.example.public_ip
#}

output "ec2_instance_ip" {
  value = data.aws_eip.Personal_Website_IP.public_ip
}

