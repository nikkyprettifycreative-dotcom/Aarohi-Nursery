import Image from "next/image";
import "../../../styles/blog/blog.css"
import BlogsItem from "@/components/BlogsItem";

export default function Blogs(){
    return(
        <main>
            <section>
                <div className="blog-secA sec-pad mt-hdrfxd">
                    <div className="container">
                        <div className="heading">
                            <h2>Blogs</h2>
                            <p>Discover the latest trends, style tips, and behind the scenes stories from our world of fashion.</p>
                        </div>
                        <div className="blogs_wrapper">
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs1.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs2.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs3.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs1.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs2.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs3.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs1.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs2.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                            <BlogsItem
                                link="blog-detail"
                                imgSrc="/assets/images/other/blogs3.jpg"
                                date="June 20, 2025"
                                title="Uniforms That Speak Your Brand Designed by Uniform Bucket"
                            />
                        </div>
                        <div className="btn_wrapper">
                            <button type="button" className="loadBtn">
                                <Image src="/assets/icon/logo.svg" width="50" height="50" alt="Load More"></Image>
                                <p>LOAD MORE..</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}