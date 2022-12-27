// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketSquareLinearSvg from '@ant-design/icons-svg/lib/asn/BucketSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketSquareLinear: BucketSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketSquareLinearSvg}></AntdIcon>;
};

BucketSquareLinear.displayName = 'BucketSquareLinear';
BucketSquareLinear.inheritAttrs = false;
export default BucketSquareLinear;