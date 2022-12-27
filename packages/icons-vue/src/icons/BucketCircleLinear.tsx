// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketCircleLinearSvg from '@ant-design/icons-svg/lib/asn/BucketCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketCircleLinear: BucketCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketCircleLinearSvg}></AntdIcon>;
};

BucketCircleLinear.displayName = 'BucketCircleLinear';
BucketCircleLinear.inheritAttrs = false;
export default BucketCircleLinear;