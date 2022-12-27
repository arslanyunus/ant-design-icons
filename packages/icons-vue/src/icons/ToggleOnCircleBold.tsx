// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnCircleBoldSvg from '@ant-design/icons-svg/lib/asn/ToggleOnCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnCircleBold: ToggleOnCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnCircleBoldSvg}></AntdIcon>;
};

ToggleOnCircleBold.displayName = 'ToggleOnCircleBold';
ToggleOnCircleBold.inheritAttrs = false;
export default ToggleOnCircleBold;