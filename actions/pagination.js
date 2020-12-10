import { useEffect } from 'react';
import { useSWRPage, useSWRPages } from 'swr'
import { useGetBlogs } from 'actions';
import { Col, ProgressBar } from 'react-bootstrap';
import BlogItem from 'components/BlogItem'
import BlogItem2 from 'components/BlogItem2'
import BlogBlank from 'components/BlogBlank'
import BlogBlank2 from 'components/BlogBlank2'
import moment from 'moment';


export const useGetBlogPages = ({ blogs, filter }) => {

    moment.locale('pt-br');

    useEffect(() => {
        window.__pagination__init = true;
      }, []) 


    return useSWRPages(
        'index-page',
        ({ offset, withSWR }) => {
            let initialData = !offset && blogs;

            if (typeof window !== 'undefined' && window.__pagination__init) {
                initialData = null;
              }
              
            const { data: paginatedBlogs } =  withSWR(useGetBlogs({offset, filter}, initialData));
            if (!paginatedBlogs) {
                return Array(3)
                  .fill(0)
                  .map((_, i) =>
                    filter.view.list ?
                    <BlogBlank2 key={i} md="4"/>
                    
                    :
                   
                      
                      <Col key={i} md="4">
                      <BlogBlank />
                    </Col>
                   
                  )
              }

            return paginatedBlogs
                .map(blog =>
                    filter.view.list === 0 ?
                        <Col key={blog.slug} md="4">
                            <BlogItem
                                title={blog.title}
                                subtitle={blog.subtitle}
                                tag={blog.tag}
                                image={blog.coverImage}
                                date={moment(blog.date).format('LL')}
                                link={{
                                    href: '/post/[slug]',
                                    as: `/post/${blog.slug}`
                                }}
                            />
                        </Col>
                        :
                        <BlogItem2
                            key={`${blog.slug}-list`}
                            title={blog.title}
                            subtitle={blog.subtitle}
                            tag={blog.tag}
                            image={blog.coverImage}
                            date={moment(blog.date).format('LL')}
                            link={{
                                href: '/post/[slug]',
                                as: `/post/${blog.slug}`
                            }}
                        />
                )
        },

        (SWR, index) => {
            if (SWR.data && SWR.data.length === 0) { return null; }
            return (index + 1) * 6;
        },
        [filter]
    )
}