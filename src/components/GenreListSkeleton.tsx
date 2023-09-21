import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <>
      <Skeleton height="600px" borderRadius={10}></Skeleton>
      <SkeletonText noOfLines={3} />
    </>
  );
};

export default GenreListSkeleton;
