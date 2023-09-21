import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card height="300px" width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px">
        <CardBody></CardBody>
      </Skeleton>
      <SkeletonText noOfLines={3} />
    </Card>
  );
};

export default GameCardSkeleton;
