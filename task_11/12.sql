SELECT USERNAME, COUNT(USER_ID)

FROM watchMe.users

NATURAL JOIN watchMe.photo_posts

WHERE CREATION_TIME LIKE '____-05-09 __:__:__'

GROUP BY USER_ID