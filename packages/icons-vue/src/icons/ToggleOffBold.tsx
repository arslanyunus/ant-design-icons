// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffBoldSvg from '@ant-design/icons-svg/lib/asn/ToggleOffBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffBold: ToggleOffBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffBoldSvg}></AntdIcon>;
};

ToggleOffBold.displayName = 'ToggleOffBold';
ToggleOffBold.inheritAttrs = false;
export default ToggleOffBold;