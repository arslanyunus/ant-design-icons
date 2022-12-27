// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/ToggleOffCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffCircleBroken: ToggleOffCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffCircleBrokenSvg}></AntdIcon>;
};

ToggleOffCircleBroken.displayName = 'ToggleOffCircleBroken';
ToggleOffCircleBroken.inheritAttrs = false;
export default ToggleOffCircleBroken;