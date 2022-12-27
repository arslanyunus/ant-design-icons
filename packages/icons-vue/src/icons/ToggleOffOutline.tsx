// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffOutlineSvg from '@ant-design/icons-svg/lib/asn/ToggleOffOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffOutline: ToggleOffOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffOutlineSvg}></AntdIcon>;
};

ToggleOffOutline.displayName = 'ToggleOffOutline';
ToggleOffOutline.inheritAttrs = false;
export default ToggleOffOutline;