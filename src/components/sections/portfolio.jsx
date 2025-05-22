import React, { useState, useEffect } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react'
import Title from '../ui/title';
import Lightbox from '../ui/lightbox';
import { portfolioApi } from '../../services/api';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = () => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await portfolioApi.getAll();
                if (response.success) {
                    setProjects(response.data.data);
                } else {
                    setError(response.message);
                }
            } catch (err) {
                setError('Failed to fetch portfolio items');
                console.error('Error fetching portfolio items:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };
    
    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    projects.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })
    // ------ filter unique category

    const filteredProjects = category === 'All' ? projects : projects.filter(project => project.category === category);

    if (loading) {
        return (
            <section id="portfolio" className="projects-area">
                <div className="container">
                    <div className="text-center">Loading portfolio items...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="portfolio" className="projects-area">
                <div className="container">
                    <div className="text-center text-danger">{error}</div>
                </div>
            </section>
        );
    }

    return (
        <section id="portfolio" className="projects-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Works</p>
                            <h2>Creative Portfolio</h2>
                        </Title>
                    </div>
                </div>
                <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
                    {filteredCategory.map((item, id) => <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>{item}</li>)}
                </ul>
                <div className="row project-masonry-active">
                    {filteredProjects.map(({category, id, image, title, description, technologies}) =>
                        <Card 
                            key={id} 
                            category={category} 
                            title={title} 
                            src={image.startsWith('http') ? image : `${import.meta.env.VITE_API_URL}/uploads/${image}`} 
                            animationClass={animationClass} 
                            openLightbox={openLightbox}
                            description={description}
                            technologies={technologies}
                        />
                    )}
                </div>
            </div>
            <Lightbox selectedImage={selectedImage} onClose={closeLightbox} />
        </section>
    );
};

export default Portfolio;

const Card = ({category, title, src, animationClass, openLightbox, description, technologies}) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding ${animationClass}`}>
            <div className="project-item style-two wow fadeInUp delay-0-2s">
                <div className="project-image">
                    <img src={src} alt="Project" />
                    <div onClick={() => openLightbox(src)} className="details-btn work-popup"><i><RiArrowRightUpLine/></i></div>
                </div>
                <div className="project-content">
                    <span className="sub-title">{category}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="technologies">
                        {technologies && technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}