// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnOutlineSvg from '@ant-design/icons-svg/lib/asn/ToggleOnOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnOutline: ToggleOnOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnOutlineSvg}></AntdIcon>;
};

ToggleOnOutline.displayName = 'ToggleOnOutline';
ToggleOnOutline.inheritAttrs = false;
export default ToggleOnOutline;