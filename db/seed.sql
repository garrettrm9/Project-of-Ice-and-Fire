INSERT INTO users (id, username, password_digest) VALUES
  (1, 'bob', 'bob'),
  (2, 'tom', 'tom'),
  (3, 'joe', 'joe'),
  (4, 'stu', 'stu');  

INSERT INTO categories (id, name, user_id) VALUES
  (1, 'Good guys', 1),
  (2, 'Bad guys', 1),
  (3, 'Funny guys', 1),
  (4, 'Good guys', 2),
  (5, 'Bad guys', 2),
  (6, 'Funny guys', 2),
  (7, 'Good guys', 3),
  (8, 'Bad guys', 3),
  (9, 'Funny guys', 3),
  (10, 'Good guys', 4),
  (11, 'Bad guys', 4),
  (12, 'Funny guys', 4);

INSERT INTO characters (id, name, category_id) VALUES
  (1, 'Jon Snow', 1),
  (2, 'Arya Stark', 4),
  (3, 'Daenerys Targaryen', 7),
  (4, 'Sansa Stark', 10),
  (5, 'Tyrion Lannister', 3),
  (6, 'Theon Greyjoy', 6),
  (7, 'Petyr Baelish', 9),
  (8, 'Bronn', 12),
  (9, 'Ramsey Snow', 2),
  (10, 'Walder Frey', 5),
  (11, 'Roose Bolton', 8),
  (12, 'Joffrey Baratheon', 11);

-- INSERT INTO characters (id, name, category_id) VALUES
--   (1, 583, 'Jon Snow', 1),
--   (2, 148, 'Arya Stark', 4),
--   (3, 271, 'Daenerys Targaryen', 7),
--   (4, 957, 'Sansa Stark', 10),
--   (5, 1052, 'Tyrion Lannister', 3),
--   (6, 1022, 'Theon Greyjoy', 6),
--   (7, 823, 'Petyr Baelish', 9),
--   (8, 217, 'Bronn', 12),
--   (9, 849, 'Ramsey Snow', 2),
--   (10, 1093, 'Walder Frey', 5),
--   (11, 933, 'Roose Bolton', 8),
--   (12, 565, 'Joffrey Baratheon', 11);

