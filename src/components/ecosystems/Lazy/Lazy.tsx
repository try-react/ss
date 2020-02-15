import React, { FC } from "react";
import { Button } from "~/components/atoms/Button";

type Props = {} & Parameters<typeof Button>[0];

export const Lazy: FC<Props> = ({ useButton }) => {
  return (
    <>
      <div>~ローディングに関係無い部分~</div>
      <div>
        <Button {...{ useButton }} />
      </div>
    </>
  );
};
