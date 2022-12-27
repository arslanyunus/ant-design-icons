// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirdropBrokenSvg from '@ant-design/icons-svg/lib/asn/AirdropBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirdropBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirdropBroken: AirdropBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirdropBrokenSvg}></AntdIcon>;
};

AirdropBroken.displayName = 'AirdropBroken';
AirdropBroken.inheritAttrs = false;
export default AirdropBroken;