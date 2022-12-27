// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/ToggleOffCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffCircleOutline: ToggleOffCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffCircleOutlineSvg}></AntdIcon>;
};

ToggleOffCircleOutline.displayName = 'ToggleOffCircleOutline';
ToggleOffCircleOutline.inheritAttrs = false;
export default ToggleOffCircleOutline;