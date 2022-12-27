// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/BucketSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketSquareOutline: BucketSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketSquareOutlineSvg}></AntdIcon>;
};

BucketSquareOutline.displayName = 'BucketSquareOutline';
BucketSquareOutline.inheritAttrs = false;
export default BucketSquareOutline;