/*
    DATABASE : test
    Relation Data
*/

-- topic => topic_backup
RENAME TABLE topic TO topic_backup;

-- topic TABLE
CREATE TABLE topic (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NULL,
    created DATETIME NOT NULL,
    author_id INT(11) NULL,
    PRIMARY KEY(id)
);

-- author TABLE

CREATE TABLE author (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    profile VARCHAR(200) NULL,
    PRIMARY KEY(id)
);

-- id = 1, author = 1
INSERT INTO author (id, name, profile) VALUES (1, 'sangho', 'developer');
INSERT INTO topic (id, title, description, created, author_id) VALUES (1, 'MySQL', 'MySQL is ...', '2021-04-02 22:51:35', 1);

-- id = 2, author = 2
INSERT INTO author (id, name, profile) VALUES (2, 'sungjun', 'developer');
INSERT INTO topic (id, title, description, created, author_id) VALUES (2, 'MongoDB', 'MongoDB is ...', '2021-04-02 22:53:07', 2);

-- id = 3, author = 2
INSERT INTO topic (id, title, description, created, author_id) VALUES (3, 'MariaDB', 'MariaDB is ...', '2021-04-02 22:53:34', 2);

-- id = 4, author = 2
INSERT INTO topic (id, title, description, created, author_id) VALUES (4, 'SQL Server', 'SQL Server is ...', '2021-04-02 22:54:01', 2);

-- id = 5, author = 3
INSERT INTO author (id, name, profile) VALUES (3, 'daeha', 'data administrator');
INSERT INTO topic (id, title, description, created, author_id) VALUES (5, 'Oracle', 'Oracle is ...', '2021-04-03 20:50:11', 3);

-- topic - author JOIN
SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id;
-- topic - author JOIN , author_id, id except
SELECT topic.id, title, description, created, name, profile FROM topic LEFT JOIN author ON topic.author_id = author.id;
-- topic - author JOIN , author_id, id except rename id => topic_id
SELECT topic.id AS topic_id, title, description, created, name, profile FROM topic LEFT JOIN author ON topic.author_id = author.id;