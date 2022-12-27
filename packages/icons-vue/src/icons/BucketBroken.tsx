// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketBrokenSvg from '@ant-design/icons-svg/lib/asn/BucketBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketBroken: BucketBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketBrokenSvg}></AntdIcon>;
};

BucketBroken.displayName = 'BucketBroken';
BucketBroken.inheritAttrs = false;
export default BucketBroken;