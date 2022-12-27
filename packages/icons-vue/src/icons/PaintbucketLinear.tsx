// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaintbucketLinearSvg from '@ant-design/icons-svg/lib/asn/PaintbucketLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaintbucketLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaintbucketLinear: PaintbucketLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintbucketLinearSvg}></AntdIcon>;
};

PaintbucketLinear.displayName = 'PaintbucketLinear';
PaintbucketLinear.inheritAttrs = false;
export default PaintbucketLinear;