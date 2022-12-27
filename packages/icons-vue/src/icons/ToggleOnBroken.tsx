// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnBrokenSvg from '@ant-design/icons-svg/lib/asn/ToggleOnBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnBroken: ToggleOnBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnBrokenSvg}></AntdIcon>;
};

ToggleOnBroken.displayName = 'ToggleOnBroken';
ToggleOnBroken.inheritAttrs = false;
export default ToggleOnBroken;