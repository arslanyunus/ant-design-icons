// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketSquareBoldSvg from '@ant-design/icons-svg/lib/asn/BucketSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketSquareBold: BucketSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketSquareBoldSvg}></AntdIcon>;
};

BucketSquareBold.displayName = 'BucketSquareBold';
BucketSquareBold.inheritAttrs = false;
export default BucketSquareBold;