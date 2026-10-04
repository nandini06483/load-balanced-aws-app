# load-balanced-aws-app
# Load Balanced Cloud Application

## 📌 Project Overview

This project demonstrates a cloud-based application deployed on multiple
Amazon EC2 instances behind an AWS Application Load Balancer.

The same Node.js application runs on multiple backend servers. The
Application Load Balancer distributes incoming requests among the healthy
backend servers.

## 🎯 Objective

The main objectives of this project are:

- Deploy an application on multiple EC2 instances.
- Run the same application on multiple servers.
- Configure an AWS Application Load Balancer.
- Distribute incoming requests between backend servers.
- Configure health checks.
- Demonstrate scalability and fault tolerance.

---

## 🏗️ Architecture

```text
                    Internet
                       |
                       ↓
              AWS Application
               Load Balancer
                       |
              -----------------
              |               |
              ↓               ↓
        EC2 Instance 1   EC2 Instance 2
          SERVER-1         SERVER-2
              |               |
              └───────┬───────┘
                      ↓
                Node.js App
                  Port 3000
