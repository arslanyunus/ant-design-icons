// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirdropBoldSvg from '@ant-design/icons-svg/lib/asn/AirdropBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirdropBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirdropBold: AirdropBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirdropBoldSvg}></AntdIcon>;
};

AirdropBold.displayName = 'AirdropBold';
AirdropBold.inheritAttrs = false;
export default AirdropBold;