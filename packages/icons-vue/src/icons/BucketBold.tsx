// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketBoldSvg from '@ant-design/icons-svg/lib/asn/BucketBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketBold: BucketBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketBoldSvg}></AntdIcon>;
};

BucketBold.displayName = 'BucketBold';
BucketBold.inheritAttrs = false;
export default BucketBold;