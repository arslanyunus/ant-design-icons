// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AquariusBrokenSvg from '@ant-design/icons-svg/lib/asn/AquariusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AquariusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AquariusBroken: AquariusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AquariusBrokenSvg}></AntdIcon>;
};

AquariusBroken.displayName = 'AquariusBroken';
AquariusBroken.inheritAttrs = false;
export default AquariusBroken;