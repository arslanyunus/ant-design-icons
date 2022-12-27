// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrameBoldSvg from '@ant-design/icons-svg/lib/asn/FrameBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrameBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrameBold: FrameBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrameBoldSvg}></AntdIcon>;
};

FrameBold.displayName = 'FrameBold';
FrameBold.inheritAttrs = false;
export default FrameBold;