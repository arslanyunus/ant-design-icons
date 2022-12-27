// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketCircleBoldSvg from '@ant-design/icons-svg/lib/asn/BucketCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketCircleBold: BucketCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketCircleBoldSvg}></AntdIcon>;
};

BucketCircleBold.displayName = 'BucketCircleBold';
BucketCircleBold.inheritAttrs = false;
export default BucketCircleBold;