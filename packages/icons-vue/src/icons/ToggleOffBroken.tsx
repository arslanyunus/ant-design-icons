// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffBrokenSvg from '@ant-design/icons-svg/lib/asn/ToggleOffBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffBroken: ToggleOffBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffBrokenSvg}></AntdIcon>;
};

ToggleOffBroken.displayName = 'ToggleOffBroken';
ToggleOffBroken.inheritAttrs = false;
export default ToggleOffBroken;