import React, { FC } from "react";
import { SimpleLabel } from "~/components/atoms/Label";

type Props = {} & Parameters<typeof SimpleLabel>[0];

export const Lazy: FC<Props> = ({ useLazyFetchId }) => {
  return (
    <>
      <div>~ローディングに関係無い部分~</div>
      <div>
        <SimpleLabel {...{ useLazyFetchId }} />
      </div>
    </>
  );
};
