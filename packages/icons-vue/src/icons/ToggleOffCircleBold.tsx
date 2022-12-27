// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffCircleBoldSvg from '@ant-design/icons-svg/lib/asn/ToggleOffCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffCircleBold: ToggleOffCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffCircleBoldSvg}></AntdIcon>;
};

ToggleOffCircleBold.displayName = 'ToggleOffCircleBold';
ToggleOffCircleBold.inheritAttrs = false;
export default ToggleOffCircleBold;