// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectUpBoldSvg from '@ant-design/icons-svg/lib/asn/DirectUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectUpBold: DirectUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectUpBoldSvg}></AntdIcon>;
};

DirectUpBold.displayName = 'DirectUpBold';
DirectUpBold.inheritAttrs = false;
export default DirectUpBold;