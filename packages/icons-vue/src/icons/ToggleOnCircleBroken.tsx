// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/ToggleOnCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnCircleBroken: ToggleOnCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnCircleBrokenSvg}></AntdIcon>;
};

ToggleOnCircleBroken.displayName = 'ToggleOnCircleBroken';
ToggleOnCircleBroken.inheritAttrs = false;
export default ToggleOnCircleBroken;