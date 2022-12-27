// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaintbucketTwoToneSvg from '@ant-design/icons-svg/lib/asn/PaintbucketTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaintbucketTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaintbucketTwoTone: PaintbucketTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintbucketTwoToneSvg}></AntdIcon>;
};

PaintbucketTwoTone.displayName = 'PaintbucketTwoTone';
PaintbucketTwoTone.inheritAttrs = false;
export default PaintbucketTwoTone;