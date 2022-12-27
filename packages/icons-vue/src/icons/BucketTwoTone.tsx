// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketTwoToneSvg from '@ant-design/icons-svg/lib/asn/BucketTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketTwoTone: BucketTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketTwoToneSvg}></AntdIcon>;
};

BucketTwoTone.displayName = 'BucketTwoTone';
BucketTwoTone.inheritAttrs = false;
export default BucketTwoTone;