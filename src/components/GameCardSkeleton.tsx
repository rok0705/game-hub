import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px">
        <CardBody></CardBody>
      </Skeleton>
      <SkeletonText noOfLines={3} />
    </Card>
  );
};

export default GameCardSkeleton;
