// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaintbucketBrokenSvg from '@ant-design/icons-svg/lib/asn/PaintbucketBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaintbucketBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaintbucketBroken: PaintbucketBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintbucketBrokenSvg}></AntdIcon>;
};

PaintbucketBroken.displayName = 'PaintbucketBroken';
PaintbucketBroken.inheritAttrs = false;
export default PaintbucketBroken;