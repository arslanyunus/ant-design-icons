// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectDownBoldSvg from '@ant-design/icons-svg/lib/asn/DirectDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectDownBold: DirectDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectDownBoldSvg}></AntdIcon>;
};

DirectDownBold.displayName = 'DirectDownBold';
DirectDownBold.inheritAttrs = false;
export default DirectDownBold;