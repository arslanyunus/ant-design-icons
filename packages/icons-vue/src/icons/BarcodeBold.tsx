// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarcodeBoldSvg from '@ant-design/icons-svg/lib/asn/BarcodeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarcodeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarcodeBold: BarcodeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeBoldSvg}></AntdIcon>;
};

BarcodeBold.displayName = 'BarcodeBold';
BarcodeBold.inheritAttrs = false;
export default BarcodeBold;