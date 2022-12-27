// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/BucketCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketCircleBroken: BucketCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketCircleBrokenSvg}></AntdIcon>;
};

BucketCircleBroken.displayName = 'BucketCircleBroken';
BucketCircleBroken.inheritAttrs = false;
export default BucketCircleBroken;