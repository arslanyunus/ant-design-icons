// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/ToggleOnCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnCircleOutline: ToggleOnCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnCircleOutlineSvg}></AntdIcon>;
};

ToggleOnCircleOutline.displayName = 'ToggleOnCircleOutline';
ToggleOnCircleOutline.inheritAttrs = false;
export default ToggleOnCircleOutline;