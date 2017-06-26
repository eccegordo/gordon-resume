# Tapintu Inc.

Built a custom rich client application for tapintu.com that leverages proprietary assessment technology.
#### Requirements:

Build end to end assessment management application.
Automate assessment system with interactive image based assessment technology.
Enable assessment technology to be deployed in a Software as a Service Model.
Provide interactive account services for life coaches and their clients.
Backend MySQL database and service.
Coach level users must be able to login and create custom assessments for their clients.
Client level users must be able to login and complete assessments created by their coach.
#### Date:

2008 - 2009

#### Code:

This project required completely custom server side and client side application components.
##### Backend:

I used the Symfony PHP framework with a MySQL backend. The backend required user and data management. Additionally, it needed to provide an exposed web service API for the client application. The backend required an API for communicating with multiple clients over the AMF protocol and synchronizing application state during use of the application.
##### Frontend:

On the frontend a custom web based flex/flash rich client application was built. The application required a formal Model View Controller design pattern. It was built using PureMVC application framework and developed using Adobe Actionscript 3.0 and Adobe Flex and Flex Builder 3.0. The frontend is a fully featured client application that allows multi tiered user management, interactive psychology assessments and automatic report generation. The application was designed to allow administrative users to create complete and customized assessments and assign them to client level users. The flex based application persists it's application state to a server backend service by transmitting custom actionscript objects over the AMF protocol. The custom application objects are communicated to a public AMF based service using Zend AMF and PHP.

I was the primary developer resource for the application design, as well as frontend and backend implementation. All application features and specification were derived from a proprietary assessment technology owned by Tapintu Inc.