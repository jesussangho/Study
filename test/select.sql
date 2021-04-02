/*
    DATABASE : test
    Select
*/

-- 모든 행을 출력
SELECT * FROM topic;

-- id, title, created, author 행을 출력
SELECT id, title, created, author FROM topic;

-- id, title, created, author 행에서 title 'MySQL' 출력
SELECT id, title, created, author FROM topic WHERE author='sungjun';

-- id, title, created, author 행에서 title 'MySQL' 오름차순 정렬 후 출력
SELECT id, title, created, author FROM topic WHERE author='sungjun' ORDER BY id DESC;

-- id, title, created, author 행에서 title 'MySQL' 오름차순 정렬 후 마지막 2행 출력
SELECT id, title, created, author FROM topic WHERE author='sungjun' ORDER BY id DESC LIMIT 2;