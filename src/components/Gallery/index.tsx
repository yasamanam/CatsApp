import React, { useEffect, useState } from "react";
import { StyledButton, StyledGallery, StyledPics } from "./styled";

import { LazyLoadComponent } from "react-lazy-load-image-component";
import Loading from "./../Loading";
import { connect } from "react-redux";
import { getACategory } from "./../../redux/modules/cats/getACategory/action";
import { useParams } from "react-router-dom";

export interface GalleryProps {
  getACategory: () => void;
  category: object;
  categoryLoading: boolean;
}

const Gallery: React.SFC<GalleryProps> = ({
  getACategory,
  category,
  categoryLoading,
}) => {
  const LIMIT = 10;
  const SIZE = 20;
  const [page, setPage] = useState(0);
  const [catsImages, setcatsImages] = useState([]);
  let { id: categoryId } = useParams();

  useEffect(() => {
    /*
     * when categoryId changes get its data
     */
    if (categoryId) {
      getACategory(LIMIT, page, categoryId, SIZE);
    }
  }, [categoryId, page]);

  useEffect(() => {
    /*
     * when categoryId changes reset array & page
     */
    setcatsImages([]);
    setPage(0);
  }, [categoryId]);

  useEffect(() => {
    /*
     * On every load, add new images to the array
     */

    if (category?.length) {
      let tempCatsImages = [...catsImages];
      category.map((cat) => {
        if (!tempCatsImages.includes(cat)) {
          tempCatsImages.push(cat);
        }
      });
      setcatsImages(tempCatsImages);
    }
  }, [category]);

  const handleLoadMore = () => {
    /*
     * Load next 10 items
     */
    setPage(page + 1);
  };

  return (
    <StyledGallery>
      <h1 className="catsImages">
        {catsImages && catsImages[0]?.categories[0]?.name}
      </h1>
      <StyledPics>
        {catsImages?.map((image) => (
          <div key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </StyledPics>
      {categoryLoading && <Loading />}
      <StyledButton onClick={handleLoadMore}>SHOW MORE CATS :)</StyledButton>
    </StyledGallery>
  );
};

const mapStateToProps = (state: any) => ({
  category: state.cats.category.data,
  categoryLoading: state.cats.category.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  getACategory: (
    limit: number,
    page: number,
    categoryId: number,
    size: number
  ) => {
    dispatch(getACategory(limit, page, categoryId, size));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
