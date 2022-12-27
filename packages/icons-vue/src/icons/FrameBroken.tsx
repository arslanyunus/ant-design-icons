// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrameBrokenSvg from '@ant-design/icons-svg/lib/asn/FrameBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrameBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrameBroken: FrameBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrameBrokenSvg}></AntdIcon>;
};

FrameBroken.displayName = 'FrameBroken';
FrameBroken.inheritAttrs = false;
export default FrameBroken;