// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/BucketCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketCircleTwoTone: BucketCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketCircleTwoToneSvg}></AntdIcon>;
};

BucketCircleTwoTone.displayName = 'BucketCircleTwoTone';
BucketCircleTwoTone.inheritAttrs = false;
export default BucketCircleTwoTone;