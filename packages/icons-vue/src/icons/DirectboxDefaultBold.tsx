// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxDefaultBoldSvg from '@ant-design/icons-svg/lib/asn/DirectboxDefaultBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxDefaultBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxDefaultBold: DirectboxDefaultBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxDefaultBoldSvg}></AntdIcon>;
};

DirectboxDefaultBold.displayName = 'DirectboxDefaultBold';
DirectboxDefaultBold.inheritAttrs = false;
export default DirectboxDefaultBold;