SELECT * FROM posts order by id desc;

SELECT * FROM crashzonenew.wp_posts where post_name = 'crashzone-how-to-setup-estimage' order by  id desc;

TRUNCATE TABLE crash_zone_blog.posts;

insert into crash_zone_blog.posts (title, slug, description,content, created_at, updated_at)
select post_title, post_name, post_title, post_content, post_date, post_modified
from crashzonenew.wp_posts
where post_type = 'post' 
and post_content is not null 
and post_content <> '' 
and post_title is not null 
and post_title <> ''
and post_name is not null 
and post_name <> ''
and post_status = 'publish'
and ping_status = 'open';

select *
from crashzonenew.wp_posts
where post_type = 'post' 
and post_content is not null 
and post_content <> '' 
and post_title is not null 
and post_title <> ''
and post_name is not null 
and post_name <> ''
and post_status = 'publish'
and ping_status = 'open'
order by id desc;

select * from crashzonenew.wp_posts where post_type = 'post';

-- UPDATE posts
-- SET user_id = (SELECT id FROM users WHERE name = 'winston@crashzone.com.au')
-- WHERE user_id = 1;

SELECT * FROM posts WHERE slug = 'whoops';

"select * from `posts` where `slug` = ? and `posts`.`deleted_at` is null"