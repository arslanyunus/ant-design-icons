// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AquariusBoldSvg from '@ant-design/icons-svg/lib/asn/AquariusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AquariusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AquariusBold: AquariusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AquariusBoldSvg}></AntdIcon>;
};

AquariusBold.displayName = 'AquariusBold';
AquariusBold.inheritAttrs = false;
export default AquariusBold;