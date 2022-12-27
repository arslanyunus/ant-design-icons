// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElectricityOutlineSvg from '@ant-design/icons-svg/lib/asn/ElectricityOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElectricityOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElectricityOutline: ElectricityOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElectricityOutlineSvg}></AntdIcon>;
};

ElectricityOutline.displayName = 'ElectricityOutline';
ElectricityOutline.inheritAttrs = false;
export default ElectricityOutline;