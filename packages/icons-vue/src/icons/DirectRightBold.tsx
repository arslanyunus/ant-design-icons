// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectRightBoldSvg from '@ant-design/icons-svg/lib/asn/DirectRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectRightBold: DirectRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectRightBoldSvg}></AntdIcon>;
};

DirectRightBold.displayName = 'DirectRightBold';
DirectRightBold.inheritAttrs = false;
export default DirectRightBold;