// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindBoldSvg from '@ant-design/icons-svg/lib/asn/WindBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindBold: WindBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindBoldSvg}></AntdIcon>;
};

WindBold.displayName = 'WindBold';
WindBold.inheritAttrs = false;
export default WindBold;