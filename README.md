# bookMe-server-node-scn
NodeJs + Expressjs POC

$env:port=3000 //we can use this to chanfe the port


table 01 ->Reservation(id, user, date, amount, status)
status(PENDING, CONFIRMED, IN_PROGRESS, COMPLETED)

table 02-> Slot (id,date,startTime,endTime,unitPrice,isAvailable)

table 03 ->User(id,name,mobile,role)
role(ADMIN, CUSTOMER)